import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    "651c2c05e043388a8c6ac57c",
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: "Susan",
        lastName: "Wertz",
        email: "cindy2015@yahoo.com",
        password: "92e5cca20a09e6987b965777cad6d96f",
        picturePath: "profileImg/p11.jpeg",
        friends: [],
        location: "San Fran, CA",
        occupation: "Software Engineer",
        viewedProfile: 14561,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        firstName: "Steve",
        lastName: "Ralph",
        email: "Steve.Ralph@email.com",
        password: "504d0dc526306bc2c53697ee0f6c7d60",
        picturePath: "profileImg/p3.jpeg",
        friends: [],
        location: "New York, CA",
        occupation: "Equipment Operator",
        viewedProfile: 12351,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        firstName: "Carolyn",
        lastName: "McKinney",
        email: "laron1993@hotmail.com",
        password: "be88e241f5aaf1ae970c65efd043cc17",
        picturePath: "profileImg/p4.jpeg",
        friends: [],
        location: "Canada, CA",
        occupation: "Chemical Engineer",
        viewedProfile: 45468,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3],
        firstName: "Lina",
        lastName: "Prichard",
        email: "jerome_franec@yahoo.com",
        password: "011fd93d28805e4073c9022337afc644",
        picturePath: "profileImg/p6.jpeg",
        friends: [],
        location: "Korea, CA",
        occupation: "Processing Machine Operator",
        viewedProfile: 41024,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[4],
        firstName: "Jane",
        lastName: "Doe",
        email: "jean.hudso1@yahoo.com",
        password: "e7e60a78110a9519974f062d48cd64ed",
        picturePath: "profileImg/p5.jpeg",
        friends: [],
        location: "Utah, CA",
        occupation: "Database Administrator",
        viewedProfile: 40212,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[5],
        firstName: "Harvey",
        lastName: "Dunn",
        email: "harveydunn@gmail.com",
        password: "6b68a6323af093283007784c6240cae8",
        picturePath: "profileImg/p7.jpeg",
        friends: [],
        location: "Los Angeles, CA",
        occupation: "Journalist",
        viewedProfile: 976,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },
    {
        _id: userIds[6],
        firstName: "Carly",
        lastName: "Vowel",
        email: "carlyvowel@gmail.com",
        password: "07da63dab4b9de4c43a22808b9098fa4",
        picturePath: "profileImg/p8.jpeg",
        friends: [],
        location: "Chicago, IL",
        occupation: "Nurse",
        viewedProfile: 1510,
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
    },
    {
        _id: userIds[7],
        firstName: "Jessica",
        lastName: "Dunn",
        email: "jessicadunn@gmail.com",
        password: "e7763816ab85341df512eaa03d2c27df",
        picturePath: "profileImg/p9.jpeg",
        friends: [],
        location: "Washington, DC",
        occupation: "Traffic Clerk",
        viewedProfile: 19420,
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[8],
        firstName: "FakeFirst",
        lastName: "FakeLast",
        email: "fakeuser@email.com",
        password:
            "$2b$10$U4zv/wq06/mQrzk7aR2xr.Zyrfqra3mVVxWK8MJMYSDJ3/TTe87BO",
        picturePath: "link-sunglasses.gif",
        friends: [
            "64eb62978d6fe23d068982bc",
            "64eb62978d6fe23d068982bd",
            "64eb62978d6fe23d068982b8",
        ],
        location: "Fake Town",
        occupation: "Fake Job",
        viewedProfile: 3156,
        recipesPosted: 135,
        totalRecipeLikes: 652,
        userRecipeList: [],
        createdAt: {
            $date: "2023-10-03T14:58:13.789Z",
        },
        updatedAt: {
            $date: "2023-10-04T05:10:19.541Z",
        },
        __v: 3,
    },

    //-------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------//
    // Fake Person Generator Users

    // User Template
    {
        _id: userIds[9],
        firstName: "Hannah",
        lastName: "Middlebrooks",
        email: "eliane2004@yahoo.com",
        password: "07cab6e1dd91f8618b41e00e4679fec4",
        picturePath: "profileImg/f1",
        friends: [],
        location: "Youngstown, Ohio, US",
        occupation: "Glass Blower & Molder",
        viewedProfile: 234,
        recipesPosted: 16,
        totalRecipeLikes: 464,
        userRecipeList: [],
        createdAt: {
            $date: "2013-11-16 22:24:27",
        },
        updatedAt: {
            $date: "2014-08-21 05:13:13",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[10],
        firstName: "Molly",
        lastName: "Melton",
        email: "amir2012@hotmail.com",
        password: "34207929905f6716b514aaab072fec4d",
        picturePath: "profileImg/f2",
        friends: [],
        location: "Hatch, Texas, US",
        occupation: "Insurance Claims Clerk",
        viewedProfile: 346,
        recipesPosted: 13,
        totalRecipeLikes: 23,
        userRecipeList: [],
        createdAt: {
            $date: "2014-03-01 23:07:15",
        },
        updatedAt: {
            $date: "2015-07-22 09:51:51",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[11],
        firstName: "Kur",
        lastName: "Hintz",
        email: "mohammad1987@gmail.com",
        password: "76b6ff18fdb02fd33da50ad988fccede",
        picturePath: "profileImg/f3",
        friends: [],
        location: "Albany, New York, US",
        occupation: "Surveying & Mapping Technician",
        viewedProfile: 243,
        recipesPosted: 7,
        totalRecipeLikes: 7,
        userRecipeList: [],
        createdAt: {
            $date: "2013-05-14 21:41:03",
        },
        updatedAt: {
            $date: "2016-10-25 11:12:25",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[12],
        firstName: "Patricia",
        lastName: "Lin",
        email: "haven20092000@yahoo.com",
        password: "30a8dc367bd3fa27876463af71d98e46",
        picturePath: "profileImg/f4",
        friends: [],
        location: "Weehawken, New Jersey, US",
        occupation: "Storage & Distribution Manager",
        viewedProfile: 127,
        recipesPosted: 28,
        totalRecipeLikes: 124,
        userRecipeList: [],
        createdAt: {
            $date: "2016-10-02 10:33:09",
        },
        updatedAt: {
            $date: "2017-05-27 20:24:29",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[13],
        firstName: "Mary",
        lastName: "Remillard",
        email: "jeffrey.jakubows@hotmail.com",
        password: "b183458c7aac47f912668f3c1fbf216f",
        picturePath: "profileImg/f5",
        friends: [],
        location: "Pomona, California, US",
        occupation: "Product Marketer",
        viewedProfile: 1245,
        recipesPosted: 31,
        totalRecipeLikes: 678,
        userRecipeList: [],
        createdAt: {
            $date: "2013-05-20 22:39:39",
        },
        updatedAt: {
            $date: "2013-11-20 14:21:46",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[14],
        firstName: "Edwin",
        lastName: "Johnson",
        email: "verlie2016@gmail.com",
        password: "a53d8538db19b5d352cab5984d650c4f",
        picturePath: "profileImg/m1",
        friends: [],
        location: "Harrisburg, Pennsylvania, US",
        occupation: "Correctional Officer",
        viewedProfile: 999,
        recipesPosted: 9,
        totalRecipeLikes: 25,
        userRecipeList: [],
        createdAt: {
            $date: "2015-11-08 16:21:18",
        },
        updatedAt: {
            $date: "2017-04-01 02:09:44",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[15],
        firstName: "Naomi",
        lastName: "Cortes",
        email: "napoleon.gorcza@gmail.com",
        password: "bcbc9e570f0a9bb7916d322c03089513",
        picturePath: "profileImg/f6",
        friends: [],
        location: "Bakersfield, California, US",
        occupation: "Recreation Worker",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: {
            $date: "2015-08-03 17:48:18",
        },
        updatedAt: {
            $date: "2016-10-05 03:06:48",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[16],
        firstName: "Annika",
        lastName: "Pierce",
        email: "henderson_zula@hotmail.com",
        password: "f79a5793bdd55dd9cfa7d8ecf746a6a8",
        picturePath: "profileImg/f7",
        friends: [],
        location: "Phoenix, Arizona, US",
        occupation: "Insurance Appraiser",
        viewedProfile: 747,
        recipesPosted: 166,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: {
            $date: "2014-07-17 08:37:00",
        },
        updatedAt: {
            $date: "2016-11-20 12:08:30",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[17],
        firstName: "Flora",
        lastName: "Jones",
        email: "edmund1992@hotmail.com",
        password: "53b72db146a618fc8c51be1ac9330e60",
        picturePath: "profileImg/f8",
        friends: [],
        location: "Sudbury, Massachusetts, US",
        occupation: "Social Worker",
        viewedProfile: 74,
        recipesPosted: 23,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: {
            $date: "2014-08-29 11:48:36",
        },
        updatedAt: {
            $date: "2015-07-19 16:12:34",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[18],
        firstName: "Valerie",
        lastName: "Osborn",
        email: "herta.maye0@yahoo.com",
        password: "56634e9ebcddb8029b1553c6318436c3",
        picturePath: "profileImg/f9",
        friends: [],
        location: "OHS Auditor",
        occupation: "Westbrook, Maine, US",
        viewedProfile: 47,
        recipesPosted: 6,
        totalRecipeLikes: 111,
        userRecipeList: [],
        createdAt: {
            $date: "2016-10-17 23:35:09",
        },
        updatedAt: {
            $date: "2017-03-29 10:50:56",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[19],
        firstName: "Robert",
        lastName: "Pahl",
        email: "hyman_schoe5@yahoo.com",
        password: "21d13480a515095ddb78e5ad9a192e28",
        picturePath: "profileImg/m2",
        friends: [],
        location: "Plantation, Florida, US",
        occupation: "Special Education Teacher",
        viewedProfile: 747,
        recipesPosted: 9,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: {
            $date: "2013-10-23 20:51:06",
        },
        updatedAt: {
            $date: "2014-05-17 13:25:01",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[20],
        firstName: "Mark",
        lastName: "Higgins",
        email: "florian.upt@yahoo.com",
        password: "e132aa4d52c40c505943681da5c1fd9d",
        picturePath: "profileImg/m3",
        friends: [],
        location: "Huntsville, Alabama, US",
        occupation: "Vocational Nurse",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 111,
        userRecipeList: [],
        createdAt: {
            $date: "2014-06-08 03:24:18",
        },
        updatedAt: {
            $date: "2016-05-22 01:28:32",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[21],
        firstName: "Daniel",
        lastName: "King",
        email: "marianna_ha@hotmail.com",
        password: "a3b4278f026fab7f825ad7329a4c9bd2",
        picturePath: "profileImg/m4",
        friends: [],
        location: "Stockton, California, US",
        occupation: "Retail Sales",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 20,
        userRecipeList: [],
        createdAt: {
            $date: "2013-04-10 02:38:51",
        },
        updatedAt: {
            $date: "2015-09-11 23:56:33",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[22],
        firstName: "Craig",
        lastName: "Stone",
        email: "cstone@email.com",
        password: "64f9c1b7625612h4765263c03f9031ee",
        picturePath: "profileImg/m5",
        friends: [],
        location: "Chignik, Alaska, US",
        occupation: "Plumber",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: {
            $date: "2022-07-29 19:05:42",
        },
        updatedAt: {
            $date: "2023-02-04 16:33:54",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[23],
        firstName: "Travis",
        lastName: "Denzer",
        email: "wayne2014@hotmail.com",
        password: "64f9c1b762561a73244263c03f9031ee",
        picturePath: "profileImg/m6",
        friends: [],
        location: "Houston, Texas, US",
        occupation: "Industrial Production Manager",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: {
            $date: "2014-07-29 19:05:42",
        },
        updatedAt: {
            $date: "2015-02-04 16:33:54",
        },
        __v: 0,
    },

    // User Template
    {
        _id: userIds[24],
        firstName: "Wilbur",
        lastName: "Boyd",
        email: "fredy1981@gmail.com",
        password: "8b491cc7b62a6ad061ce979a6b4964dc",
        picturePath: "profileImg/m7",
        friends: [],
        location: "Owensboro, Kentucky, US",
        occupation: "Solderer & Brazer",
        viewedProfile: 747,
        recipesPosted: 24,
        totalRecipeLikes: 55,
        userRecipeList: [],
        createdAt: {
            $date: "2013-10-20 15:39:42",
        },
        updatedAt: {
            $date: "2014-11-03 09:46:52",
        },
        __v: 0,
    },
];

// All Posts

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: "Steve",
        lastName: "Ralph",
        location: "New York, CA",
        description: "Some really long random description",
        picturePath: "post1.jpeg",
        userPicturePath: "p3.jpeg",
        likes: new Map([
            [userIds[0], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        comments: [
            "random comment",
            "another random comment",
            "yet another random comment",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: "Whatcha",
        lastName: "Doing",
        location: "Korea, CA",
        description:
            "Another really long random description. This one is longer than the previous one.",
        picturePath: "post2.jpeg",
        userPicturePath: "p6.jpeg",
        likes: new Map([
            [userIds[7], true],
            [userIds[4], true],
            [userIds[1], true],
            [userIds[2], true],
        ]),
        comments: [
            "one more random comment",
            "and another random comment",
            "no more random comments",
            "I lied, one more random comment",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: "Jane",
        lastName: "Doe",
        location: "Utah, CA",
        description:
            "This is the last really long random description. This one is longer than the previous one.",
        picturePath: "post3.jpeg",
        userPicturePath: "p5.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
            [userIds[5], true],
        ]),
        comments: [
            "one more random comment",
            "I lied, one more random comment",
            "I lied again, one more random comment",
            "Why am I doing this?",
            "I'm bored",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: "Harvey",
        lastName: "Dunn",
        location: "Los Angeles, CA",
        description:
            "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
        picturePath: "post4.jpeg",
        userPicturePath: "p7.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
        ]),
        comments: [
            "I lied again, one more random comment",
            "Why am I doing this?",
            "I'm bored",
            "I'm still bored",
            "All I want to do is play video games",
            "I'm going to play video games",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],
        firstName: "Carly",
        lastName: "Vowel",
        location: "Chicago, IL",
        description:
            "Just a short description. I'm tired of typing. I'm going to play video games now.",
        picturePath: "post5.jpeg",
        userPicturePath: "p8.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true],
        ]),
        comments: [
            "I lied again, one more random comment",
            "Why am I doing this?",
            "Man I'm bored",
            "What should I do?",
            "I'm going to play video games",
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: "Jessica",
        lastName: "Dunn",
        location: "Washington, DC",
        description:
            "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
        picturePath: "post6.jpeg",
        userPicturePath: "p9.jpeg",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
        ]),

        comments: [
            "Can I play video games now?",
            "No let's actually study",
            "Never mind, I'm going to play video games",
            "Stop it.",
            "Michael, stop it.",
        ],
    },
];

export const recipes = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[8],
        firstName: "FakeFirst",
        lastName: "FakeLast",
        userPicturePath: "link-sunglasses.gif",

        title: "Crispy Beef & Shitake Noodles",
        picturePath: "crispy-beef-and-shiitake-noodles-135398-1.jpg",

        ingredients: [
            { qty: "450g", element: "hokkien noodles" },
            { qty: "2 tsp", element: "sesame oil" },
            { qty: "200g", element: "shiitake mushrooms, halved" },
            { qty: "3", element: "garlic cloves, crushed" },
            {
                qty: "3 tsp",
                element: "Kewpie Roasted Sesame Dressing",
            },
            { qty: "460g ", element: "beef stir-fry strips" },
            { qty: "3 tsp ", element: "ginger paste" },
            { qty: "1/2 tsp", element: "Chinese five spice" },
            { qty: "1 tbsp ", element: "Shaoxing wine" },
            { qty: "35g (1/4 cup)", element: "cornflour" },
            { qty: "60ml (1/4 cup)", element: "peanut oil" },
            { qty: "200g ", element: "bunch broccolini, halved lengthways" },
            { qty: "100g ", element: "baby spinach" },
            { qty: "60ml ", element: "oyster sauce" },
            { qty: "4 tsp", element: "Sesame seeds, toasted" },
            { qty: "8 slices", element: "Fresh red chilli, sliced" },
        ],
        // ingredientNum: Number,

        equipment: [
            "heatproof bowl",
            "collander",
            "large wok",
            "wooden stirer",
            "mixing bowl",
            "plastic bag",
        ],
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        spiceLevel: 2,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Place the noodles in a large heatproof bowl. Cover with boiling water. Set aside for 5 minutes to soften. Drain well.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Meanwhile, heat the sesame oil in a large wok or non-stick frying pan over medium-high heat. Add mushroom and cook, stirring, for 2-3 minutes or until softened. Add half the garlic and stir for 1-2 minutes or until golden. Stir in sesame dressing. Transfer to a bowl and set aside.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Combine the beef, ginger paste, five spice, Shaoxing wine and remaining garlic in a bowl. Mix well, then transfer the beef to a large sealable plastic bag. Add the cornflour, seal and shake to coat.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Heat about 1 tbs peanut oil in wok or pan over high heat. Add a third of the beef. Cook for 2-3 minutes or until crisp. Transfer to a plate. Repeat with remaining oil and beef.",
            },
            {
                stepNum: 5,
                stepMethod:
                    "Add the broccolini to the wok or pan. Cook over medium-high heat, stirring, for 2 minutes or until tender-crisp. Add the noodles and cook, stirring, for 2 minutes. Add the spinach and cook for 1 minute, until wilted. Return the mushroom and beef to the wok or pan, add the oyster sauce and toss to coat.",
            },
            {
                stepNum: 6,
                stepMethod:
                    "Divide the noodle mixture among serving bowls. Drizzle with the extra dressing and sprinkle with toasted sesame seeds and chilli.",
            },
        ],
        notes: "This is a family favourite and has currently been passed down through several generations. Always a crowd pleaser.",
        tags: ["stir fry", "noodles", "healthy", "flavourful"],
        likes: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true],
        ]),
        recommendations: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true],
        ]),
        saves: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true],
        ]),
        shares: 59,
        comments: [
            {
                userId: userIds[7],
                commentText:
                    "This look so good! I can't wait to give this a go.",
            },
            {
                userId: userIds[6],
                commentText:
                    "Would this dish be ok to serve with rice instead?",
            },
            {
                userId: userIds[5],
                commentText:
                    "Such a great dish! I made this tonight and my kids really loved it! Definitely going to be making this again.",
            },
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[8],
        firstName: "FakeFirst",
        lastName: "FakeLast",
        userPicturePath: "link-sunglasses.gif",

        title: "One-Pan Creamy Chicken & Gnocchi",
        picturePath:
            "210623-delish-quarterly-creamy-chicken-gnocchi-horizontal-0258-eb-1625174322.jpg",

        ingredients: [
            { qty: "680g", element: "boneless skinless chicken breasts" },
            { qty: "2 tsp", element: "kosher salt" },
            { qty: "2 tbsp", element: "extra virgin olive oil, divided" },
            { qty: "1", element: "small shallot, diced" },
            {
                qty: "225g",
                element: "baby bella mushrooms, sliced",
            },
            { qty: "2", element: "cloves garlic, minced" },
            { qty: "2 tsp", element: "fresh thyme leaves" },
            { qty: "1 tsp", element: "dried oregano" },
            { qty: "1 cup", element: "low-sodium chicken broth" },
            { qty: "1 1/4 cup", element: "half and half" },
            { qty: "480g", element: "gnocchi" },
            { qty: "3/4 cup", element: "shredded mozzarella" },
            { qty: "1/2 cup", element: "freshly grated Parmesan" },
            { qty: "3 cup", element: "packed baby spinach" },
            { qty: "2 tsp", element: "Freshly ground black pepper" },
            { qty: "1/2 tsp", element: "crushed red pepper flakes" },
        ],
        // ingredientNum: Number,

        equipment: [
            "large skillet",
            "chefs knife",
            "Wooden Stirer",
            "Metal Tongs",
            "chopping board",
            "measuring cup",
            "serving spoon",
            "serving plate",
        ],
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 4,
        spiceLevel: 1,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Season chicken on both sides with salt and pepper. In a large skillet over medium-high heat, heat 1 tablespoon oil. Add chicken and cook until golden, 4 minutes per side. Remove from skillet.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Reduce heat to medium and add remaining 1 tablespoon oil. Add shallot and mushrooms and cook until golden, 5 minutes. Add garlic, thyme, and oregano and cook until fragrant, 1 minute more. Add broth and scrape up any brown bits on bottom of pan, then slowly add in half and half. Bring to a simmer and season with salt, pepper, and a pinch of red pepper flakes. Stir in gnocchi and return chicken to pan. Let simmer until chicken is cooked through and internal temperature reaches 165°, 8 to 10 minutes, stirring occasionally. Remove chicken from skillet. ",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Add cheeses and stir until melted, then add spinach and stir until wilted.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Slice chicken and return to skillet. Season with more salt and pepper to taste.",
            },
        ],
        notes: "This is a family favourite and has currently been passed down through several generations. Always a crowd pleaser.",
        tags: ["stir fry", "noodles", "healthy", "flavourful"],
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
        ]),
        recommendations: new Map([
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        saves: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        shares: 33,
        comments: [
            {
                userId: userIds[1],
                commentText:
                    "Wow, that creamy chicken gnocchi looks amazing! Can't wait to try it. 😋 #Yum",
            },
            {
                userId: userIds[2],
                commentText:
                    "OMG, this recipe is an absolute flavor explosion! 😍 Can't wait to try it out this weekend. Drooling already. 🤤 #FoodieHeaven",
            },
            {
                userId: userIds[3],
                commentText:
                    "I need that creamy chicken gnocchi in my life ASAP! 😍",
            },
        ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],
        firstName: "Carly",
        lastName: "Vowel",
        userPicturePath: "p8.jpeg",

        title: "Honey-Garlic Glazed Salmon",
        picturePath: "1506456214-delish-honey-garlic-glazed-salmon.jpg",

        ingredients: [
            { qty: "1/3 cup", element: "honey" },
            { qty: "1/4 cup", element: "low-sodium soy sauce" },
            { qty: "2 tbsp", element: "lemon juice" },
            { qty: "1 tsp", element: "red pepper flakes" },
            {
                qty: "3 tbsp",
                element: "extra virgin olive oil, divided",
            },
            {
                qty: "4 160g",
                element: "salmon fillets, patted dry with a paper towel",
            },
            { qty: "1 tsp", element: "kosher salt" },
            { qty: "1 tsp", element: "Freshly ground black pepper" },
            { qty: "3", element: "cloves garlic, minced" },
            { qty: "1", element: "lemon, sliced into rounds" },
        ],

        equipment: [
            "large skillet",
            "chefs knife",
            "Wooden Stirer",
            "Metal Tongs",
            "Whisk",
            "Basting Brush",
            "Measuring cup",
            "Medium Bowl",
            "serving plate",
        ],
        prepTime: "5 mins",
        cookTime: "15 mins",
        servings: 4,
        spiceLevel: 2,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a medium bowl, whisk together honey, soy sauce, lemon juice and red pepper flakes.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a large skillet over medium-high heat, heat two tablespoons oil. When oil is hot but not smoking, add salmon skin-side up and season with salt and pepper. Cook salmon until deeply golden, about 6 minutes, then flip over and add remaining tablespoon of oil.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Add garlic to the skillet and cook until fragrant, 1 minute. Add the honey mixture and sliced lemons and cook until sauce is reduced by about 1/3. Baste salmon with the sauce.",
            },
            {
                stepNum: 4,
                stepMethod: "Garnish with sliced lemon and serve.",
            },
        ],
        notes: "This is a family favourite and has currently been passed down through several generations. Always a crowd pleaser.",
        tags: ["stir fry", "noodles", "healthy", "flavourful"],
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
        ]),
        recommendations: new Map([
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        saves: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        shares: 65,
        comments: [
            {
                userId: userIds[3],
                commentText:
                    "I've been searching for an easy salmon recipe, and this one looks just right. The garlic and lemon are a nice touch, and the image has me convinced it's a winner.",
            },
            {
                userId: userIds[4],
                commentText:
                    "Salmon is my go-to when I want something healthy and tasty. This recipe with garlic and lemon is a classic combo that never disappoints. Can't wait to give it a try!",
            },
            {
                userId: userIds[5],
                commentText: "I love a good baked salmon recipe.",
            },
        ],
    },

    // // Recipe Data Template
    // {
    //     _id: new mongoose.Types.ObjectId(),
    //     userId: userIds[XXXXXXXXXXXX],
    //     firstName: "XXXXXXXXXXXX",
    //     lastName: "XXXXXXXXXXXX",
    //     userPicturePath: "XXXXXXXXXXXX",

    //     title: "XXXXXXXXXXXX",
    //     picturePath: "XXXXXXXXXXXX",

    //     ingredients: [
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //         { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
    //     ],
    //     // ingredientNum: Number,

    //     equipment: [
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //         "XXXXXXXXXXXX",
    //     ],
    //     prepTime: "XXXXXXXXXXXX",
    //     cookTime: "XXXXXXXXXXXX",
    //     servings: XXXXXXXXXXXX,
    //     spiceLevel: XXXXXXXXXXXX,
    //     steps: [
    //         {
    //             stepNum: 1,
    //             stepMethod: "XXXXXXXXXXXX",
    //         },
    //         {
    //             stepNum: 2,
    //             stepMethod: "XXXXXXXXXXXX",
    //         },
    //         {
    //             stepNum: 3,
    //             stepMethod: "XXXXXXXXXXXX",
    //         },
    //         {
    //             stepNum: 4,
    //             stepMethod: "XXXXXXXXXXXX",
    //         },
    //     ],
    //     notes: "XXXXXXXXXXXX",
    //     tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
    //     likes: new Map([
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //     ]),
    //     recommendations: new Map([
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //     ]),
    //     saves: new Map([
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //         [userIds[XXXXXXXXXXXX], true],
    //     ]),
    //     shares: XXXXXXXXXXXX,
    //     comments: [
    //         {
    //             userId: userIds[XXXXXXXXXXXX],
    //             commentText: "XXXXXXXXXXXX",
    //         },
    //         {
    //             userId: userIds[XXXXXXXXXXXX],
    //             commentText: "XXXXXXXXXXXX",
    //         },
    //         {
    //             userId: userIds[XXXXXXXXXXXX],
    //             commentText: "XXXXXXXXXXXX",
    //         },
    //     ],
    // },
];
