import mongoose from "mongoose";

const userIds = [
    "653895aab327ab8ea31b6925", // 0
    "653895aab327ab8ea31b6926", // 1
    "653895aab327ab8ea31b6927", // 2
    "653895aab327ab8ea31b6928", // 3
    "653895aab327ab8ea31b6929", // 4
    "653895aab327ab8ea31b692a", // 5
    "653895aab327ab8ea31b692b", // 6
    "653895aab327ab8ea31b692c", // 7
    "651c2c05e043388a8c6ac57c", // 8
    "653895aab327ab8ea31b692d", // 9
    "653895aab327ab8ea31b692e", // 10
    "653895aab327ab8ea31b692f", // 11
    "653895aab327ab8ea31b6930", // 12
    "653895aab327ab8ea31b6931", // 13
    "653895aab327ab8ea31b6932", // 14
    "653895aab327ab8ea31b6933", // 15
    "653895aab327ab8ea31b6934", // 16
    "653895aab327ab8ea31b6935", // 17
    "653895aab327ab8ea31b6936", // 18
    "653895aab327ab8ea31b6937", // 19
    "653895aab327ab8ea31b6938", // 20
    "653895aab327ab8ea31b6939", // 21
    "653895aab327ab8ea31b693a", // 22
    "653895aab327ab8ea31b693b", // 23
    "653895aab327ab8ea31b693c", // 24
];

