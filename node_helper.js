const NodeHelper = require("node_helper");
const axios = require("axios");
const { DateTime } = require("luxon");

module.exports = NodeHelper.create({
  start: function () {
    console.log(`Starting module helper: ${this.name}`);
  },

  getWaitTimes: function (park) {
    const sendError = (msg) => {
      console.log(`Error Processing Wait Times: ${msg}`);
      var payload = {
        errorMessage: msg,
      };

      this.sendSocketNotification(
        `ERROR_${park.entity.replace(/ /g, "_")}`,
        payload
      );
    };

    const getPark = () => {
      return {
        entity: park.entity,
        rides: park.rides ?? [],
      };
    };

    const processWaitTimes = async (selectedPark) => {
      console.log(`${selectedPark.entity}: Processing Wait Times...`);
      const waitTimes = await axios.get(
        `https://api.themeparks.wiki/v1/entity/${selectedPark.entity}/live`
      );
      //console.log(waitTimes.data.liveData);
      const results = [];
      for (const ride of waitTimes.data.liveData) {
        let showRide = false;
        if (
          Array.isArray(selectedPark.rides) &&
          selectedPark.rides.length > 0
        ) {
          //if rides are specified then limit to those
          showRide = selectedPark.rides.includes(ride.id);
        } else {
          showRide = ride.entityType === "ATTRACTION" && "queue" in ride;
          if (showRide) {
            console.log(`"${ride.id}", //${ride.name}`);
          }
        }
        if (showRide) {
          const result = {
            name: ride.name,
            status: ride?.status || null,
            waitTime: ride?.queue?.STANDBY?.waitTime ?? null,
          };
          //  console.log(result);
          results.push(result);
        }
      }
      results.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      const payload = { waitTimes: results };
      console.log(`${selectedPark.entity}: Processed Wait Times...`);

      this.sendSocketNotification(
        `POPULATE_WAIT_TIMES_${selectedPark.entity}`,
        payload
      );
    };

    const processOpeningTimes = async (selectedPark) => {
      console.log(`${selectedPark.entity}: Processing Opening Times...`);
      const openingTimes = await axios.get(
        `https://api.themeparks.wiki/v1/entity/${selectedPark.entity}/schedule`
      );

      if (!openingTimes.data || !openingTimes.data.schedule.length) {
        return;
      }

      const today = DateTime.now()
        .setZone(selectedPark.timezone)
        .startOf("day");

      const todayHours = openingTimes.data.schedule.find(
        (looking) =>
          looking.type === "OPERATING" &&
          looking.date === today.toFormat("yyyy-MM-dd")
      );

      const futureHours = openingTimes.data.schedule.filter(
        (looking) =>
          looking.type === "OPERATING" &&
          looking.date !== today.toFormat("yyyy-MM-dd")
      );

      console.log(futureHours);

      const openingTime = DateTime.fromISO(todayHours.openingTime)
        .setZone(selectedPark.timezone)
        .toFormat("hh:mm a");
      const closingTime = DateTime.fromISO(todayHours.closingTime)
        .setZone(selectedPark.timezone)
        .toFormat("hh:mm a");

      const payload = { openingTime, closingTime };

      console.log(`${selectedPark.entity}: Processed Opening Times...`);

      this.sendSocketNotification(
        `POPULATE_OPENING_TIMES_${selectedPark.entity}`,
        payload
      );
    };

    const selectedPark = getPark();
    if (!selectedPark) {
      sendError("Selected park not found");
      return;
    }

    processWaitTimes(selectedPark);
    processOpeningTimes(selectedPark);
  },

  socketNotificationReceived: function (notification, payload) {
    //console.log(notification, "tesT", payload);
    if (notification === "GET_WAIT_TIMES") {
      this.getWaitTimes(payload);
    }
  },
});
