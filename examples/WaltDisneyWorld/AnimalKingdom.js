const exampleModule = {
  module: "MMM-OrlandoWaitTimes",
  header: "Animal Kingdom", //You can call this whatever
  position: "top_left",
  config: {
    park: {
      entity: "1c84a229-8862-4648-9c71-378ddd2c7693", //https://themeparks.wiki/browse/ - get entity code from here
      rides: [
        //https://api.themeparks.wiki/v1/entity/1c84a229-8862-4648-9c71-378ddd2c7693/live  - use the "id" for each ride
        "64a6915f-a835-4226-ba5c-8389fc4cade3", //Expedition Everest - Legend of the Forbidden Mountain
        "7a5af3b7-9bc1-4962-92d0-3ea9c9ce35f0", //Na'vi River Journey
        "55c531b6-3ce2-4c47-a8a1-0dc9107d825b", //DINOSAUR
        "24cf863c-b6ba-4826-a056-0b698989cbf7", //Avatar Flight of Passage
        "ba44245e-5562-4359-be27-9dfb2d96cb2d", //It's Tough to be a Bug!
        "32e01181-9a5f-4936-8a77-0dace1de836c", //Kilimanjaro Safaris
        "d58d9262-ec95-4161-80a0-07ca43b2f5f3", //Kali River Rapids
        "1627c724-112c-4361-aeba-dae80082c90d", //TriceraTop Spin
      ],
    },
  },
};
