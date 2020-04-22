/* eslint-disable import/no-extraneous-dependencies */
var Faker = require("faker");
var moment = require('moment-business-days');
Faker.locale = "it";

moment.updateLocale('it', {
  workingWeekdays: [1, 2, 3, 4, 5],
  prevBusinessDayLimit: 31
});

const currentDate = new Date();
let graphData = [];
for (let i = 30; i >= 1; i --) {
  graphData.push({
    date: moment(currentDate, 'YYYY-MM-DD').businessSubtract(i).format('YYYY-MM-DD'),
    value: Faker.finance.amount(5700,6100),
    time: randomTime()
  });
}

let actualValue = [{
  name: "PREZZO BASE LATTONERIA - Ultimo valore",
  price: Faker.finance.amount(5500, 6200),
  date: moment(currentDate, 'YYYY-MM-DD'),
  time: randomTime(),
  lastUpdateUser: "Matteo Domenici",
  trend: "status-ok"
}];

if (parseFloat(actualValue[0].price) < parseFloat(graphData[30].value)){
  actualValue[0].trend = "status-error";
}

module.exports = () => {
  return {
    posts: [
      {
        id: 1,
        state: "active",
        date: moment().format("DD-MM-YYYY"),
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: Faker.image.imageUrl()
      },
      {
        id: 2,
        state: "draft",
        date: moment().subtract(1, "days").format("DD-MM-YYYY"),
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: null
      },
      {
        id: 3,
        state: "draft",
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: null
      },
      {
        id: 4,
        state: "draft",
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: null
      },
      {
        id: 5,
        state: "archived",
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: Faker.image.imageUrl()
      },
      {
        id: 6,
        state: "archived",
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: Faker.image.imageUrl()
      },
      {
        id: 123,
        state: "archived",
        title: Faker.lorem.words(),
        description: Faker.lorem.paragraphs(),
        image: Faker.image.imageUrl()
      }
    ],
    actualValue: actualValue,
    graph_data: graphData
  };
};

function randomTime() {
  let minutes = (Math.floor(Math.random() * (59 - 1 + 1)) + 1).toString();
  let hours = (Math.floor(Math.random() * (20 - 6 + 1)) + 6).toString();
  if (parseInt(hours) < 10)
    hours = "0" + hours;
  if (parseInt(minutes) < 10)
    minutes = "0" + minutes;

  return hours + ':' + minutes;

}
