
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
"id": 17068,
"campus": "hr-rfp",
"name": "Bright Future Sunglasses",
"slogan": "You've got to wear shades",
"description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
"category": "Accessories",
"default_price": "69.00",
"created_at": "2021-02-23T04:22:44.728Z",
"updated_at": "2021-02-23T04:22:44.728Z",
"features": [
    {
        "feature": "Lenses",
        "value": "Ultrasheen"
    },
    {
        "feature": "UV Protection",
        "value": null
    },
    {
        "feature": "Frames",
        "value": "LightCompose"
    }
]
}

let dummyReviews = {
"product": "17068",
"page": 0,
"count": 5,
"results": [
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
    }
]
}



export {dummyProducts, dummyProduct, dummyRelatedProducts, dummyReviews};