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

const numberOfUsers = userIds.length;
console.log("NUMBER OF USERS:", numberOfUsers);

let userArray = [];

for (let i = 0; i < numberOfUsers; i++) {
    let numberOfUserFriends;
    numberOfUserFriends = Math.floor(Math.random() * userIds.length) + 1;
    console.log(
        `${numberOfUserFriends} Number of Friends:`,
        numberOfUserFriends
    );
    userArray.push(numberOfUserFriends);
    console.log("UA:", userArray);
}

// console.log("ARR: ", numberOfUserFriends);
// console.log(numberOfUserFriends[1]);
