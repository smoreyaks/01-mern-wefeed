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
        userRecipeList: [],
        totalRecipeLikes: 124,
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
        userRecipeList: ["657b071e785978afdb673c78"],
        totalRecipeLikes: 124,
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
        userRecipeList: [],
        totalRecipeLikes: 124,
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
        userRecipeList: [],
        totalRecipeLikes: 124,
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
        userRecipeList: ["657b071e785978afdb673c72"],
        totalRecipeLikes: 124,
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
        userRecipeList: [],
        totalRecipeLikes: 124,
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
        userRecipeList: [
            "652c06b97a11801be323537b",
            "657b071e785978afdb673c6d",
        ],
        totalRecipeLikes: 124,
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
        userRecipeList: [],
        totalRecipeLikes: 124,
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
        userRecipeList: [
            "652c06b97a11801be3235379",
            "652c06b97a11801be323537a",
        ],
        totalRecipeLikes: 652,
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
        userRecipeList: [],
        totalRecipeLikes: 464,
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
        userRecipeList: [
            "657b071e785978afdb673c71",
            "657b071e785978afdb673c73",
        ],
        totalRecipeLikes: 23,
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
        userRecipeList: ["657b071e785978afdb673c75"],
        totalRecipeLikes: 7,
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
        userRecipeList: [],
        totalRecipeLikes: 124,
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
        userRecipeList: [],
        totalRecipeLikes: 678,
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
        userRecipeList: ["657b071e785978afdb673c74"],
        totalRecipeLikes: 25,
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
        userRecipeList: ["657b071e785978afdb673c6c"],
        totalRecipeLikes: 245,
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
        userRecipeList: ["657b071e785978afdb673c77"],
        totalRecipeLikes: 245,
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
        userRecipeList: [],
        totalRecipeLikes: 245,
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
        userRecipeList: [
            "657b071e785978afdb673c70",
            "657b071e785978afdb673c76",
        ],
        totalRecipeLikes: 111,
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
        userRecipeList: [],
        totalRecipeLikes: 245,
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
        userRecipeList: [],
        totalRecipeLikes: 111,
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
        userRecipeList: [],
        totalRecipeLikes: 20,
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
        userRecipeList: [],
        totalRecipeLikes: 245,
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

        friends: [
            "653895aab327ab8ea31b6937",
            "653895aab327ab8ea31b6932",
            "653895aab327ab8ea31b6929",
            "653895aab327ab8ea31b6926",
            "653895aab327ab8ea31b6939",
            "653895aab327ab8ea31b692a",
        ],
        location: "Houston, Texas, US",
        occupation: "Industrial Production Manager",
        viewedProfile: 747,
        userRecipeList: [
            "657b071e785978afdb673c6b",
            "657b071e785978afdb673c6f",
        ],
        totalRecipeLikes: 245,
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
        userRecipeList: ["657b071e785978afdb673c6e"],
        totalRecipeLikes: 55,
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
        firstName: "Link of",
        lastName: "Hyrule",
        userPicturePath: "link-sunglasses.gif",
        occupation: "Hero of Time",
        recipeTitle: "Crispy Beef & Shitake Noodles",
        recipeType: ["main"],
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
        firstName: "Link of",
        lastName: "Hyrule",
        userPicturePath: "link-sunglasses.gif",
        occupation: "Hero of Time",
        recipeTitle: "One-Pan Creamy Chicken & Gnocchi",
        recipeType: ["main"],
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
        spiceLevel: 0,
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
        occupation: "Nurse",
        recipeTitle: "Honey-Garlic Glazed Salmon",
        recipeType: ["main"],
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
    {
        _id: "657b071e785978afdb673c6b",
        userId: userIds[23],
        firstName: "Travis",
        lastName: "Denzer",
        userPicturePath: "m6.jpg",
        occupation: "Industrial Production Manager",
        recipeTitle: "Christmas Pie",
        recipeType: ["main"],
        picturePath: "christmas-dinner-pie_770x408.jpg",

        ingredients: [
            { qty: "2", element: "tbsp olive oil" },
            { qty: "1", element: "knob butter" },
            { qty: "1", element: "onion, finely chopped" },
            { qty: "500g", element: "sausage meat or skinned sausages" },
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
    //--------------------------------------//
    //--------------------------------------//
    //--------------------------------------//
    //--------------------------------------//
    //--------------------------------------//
    //--------------------------------------//
    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a20720530/healthy-peanut-butter-banana-smoothie-recipe/
    {
        _id: "657b071e785978afdb673c6c",
        userId: userIds[15],
        firstName: "Naomi",
        lastName: "Cortes",
        userPicturePath: "f6.jpg",
        occupation: "Recreation Worker",
        recipeTitle: "Peanut Butter Banana Smoothie",
        recipeType: ["drink", "breakfast"],
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
        prepTime: "5 mins",
        cookTime: "0 mins",
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
            [userIds[0], true],
            [userIds[3], true],
            [userIds[20], true],
            [userIds[23], true],
            [userIds[7], true],
        ]),
        recommendations: new Map([
            [userIds[0], true],
            [userIds[3], true],
            [userIds[20], true],
        ]),
        saves: new Map([
            [userIds[7], true],
            [userIds[23], true],
            [userIds[24], true],
            [userIds[11], true],
        ]),
        shares: 13,
        comments: [
            {
                userId: userIds[0],
                commentText:
                    "Healthy twist without sacrificing taste. A guilt-free indulgence.",
            },
            {
                userId: userIds[3],
                commentText: "Quick and simple – great for busy weekdays!",
            },
            {
                userId: userIds[20],
                commentText:
                    "Healthy and satisfying. This breakfast keeps me energized throughout the morning. A nutritious delight!",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a44321711/apple-cider-whoopie-pies-recipe/
    {
        _id: "657b071e785978afdb673c6d",
        userId: userIds[6],
        firstName: "Carly",
        lastName: "Vowel",
        userPicturePath: "p8.jpeg",
        occupation: "Nurse",
        recipeTitle: "Apple Cider Whoopie Pies",
        recipeType: ["dessert"],
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
        notes: "After these are baked, coating the whoopie pies in cinnamon sugar further enhances the apple-ness of these treats, and it lends them an appealing crunch!",
        tags: ["Whoopie Pie", "Dessert", "Sweet", "Apple Cider"],
        likes: new Map([
            [userIds[8], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
        ]),
        recommendations: new Map([
            [userIds[8], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
        ]),
        saves: new Map([
            [userIds[8], true],
            [userIds[9], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
        ]),
        shares: 22,
        comments: [
            {
                userId: userIds[8],
                commentText:
                    "Ideal for cozy nights in. Turn off the lights, light a candle, and savor this delightful dessert. Pure bliss!",
            },
            {
                userId: userIds[9],
                commentText:
                    "Not a dessert person, but this treat makes me reconsider. A sweet motivator to end the day on a high note!",
            },
            {
                userId: userIds[10],
                commentText:
                    "I added a drizzle of caramel sauce – a sweet touch that took this dessert to the next level.",
            },
            {
                userId: userIds[11],
                commentText:
                    "Indulgent and decadent! This dessert is a sweet symphony of flavors that satisfies every craving.",
            },
            {
                userId: userIds[12],
                commentText:
                    "Shared this with coworkers, and now it's our go-to office celebration treat. A workplace-approved indulgence!",
            },
            {
                userId: userIds[13],
                commentText:
                    "A burst of flavors! This dessert is a delightful treat for your taste buds.",
            },
            {
                userId: userIds[14],
                commentText:
                    "A nice mix of textures! This dessert offers a delightful contrast between smooth and a nice crunch.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a41734144/sheet-pan-harissa-chicken-and-sweet-potatoes-recipe/
    {
        _id: "657b071e785978afdb673c6e",
        userId: userIds[24],
        firstName: "Wilbur",
        lastName: "Boyd",
        userPicturePath: "m7.jpg",
        occupation: "Solderer & Brazer",
        recipeTitle: "Harissa Chicken & Sweet Potatoes",
        recipeType: ["main"],
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
            { qty: "1", element: "large red onion, sliced thick" },
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
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
        ]),
        recommendations: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
        ]),
        saves: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
        ]),
        shares: 56,
        comments: [
            {
                userId: userIds[11],
                commentText:
                    "Dinner party hit. Shared the recipe, but the credit goes to you!",
            },
            {
                userId: userIds[10],
                commentText:
                    "Step-by-step guide saved my kitchen dignity. A culinary genius now!",
            },
            {
                userId: userIds[9],
                commentText:
                    "Boosted my kitchen confidence. A culinary wizard now!",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a38326725/spinach-puffs-recipe/
    {
        _id: "657b071e785978afdb673c6f",
        userId: userIds[23],
        firstName: "Travis",
        lastName: "Denzer",
        userPicturePath: "m6.jpg",
        occupation: "Industrial Production Manager",
        recipeTitle: "Spinach Puffs",
        recipeType: ["main", "appetiser"],
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
        spiceLevel: 0,
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
        tags: ["Spinach", "Appetiser", "Entree", "Delicious"],
        likes: new Map([
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
            [userIds[18], true],
            [userIds[19], true],
            [userIds[20], true],
        ]),
        recommendations: new Map([
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
        ]),
        saves: new Map([
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
        ]),
        shares: 55,
        comments: [
            {
                userId: userIds[13],
                commentText:
                    "Easy to make, and the flavor is just right. A pleasant start to any gathering.",
            },
            {
                userId: userIds[15],
                commentText:
                    "Tried it with a hint of garlic – a subtle twist that added a nice depth. Savory and enjoyable!",
            },
            {
                userId: userIds[14],
                commentText:
                    "Perfect for laid-back afternoons. A plate of these and good company – simple and satisfying!",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a45574717/frozen-hot-chocolate-martini-recipe/

    {
        _id: "657b071e785978afdb673c70",
        userId: userIds[18],
        firstName: "Valerie",
        lastName: "Osborn",
        userPicturePath: "f9.jpg",
        occupation: "OHS Auditor",
        recipeTitle: "Frozen Hot Chocolate Martini",
        recipeType: ["drink", "dessert"],
        picturePath: "frozenhotchocolatemartini-lead-65305104aa881.jpg",

        ingredients: [
            { qty: "4 c", element: "ice" },
            { qty: "4 oz", element: "Baileys" },
            { qty: "3 oz.", element: "vodka" },
            { qty: "1/2 c.", element: "hot chocolate mix" },
            {
                qty: "1 swirl",
                element: "Whipped cream, for serving",
            },
            {
                qty: "1 sprinkle",
                element: "chocolate shavings, for serving",
            },
        ],

        equipment: ["Martini Glass", "Grater", "Blender"],
        prepTime: "5 mins",
        cookTime: "5 mins",
        servings: 2,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a blender, blend ice, Baileys, vodka, and hot chocolate mix until smooth. Add more ice as needed to thicken as desired.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Pour into 2 glasses. Top with whipped cream and chocolate shavings.",
            },
        ],
        notes: "The frozen hot chocolate is simple and uses a premade hot chocolate mix, and everything gets blended together for a quick festive cocktail that would be a hit around the holidays.",
        tags: ["Chocolate", "Martini", "Dessert Cocktail", "Sweet"],
        likes: new Map([
            [userIds[17], true],
            [userIds[16], true],
            [userIds[15], true],
            [userIds[14], true],
            [userIds[13], true],
            [userIds[12], true],
            [userIds[11], true],
            [userIds[10], true],
        ]),
        recommendations: new Map([
            [userIds[17], true],
            [userIds[16], true],
            [userIds[15], true],
            [userIds[14], true],
            [userIds[13], true],
            [userIds[12], true],
            [userIds[11], true],
        ]),
        saves: new Map([
            [userIds[17], true],
            [userIds[16], true],
            [userIds[15], true],
            [userIds[14], true],
        ]),
        shares: 34,
        comments: [
            {
                userId: userIds[15],
                commentText:
                    "A sweet sip that's the perfect ending to any meal. Simple and satisfying!",
            },
            {
                userId: userIds[16],
                commentText:
                    "Not a fan of overly sweet drinks, but this won me over. A balanced and enjoyable sip.",
            },
            {
                userId: userIds[11],
                commentText: "Loved making this, thank you!",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a40087538/amaretto-sour-recipe/

    {
        _id: "657b071e785978afdb673c71",
        userId: userIds[10],
        firstName: "Molly",
        lastName: "Melton",
        userPicturePath: "f2.jpg",
        occupation: "Insurance Claims Clerk",
        recipeTitle: "Amaretto Sour",
        recipeType: ["drink"],
        picturePath: "amaretto-sour3-1654707964.jpg",

        ingredients: [
            { qty: "1/2 oz.", element: "large egg white, whisked" },
            { qty: "1 1/2 oz.", element: "bourbon" },
            { qty: "3/4 oz.", element: "amaretto liqueur" },
            { qty: "3/4 oz.", element: "fresh lemon juice" },
            { qty: "2 dashes", element: "Angostura bitters" },
            { qty: "2 cubes", element: "Ice" },
            { qty: "3", element: "Maraschino cherries, for garnish" },
            { qty: "1", element: "lemon peel, strip" },
        ],

        equipment: ["cocktail shaker", "rocks glass", "Cocktail Skewer"],
        prepTime: "5 mins",
        cookTime: "N/A",
        servings: 1,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a cocktail shaker, combine egg white, bourbon, amaretto, lemon juice, and bitters. Fill shaker with ice, cover, and vigorously shake until outside of shaker is very cold, about 30 seconds.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Strain cocktail into a rocks glass. Garnish with cherries and lemon peel.",
            },
        ],
        notes: "If you love a Whiskey Sour but wish it was a hint nuttier, this is the perfect, classic drink for you.",
        tags: ["Cocktail", "Amaretto", "Sour", "Refreshing"],
        likes: new Map([
            [userIds[18], true],
            [userIds[19], true],
            [userIds[20], true],
            [userIds[21], true],
            [userIds[22], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ]),
        recommendations: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[18], true],
        ]),
        saves: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
        ]),
        shares: 48,
        comments: [
            {
                userId: userIds[4],
                commentText:
                    "Elevate your cocktail game with this simple yet chic concoction. A touch of glamour in every glass.",
            },
            {
                userId: userIds[6],
                commentText:
                    "An easy sipper that feels like a breeze. Simple, smooth, and enjoyable.",
            },
            {
                userId: userIds[5],
                commentText:
                    "A burst of flavors! This cocktail is a pleasant surprise for your taste buds.",
            },
            {
                userId: userIds[7],
                commentText:
                    "Ideal for chill evenings. Just pour, sip, and enjoy the simplicity!",
            },
            {
                userId: userIds[18],
                commentText: "Uncomplicated and delightful.",
            },
            {
                userId: userIds[3],
                commentText:
                    "Boosted my mixing confidence. This cocktail is foolproof and enjoyable.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a45362568/best-chicken-stir-fry-recipe/
    {
        _id: "657b071e785978afdb673c72",
        userId: userIds[4],
        firstName: "Jane",
        lastName: "Doe",
        userPicturePath: "p5.jpeg",
        occupation: "Database Administrator",
        recipeTitle: "Chicken Stir-Fry",
        recipeType: ["main"],
        picturePath: "chicken-stir-fry-lead-6513039282dd4.jpg",

        ingredients: [
            { qty: "1/2 c.", element: "reduced-sodium soy sauce" },
            { qty: "2 tbsp.", element: "honey" },
            { qty: "2 tsp.", element: "toasted sesame oil" },
            { qty: "1 tbsp.", element: "canola oil" },
            {
                qty: "1",
                element: "head broccoli, cut into small florets",
            },
            {
                qty: "1",
                element: "bell pepper, seeds and ribs removed, chopped",
            },
            { qty: "2", element: "cloves garlic, finely chopped" },
            {
                qty: "1 lb.",
                element:
                    "boneless, skinless chicken breast, cut into 1 inch pieces",
            },
            { qty: "1/3 c.", element: "cashews" },
            { qty: "1 tsp", element: "black pepper, fresh ground" },
        ],

        equipment: [
            "small bowl",
            "whisk",
            "large skillet",
            "stove",
            "kitchen knife",
            "measuring spoons",
        ],
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: 4,
        spiceLevel: 1,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a small bowl, whisk soy sauce, honey, and sesame oil.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a large skillet over high heat, heat oil. Cook broccoli, bell pepper, and garlic, stirring frequently, until softened, about 5 minutes. Add chicken and cook, tossing occasionally, until golden brown and cooked through, about 8 minutes. Stir in cashews; season with pepper.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Pour sauce into skillet and bring to a simmer. Cook, stirring occasionally, until thickened, about 5 minutes.",
            },
        ],
        notes: "A stir fry is our go-to weeknight dinner when we just don’t have the energy to spend a long time in the kitchen or hit the grocery store—this recipe is no exception.",
        tags: ["Stir Fry", "Chicken", "Simple", "Delicious"],
        likes: new Map([
            [userIds[16], true],
            [userIds[18], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[11], true],
        ]),
        recommendations: new Map([
            [userIds[16], true],
            [userIds[18], true],
            [userIds[11], true],
        ]),
        saves: new Map([
            [userIds[11], true],
            [userIds[16], true],
            [userIds[18], true],
            [userIds[8], true],
        ]),
        shares: 19,
        comments: [
            {
                userId: userIds[16],
                commentText:
                    "Quick and easy for busy evenings. A stress-free way to enjoy a delectable dinner.",
            },
            {
                userId: userIds[18],
                commentText:
                    "Added a hint of spice – a tasty upgrade to an already fantastic dish.",
            },
            {
                userId: userIds[8],
                commentText:
                    "Savory and satisfying. The blend of flavors is simply wonderful.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a41802674/sweet-potato-gratin-recipe/
    {
        _id: "657b071e785978afdb673c73",
        userId: userIds[10],
        firstName: "Molly",
        lastName: "Melton",
        userPicturePath: "f2.jpg",
        occupation: "Insurance Claims Clerk",
        recipeTitle: "Sweet Potato Gratin",
        recipeType: ["main"],
        picturePath: "delish-202210-sweetpotatogratin-186-1666972220.jpg",

        ingredients: [
            {
                qty: "3 tbsp.",
                element:
                    "unsalted butter, softened, divided, plus more for foil",
            },
            { qty: "4 tsp.", element: "cloves garlic, chopped" },
            {
                qty: "2 tbsp.",
                element: "chopped fresh thyme leaves, plus more for serving",
            },
            { qty: "1 tbsp.", element: "chopped fresh sage leaves" },
            { qty: "1 tbsp.", element: "Kosher salt" },
            { qty: "1 cup", element: "heavy cream" },
            { qty: "3/4 c.", element: "whole milk" },
            { qty: "1/4 tsp.", element: "ground cinnamon" },
            { qty: "1/4 tsp.", element: "ground nutmeg" },
            { qty: "2", element: "large eggs" },
            { qty: "3/4 c.", element: "grated Parmesan, divided" },
            { qty: "1/4 tsp.", element: "black pepper, freshly ground" },
            {
                qty: "0.7 lb",
                element: "orange sweet potatoes, peeled and sliced",
            },
            {
                qty: "0.7 lb",
                element: "purple sweet potatoes, peeled & sliced",
            },
            {
                qty: "0.7 lb",
                element: "white sweet potatoes, peeled and sliced",
            },
            { qty: "2 2/3 cup", element: "Gruyère cheese, shredded" },
        ],

        equipment: [
            "oven",
            "medium bowl",
            "casserole dish",
            "small saucepan",
            "kitchen knife",
            "wooden spoon",
            "whisk",
            "stove",
            "measuring cups",
            "Tin Foil",
            "Peeler",
            "Grater",
        ],
        prepTime: "30 mins",
        cookTime: "1 hr 30 mins",
        servings: 12,
        spiceLevel: 1,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Preheat oven to 375°. Butter a 2-quart casserole or gratin dish with 1 tablespoon butter. In a small saucepan over medium heat, melt 2 tablespoons butter. When butter stops foaming, add garlic and cook, stirring, until fragrant, about 30 seconds. Add thyme, sage, and 1/2 teaspoon salt and cook, stirring occasionally, until heated through, about 30 seconds. Add cream, milk, cinnamon, and nutmeg. Bring to a simmer (do not let boil) and cook, stirring occasionally, until slightly thickened, about 5 minutes. Remove from heat.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a medium bowl, beat eggs. Transfer 1 cup cream mixture to a liquid measuring cup or bowl with a spout. Whisking constantly, slowly stream cream mixture into eggs a few tablespoons at a time until incorporated. Add egg mixture to saucepan with remaining cream mixture and whisk until combined. Whisk in 1/2 cup Parmesan.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Line bottom of prepared dish with a layer of potatoes, slightly overlapping slices; season with a pinch of salt. Top with 2/3 cup Gruyère and 2/3 cup cream mixture. Repeat 3 times, ending with cream mixture. Top final layer with remaining 1/4 cup Parmesan.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Butter a piece of foil and tightly cover dish. Bake gratin 30 minutes, uncover, and continue to bake until sides are bubbling and golden brown, about 30 minutes more. Top with thyme.",
            },
        ],
        notes: "Just like the OG potatoes au gratin, these sweet potatoes are layered with plenty of cheese and the signature herby cream sauce before being baked until golden brown and bubbly.",
        tags: ["Sweet Potato", "Oven Bake", "Gratin", "Cheesy"],
        likes: new Map([
            [userIds[13], true],
            [userIds[11], true],
            [userIds[15], true],
            [userIds[17], true],
            [userIds[18], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
        ]),
        recommendations: new Map([
            [userIds[11], true],
            [userIds[13], true],
            [userIds[15], true],
        ]),
        saves: new Map([
            [userIds[11], true],
            [userIds[13], true],
            [userIds[15], true],
            [userIds[17], true],
        ]),
        shares: 26,
        comments: [
            {
                userId: userIds[5],
                commentText: "Oooh this looks like something I should try!",
            },
            {
                userId: userIds[11],
                commentText:
                    "A nice blend of flavors! This side dish offers a delightful mix that complements the main course.",
            },
            {
                userId: userIds[13],
                commentText:
                    "Perfect for weeknight meals! This side dish is a quick and tasty addition to your dinner routine.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a41734055/crispy-gnocchi-and-mushrooms-recipe/
    {
        _id: "657b071e785978afdb673c74",
        userId: userIds[14],
        firstName: "Edwin",
        lastName: "Johnson",
        userPicturePath: "m1.jpg",
        occupation: "Correctional Officer",
        recipeTitle: "Crispy Gnocchi & Mushrooms",
        recipeType: ["main"],
        picturePath: "crispygnocchimushrooms-3-1669134579.jpeg",

        ingredients: [
            { qty: "4 tbsp.", element: "extra-virgin olive oil, divided" },
            { qty: "8 oz.", element: "baby bella mushrooms, sliced" },
            { qty: "1", element: "small shallot, finely chopped" },
            { qty: "2", element: "cloves garlic, minced" },
            { qty: "1 tsp", element: "Kosher salt" },
            { qty: "1", element: "packet of gnocchi" },
            { qty: "2 tbsp.", element: "unsalted butter" },
            { qty: "1 pinch", element: "red pepper flakes, crushed" },
            { qty: "1 sprinkle", element: "Grated Parmesan" },
        ],

        equipment: [
            "large skillet",
            "stove",
            "medium bowl",
            "kitchen knife",
            "wooden spoon",
        ],
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a large skillet over medium-high heat, heat 2 tablespoons oil. Add mushrooms and cook, stirring occasionally, until golden brown, about 8 minutes. Add shallot and garlic and cook, stirring occasionally, until shallot is softened, about 3 minutes more; season with salt. Transfer mushroom mixture to a medium bowl.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In same skillet over medium-high heat, heat remaining 2 tablespoons oil. Add gnocchi in an even layer and cook, undisturbed, until golden brown on the bottom, about 5 minutes. Stir and continue to cook, stirring occasionally, until gnocchi is cooked through, about 2 minutes more. Add butter and return mushrooms to skillet. Cook, stirring, until butter is melted, about 2 minutes. Stir in red pepper flakes; season with salt.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Divide gnocchi mixture among plates or shallow bowls. Top with Parmesan.",
            },
        ],
        notes: "Gnocchi will always hit the spot for a quick, delicious meal. It really couldn’t be simpler. It’s highly advised to cook the mushrooms 'til golden brown perfection. Without that step, you’re missing half the pleasure of this dish. ",
        tags: ["Gnocchi", "Baked", "Cripsy", "Mushrooms"],
        likes: new Map([
            [userIds[1], true],
            [userIds[21], true],
            [userIds[15], true],
            [userIds[6], true],
            [userIds[7], true],
        ]),
        recommendations: new Map([
            [userIds[7], true],
            [userIds[6], true],
            [userIds[15], true],
        ]),
        saves: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[15], true],
        ]),
        shares: 51,
        comments: [
            {
                userId: userIds[7],
                commentText:
                    "Perfect for cozy dinners. Comforting and satisfying.",
            },
            {
                userId: userIds[6],
                commentText:
                    "Classic combo that consistently wows. Timeless and welcomed.",
            },
            {
                userId: userIds[15],
                commentText:
                    "Easy to make, with amazing textures. A winner on the plate.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a38015076/magic-cookie-bars-recipe/
    {
        _id: "657b071e785978afdb673c75",
        userId: userIds[11],
        firstName: "Kur",
        lastName: "Hintz",
        userPicturePath: "f3.jpg",
        occupation: "Surveying & Mapping Technician",
        recipeTitle: "Magic Cookie Bars",
        recipeType: ["dessert"],
        picturePath: "magicbars-1643145825.jpg",

        ingredients: [
            { qty: "18 ", element: "graham crackers, crushed" },
            { qty: "6 tbsp.", element: "unsalted butter, melted" },
            { qty: "1/4 c.", element: "sugar" },
            { qty: "14 oz", element: "condensed milk" },
            { qty: "1 1/2 c.", element: "chocolate chips" },
            { qty: "1 1/2 c.", element: "pecans, chopped" },
            { qty: "2 c.", element: "coconut flakes, unsweetened" },
        ],

        equipment: [
            "oven",
            "baking dish",
            "kitchen knife",
            "medium bowl",
            "parchment paper",
            "wooden spoon",
            "cooling rack",
            "measuring cups",
        ],
        prepTime: "5 mins",
        cookTime: "35 mins",
        servings: 15,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Preheat the oven to 350 ºF. Grease a 9 x 9” baking dish with cooking spray, then line dish with parchment paper up and over the sides, with a slight overhang. Grease the parchment again.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a medium bowl, mix the graham crackers, butter and sugar until the mixture resembles wet sand. Press the graham cracker mixture into the bottom of the prepared baking dish.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "In an even layer, drizzle condensed milk over the crust, then top with half the chocolate chips and half the nuts. Add all of the coconut, then top with the remaining chips and nuts.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Transfer the baking dish to the oven, and bake until the chocolate has melted and the crust has browned, 25 to 30 minutes. Let cool. Cut into squares and serve.",
            },
        ],
        notes: "We have tried all sorts of chocolate chips from dark to peanut butter as well as a whole slew of nuts, like pistachios and walnuts. We encourage you to find your ideal combinations to discover the true magic of these bars.",
        tags: ["Gooey", "Chocolate", "Dessert", "Crunchy"],
        likes: new Map([
            [userIds[24], true],
            [userIds[22], true],
            [userIds[20], true],
            [userIds[18], true],
            [userIds[16], true],
            [userIds[14], true],
            [userIds[12], true],
            [userIds[10], true],
            [userIds[8], true],
            [userIds[6], true],
            [userIds[4], true],
            [userIds[2], true],
        ]),
        recommendations: new Map([
            [userIds[24], true],
            [userIds[22], true],
            [userIds[20], true],
            [userIds[18], true],
            [userIds[16], true],
        ]),
        saves: new Map([
            [userIds[2], true],
            [userIds[4], true],
            [userIds[6], true],
            [userIds[8], true],
            [userIds[10], true],
            [userIds[12], true],
            [userIds[14], true],
            [userIds[16], true],
            [userIds[18], true],
            [userIds[20], true],
            [userIds[22], true],
        ]),
        shares: 53,
        comments: [
            {
                userId: userIds[2],
                commentText: "These look increidble! I can't wait to try them!",
            },
            {
                userId: userIds[24],
                commentText:
                    "Made these for a school bake-off, and they won first place. Pure magic in every delicious square!",
            },
            {
                userId: userIds[22],
                commentText:
                    "Tried it with an extra layer of chocolate – a delightful surprise that makes these bars irresistible.",
            },
            {
                userId: userIds[4],
                commentText:
                    "Saved this recipe for later. Looks like a perfect treat for the kids on the weekend.",
            },
            {
                userId: userIds[6],
                commentText:
                    "The textures look beautiful together. My mouth is melting looking at these.",
            },
            {
                userId: userIds[8],
                commentText: "Looks like a great and quick treat.",
            },
            {
                userId: userIds[16],
                commentText:
                    "An effortless creation that brings joy to dessert time. Pure magic in simplicity.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a41123932/tiramisu-cookie-cups-recipe/
    {
        _id: "657b071e785978afdb673c76",
        userId: userIds[18],
        firstName: "Valerie",
        lastName: "Osborn",
        userPicturePath: "f9.jpg",
        occupation: "OHS Auditor",
        recipeTitle: "Tiramisu Cookie Cups",
        recipeType: ["dessert"],
        picturePath:
            "220919-delish-quarterly-cookies-tiramisu-cookie-cups-0148-eb-1-1664305909.jpg",

        ingredients: [
            { qty: "1 c.", element: "unsalted butter, softened" },
            { qty: "1 c.", element: "packed brown sugar" },
            { qty: "1/2 c.", element: "granulated sugar" },
            { qty: "2", element: "large eggs" },
            { qty: "1 tsp.", element: "pure vanilla extract" },
            { qty: "1 c.", element: "all-purpose flour" },
            { qty: "2 tsp.", element: "espresso powder" },
            { qty: "1 tsp.", element: "baking powder" },
            { qty: "1 tsp.", element: "kosher salt" },
            { qty: "1 c.", element: "espresso chips" },
            { qty: "1/2 c.", element: "semisweet chocolate chips" },
            { qty: "1 1/2 c.", element: "heavy whipping cream" },
            { qty: "8-oz.", element: "mascarpone" },
            { qty: "1/4 c.", element: "coffee-flavored liqueur" },
            { qty: "2 tbsp.", element: "powdered sugar" },
            { qty: "1 tsp.", element: "pure vanilla extract" },
            { qty: "1/4 tsp", element: "kosher salt" },
            { qty: "1/2 tsp", element: "Cocoa powder, for dusting" },
        ],

        equipment: [
            "oven",
            "large bowl",
            "12 cup muffin tin",
            "stand mixer",
            "medium bowl",
            "whisk",
            "spatula",
            "measuring cups",
            "shot glass",
            "wire rack",
        ],
        prepTime: "45 mins",
        cookTime: "15 mins",
        servings: 24,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Preheat oven to 350° and grease 2 standard 12-cup muffin tins with butter. In the large bowl of a stand mixer fitted with the paddle attachment, cream butter, brown sugar, and granulated sugar until smooth, airy, and slightly paler in color, about 4 minutes. Add eggs and vanilla and continue to beat until light and fluffy, about 3 minutes more.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a medium bowl, whisk flour, espresso powder, baking powder, and salt. Gradually add dry ingredients to butter mixture and beat until just combined, then fold in espresso and chocolate chips.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Place 2 tablespoons dough in each prepared muffin cup. Using your finger, create a well in the center of dough. Bake cookies until slightly browned, about 15 minutes.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "While cookies are still warm, grease a shot glass or round spice jar with butter. Press into the center of each cookie to create a deeper well. Let cool 15 minutes in pan, then transfer to a wire rack and let cool completely.",
            },
            {
                stepNum: 5,
                stepMethod:
                    "In the large bowl of stand mixer fitted with the whisk attachment, beat cream, mascarpone, liqueur, powdered sugar, vanilla, and salt until soft peaks form, 2 to 3 minutes.",
            },
            {
                stepNum: 6,
                stepMethod:
                    "Spoon mascarpone filling into well of each cookie, then cover tops with remaining filling. Generously dust with cocoa powder.",
            },
        ],
        notes: "A classic taste with a delicate texture for a beautiful sweet dessert.",
        tags: ["Tiramisu", "Cookie", "Coffee", "Rich"],
        likes: new Map([
            [userIds[10], true],
            [userIds[22], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[15], true],
            [userIds[5], true],
            [userIds[19], true],
            [userIds[16], true],
            [userIds[21], true],
        ]),
        recommendations: new Map([
            [userIds[21], true],
            [userIds[22], true],
            [userIds[2], true],
        ]),
        saves: new Map([
            [userIds[3], true],
            [userIds[15], true],
            [userIds[21], true],
            [userIds[22], true],
            [userIds[2], true],
            [userIds[19], true],
            [userIds[10], true],
        ]),
        shares: 35,
        comments: [
            {
                userId: userIds[21],
                commentText:
                    "A dessert presentation that's both inviting and scrumptious. A sweet symphony of tiramisu goodness.",
            },
            {
                userId: userIds[22],
                commentText:
                    "Irresistibly charming. These cookie cups put a twist on classic Tiramisu.",
            },
            {
                userId: userIds[2],
                commentText:
                    "Tea party star! These cups cast a sweet spell with Tiramisu magic.",
            },
            {
                userId: userIds[19],
                commentText: "Guess I'm having a cheat day this weekend.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a30121084/brown-sugar-old-fashioned-recipe/
    {
        _id: "657b071e785978afdb673c77",
        userId: userIds[16],
        firstName: "Annika",
        lastName: "Pierce",
        userPicturePath: "f7.jpg",
        occupation: "Insurance Appraiser",
        recipeTitle: "Brown Sugar Old Fashioned",
        recipeType: ["drink"],
        picturePath:
            "20191204-brown-sugar-old-fashioned-delish-ehg-5689-1585680228.jpg",

        ingredients: [
            { qty: "1 tsp.", element: "packed brown sugar" },
            { qty: "1 tsp.", element: "water" },
            { qty: "2 dashes", element: "Angostura bitters" },
            { qty: "2 oz.", element: "bourbon" },
            { qty: "1", element: "Orange peel, for garnish" },
            { qty: "1", element: "Cinnamon stick, for garnish" },
            { qty: "3 cubes", element: "ice" },
        ],

        equipment: ["Muddler", "Glass", "Stirring Rod"],
        prepTime: "10 mins",
        cookTime: "N/A",
        servings: 1,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Add sugar, water, and bitters to glass. Muddle until sugar is dissolved. Add bourbon and ice and stir to combine. ",
            },
            {
                stepNum: 2,
                stepMethod: "Garnish with an orange peel and cinnamon stick.",
            },
        ],
        notes: "A little brown sugar makes this classic cocktail extra warm cozy. The brown sugar gives it a hint of caramel and makes this drink feel anything but old fashioned. It's the only way we like to make it now. ",
        tags: ["Old Fashioned", "Aromatic", "Classic", "Cocktail"],
        likes: new Map([
            [userIds[17], true],
            [userIds[15], true],
            [userIds[14], true],
            [userIds[18], true],
            [userIds[13], true],
            [userIds[19], true],
            [userIds[20], true],
            [userIds[12], true],
            [userIds[11], true],
            [userIds[10], true],
        ]),
        recommendations: new Map([
            [userIds[17], true],
            [userIds[13], true],
            [userIds[20], true],
            [userIds[11], true],
            [userIds[19], true],
            [userIds[10], true],
            [userIds[14], true],
        ]),
        saves: new Map([
            [userIds[17], true],
            [userIds[18], true],
            [userIds[19], true],
            [userIds[13], true],
            [userIds[20], true],
            [userIds[11], true],
            [userIds[19], true],
            [userIds[10], true],
            [userIds[14], true],
        ]),
        shares: 37,
        comments: [
            {
                userId: userIds[17],
                commentText:
                    "No fuss, just flavor – enjoy the delight in every sip.",
            },
            {
                userId: userIds[13],
                commentText:
                    "Classic cocktail charm with a sweet touch. Here's to cheers!",
            },
            {
                userId: userIds[11],
                commentText:
                    "Experience the perfect blend of simplicity and deliciousness. Highly recommend this recipe.",
            },
            {
                userId: userIds[19],
                commentText:
                    "Upgrade your go-to cocktail with the warmth of brown sugar. Cheers!",
            },
            {
                userId: userIds[18],
                commentText:
                    "Seems really easy to make. I'm going to try this a try over the weekend.",
            },
            {
                userId: userIds[14],
                commentText:
                    "Embrace a classic with a sweet twist – this cocktail is a winner.",
            },
        ],
    },

    //--------------------------------------//
    // https://www.delish.com/cooking/recipe-ideas/a40656644/tom-collins-recipe/

    {
        _id: "657b071e785978afdb673c78",
        userId: userIds[1],
        firstName: "Steve",
        lastName: "Ralph",
        userPicturePath: "p3.jpeg",
        occupation: "Equipment Operator",
        recipeTitle: "Tom Collins",
        recipeType: ["drink"],
        picturePath: "220726-delish-seo-jff-tom-collins-0948-eb-1659719064.jpg",

        ingredients: [
            { qty: "2 oz.", element: "London Dry gin" },
            { qty: "1 oz.", element: "fresh lemon juice" },
            { qty: "1 oz.", element: "simple syrup" },
            { qty: "3 oz.", element: "seltzer water" },
            { qty: "2", element: "cocktail cherries" },
            { qty: "1 slice", element: "lemon, for serving" },
            { qty: "1 cup", element: "Ice Cubes" },
        ],

        equipment: [
            "cocktail shaker",
            "Collins glass",
            "kitchen knife",
            "cocktail skewer",
        ],
        prepTime: "5 mins",
        cookTime: "N/A",
        servings: 1,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Fill a cocktail shaker with ice. Add gin, lemon juice, and simple syrup and vigorously shake until outside of shaker is frosty, about 20 seconds.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Pour into an ice-filled Collins glass. Top off with seltzer water. Garnish with cherries and a lemon slice.",
            },
        ],
        notes: "This fizzy cocktail is as old as it is iconic, having made its first appearance in print in 1876 in the Bar-Tender’s Guide by famed father of American mixology Jerry Thomas. It hasn’t changed much since its inception, meaning that it's probably perfect the way it is.  ",
        tags: ["Classic", "Cocktail", "Refreshing", "Summer Time"],
        likes: new Map([
            [userIds[10], true],
            [userIds[9], true],
            [userIds[8], true],
            [userIds[7], true],
            [userIds[6], true],
            [userIds[5], true],
            [userIds[4], true],
            [userIds[3], true],
            [userIds[2], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
        ]),
        recommendations: new Map([
            [userIds[3], true],
            [userIds[2], true],
            [userIds[1], true],
            [userIds[6], true],
            [userIds[5], true],
        ]),
        saves: new Map([
            [userIds[3], true],
            [userIds[2], true],
            [userIds[1], true],
            [userIds[6], true],
            [userIds[5], true],
            [userIds[4], true],
        ]),
        shares: 23,
        comments: [
            {
                userId: userIds[3],
                commentText:
                    "Simple, sophisticated, and utterly refreshing – this recipe hits the spot.",
            },
            {
                userId: userIds[10],
                commentText:
                    "A Tom Collins seems like the perfect way to unwind. Excited to try it out!",
            },
            {
                userId: userIds[6],
                commentText:
                    "To anyone thinking about making the Tom Collins – do it! It's an absolute crowd-pleaser.",
            },
            {
                userId: userIds[5],
                commentText:
                    "If you haven't tried the Tom Collins recipe yet, you're missing out. A true classic with a modern twist!",
            },
            {
                userId: userIds[14],
                commentText:
                    "I've got the ingredients for a Tom Collins; just need the motivation to try it. Anyone a fan?",
            },
            {
                userId: userIds[13],
                commentText:
                    "Ready to step up my cocktail game with this one. Any mixing advice for a newbie?",
            },
        ],
    },
    // ---------------------------------------
    // --------  New Recipes Jan 2024 --------
    // ---------------------------------------

    // Best Mashed Potatoes
    // https://www.delish.com/cooking/recipe-ideas/a50630/perfect-mashed-potatoes-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[2],
        firstName: "Carolyn",
        lastName: "McKinney",
        userPicturePath: "p4.jpeg",
        occupation: "Chemical Engineer",
        recipeTitle: "Best Mashed Potatoes",
        picturePath: "mashed-potatoes-secondary-64bed551364af.jpg",

        ingredients: [
            {
                qty: "3 lb.",
                element: "mixed potatoes, peeled & cut into pieces",
            },
            { qty: "1/2 cup", element: "whole milk" },
            { qty: "3/4 cup", element: "unsalted butter" },
            { qty: "2 tbsp", element: "unsalted butter" },
            { qty: "1/2 cup", element: "sour cream, room temp" },
            { qty: "1/4 tsp", element: "Freshly ground black pepper" },
            { qty: "1 pinch", element: "Kosher salt" },
            { qty: "1 sprig", element: "fresh parsley, chopped" },
        ],

        equipment: [
            "Kitchen Knife",
            "Large Pot",
            "Wooden Stirer",
            "Ricer",
            "Small Saucepan",
            "Peeler",
            "Collander",
        ],
        prepTime: "5 mins",
        cookTime: "25 mins",
        servings: 8,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "In a large pot, cover potatoes with water and add a generous pinch of salt. Bring to a boil and cook until softened, 15 to 20 minutes.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Drain and return potatoes to pot. Using a potato masher or ricer, mash potatoes until smooth.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "While potatoes cook, in a small saucepan over medium-low heat, cook milk and 3/4 cup butter, stirring occasionally, until butter is melted and mixture is warmed through.",
            },
            {
                stepNum: 4,
                stepMethod:
                    "Pour milk mixture over potatoes and stir until combined and creamy. Add sour cream and stir until combined; generously season with salt and pepper. ",
            },
            {
                stepNum: 5,
                stepMethod:
                    "Transfer potatoes to a serving bowl. Top with remaining 2 tablespoons butter; season with more pepper. Top with parsley.",
            },
        ],
        notes: "This is a comfort food that deserves to be celebrated all year long. Russet potatoes are the classic go-to for mashed potatoes, but you don't have to stick to those alone. I like using a mix of russet and Yukon golds, which have a super-creamy texture. Russets cook slightly faster, are starchier and fluffier, and taste less sweet; Yukons are a little more moist, a little waxier, and they hold their shape better. Put 'em together, and you’ve got the perfect combo.",
        tags: ["Potatoes", "Creamy", "Comforting", "Classic"],
        likes: new Map([
            [userIds[12], true],
            [userIds[24], true],
            [userIds[5], true],
            [userIds[17], true],
            [userIds[2], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[23], true],
            [userIds[12], true],
            [userIds[1], true],
            [userIds[3], true],
            [userIds[15], true],
        ]),
        recommendations: new Map([
            [userIds[2], true],
            [userIds[17], true],
            [userIds[15], true],
            [userIds[23], true],
            [userIds[7], true],
        ]),
        saves: new Map([
            [userIds[12], true],
            [userIds[17], true],
            [userIds[2], true],
            [userIds[15], true],
        ]),
        shares: 55,
        comments: [
            {
                userId: userIds[2],
                commentText: "Delicious! Will make again.",
            },
            {
                userId: userIds[17],
                commentText: "Simple ingredients, big flavor.",
            },
            {
                userId: userIds[15],
                commentText:
                    "My picky eater even asked for seconds! That's how I know it's a hit.",
            },
        ],
    },

    // Mai Tai
    // https://www.delish.com/cooking/recipe-ideas/a43402365/classic-mai-tai-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: "Lina",
        lastName: "Prichard",
        userPicturePath: "p6.jpeg",
        occupation: "Processing Machine Operator",
        recipeTitle: "Mai Tai Cocktail",
        picturePath: "delish-230412-maitai-0733-ns-secondary-644ae01ace89e.jpg",

        ingredients: [
            { qty: "1 oz.", element: "fresh lime juice" },
            { qty: "1 oz.", element: "light rum" },
            {
                qty: "3/4 oz.",
                element: "dry orange Curaçao, Cointreau, or triple sec",
            },
            { qty: "3/4 oz.", element: "orgeat syrup" },
            { qty: "1/2 oz.", element: "dark rum" },
            { qty: "3", element: "Fresh mint leaves" },
            { qty: "1", element: "lime wedge" },
            { qty: "1", element: "Maraschino cherry" },
            { qty: "1 cup", element: "Ice" },
        ],

        equipment: ["cocktail shaker", "rocks glass"],
        prepTime: "5",
        cookTime: "N/A",
        servings: 1,
        spiceLevel: 0,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Fill a cocktail shaker with ice. Add lime juice, light rum, Curaçao, and syrup and vigorously shake until outside of shaker is very frosty, about 20 seconds.",
            },
            {
                stepNum: 2,
                stepMethod:
                    "Strain into an ice-filled rocks glass. Slowly pour dark rum on top to float. Garnish with mint, a lime wheel, and a cherry.",
            },
        ],
        notes: "One sip of the refreshing and fruity Mai Tai cocktail, and you'll be instantly transported to a sunny, sandy beach. The classic Mai Tai has evolved to include other tropical flavors like pineapple juice, orange juice, or a splash of grenadine, but a true classic Mai Tai keeps it simple with a shaken blend of light rum, lime juice, dry Curaçao, and orgeat syrup over ice. Like any good tiki drink, these babies are strong and sneaky, so you won’t need much to get the party started. Serve these at a tiki-themed backyard bash, weekend brunch, or when you had an extra long day at work.",
        tags: ["Cocktail", "Fruity", "Sweet", "Mai Tai"],
        likes: new Map([
            [userIds[14], true],
            [userIds[15], true],
            [userIds[17], true],
            [userIds[18], true],
            [userIds[20], true],
            [userIds[21], true],
            [userIds[22], true],
        ]),
        recommendations: new Map([
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
            [userIds[22], true],
        ]),
        saves: new Map([
            [userIds[17], true],
            [userIds[18], true],
            [userIds[22], true],
            [userIds[14], true],
        ]),
        shares: 23,
        comments: [
            {
                userId: userIds[21],
                commentText: "Refreshing! Perfect thirst quencher",
            },
            {
                userId: userIds[22],
                commentText: "Great for a summer day.",
            },
            {
                userId: userIds[23],
                commentText: "A classic cocktail, super refreshing!",
            },
        ],
    },

    // Breakfast Tostadas
    // https://www.delish.com/cooking/recipe-ideas/a40560590/breakfast-tostadas-recipe/
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: "Harvey",
        lastName: "Dunn",
        userPicturePath: "p7.jpeg",
        occupation: "Journalist",
        recipeTitle: "Breakfast Tostadas",
        picturePath: "breakfast-tostadas-8-1658355731.jpeg",

        ingredients: [
            { qty: "6", element: "small corn tortillas" },
            { qty: "2 tbsp.", element: "extra-virgin olive oil, divided" },
            { qty: "1/2 tsp.", element: "Kosher salt" },
            { qty: "400g", element: "black beans, rinsed & drained" },
            { qty: "3 tbsp.", element: "water" },
            { qty: "1 c.", element: "shredded pepper jack cheese" },
            { qty: "1", element: "avocado, halved and pitted" },
            { qty: "1/2", element: "lime, juice" },
            { qty: "2 tbsp.", element: "fresh cilantro, chopped" },
            { qty: "1/4 tsp", element: "ground black pepper" },
            { qty: "6", element: "large eggs" },
            { qty: "3 slices", element: "Pickled jalapeños" },
            { qty: "3 slices", element: "pickled red onions" },
            { qty: "1 tbsp.", element: "salsa" },
        ],

        equipment: [
            "small bowl",
            "fork",
            "baking sheet",
            "oven",
            "small bowl",
            "medium fry pan",
        ],
        prepTime: "10 mins",
        cookTime: "30 mins",
        servings: 6,
        spiceLevel: 3,
        steps: [
            {
                stepNum: 1,
                stepMethod:
                    "Preheat oven to 400°. On a large baking sheet, arrange tortillas in a single layer. Lightly brush both sides with 1 tablespoon oil; season with salt. Bake until golden and crispy, about 15 minutes. ",
            },
            {
                stepNum: 2,
                stepMethod:
                    "In a small bowl, mash beans with a fork until mostly smooth but with some chunks remaining. Stir in water.",
            },
            {
                stepNum: 3,
                stepMethod:
                    "Divide beans among tortillas and spread in an even layer. Top with cheese. Continue to bake until cheese is melty, about 5 minutes more. ",
            },
            {
                stepNum: 4,
                stepMethod:
                    "In another small bowl, smash avocado until smooth. Stir in lime juice and cilantro; season with salt and pepper.",
            },
            {
                stepNum: 5,
                stepMethod:
                    "In a medium nonstick skillet over medium heat, heat remaining 1 tablespoon oil. Working in batches, crack eggs into pan and cook until whites are set, about 3 minutes; season with salt and pepper. ",
            },
            {
                stepNum: 6,
                stepMethod:
                    "Top tortillas with smashed avocado, 1 egg, jalapeños, onions, and salsa.",
            },
        ],
        notes: "I love a simple but crazy delicious breakfast, and these tostadas are just that. I make fresh tostadas from corn tortillas, which always taste better to me and take very little effort, but you can always buy tostadas instead and save yourself a step in the morning. The toppings on these tostadas are my ideal toppings, but you can change them up however you’d like. Cook an overeasy egg instead or top with some sour cream. The best part is that these can be different every time you make them and still be so very good.",
        tags: ["Breakfast", "Eggs", "Tostadas", "Vegetarian"],
        likes: new Map([
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[20], true],
            [userIds[21], true],
            [userIds[22], true],
            [userIds[23], true],
            [userIds[24], true],
        ]),
        recommendations: new Map([
            [userIds[20], true],
            [userIds[21], true],
            [userIds[22], true],
            [userIds[24], true],
        ]),
        saves: new Map([
            [userIds[21], true],
            [userIds[22], true],
            [userIds[23], true],
            [userIds[24], true],
        ]),
        shares: 34,
        comments: [
            {
                userId: userIds[2],
                commentText:
                    "Surprisingly simple to whip up. Made for a great start in the morning.",
            },
            {
                userId: userIds[20],
                commentText: "Yummo! Perfect start to my day.",
            },
            {
                userId: userIds[21],
                commentText: "Great vegetarian option!",
            },
        ],
    },
];

