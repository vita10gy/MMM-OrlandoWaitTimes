const exampleModule = {
  module: "MMM-ThemeParkWaitTimes",
  header: "Hollywood Studios", //You can call this whatever
  position: "top_left",
  config: {
    futureHours: false, //allows you to hide the hours for upcoming days
    park: {
      entity: "288747d1-8b4f-4a64-867e-ea7c9b27bad8", //https://themeparks.wiki/browse/
      rides: [
        //https://api.themeparks.wiki/v1/entity/288747d1-8b4f-4a64-867e-ea7c9b27bad8/live  - use the "id" for each ride
        "1a2e70d9-50d5-4140-b69e-799e950f7d18", //Star Wars: Rise of the Resistance
        "e516f303-e82d-4fd3-8fbf-8e6ab624cf89", //Rock 'n' Roller Coaster Starring Aerosmith
        "3b290419-8ca2-44bc-a710-a6c83fca76ec", //Star Tours – The Adventures Continue
        "d56506e2-6ad3-443a-8065-fea37987248d", //Alien Swirling Saucers
        "76dfa347-94bb-4552-b183-a08490c54acc", //Muppet*Vision 3D
        "d7669edc-eaa1-4af2-bbb5-6e98df564166", //Walt Disney Presents
        "6f6998e8-a629-412c-b964-2cb06af8e26b", //The Twilight Zone Tower of Terror™
        "20b5daa8-e1ea-436f-830c-2d7d18d929b5", //Toy Story Mania!
        "34c4916b-989b-4ff1-a7e3-a6a846a3484f", //Millennium Falcon: Smugglers Run
        "9211adc9-b296-4667-8e97-b40cf76108e4", //Vacation Fun - An Original Animated Short with Mickey & Minnie
        "399aa0a1-98e2-4d2b-b297-2b451e9665e1", //Slinky Dog Dash
        "6e118e37-5002-408d-9d88-0b5d9cdb5d14", //Mickey & Minnie's Runaway Railway
        "5262e79e-8553-4ec0-a832-3177d377136d", //Lightning McQueen's Racing Academy
      ],
    },
  },
};
