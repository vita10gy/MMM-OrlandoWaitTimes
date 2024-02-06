Module.register("MMM-ThemeParkWaitTimes", {
  defaults: {
    updateInterval: 10 * 60 * 1000,
    futureHours: true,
  },

  getScripts: function () {
    return ["moment.js"];
  },

  getStyles: function () {
    return ["style.css"];
  },

  getHeader: function () {
    var headerDiv = document.createElement("div");
    headerDiv.innerHTML = this.data.header;

    var timeSpan = document.createElement("div");
    timeSpan.className = "parkTime";

    if (this.openingTime != null && this.closingTime != null) {
      timeSpan.innerHTML = " " + this.openingTime + " - " + this.closingTime;
    }
    headerDiv.appendChild(timeSpan);

    if (this.futureHours != null && this.config.futureHours) {
      var hoursTable = document.createElement("table");
      hoursTable.className += "hours";
      var hoursRow = document.createElement("tr");
      hoursTable.appendChild(hoursRow);
      const d = new Date();
      for (var i = 0; i < 5; i++) {
        var hoursCell = document.createElement("td");
        hoursCell.className += "day" + ((d.getDay() + i + 1) % 7);
        hoursRow.appendChild(hoursCell);
        hoursCell.innerHTML = this.futureHours[i];
      }
      headerDiv.appendChild(hoursTable);
    }

    return headerDiv.innerHTML;
  },

  start: function () {
    Log.info("Starting module: " + this.name);

    const self = this;

    this.rides = [];
    this.openingTime;
    this.closingTime;
    this.futureHours;
    this.errorMessage;

    setInterval(function () {
      self.processWaitTimes();
    }, this.config.updateInterval);
    this.processWaitTimes();
  },

  getDom: function () {
    var table = document.createElement("table");
    table.className = "small";

    if (this.errorMessage) {
      var row = document.createElement("tr");
      row.className += "row";
      table.appendChild(row);

      var nameCell = document.createElement("td");
      nameCell.className = "error";
      nameCell.innerHTML = this.errorMessage;
      row.appendChild(nameCell);
    } else {
      for (var i = 0, ride; (ride = this.rides[i++]); ) {
        var row = document.createElement("tr");
        row.className += "row";
        table.appendChild(row);

        var nameCell = document.createElement("td");
        nameCell.className = "bright title";
        nameCell.innerHTML = ride.name;
        row.appendChild(nameCell);

        var timeCell = document.createElement("td");
        timeCell.className = "bright title light time";

        if (ride.status == "CLOSED") {
          timeCell.innerHTML = "closed";
        } else if (ride.status == "DOWN") {
          timeCell.innerHTML = "down";
        } else if (ride.status == "REFURBISHMENT") {
          timeCell.innerHTML = "refurb";
        } else {
          timeCell.innerHTML = ride.waitTime;
        }

        row.appendChild(timeCell);
      }
    }
    return table;
  },

  socketNotificationReceived: function (notification, payload) {
    console.log("n: " + notification);
    if (notification === "POPULATE_WAIT_TIMES_" + this.config.park.entity) {
      this.rides = payload.waitTimes;
      this.updateDom();
    } else if (
      notification ===
      "POPULATE_OPENING_TIMES_" + this.config.park.entity
    ) {
      this.openingTime = payload.openingTime;
      this.closingTime = payload.closingTime;
      this.futureHours = payload.futureHours;
      this.updateDom();
    } else if (notification === "ERROR_" + this.config.park.entity) {
      this.errorMessage = payload.errorMessage;
      this.updateDom();
    }
  },

  processWaitTimes: function () {
    this.sendSocketNotification("GET_WAIT_TIMES", this.config.park);
  },
});
