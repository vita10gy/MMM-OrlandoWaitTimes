const exampleModule = {
  module: "MMM-OrlandoWaitTimes",
  header: "Seaworld - Orlando", //You can call this whatever
  position: "top_left",
  config: {
    park: {
      entity: "27d64dee-d85e-48dc-ad6d-8077445cd946", //https://themeparks.wiki/browse/ - get entity code from here
      rides: [
        //https://api.themeparks.wiki/v1/entity/27d64dee-d85e-48dc-ad6d-8077445cd946/live  - use the "id" for each ride
        "b305abf2-ff2a-4f43-9f8f-a6640c35a999", //Sunny Day Carousel
        "90dafba8-171d-40eb-a1c6-9ad3db46a08b", //Sky Tower
        "471452db-4120-45a0-97dc-17b6fab23009", //Kraken®
        "2590c5e5-0b2a-491b-9cec-ab4586f270c2", //Manta
        "aeebb24f-5032-4695-a821-6d62ed18fcb8", //Ice Breaker
        "ac87a612-ca6b-4478-84e3-c3ac12bf34ca", //Mako®
        "ee569e12-ecc2-4186-b0dd-460070c9e40c", //Infinity Falls®
        "b22de3c6-6c1c-467f-8ae7-b4f1ae3dcd5f", //ALL-NEW Pipeline: The Surf Coaster
        "0c03077c-fba3-4718-a8a3-ba23dc21e984", //Journey to Atlantis
      ],
    },
  },
};
