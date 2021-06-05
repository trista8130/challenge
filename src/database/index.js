"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = async () => {
    const allUsers = await getUsers();
    const ageOfList = _.pickBy(db.itemsOfUserByUsername, (list, name) => {
      return list.includes(item);
    });
    const nameOfList = _.map(ageOfList, (v, k) => k);
    const ageFilter = allUsers.reduce(
      (a, o) => (nameOfList.includes(o.username) && a.push(o.age), a),
      []
    );
    const countObj = new Object();
    ageFilter.forEach((i) => {
      if (!Object.keys(countObj).includes(i.toString())) {
        countObj[i] = 1;
      } else {
        countObj[i] += 1;
      }
    });
    return Object.keys(countObj).map((v) => {
      return { age: v, count: countObj[v] };
    });
  };

  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
