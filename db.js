/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");
var moment = require('moment');

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
        date: moment().format("DD-MM-YYYY"),
        time: "08.34",
        lastUpdateUser: "Matteo Domenici",
        trend: "status-ok"
      }
    ],
    graph_data: [
      {
        date: moment().subtract(1, "days").format("DD-MM-YYYY"),
        value: "6055,0000",
        time: "14:33"
      },
      {
        date: moment().format("DD-MM-YYYY"),
        value: "6120,0000",
        time: "14:53"
      }
    ]
  };
};
