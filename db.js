/* eslint-disable import/no-extraneous-dependencies */
var Faker = require("faker");
var moment = require('moment');
Faker.locale = "it";

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
        price: 5530.00,
        date: moment().format("YYYY-MM-DD"),
        time: "08.34",
        lastUpdateUser: "Matteo Domenici",
        trend: "status-ok"
      }
    ],
    graph_data: [
      {
        date: moment().subtract(14, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(13, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(12, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(11, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },{
        date: moment().subtract(10, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },{
        date: moment().subtract(9, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },{
        date: moment().subtract(8, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(7, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(6, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(5, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(4, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(3, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(2, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().subtract(1, "days").format("YYYY-MM-DD"),
        value: Faker.finance.amount(5500,6200),
        time: "14:33"
      },
      {
        date: moment().format("YYYY-MM-DD"),
        value: Faker.commerce.price(5500,6200),
        time: "14:53"
      }
    ]
  };
};
