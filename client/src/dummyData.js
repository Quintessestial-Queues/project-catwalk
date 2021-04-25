
let dummyProducts = [
  {
    "id": 17067,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z"
  },
  {
    "id": 17068,
    "campus": "hr-rfp",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z"
  },
  {
    "id": 17069,
    "campus": "hr-rfp",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z"
  },
  {
    "id": 17070,
    "campus": "hr-rfp",
    "name": "Slacker's Slacks",
    "slogan": "Comfortable for everything, or nothing",
    "description": "I'll tell you how great they are after I nap for a bit.",
    "category": "Pants",
    "default_price": "65.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z"
  },
  {
    "id": 17071,
    "campus": "hr-rfp",
    "name": "Heir Force Ones",
    "slogan": "A sneaker dynasty",
    "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    "category": "Kicks",
    "default_price": "99.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z"
  }
]


let dummyRelatedProducts = [
  17069,
  17073,
  17072,
  17071
]



let dummyProduct = {
  "id": 17071,
  "campus": "hr-rfp",
  "name": "Heir Force Ones",
  "slogan": "A sneaker dynasty",
  "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  "category": "Kicks",
  "default_price": "99.00",
  "created_at": "2021-02-23T04:22:44.728Z",
  "updated_at": "2021-02-23T04:22:44.728Z",
  "features": [
      {
          "feature": "Sole",
          "value": "Rubber"
      },
      {
          "feature": "Material",
          "value": "FullControlSkin"
      },
      {
          "feature": "Mid-Sole",
          "value": "ControlSupport Arch Bridge"
      },
      {
          "feature": "Stitching",
          "value": "Double Stitch"
      }
  ]
}