export const users = [
    {
        _id: userIds[0], // 653895aab327ab8ea31b6925
        firstName: "Susan",
        lastName: "Wertz",
        email: "cindy2015@yahoo.com",
        password: "92e5cca20a09e6987b965777cad6d96f",
        picturePath: "p11.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b693c", // 24
        ],
        location: "San Fran, CA",
        occupation: "Software Engineer",
        viewedProfile: 14561,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1], // 653895aab327ab8ea31b6926
        firstName: "Steve",
        lastName: "Ralph",
        email: "Steve.Ralph@email.com",
        password: "504d0dc526306bc2c53697ee0f6c7d60",
        picturePath: "p3.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
        ],
        location: "New York, CA",
        occupation: "Equipment Operator",
        viewedProfile: 12351,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2], // 653895aab327ab8ea31b6927
        firstName: "Carolyn",
        lastName: "McKinney",
        email: "laron1993@hotmail.com",
        password: "be88e241f5aaf1ae970c65efd043cc17",
        picturePath: "p4.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
        ],
        location: "Canada, CA",
        occupation: "Chemical Engineer",
        viewedProfile: 45468,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3], // 653895aab327ab8ea31b6928
        firstName: "Lina",
        lastName: "Prichard",
        email: "jerome_franec@yahoo.com",
        password: "011fd93d28805e4073c9022337afc644",
        picturePath: "p6.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
        ],
        location: "Korea, CA",
        occupation: "Processing Machine Operator",
        viewedProfile: 41024,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[4], // 653895aab327ab8ea31b6929
        firstName: "Jane",
        lastName: "Doe",
        email: "jean.hudso1@yahoo.com",
        password: "e7e60a78110a9519974f062d48cd64ed",
        picturePath: "p5.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b693c", // 24
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
        ],
        location: "Utah, CA",
        occupation: "Database Administrator",
        viewedProfile: 40212,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[5], // 653895aab327ab8ea31b692a
        firstName: "Harvey",
        lastName: "Dunn",
        email: "harveydunn@gmail.com",
        password: "6b68a6323af093283007784c6240cae8",
        picturePath: "p7.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
        ],
        location: "Los Angeles, CA",
        occupation: "Journalist",
        viewedProfile: 976,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },
    {
        _id: userIds[6], // 653895aab327ab8ea31b692b
        firstName: "Carly",
        lastName: "Vowel",
        email: "carlyvowel@gmail.com",
        password: "07da63dab4b9de4c43a22808b9098fa4",
        picturePath: "p8.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
        ],
        location: "Chicago, IL",
        occupation: "Nurse",
        viewedProfile: 1510,
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
    },
    {
        _id: userIds[7], // 653895aab327ab8ea31b692c
        firstName: "Jessica",
        lastName: "Dunn",
        email: "jessicadunn@gmail.com",
        password: "e7763816ab85341df512eaa03d2c27df",
        picturePath: "p9.jpeg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [],
        location: "Washington, DC",
        occupation: "Traffic Clerk",
        viewedProfile: 19420,
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[8], // 651c2c05e043388a8c6ac57c
        firstName: "Link of",
        lastName: "Hyrule",
        email: "fakeuser@email.com",
        password:
            "$2b$10$U4zv/wq06/mQrzk7aR2xr.Zyrfqra3mVVxWK8MJMYSDJ3/TTe87BO",
        picturePath: "link-sunglasses.gif",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",
        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b692d",
            "653895aab327ab8ea31b692e",
            "653895aab327ab8ea31b692f",
            "653895aab327ab8ea31b6930",
        ],
        location: "Hyrule",
        occupation: "Hero of Time",
        viewedProfile: 3156,
        recipesPosted: 135,
        totalRecipeLikes: 652,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 3,
    },

    //-------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------//
    // Fake Person Generator Users

    // User Template
    {
        _id: userIds[9], // 653895aab327ab8ea31b692d
        firstName: "Hannah",
        lastName: "Middlebrooks",
        email: "eliane2004@yahoo.com",
        password: "07cab6e1dd91f8618b41e00e4679fec4",
        picturePath: "f1.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
            "653895aab327ab8ea31b692c",
            "651c2c05e043388a8c6ac57c",
        ],
        location: "Youngstown, Ohio, US",
        occupation: "Glass Blower & Molder",
        viewedProfile: 234,
        recipesPosted: 16,
        totalRecipeLikes: 464,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[10], // 653895aab327ab8ea31b692e
        firstName: "Molly",
        lastName: "Melton",
        email: "amir2012@hotmail.com",
        password: "34207929905f6716b514aaab072fec4d",
        picturePath: "f2.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
            "653895aab327ab8ea31b692c",
            "651c2c05e043388a8c6ac57c",
            "653895aab327ab8ea31b692d",
        ],
        location: "Hatch, Texas, US",
        occupation: "Insurance Claims Clerk",
        viewedProfile: 346,
        recipesPosted: 13,
        totalRecipeLikes: 23,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[11], // 653895aab327ab8ea31b692f
        firstName: "Kur",
        lastName: "Hintz",
        email: "mohammad1987@gmail.com",
        password: "76b6ff18fdb02fd33da50ad988fccede",
        picturePath: "f3.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
            "653895aab327ab8ea31b692c",
            "651c2c05e043388a8c6ac57c",
            "653895aab327ab8ea31b692d",
            "653895aab327ab8ea31b692e",
        ],
        location: "Albany, New York, US",
        occupation: "Surveying & Mapping Technician",
        viewedProfile: 243,
        recipesPosted: 7,
        totalRecipeLikes: 7,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[12], // 653895aab327ab8ea31b6930
        firstName: "Patricia",
        lastName: "Lin",
        email: "haven20092000@yahoo.com",
        password: "30a8dc367bd3fa27876463af71d98e46",
        picturePath: "f4.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
            "653895aab327ab8ea31b692c",
            "651c2c05e043388a8c6ac57c",
            "653895aab327ab8ea31b692d",
            "653895aab327ab8ea31b692e",
            "653895aab327ab8ea31b692f",
        ],
        location: "Weehawken, New Jersey, US",
        occupation: "Storage & Distribution Manager",
        viewedProfile: 127,
        recipesPosted: 28,
        totalRecipeLikes: 124,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[13], // 653895aab327ab8ea31b6931
        firstName: "Mary",
        lastName: "Remillard",
        email: "jeffrey.jakubows@hotmail.com",
        password: "b183458c7aac47f912668f3c1fbf216f",
        picturePath: "f5.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
            "653895aab327ab8ea31b692c",
            "651c2c05e043388a8c6ac57c",
            "653895aab327ab8ea31b692d",
            "653895aab327ab8ea31b692e",
            "653895aab327ab8ea31b692f",
            "653895aab327ab8ea31b693a", // 22
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b693c", // 24
        ],
        location: "Pomona, California, US",
        occupation: "Product Marketer",
        viewedProfile: 1245,
        recipesPosted: 31,
        totalRecipeLikes: 678,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[14], // 653895aab327ab8ea31b6932
        firstName: "Edwin",
        lastName: "Johnson",
        email: "verlie2016@gmail.com",
        password: "a53d8538db19b5d352cab5984d650c4f",
        picturePath: "m1.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b692f", // 11
            "653895aab327ab8ea31b6930", // 12
            "653895aab327ab8ea31b6931", // 13
            "653895aab327ab8ea31b6932", // 14
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
            "653895aab327ab8ea31b6935", // 17
            "653895aab327ab8ea31b6936", // 18
            "653895aab327ab8ea31b6937", // 19
        ],
        location: "Harrisburg, Pennsylvania, US",
        occupation: "Correctional Officer",
        viewedProfile: 999,
        recipesPosted: 9,
        totalRecipeLikes: 25,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[15], // 653895aab327ab8ea31b6933
        firstName: "Naomi",
        lastName: "Cortes",
        email: "napoleon.gorcza@gmail.com",
        password: "bcbc9e570f0a9bb7916d322c03089513",
        picturePath: "f6.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6937", // 19
            "653895aab327ab8ea31b6938", // 20
            "653895aab327ab8ea31b6939", // 21
            "653895aab327ab8ea31b693a", // 22
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b6925", // 0
            "653895aab327ab8ea31b6926", // 1
            "653895aab327ab8ea31b6927", // 2
        ],
        location: "Bakersfield, California, US",
        occupation: "Recreation Worker",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[16], // 653895aab327ab8ea31b6934
        firstName: "Annika",
        lastName: "Pierce",
        email: "henderson_zula@hotmail.com",
        password: "f79a5793bdd55dd9cfa7d8ecf746a6a8",
        picturePath: "f7.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6927",
            "653895aab327ab8ea31b6928",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b692a",
            "653895aab327ab8ea31b692b",
            "653895aab327ab8ea31b692c",
            "651c2c05e043388a8c6ac57c",
            "653895aab327ab8ea31b692d",
            "653895aab327ab8ea31b692e",
            "653895aab327ab8ea31b692f",
            "653895aab327ab8ea31b6931", // 13
            "653895aab327ab8ea31b6932", // 14
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
        ],
        location: "Phoenix, Arizona, US",
        occupation: "Insurance Appraiser",
        viewedProfile: 747,
        recipesPosted: 166,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[17], // 653895aab327ab8ea31b6935
        firstName: "Flora",
        lastName: "Jones",
        email: "edmund1992@hotmail.com",
        password: "53b72db146a618fc8c51be1ac9330e60",
        picturePath: "f8.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b692c", // 7
            "651c2c05e043388a8c6ac57c", // 8
            "653895aab327ab8ea31b692d", // 9
            "653895aab327ab8ea31b692e", // 10
            "653895aab327ab8ea31b692f", // 11
            "653895aab327ab8ea31b6930", // 12
            "653895aab327ab8ea31b6931", // 13
            "653895aab327ab8ea31b6932", // 14
            "653895aab327ab8ea31b6933", // 15
        ],
        location: "Sudbury, Massachusetts, US",
        occupation: "Social Worker",
        viewedProfile: 74,
        recipesPosted: 23,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[18], // 653895aab327ab8ea31b6936
        firstName: "Valerie",
        lastName: "Osborn",
        email: "herta.maye0@yahoo.com",
        password: "56634e9ebcddb8029b1553c6318436c3",
        picturePath: "f9.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925", // 0
            "653895aab327ab8ea31b6926", // 1
            "653895aab327ab8ea31b6927", // 2
            "653895aab327ab8ea31b692e", // 10
            "653895aab327ab8ea31b692f", // 11
            "653895aab327ab8ea31b6930", // 12
            "653895aab327ab8ea31b6931", // 13
            "653895aab327ab8ea31b6932", // 14
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b693c", // 24
        ],
        location: "OHS Auditor",
        occupation: "Westbrook, Maine, US",
        viewedProfile: 47,
        recipesPosted: 6,
        totalRecipeLikes: 111,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[19], // 653895aab327ab8ea31b6937
        firstName: "Robert",
        lastName: "Pahl",
        email: "hyman_schoe5@yahoo.com",
        password: "21d13480a515095ddb78e5ad9a192e28",
        picturePath: "m2.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925", // 0
            "653895aab327ab8ea31b6926", // 1
            "653895aab327ab8ea31b6927", // 2
            "653895aab327ab8ea31b692b", // 6
            "653895aab327ab8ea31b692c", // 7
            "651c2c05e043388a8c6ac57c", // 8
            "653895aab327ab8ea31b692d", // 9
            "653895aab327ab8ea31b6934", // 16
            "653895aab327ab8ea31b6935", // 17
            "653895aab327ab8ea31b6936", // 18
        ],
        location: "Plantation, Florida, US",
        occupation: "Special Education Teacher",
        viewedProfile: 747,
        recipesPosted: 9,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[20], // 653895aab327ab8ea31b6938
        firstName: "Mark",
        lastName: "Higgins",
        email: "florian.upt@yahoo.com",
        password: "e132aa4d52c40c505943681da5c1fd9d",
        picturePath: "m3.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6925", // 0
            "653895aab327ab8ea31b6926", // 1
            "653895aab327ab8ea31b6936", // 18
            "653895aab327ab8ea31b6937", // 19
            "653895aab327ab8ea31b6938", // 20
            "653895aab327ab8ea31b6939", // 21
            "653895aab327ab8ea31b693a", // 22
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b693c", // 24
            "651c2c05e043388a8c6ac57c", // 8
            "653895aab327ab8ea31b692d", // 9
        ],
        location: "Huntsville, Alabama, US",
        occupation: "Vocational Nurse",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 111,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[21], // 653895aab327ab8ea31b6939
        firstName: "Daniel",
        lastName: "King",
        email: "marianna_ha@hotmail.com",
        password: "a3b4278f026fab7f825ad7329a4c9bd2",
        picturePath: "m4.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
            "653895aab327ab8ea31b6935", // 17
            "653895aab327ab8ea31b692a", // 5
            "653895aab327ab8ea31b692b", // 6
            "653895aab327ab8ea31b692c", // 7
            "653895aab327ab8ea31b6925", // 0
        ],
        location: "Stockton, California, US",
        occupation: "Retail Sales",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 20,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[22], // 653895aab327ab8ea31b693a
        firstName: "Craig",
        lastName: "Stone",
        email: "cstone@email.com",
        password: "64f9c1b7625612h4765263c03f9031ee",
        picturePath: "m5.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6929", // 4
            "653895aab327ab8ea31b692a", // 5
            "653895aab327ab8ea31b692b", // 6
            "653895aab327ab8ea31b692c", // 7
            "651c2c05e043388a8c6ac57c", // 8
            "653895aab327ab8ea31b692d", // 9
            "653895aab327ab8ea31b692e", // 10
            "653895aab327ab8ea31b692f", // 11
            "653895aab327ab8ea31b6930", // 12
            "653895aab327ab8ea31b6931", // 13
            "653895aab327ab8ea31b6932", // 14
            "653895aab327ab8ea31b6933", // 15
            "653895aab327ab8ea31b6934", // 16
            "653895aab327ab8ea31b6935", // 17
            "653895aab327ab8ea31b6936", // 18
            "653895aab327ab8ea31b6937", // 19
            "653895aab327ab8ea31b6938", // 20
            "653895aab327ab8ea31b6939", // 21
            "653895aab327ab8ea31b693a", // 22
        ],
        location: "Chignik, Alaska, US",
        occupation: "Plumber",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[23], // 653895aab327ab8ea31b693b
        firstName: "Travis",
        lastName: "Denzer",
        email: "wayne2014@hotmail.com",
        password: "64f9c1b762561a73244263c03f9031ee",
        picturePath: "m6.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [],
        location: "Houston, Texas, US",
        occupation: "Industrial Production Manager",
        viewedProfile: 747,
        recipesPosted: 14,
        totalRecipeLikes: 245,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },

    // User Template
    {
        _id: userIds[24], // 653895aab327ab8ea31b693c
        firstName: "Wilbur",
        lastName: "Boyd",
        email: "fredy1981@gmail.com",
        password: "8b491cc7b62a6ad061ce979a6b4964dc",
        picturePath: "m7.jpg",
        backgroundThemeImg:
            "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg",

        friends: [
            "653895aab327ab8ea31b6929", // 4
            "653895aab327ab8ea31b692a", // 5
            "653895aab327ab8ea31b692b", // 6
            "653895aab327ab8ea31b692c", // 7
            "651c2c05e043388a8c6ac57c", // 8
            "653895aab327ab8ea31b693a", // 22
            "653895aab327ab8ea31b693b", // 23
            "653895aab327ab8ea31b693c", // 24
            "653895aab327ab8ea31b6931", // 13
            "653895aab327ab8ea31b6932", // 14
        ],
        location: "Owensboro, Kentucky, US",
        occupation: "Solderer & Brazer",
        viewedProfile: 747,
        recipesPosted: 24,
        totalRecipeLikes: 55,
        userRecipeList: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
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
// --------------------------------------------------
// ------------------- RECIPES ----------------------
// --------------------------------------------------
export const recipes = [
    {
        _id: "652c06b97a11801be3235379",
        userId: userIds[8],
        firstName: "FakeFirst",
        lastName: "FakeLast",
        userPicturePath: "link-sunglasses.gif",

        recipeTitle: "Crispy Beef & Shitake Noodles",
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
        _id: "652c06b97a11801be323537a",
        userId: userIds[8],
        firstName: "FakeFirst",
        lastName: "FakeLast",
        userPicturePath: "link-sunglasses.gif",

        recipeTitle: "One-Pan Creamy Chicken & Gnocchi",
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
        _id: "652c06b97a11801be323537b",
        userId: userIds[6],
        firstName: "Carly",
        lastName: "Vowel",
        userPicturePath: "p8.jpeg",

        recipeTitle: "Honey-Garlic Glazed Salmon",
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

    console.log("DATA USER ID:", userIds[8]),

    // New Recipes

    // // Recipe Data Template
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[23],
        firstName: "Travis",
        lastName: "Denzer",
        userPicturePath: "m6.jpg",

        recipeTitle: "Christmas Pie",
        picturePath: "christmas-dinner-pie_770x408.jpg",

        ingredients: [
            { qty: "2", element: "tbsp olive oil" },
            { qty: "1", element: "knob butter" },
            { qty: "1", element: "onion, finely chopped" },
            { qty: "500g", element: "sausagemeat or skinned sausages" },
            { qty: "1 lemon", element: "grated lemon zest" },
            { qty: "100g", element: "fresh white breadcrumbs" },
            { qty: "85g", element: "ready-to-eat dried apricots, chopped" },
            {
                qty: "50g",
                element: "chestnut, canned or vacuum-packed, chopped",
            },
            { qty: "2 tsp", element: "thyme, fresh & chopped" },
            { qty: "100g", element: "cranberries, fresh or frozen" },
            { qty: "500g", element: "chicken breasts, boneless & skinless" },
            { qty: "500g", element: "shortcrust pastry" },
            { qty: "1", element: "beaten egg, to glaze" },
        ],

        equipment: [
            "Chopping Board",
            "Chef Knife",
            "20-23cm Baking Tin",
            "Frying Pan",
            "Mixing Bowl",
            "Oven",
            "Pastry Brush",
            "Baking Sheet",
        ],
        prepTime: "30 mins",
        cookTime: "1 hr 15 mins",
        servings: "12",
        spiceLevel: "1",
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Heat oven to 190C/fan 170C/gas 5. Heat 1 tbsp oil and the butter in a frying pan, then add the onion and fry for 5 mins until softened. Cool slightly. Tip the sausagemeat, lemon zest, breadcrumbs, apricots, chestnuts and thyme into a bowl. Add the onion and cranberries, and mix everything together with your hands, adding plenty of pepper and a little salt.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Cut each chicken breast into three fillets lengthwise and season all over with salt and pepper. Heat the remaining oil in the frying pan, and fry the chicken fillets quickly until browned, about 6-8 mins.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Roll out two-thirds of the pastry to line a 20-23cm springform or deep loose-based tart tin. Press in half the sausage mix and spread to level. Then add the chicken pieces in one layer and cover with the rest of the sausage. Press down lightly.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Roll out the remaining pastry. Brush the edges of the pastry with beaten egg and cover with the pastry lid. Pinch the edges to seal, then trim. Brush the top of the pie with egg, then roll out the trimmings to make holly leaf shapes and berries. Decorate the pie and brush again with egg.",
            },
            {
                stepNum: 5,
                stepMethod:
                    "Set the tin on a baking sheet and bake for 50-60 mins, then cool in the tin for 15 mins. Remove and leave to cool completely. Serve with a winter salad and pickles.",
            },
        ],
        notes: "Combine a few key Christmas flavours here to make a pie that both children and adults will adore",
        tags: ["Christmas", "Pie", "Savoury", "Rich"],
        likes: new Map([
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
        ]),
        recommendations: new Map([
            [userIds[13], true],
            [userIds[16], true],
            [userIds[17], true],
        ]),
        saves: new Map([
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
        ]),
        shares: 12,
        comments: [
            {
                userId: userIds[13],
                commentText:
                    "Wow! Thought I would give this a try for next Christmas and I'm thoroughly impressed! Will definitely be making this one for the whole family!",
            },
            {
                userId: userIds[17],
                commentText: "This is a great recipe! I love Christmas Pie!",
            },
            {
                userId: userIds[16],
                commentText: "Can't wait to try this one out!",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a20720530/healthy-peanut-butter-banana-smoothie-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "Peanut Butter Banana Smoothie",
        picturePath: "peanut-butter-banana-smoothie-lead-64e6355ef32bd.jpg",

        ingredients: [
            { qty: "1", element: "large banana" },
            { qty: "1", element: "large banana, peeled, halved & frozen" },
            { qty: "1 cup", element: "unsweetened almond milk" },
            { qty: "2 tbsp", element: "peanut butter" },
            { qty: "2 tsp", element: "honey" },
            { qty: "1/8 tsp", element: "pure vanilla extract" },
            { qty: "1/8 tsp", element: "ground cinnamon" },
            { qty: "1/4 tsp", element: "ground cinnamon, for garnish" },
            { qty: "3", element: "banana slices" },
        ],

        equipment: ["Blender", "Tall Glass", "Knife", "Teaspoon"],
        prepTime: "5",
        cookTime: "0",
        servings: 1,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Combine all ingredients in a blender and blend until smooth.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Layer 3 slices of banana and 1/4 tsp of ground cinnamon on top for garnish.",
            },
        ],
        notes: "A delicious smoothie for on the go, breakfast or treat on a warm day.",
        tags: ["Smoothie", "Banana", "Peanut Butter", "Breakfast"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a44321711/apple-cider-whoopie-pies-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "Apple Cider Whoopie Pies",
        picturePath: "apple-cider-whoopie-pies-lead-649e038061d39.jpg",

        ingredients: [
            { qty: "1 1/2 cup", element: "apple cider" },
            { qty: "2 1/2 cup", element: "all-purpose flour" },
            { qty: "2 tsp", element: "ground cinnamon" },
            { qty: "1 tsp", element: "1 navel orange, zested" },
            { qty: "1 tsp", element: "baking powder" },
            { qty: "3/4 tsp", element: "ground ginger" },
            { qty: "1/2 tsp", element: "baking soda" },
            { qty: "1/2 tsp", element: "fresh nutmeg, grated" },
            { qty: "1/2 tsp", element: "kosher salt" },
            { qty: "1/4 tsp", element: "ground cloves" },
            { qty: "2", element: "large eggs" },
            { qty: "2/3 cup", element: "apple butter" },
            { qty: "1/2 cup", element: "packed dark brown sugar" },
            { qty: "1/2 c", element: "vegetable oil" },
            { qty: "1/3 cup", element: "granulated sugar" },
            { qty: "2 tsp", element: "pure vanilla extract" },
            { qty: "1 tbsp", element: "unsalted butter, melted" },
            { qty: "1/4 cup", element: "cinnamon sugar" },
            { qty: "4 oz", element: "cream cheese, room temp" },
            { qty: "4 tbsp", element: "unsalted butter, room temp" },
            { qty: "2 cup", element: "confectioners’ sugar" },
            { qty: "1 tsp", element: "pure vanilla extract" },
            { qty: "3 tbsp", element: "salted caramel topping" },
        ],

        equipment: [
            "medium saucepan",
            "large bowl",
            "oven",
            "whisk",
            "medium bowl",
            "ice cream scoop",
            "pastry brush",
            "wire rack",
        ],
        prepTime: "10 mins",
        cookTime: "2 hrs 20 mins",
        servings: 8,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a medium saucepan over medium-high heat, bring cider to a boil. Continue to boil until cider starts to darken and slightly thicken and is reduced to about 1/4 cup, about 15 minutes. Let cool 10 minutes.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Preheat oven to 350°. Line 2 baking sheets with parchment. In a large bowl, whisk flour, cinnamon, orange zest, baking powder, ginger, baking soda, nutmeg, salt, and cloves.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "In a medium bowl, whisk eggs, apple butter, brown sugar, oil, granulated sugar, and vanilla. While whisking, slowly pour reduced cider into egg mixture, whisking until combined. Add egg mixture to dry ingredients and stir until combined.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Using a medium (2-oz.) cookie scoop, scoop dough onto prepared sheets, spacing about 1 inch apart. Bake cookies until springy to the touch, 12 to 14 minutes. Transfer to a wire rack and let cool.",
            },
            {
                stepNum: 5,
                stepMethod:
                    "Lightly brush tops of cookies with butter. Sprinkle with cinnamon sugar.",
            },
            {
                stepNum: 6,
                stepMethod:
                    "In a large bowl, using a handheld mixer on medium-high speed, beat cream cheese and butter until light and fluffy, about 3 minutes. Add confectioners’ sugar and vanilla and beat until fluffy and smooth, about 2 minutes more. Scrape filling into a pastry bag or resealable bag.",
            },
            {
                stepNum: 7,
                stepMethod:
                    "Turn cookies rounded side down. Cut bottom of pastry bag or corner of resealable bag to create a 1/2 inch opening. Pipe filling into the center of half of cookies.",
            },
            {
                stepNum: 8,
                stepMethod:
                    "Dollop caramel onto the center of remaining cookies. Sandwich and gently press until filling spreads almost to edges of cookies. Cover and refrigerate whoopie pies at least 1 hour or up to 3 days.",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["Whoopie Pie", "Dessert", "Sweet", "Apple Cider"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: 22,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a41734144/sheet-pan-harissa-chicken-and-sweet-potatoes-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "Harissa Chicken & Sweet Potatoes",
        picturePath:
            "sheet-pan-harrisa-chicken-and-sweet-potatoes-1-1669060587.jpeg",

        ingredients: [
            { qty: "3 lb", element: "bone-in chicken thighs, skin on" },
            { qty: "2 tsp", element: "Kosher salt" },
            { qty: "2 tsp", element: "Freshly ground black pepper" },
            { qty: "3 tbsp", element: "harissa" },
            { qty: "1/2 Lemon", element: "Lemon Juice" },
            { qty: "2", element: "cloves garlic, minced" },
            { qty: "3", element: "large sweet potatoes, sliced" },
            { qty: "1", element: " large red onion, sliced thick" },
            { qty: "2 tbsp", element: "extra-virgin olive oil" },
            { qty: "1 tsp", element: "cumin seeds" },
            { qty: "1 tsp", element: "ground cumin" },
            { qty: "1", element: "lemon, cut into 6 wedges" },
            { qty: "2 tbsp", element: "cilantro, fresh chopped" },
        ],

        equipment: ["Large Bowl", "Baking Tray", "Kitchen Knife"],
        prepTime: "15 mins",
        cookTime: "1 hr 5 mins",
        servings: 6,
        spiceLevel: 3,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Season chicken all over with salt and pepper. Transfer to a large bowl and add harissa, lemon juice, and garlic. Rub into chicken with your hands to coat. Let sit at room temperature 30 minutes. ",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Preheat oven to 425°. On a baking sheet, toss potatoes and onion with oil, cumin seeds, and ground cumin; season with salt and pepper. Spread in an even layer, then nestle chicken in with veggies. ",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Bake until potatoes are golden and an instant-read thermometer inserted into thickest part of chicken registers 165°, 30 to 35 minutes. ",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Top with cilantro. Serve with lemon wedges alongside.",
            },
        ],
        notes: "This easy-as-can-be weeknight dinner is a complete meal made on one sheet pan. I love when a dish’s prep is simple and fast; here’s the perfect example. If you roast the sweet potatoes as indicated, your gift = creamy centers and crispy edges, enhanced by jammy red onions. Using bone-in thighs pretty much guarantees super-tender chicken.",
        tags: ["Simple", "Chicken", "Harissa", "Spicy"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a38326725/spinach-puffs-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "Spinach Puffs",
        picturePath: "delish-spinach-puffs-1638982470.jpg",

        ingredients: [
            { qty: "1 tbsp", element: "vegetable oil" },
            { qty: "1/3 c", element: "onion, finely chopped" },
            { qty: "1 tsp", element: "Kosher salt" },
            { qty: "2", element: "cloves garlic, minced" },
            { qty: "4 oz", element: "cream cheese, softened" },
            { qty: "2", element: "eggs, divided" },
            { qty: "10 oz", element: "spinach" },
            { qty: "3/4 c", element: "feta, crumbled" },
            { qty: "2 tbsp", element: "fresh dill, chopped" },
            { qty: "2 tsp", element: "lemon zest" },
            { qty: "1/2 tsp", element: "ground black pepper" },
            { qty: "", element: "Cooking spray" },
            { qty: "1 tbsp", element: "All-purpose flour" },
            { qty: "1 sheet", element: "package puff pastry, thawed" },
        ],

        equipment: [
            "tablespoon",
            "medium skillet",
            "large bowl",
            "Kitchen Knife",
            "oven",
            "muffin tin",
            "rolling pin",
        ],
        prepTime: "30 mins",
        cookTime: "1 hr",
        servings: 9,
        spiceLevel: 1,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a medium skillet, heat oil over medium heat. Add onions and season with salt. Cook, stirring occasionally, until softened, 4 to 5 minutes. Add garlic and cook until fragrant, about 30 seconds more. Remove from heat.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a large bowl, stir together cream cheese and 1 egg. Stir in garlic-onion mixture, spinach, feta, dill, and lemon zest and season with salt and pepper.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Grease 9 cups of a muffin tin with cooking spray. On a lightly floured surface, roll out puff pastry sheet to a 12” square. Cut into 9 smaller squares, each about 4” wide. Ease each puff pastry square into a greased muffin cup, letting the corners hang over the sides. Add about 2½ tablespoons of filling to the center of each. Fold in pastry corners to meet in the center over the filling and pinch together. Refrigerate for 30 minutes (or freeze for 15 minutes).",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Meanwhile, adjust an oven rack to center position and preheat the oven to 400°.",
            },
            {
                stepNum: 5,
                stepMethod:
                    "Beat remaining egg in a small bowl with 1 teaspoon water and brush on top of the chilled pastry. ",
            },
            {
                stepNum: 6,
                stepMethod:
                    "Bake until puffed and golden brown on the bottom, about 25 minutes. Let cool slightly before lifting out of the muffin tin. Serve warm or at room temperature.",
            },
        ],
        notes: "These spinach puffs are the perfect holiday appetizer. They're filled with a mixture of sautéed onion, garlic,  spinach, and cream cheese and baked inside little puff pastry cups in a muffin tin. We've never met anyone who's been able to eat just one.",
        tags: ["Spinach", "Appetizer", "Entree", "Delicious"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//
    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    //--------------------------------------//

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[XXXXXXXXXXXX],
        firstName: "XXXXXXXXXXXX",
        lastName: "XXXXXXXXXXXX",
        userPicturePath: "XXXXXXXXXXXX",

        recipeTitle: "XXXXXXXXXXXX",
        picturePath: "XXXXXXXXXXXX",

        ingredients: [
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
            { qty: "XXXXXXXXXXXX", element: "XXXXXXXXXXXX" },
        ],

        equipment: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
            "XXXXXXXXXXXX",
        ],
        prepTime: "XXXXXXXXXXXX",
        cookTime: "XXXXXXXXXXXX",
        servings: XXXXXXXXXXXX,
        spiceLevel: XXXXXXXXXXXX,
        steps: [
            {
                stepNum: 1,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 2,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 3,
                stepMethod: "XXXXXXXXXXXX",
            },
            {
                stepNum: 4,
                stepMethod: "XXXXXXXXXXXX",
            },
        ],
        notes: "XXXXXXXXXXXX",
        tags: ["XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXXX"],
        likes: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        recommendations: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        saves: new Map([
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
            [userIds[XXXXXXXXXXXX], true],
        ]),
        shares: XXXXXXXXXXXX,
        comments: [
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
            {
                userId: userIds[XXXXXXXXXXXX],
                commentText: "XXXXXXXXXXXX",
            },
        ],
    },

    // //--------------------------------------//

    // {
    //     _id: new mongoose.Types.ObjectId(),
    //     userId: userIds[XXXXXXXXXXXX],
    //     firstName: "XXXXXXXXXXXX",
    //     lastName: "XXXXXXXXXXXX",
    //     userPicturePath: "XXXXXXXXXXXX",

    //     recipeTitle: "XXXXXXXXXXXX",
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