// //--------------------------------------//
// // ------------ TEMPLATE ---------------//
// //--------------------------------------//

// {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[XXXXXXXXXXXX],
//     firstName: "XXXXXXXXXXXX",
//     lastName: "XXXXXXXXXXXX",
//     userPicturePath: "XXXXXXXXXXXX",
//     occupation: "XXXXXXXXXXXX"
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
// ];

// -------------------------------- //
// -------- RECIPES TO ADD -------- //
// -------------------------------- //

/*
MAIN
https://www.delish.com/cooking/recipe-ideas/a41886262/slow-cooker-creamy-lemon-herb-chicken-recipe/
https://www.delish.com/cooking/recipe-ideas/recipes/a46066/slow-cooker-garlic-parmesan-chicken-recipe/
https://www.delish.com/cooking/recipe-ideas/a55484/slow-cooker-rotisserie-chicken-recipe/
https://www.delish.com/cooking/recipe-ideas/recipes/a56797/crock-pot-chicken-enchilada-soup-recipe/
https://www.delish.com/cooking/recipe-ideas/a29504585/slow-cooker-pork-shoulder-recipe/
https://www.delish.com/cooking/recipe-ideas/a30519954/crockpot-salsa-chicken-recipe/
https://www.delish.com/cooking/recipe-ideas/a40671749/lobster-ravioli-recipe/
https://www.delish.com/cooking/recipe-ideas/a40179920/nashville-hot-fish-and-chips-recipe/
https://www.delish.com/cooking/recipe-ideas/a39588373/baked-scallops-recipe/
https://www.delish.com/cooking/recipe-ideas/a37418736/sheet-pan-chicken-thighs-recipe/
https://www.delish.com/cooking/a22691438/bbq-chicken-nachos-recipe/
https://www.delish.com/cooking/recipe-ideas/recipes/a55760/healthy-chicken-casserole-recipe/


LUNCH
https://www.delish.com/cooking/recipe-ideas/a43148339/copycat-sweetgreen-harvest-bowl-recipe/
https://www.delish.com/cooking/recipe-ideas/a19624080/blackened-shrimp-bowls-recipe/

DRINKS
https://www.delish.com/cooking/recipe-ideas/recipes/a53458/boozy-sour-watermelon-slushies-recipe/
https://www.delish.com/cooking/recipe-ideas/a31289978/perfect-cosmopolitan-cocktail-recipe/
https://www.delish.com/cooking/recipe-ideas/recipes/a4298/strawberry-daiquiri-frozen-drinks/
https://www.delish.com/cooking/recipe-ideas/a42005570/peppermint-white-russian-recipe/
https://www.delish.com/cooking/recipe-ideas/a35686657/nutty-irishman-recipe/

SIDE
https://www.delish.com/cooking/recipe-ideas/recipes/a57237/smashed-brussels-sprouts-recipe/
https://www.delish.com/cooking/recipe-ideas/recipes/a50228/holiday-roasted-vegetables-recipe/

https://www.delish.com/cooking/recipe-ideas/recipes/a53359/broccoli-salad-recipe/


DESSERT
https://www.delish.com/cooking/recipe-ideas/a41093925/m-and-m-cookie-bar-recipe/

BREAKFAST


*/