let dummyReviews = {
"product": "17068",
"page": 0,
"count": 5,
"results": [
    {
        "review_id": 188759,
        "rating": 5,
        "summary": "I'm not a fan!",
        "recommend": false,
        "response": "Sorry to hear. Is there anything in particular you don't like?",
        "body": "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
        "date": "2019-06-16T00:00:00.000Z",
        "reviewer_name": "negativity",
        "helpfulness": 0,
        "photos": []
    },
    {
        "review_id": 188758,
        "rating": 3,
        "summary": "I'm enjoying wearing these shades",
        "recommend": true,
        "response": "",
        "body": "Comfortable and practical.",
        "date": "2019-04-14T00:00:00.000Z",
        "reviewer_name": "shortandsweeet",
        "helpfulness": 8,
        "photos": [
            {
                "id": 298296,
                "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            },
            {
                "id": 298297,
                "url": "https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            },
            {
                "id": 298298,
                "url": "https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
        ]
    },
    {
        "review_id": 288940,
        "rating": 5,
        "summary": "Best Review Ever!",
        "recommend": true,
        "response": null,
        "body": "This Review is great, so is the person who made this module!",
        "date": "2021-03-12T00:00:00.000Z",
        "reviewer_name": "Tear-in",
        "helpfulness": 2,
        "photos": []
    },
    {
        "review_id": 288942,
        "rating": 5,
        "summary": "Cutest Frog",
        "recommend": true,
        "response": null,
        "body": "EVERRRRRRR!RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
        "date": "2021-03-12T00:00:00.000Z",
        "reviewer_name": "frogeeeeeee",
        "helpfulness": 0,
        "photos": []
    },
    {
        "review_id": 188760,
        "rating": 2,
        "summary": "This product was ok!",
        "recommend": false,
        "response": "",
        "body": "They're fine but I wouldn't buy again.",
        "date": "2019-05-23T00:00:00.000Z",
        "reviewer_name": "anyone",
        "helpfulness": 0,
        "photos": []
    },
    {
        "review_id": 188759,
        "rating": 5,
        "summary": "I'm not a fan!",
        "recommend": false,
        "response": "Sorry to hear. Is there anything in particular you don't like?",
        "body": "I don't like them",
        "date": "2019-06-16T00:00:00.000Z",
        "reviewer_name": "negativity",
        "helpfulness": 0,
        "photos": []
    },

]
}

let dummyProductStyles = {
  "product_id": "17071",
  "results": [
      {
          "style_id": 90275,
          "name": "White & White",
          "original_price": "99.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ],
          "skus": {
              "522166": {
                  "quantity": 14,
                  "size": "7"
              },
              "522167": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "522168": {
                  "quantity": 9,
                  "size": "8"
              },
              "522169": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "522170": {
                  "quantity": 18,
                  "size": "9"
              },
              "522171": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "522172": {
                  "quantity": 10,
                  "size": "10"
              },
              "522173": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "522174": {
                  "quantity": 11,
                  "size": "11"
              },
              "522175": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "522176": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      },
      {
          "style_id": 90276,
          "name": "White & Red",
          "original_price": "99.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ],
          "skus": {
              "522177": {
                  "quantity": 14,
                  "size": "7"
              },
              "522178": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "522179": {
                  "quantity": 9,
                  "size": "8"
              },
              "522180": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "522181": {
                  "quantity": 18,
                  "size": "9"
              },
              "522182": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "522183": {
                  "quantity": 10,
                  "size": "10"
              },
              "522184": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "522185": {
                  "quantity": 11,
                  "size": "11"
              },
              "522186": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "522187": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      },
      {
          "style_id": 90277,
          "name": "White & Black",
          "original_price": "99.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
              }
          ],
          "skus": {
              "522188": {
                  "quantity": 14,
                  "size": "7"
              },
              "522189": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "522190": {
                  "quantity": 9,
                  "size": "8"
              },
              "522191": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "522192": {
                  "quantity": 18,
                  "size": "9"
              },
              "522193": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "522194": {
                  "quantity": 10,
                  "size": "10"
              },
              "522195": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "522196": {
                  "quantity": 11,
                  "size": "11"
              },
              "522197": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "522198": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      },
      {
          "style_id": 90278,
          "name": "White & Blue",
          "original_price": "99.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              }
          ],
          "skus": {
              "522199": {
                  "quantity": 14,
                  "size": "7"
              },
              "522200": {
                  "quantity": 25,
                  "size": "7.5"
              },
              "522201": {
                  "quantity": 9,
                  "size": "8"
              },
              "522202": {
                  "quantity": 2,
                  "size": "8.5"
              },
              "522203": {
                  "quantity": 18,
                  "size": "9"
              },
              "522204": {
                  "quantity": 12,
                  "size": "9.5"
              },
              "522205": {
                  "quantity": 10,
                  "size": "10"
              },
              "522206": {
                  "quantity": 18,
                  "size": "10.5"
              },
              "522207": {
                  "quantity": 11,
                  "size": "11"
              },
              "522208": {
                  "quantity": 35,
                  "size": "11.5"
              },
              "522209": {
                  "quantity": 25,
                  "size": "12"
              }
          }
      }
  ]
}

let dummyProductQuestions = {
    "product_id": "17071",
    "results": [
        {
            "question_id": 104629,
            "question_body": "Can I wash it?",
            "question_date": "2017-01-04T00:00:00.000Z",
            "asker_name": "luaulover",
            "question_helpfulness": 3,
            "reported": false,
            "answers": {
                "992102": {
                    "id": 992102,
                    "body": "I've thrown it in the wash and it seems fine",
                    "date": "2017-01-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 4,
                    "photos": [
                        "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                        "https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
                    ]
                },
                "992103": {
                    "id": 992103,
                    "body": "It says not to",
                    "date": "2017-01-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 4,
                    "photos": []
                },
                "992135": {
                    "id": 992135,
                    "body": "I wouldn't machine wash it",
                    "date": "2017-11-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 5,
                    "photos": []
                },
                "1719483": {
                    "id": 1719483,
                    "body": "The cheese is the answer.",
                    "date": "2021-04-24T00:00:00.000Z",
                    "answerer_name": "Allison",
                    "helpfulness": 0,
                    "photos": [
                        "https://i.imgur.com/uaMK0Xc.jpg"
                    ]
                }
            }
        }
    ]
}
export {
    dummyProducts,
    dummyProduct,
    dummyRelatedProducts,
    dummyReviews,
    dummyProductStyles,
    dummyProductQuestions
};