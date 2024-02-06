const exampleModule = {
  module: "MMM-ThemeParkWaitTimes",
  header: "Islands of Adventure", //You can call this whatever
  position: "top_left",
  config: {
    futureHours: true, //allows you to hide the hours for upcoming days
    park: {
      entity: "267615cc-8943-4c2a-ae2c-5da728ca591f", //Required - Find them here https://themeparks.wiki/browse/
      rides: [
        //https://api.themeparks.wiki/v1/entity/267615cc-8943-4c2a-ae2c-5da728ca591f/live  - use the "id" for each ride
        "3daca54f-50f0-44e9-a993-d706ce7520a0", //Pteranodon Flyers™
        "b694d5a5-155e-4796-af7e-5dbdcf3deba4", //Storm Force Accelatron®
        "6be23178-7d00-4884-9e88-76787da1df86", //The Amazing Adventures of Spider-Man®
        "3cb52134-e9d6-4212-83c8-3ce1321dcb05", //Caro-Seuss-el™
        "fa743143-281b-4b5b-b87b-d49fcb006772", //The Incredible Hulk Coaster®
        "578bbd12-1975-4ec3-9879-ea641c780342", //Hagrid's Magical Creatures Motorbike Adventure™
        "b4445a1c-4d5c-4fca-a04a-f8867f1b6619", //Popeye & Bluto's Bilge-Rat Barges®
        "144450b9-4574-46be-abdf-4b1ca8974d9d", //Hogwarts™ Express - Hogsmeade™ Station
        "b73e3256-9ee0-439e-9a3b-ffed287e10bb", //The High in the Sky Seuss Trolley Train Ride!™
        "370ba4d1-f199-4dc2-be6d-6bb09b442891", //Skull Island: Reign of Kong™
        "23b613e0-ae83-455b-9163-231bdbd5c427", //Flight of the Hippogriff™
        "61079a31-4165-4fb0-b36f-c01c5971f80a", //Jurassic World VelociCoaster
        "6af80308-647d-4d8b-bcf6-37517a93bdbc", //Harry Potter and the Forbidden Journey™
        "905d7888-b866-4e74-90d1-07fc6ef6706f", //Dudley Do-Right's Ripsaw Falls®
        "2365495a-790b-4a41-831e-65592c8a4359", //The Cat in The Hat™
        "b1e94e05-b360-4e3f-be8a-2a3744a97f97", //One Fish, Two Fish, Red Fish, Blue Fish™
        "db5b2165-15c2-4e51-8bd1-611e9c351866", //Jurassic Park River Adventure™
        "2f95b213-daaa-4370-8349-c2cd57be470e", //Doctor Doom's Fearfall®
      ],
    },
  },
};
