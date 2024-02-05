const exampleModule = {
  module: "MMM-OrlandoWaitTimes",
  header: "EPCOT", //You can call this whatever
  position: "top_left",
  config: {
    park: {
      entity: "47f90d2c-e191-4239-a466-5892ef59a88b", //https://themeparks.wiki/browse/ - get entity code from here
      rides: [
        //https://api.themeparks.wiki/v1/entity/47f90d2c-e191-4239-a466-5892ef59a88b/live  - use the "id" for each ride
        "5b6475ad-4e9a-4793-b841-501aa382c9c0", //Mission: SPACE
        "480fde8f-fe58-4bfb-b3ab-052a39d4db7c", //Spaceship Earth
        "e3549451-b284-453d-9c31-e3b1207abd79", //Guardians of the Galaxy: Cosmic Rewind
        "fb076275-0570-4d62-b2a9-4d6515130fa3", //The Seas with Nemo & Friends
        "75449e85-c410-4cef-a368-9d2ea5d52b58", //Journey Into Imagination With Figment
        "37ae57c5-feaf-4e47-8f27-4b385be200f0", //Test Track
        "8f353879-d6ac-4211-9352-4029efb47c18", //Living with the Land
        "57acb522-a6fc-4aa4-a80e-21f21f317250", //Turtle Talk With Crush
        "81b15dfd-cf6a-466f-be59-3dd65d2a2807", //Soarin'
        "8d7ccdb1-a22b-4e26-8dc8-65b1938ed5f0", //Frozen Ever After
        "1e735ffb-4868-47f1-b2cd-2ac1156cd5f0", //Remy's Ratatouille Adventure
        "22f48b73-01df-460e-8969-9eb2b4ae836c", //Gran Fiesta Tour Starring The Three Caballeros
      ],
    },
  },
};
