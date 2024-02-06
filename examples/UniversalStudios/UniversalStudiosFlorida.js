const exampleModule = {
  module: "MMM-ThemeParkWaitTimes",
  header: "Universal Studios", //You can call this whatever
  position: "top_left",
  config: {
    futureHours: false, //allows you to hide the hours for upcoming days
    park: {
      entity: "eb3f4560-2383-4a36-9152-6b3e5ed6bc57", //Required - Find them here https://themeparks.wiki/browse/
      rides: [
        //https://api.themeparks.wiki/v1/entity/eb3f4560-2383-4a36-9152-6b3e5ed6bc57/live  - use the "id" for each ride
        "91cae293-64f8-48b6-88ec-02dcfcdd1f91", //MEN IN BLACK™ Alien Attack!™
        "1e16afdd-15e3-4e4a-b3af-8aeebd7534f8", //E.T. Adventure™
        "70ac72a3-9675-4c41-a1b1-e4801072927a", //Harry Potter and the Escape from Gringotts™
        "750939c5-a69e-408a-8d55-66c272fa265e", //TRANSFORMERS™: The Ride-3D
        "2c72d1d0-7106-439d-9672-5bf95795ccea", //Hollywood Rip Ride Rockit™
        "25d47d04-a917-405a-9904-9be2b499b2dd", //Illumination's Villain-Con Minion Blast
        "7e70bc9e-7dce-4dd2-8823-57b8d6ec7570", //The Simpsons Ride™
        "ec25d9a7-b4d4-4ebf-a6c4-c18389351764", //Revenge of the Mummy™
        "6a3ffac7-bef4-4a22-8ba6-f2963aac7f70", //Fast & Furious - Supercharged™
        "625a3cc3-7d7e-468b-96fe-1ec00df7b739", //Race Through New York Starring Jimmy Fallon™
        "f0750e5e-7629-4c53-99d2-e0924a8afeed", //Hogwarts™ Express - King's Cross Station
        "96e71193-49f0-40b2-9bba-644e530d8115", //Kang & Kodos' Twirl 'n' Hurl
        "7288f24a-396e-4eeb-bb3b-4a90e65269f2", //Despicable Me Minion Mayhem™
      ],
    },
  },
};
