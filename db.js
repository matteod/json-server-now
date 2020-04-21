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

for (let i = 1; i < 31; i++) {
  graphData.push({
    date: moment(currentDate, 'YYYY-MM-DD').businessSubtract(i)._d.format('YYYY-MM-DD'),
    value: Faker.finance.amount(5500,6200),
    time: "14:33"
  });
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
    actualValue: [
      {
        name: "PREZZO BASE LATTONERIA - Ultimo valore",
        price: Faker.finance.amount(5500,6200),
        date: moment(currentDate, 'YYYY-MM-DD'),
        time: "08.34",
        lastUpdateUser: "Matteo Domenici",
        trend: "status-ok"
      }
    ],
    graph_data: graphData
  };
};
