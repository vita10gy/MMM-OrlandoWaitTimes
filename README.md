# MMM-ThemeParkWaitTimes

Theme Park Wait Times for Magic Mirror

![alt text](https://github.com/vita10gy/MMM-ThemeParkWaitTimes/blob/master/wait-times-demo.png)

The Theme Park Wiki API is provided by another party and subject to change, but as of right now this module would work with the following parks:

- Walt Disney World® Resort
- Magic Kingdom Park
- EPCOT
- Disney's Hollywood Studios
- Disney's Animal Kingdom Theme Park
- Disney's Typhoon Lagoon Water Park
- Disney's Blizzard Beach Water Park
- Tokyo Disney Resort
- Tokyo DisneySea
- Tokyo Disneyland
- Shanghai Disney Resort
- Shanghai Disneyland
- Disneyland Paris
- Disneyland Park
- Disney California Adventure Park
- Hong Kong Disneyland Parks
- Hong Kong Disneyland Park
- Walibi Holland
- Plopsaland De Panne
- Europa-Park
- Rulantica
- Silver Dollar City
- Dollywood
- Phantasialand
  Phantasialand
- Holiday Park
- Universal Studios (California)
- Universal's Islands of Adventure
- Universal Studios Florida
- Universal's Volcano Bay
- Hersheypark
- Heide Park
- Liseberg
- The Great Escape
- Efteling Themepark Resort
- Worlds of Fun
- Michigan's Adventure
- Knott's Berry Farm
- Cedar Point
- Attractiepark Toverland
- Parc Asterix
- California's Great America
- Canada's Wonderland
- Kings Dominion
- SeaWorld San Diego
- SeaWorld San Antonio
- SeaWorld Orlando
- Aquatica Orlando
- Dorney Park
- Carowinds
- Kings Island
- Valleyfair
- PortAventura World
- PortAventura Park
- Ferrari Land
- Aquatic Park
- Six Flags Over Texas
- Six Flags Great America
- Six Flags America
- Six Flags Frontier City
- Six Flags Over Georgia
- Six Flags St. Louis
- Six Flags New England
- Six Flags México
- Six Flags Great Adventure
- Six Flags Magic Mountain
- Six Flags Fiesta Texas
- Six Flags Discovery Kingdom
- Six Flags Darien Lake
- La Ronde, Montreal
- Busch Gardens Williamsburg
- Busch Gardens Tampa Bay
- Bellewaerde
- LEGOLAND Billund
- LEGOLAND Deutschland
- LEGOLAND California
- LEGOLAND Florida
- LEGOLAND Windsor
- Gardaland
- Thorpe Park
- Alton Towers Resort
- Alton Towers
- Chessington World of Adventures Resort
- Chessington World of Adventures

## Dependencies

- An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
- The [Theme Parks Wiki API](https://api.themeparks.wiki/docs/v1/)

## Installation

1. Install MMM-ThemeParkWaitTimes Module

```javascript
cd ~MagicMirror/modules/
git clone git@github.com:vita10gy/MMM-ThemeParkWaitTimes.git
cd MMM-ThemeParkWaitTimes
npm install
```

2. Add module to ~MagicMirror/config/config.js

## Config

| **Option**       | **Requirement/Type**                 | **Description**                                        |
| ---------------- | ------------------------------------ | ------------------------------------------------------ |
| `park`           | Required - Described below.          | The park that the wait times will be retrieved for.    |
| `futureHours`    | boolean - Optional - Default: true   | The module will show hours for the next 5 days or not  |
| `updateInterval` | int - Optional - Default: 10 minutes | the time between checking for updates, in milleseconds |

### The "park" element

| **Option** | **Requirement/Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `entity`   | Required/String      | The entity id of the Park that will be used to retrieve wait times. These can be located here: https://themeparks.wiki/browse/ either via the URL or the links provided. For example Disney's Magic Kingdom's URL is https://themeparks.wiki/browse/75ea578a-adc8-4116-a54d-dccb60765ef9 and 75ea578a-adc8-4116-a54d-dccb60765ef9 is the entity id you put in the config file. |
| `rides`    | Optional/Array       | An optional array of the rides you would like to display the wait times for. Rides should be listed by their id, found at URLs such as https://api.themeparks.wiki/v1/entity/75ea578a-adc8-4116-a54d-dccb60765ef9/live (note the url is using the entity you used above.) If no array is provided a list of all things that are tagged ATTRACTION and have a queue are listed. |

Here is an example for Magic Kingdom - Disney World configuration in `config.js`

```
  {
  module: "MMM-ThemeParkWaitTimes",
  header: "Magic Kingdom - Walt Disney World", //You can call this whatever
  position: "top_left",
  config: {
    futureHours: true, //optional - allows you to hide the hours for upcoming days - true is default
    updateInterval: 10 * 60 * 1000, //optional - allows you to set how often to check for updates, in milliseconds - 10 minutes is the default
    park: {
      entity: "75ea578a-adc8-4116-a54d-dccb60765ef9", //required - https://themeparks.wiki/browse/
      rides: [
        //https://api.themeparks.wiki/v1/entity/75ea578a-adc8-4116-a54d-dccb60765ef9/live  - use the "id" for each ride
        "7c5e1e02-3a44-4151-9005-44066d5ba1da", //mickey's philharmagic
        "890fa430-89c0-4a3f-96c9-11597888005e", //dumbo the flying elephant
        "3cba0cb4-e2a6-402c-93ee-c11ffcb127ef", //under the sea - journey of the little mermaid
        "e8f0b426-7645-4ea3-8b41-b94ae7091a41", //monsters inc. laugh floor
        "6fd1e225-53a0-4a80-a577-4bbc9a471075", //walt disney's enchanted tiki room
        "9d4d5229-7142-44b6-b4fb-528920969a2c", //seven dwarfs mine train
        "de3309ca-97d5-4211-bffe-739fed47e92f", //big thunder mountain railroad
        "796b0a25-c51e-456e-9bb8-50a324e301b3", //jungle cruise
        "f163ddcd-43e1-488d-8276-2381c1db0a39", //tomorrowland speedway
        "352feb94-e52e-45eb-9c92-e4b44c6b1a9d", //pirates of the caribbean
        "2551a77d-023f-4ab1-9a19-8afec0190f39", //haunted mansion
        "96455de6-f4f1-403c-9391-bf8396979149", //the magic carpets of aladdin
        "e39b831b-7731-49bb-815b-289b4f49a9fd", //walt disney world railroad - main street, u.s.a.
        "e76c93df-31af-49a5-8e2f-752c76c937c9", //enchanted tales with belle
        "0f57cecf-5502-4503-8bc3-ba84d3708ace", //country bear jamboree
        "5a43d1a7-ad53-4d25-abfe-25625f0da304", //tron lightcycle / run
        "0aae716c-af13-4439-b638-d75fb1649df3", //mad tea party
        "8183f3f2-1b59-4b9c-b634-6a863bdf8d84", //walt disney's carousel of progress
        "273ddb8d-e7b5-4e34-8657-1113f49262a5", //prince charming regal carrousel
        "ffcfeaa2-1416-4920-a1ed-543c1a1695c4", //tomorrowland transit authority peoplemover
        "30fe3c64-af71-4c66-a54b-aa61fd7af177", //swiss family treehouse
        "72c7343a-f7fb-4f66-95df-c91016de7338", //buzz lightyear's space ranger spin
        "e40ac396-cbac-43f4-8752-764ed60ccceb", //walt disney world railroad - fantasyland
        "86a41273-5f15-4b54-93b6-829f140e5161", //peter pan's flight
        "06c599f9-1ddf-4d47-9157-a992acafc96b", //walt disney world railroad - frontierland
        "f5aad2d4-a419-4384-bd9a-42f86385c750", //"it's a small world"
        "924a3b2c-6b4b-49e5-99d3-e9dc3f2e8a48", //the barnstormer
        "b2260923-9315-40fd-9c6b-44dd811dbe64", //space mountain
        "d9d12438-d999-4482-894b-8955fdb20ccf", //astro orbiter
        "2ebfb38c-5cb5-4de1-86c0-f7af14188022", //the hall of presidents
        "15700490-3749-45cf-a737-3cba56e13704", //liberty square riverboat
        "4bef7560-ed81-47c7-b178-6544abe3daaf", //tom sawyer island
        "0d94ad60-72f0-4551-83a6-ebaecdd89737", //the many adventures of winnie the pooh
        "a5241f3b-4ab5-4902-b5ba-435132ef553d", //Splash Mountain
      ],
    },
  },
}
```

More resort/park examples can be found in the [examples directory](https://github.com/vita10gy/MMM-ThemeParkWaitTimes/tree/master/examples).

## Entity Ids

> Why so complex with the entity ids? Why can't I type "The Twilight Zone Tower of Terror™" or "Jungle Cruise"?

Because the IDs don't change and don't require tiresome/fiddliy string matching. For example you don't need to worry about the ™ for Tower of Terror, and the Jungle Cruise doesn't disappear on you when they rename it to "Jingle Cruise" for a couple months.

Doing it this way also takes this module out of the way of "direct" interaction with the Theme Park Wiki API. When they add a park or a ride no one has to wait on this project to add something to an internal mapping so I can make some slugs like "TowerOfTerror" instead of "6f6998e8-a629-412c-b964-2cb06af8e26b" to make it slightly more visually appealing to configure once.

## MMM-DisneyWaitTimes Differences

Huge Thanks to @gberg927 for his work on the original https://github.com/gberg927/MMM-DisneyWaitTimes project this heavily piggybacked off of.

Usage differences: This project is no longer restricted to just a few of the Disney parks. It also shows the hours for the upcoming 5 days.

Technical differences: This project uses the newer version of the Theme Park Wiki API and should provide more accurate data.
