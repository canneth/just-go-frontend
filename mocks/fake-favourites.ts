
import PlaceData from '@/models/place-data';

const FAKE_FAVOURITES: PlaceData[] = [
  {
    "id": "0611-7433-0321-9866",
    "name": "Reed's Didymodon Moss",
    "placeType": "Computers",
    "address": "8 Chinook Trail",
    "openStatus": false,
    "openingTime": "1:03 AM",
    "closingTime": "3:53 AM",
    "contactNumber": "(774) 1986650",
    "tags": ["Turquoise"]
  },
  {
    "id": "7778-3033-3692-4312",
    "name": "Sago Palm",
    "placeType": "Industrial",
    "address": "1 Utah Avenue",
    "openStatus": true,
    "openingTime": "6:29 PM",
    "closingTime": "11:27 AM",
    "contactNumber": "(464) 1743654",
    "tags": ["Khaki", "Indigo", "Puce"]
  },
  {
    "id": "4861-5311-2570-8890",
    "name": "Dyebush",
    "placeType": "Beauty",
    "address": "497 Havey Pass",
    "openStatus": true,
    "openingTime": "7:41 AM",
    "closingTime": "2:35 PM",
    "contactNumber": "(103) 3515911",
    "tags": ["Indigo", "Pink"]
  },
  {
    "id": "3216-5449-1044-6728",
    "name": "Heartleaf Foamflower",
    "placeType": "Health",
    "address": "96 5th Trail",
    "openStatus": false,
    "openingTime": "11:32 AM",
    "closingTime": "1:51 PM",
    "contactNumber": "(522) 2998015",
    "tags": []
  },
  {
    "id": "9218-4070-6785-4128",
    "name": "Hypnum Moss",
    "placeType": "Baby",
    "address": "3 Debs Court",
    "openStatus": false,
    "openingTime": "11:19 PM",
    "closingTime": "8:27 PM",
    "contactNumber": "(239) 6018995",
    "tags": ["Blue", "Yellow", "Maroon", "Khaki", "Yellow"]
  },
  {
    "id": "8159-3304-0838-5473",
    "name": "Southern Amaranth",
    "placeType": "Clothing",
    "address": "54992 Sheridan Junction",
    "openStatus": false,
    "openingTime": "1:02 AM",
    "closingTime": "2:59 PM",
    "contactNumber": "(836) 5652338",
    "tags": ["Green"]
  },
  {
    "id": "1553-9885-8002-1488",
    "name": "Coville's Lipfern",
    "placeType": "Games",
    "address": "72410 Hanover Junction",
    "openStatus": true,
    "openingTime": "7:58 PM",
    "closingTime": "12:31 PM",
    "contactNumber": "(723) 3895785",
    "tags": ["Purple", "Purple", "Pink"]
  },
  {
    "id": "2555-4841-4803-6020",
    "name": "Disc Lichen",
    "placeType": "Jewelry",
    "address": "280 Surrey Court",
    "openStatus": true,
    "openingTime": "7:31 AM",
    "closingTime": "5:43 PM",
    "contactNumber": "(182) 9156355",
    "tags": ["Fuscia", "Mauv", "Yellow", "Yellow", "Fuscia"]
  },
  {
    "id": "4506-7317-1675-7410",
    "name": "Drypetes",
    "placeType": "Baby",
    "address": "3980 Montana Center",
    "openStatus": false,
    "openingTime": "12:26 PM",
    "closingTime": "3:04 AM",
    "contactNumber": "(855) 9346373",
    "tags": []
  },
  {
    "id": "6005-6868-4688-4252",
    "name": "Rim Lichen",
    "placeType": "Industrial",
    "address": "758 Maple Wood Circle",
    "openStatus": false,
    "openingTime": "3:44 PM",
    "closingTime": "4:30 PM",
    "contactNumber": "(704) 9073144",
    "tags": ["Green", "Aquamarine", "Violet"]
  },
  {
    "id": "6744-9264-8119-1599",
    "name": "Pygmy Leach Orchid",
    "placeType": "Books",
    "address": "6948 Rieder Place",
    "openStatus": false,
    "openingTime": "10:24 PM",
    "closingTime": "2:21 PM",
    "contactNumber": "(781) 1919276",
    "tags": ["Fuscia", "Khaki", "Puce", "Puce", "Pink"]
  },
  {
    "id": "6437-3952-3235-9515",
    "name": "Bryohaplocladium Moss",
    "placeType": "Movies",
    "address": "65698 Barnett Place",
    "openStatus": true,
    "openingTime": "7:38 AM",
    "closingTime": "1:28 PM",
    "contactNumber": "(345) 3656463",
    "tags": ["Puce"]
  },
  {
    "id": "6606-4384-8749-0102",
    "name": "Rolled Gumweed",
    "placeType": "Outdoors",
    "address": "890 Mcbride Circle",
    "openStatus": true,
    "openingTime": "3:35 AM",
    "closingTime": "4:03 AM",
    "contactNumber": "(184) 9801355",
    "tags": ["Indigo", "Mauv", "Violet", "Teal", "Indigo"]
  },
  {
    "id": "5771-8968-3418-3411",
    "name": "Desert Biscuitroot",
    "placeType": "Shoes",
    "address": "711 Chive Terrace",
    "openStatus": false,
    "openingTime": "5:46 PM",
    "closingTime": "7:06 AM",
    "contactNumber": "(877) 1910850",
    "tags": ["Orange", "Aquamarine", "Green", "Yellow", "Yellow"]
  },
  {
    "id": "3906-5692-7443-5966",
    "name": "Hybrid Pine",
    "placeType": "Baby",
    "address": "570 Monica Street",
    "openStatus": true,
    "openingTime": "5:21 PM",
    "closingTime": "5:56 AM",
    "contactNumber": "(312) 6069236",
    "tags": ["Green", "Green", "Maroon"]
  },
  {
    "id": "5315-0934-5721-7810",
    "name": "Chapman's Thoroughwort",
    "placeType": "Grocery",
    "address": "716 Waxwing Crossing",
    "openStatus": false,
    "openingTime": "10:56 PM",
    "closingTime": "8:38 PM",
    "contactNumber": "(264) 6901662",
    "tags": []
  },
  {
    "id": "8635-5801-0918-8456",
    "name": "California Barley",
    "placeType": "Garden",
    "address": "7679 Di Loreto Street",
    "openStatus": true,
    "openingTime": "12:45 PM",
    "closingTime": "4:13 PM",
    "contactNumber": "(287) 9383388",
    "tags": ["Maroon"]
  },
  {
    "id": "0285-1100-5551-0964",
    "name": "Johnston's Bedstraw",
    "placeType": "Sports",
    "address": "5791 Donald Road",
    "openStatus": false,
    "openingTime": "10:09 PM",
    "closingTime": "8:31 AM",
    "contactNumber": "(501) 8662055",
    "tags": ["Yellow", "Mauv", "Fuscia"]
  },
  {
    "id": "5213-1202-8632-1713",
    "name": "Royal Goldfields",
    "placeType": "Music",
    "address": "53249 Scofield Junction",
    "openStatus": false,
    "openingTime": "8:28 AM",
    "closingTime": "12:06 AM",
    "contactNumber": "(344) 3676846",
    "tags": ["Orange"]
  },
  {
    "id": "7801-5943-2971-0572",
    "name": "Villous Waterclover",
    "placeType": "Shoes",
    "address": "7570 Sundown Hill",
    "openStatus": false,
    "openingTime": "8:11 PM",
    "closingTime": "12:22 PM",
    "contactNumber": "(667) 2610389",
    "tags": ["Yellow", "Fuscia"]
  }
];

export default FAKE_FAVOURITES;