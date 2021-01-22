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
for (let i = 31; i >= 1; i --) {
  graphData.push({
    date: moment(currentDate, 'YYYY-MM-DD').businessSubtract(i).format('YYYY-MM-DD'),
    value: Faker.finance.amount(6.500, 7.050, 4),
    time: randomTime()
  });
}

let actualValue = [{
  name: "Rame Cash Milano CMI - Ultimo valore",
  price: Faker.finance.amount(6.500, 7.050, 2),
  date: moment(currentDate, 'YYYY-MM-DD'),
  time: randomTime(true),
  lastUpdateUser: "Matteo Domenici",
  trend: "status-ok"
}];
let cuUsdValue = [{
  "Topic": "EFCUDWZ.LME",
  "Isin": "",
  "Market": "",
  "10002": "44218.4039236",
  "10009": "Rame",
  "10011": "Rame 3 mesi",
  "10015": 7945.5,
  "10019": "22/01/2021",
  "10047": 7945.5,
  "10049": Faker.finance.amount(7873, 7897, 2),
  "10052": "23/02/2017",
  "10154": "USD",
  "20002": "09:41"
}];
let cuCorrective = [
  {
    "Topic": "ESCUDC3M.LME",
    "Isin": "",
    "Market": "",
    "10002": "44218.3969907",
    "10009": "Rame",
    "10011": "Rame cash a 3 mesi Select",
    "10015": -6,
    "10019": "22/01/2021",
    "10047": -6,
    "10049": Faker.finance.amount(-10.50, 10.5, 2),
    "10052": "25/11/2016",
    "10154": "USD",
    "20002": "11:03"
  }
];
let usdEurValue = [{
  "Topic": "EFCUDWZ.LME",
  "Isin": "",
  "Market": "",
  "10002": "44218.4039236",
  "10009": "Rame",
  "10011": "Rame 3 mesi",
  "10015": 7945.5,
  "10019": "22/01/2021",
  "10047": 7945.5,
  "10049": Faker.finance.amount(1.2080, 1.2150, 4),
  "10052": "23/02/2017",
  "10154": "USD",
  "20002": "09:41"
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

function randomTime(now = false) {
  let hours = '';
  let minutes = '';
  if (now === true) {
    let currentHour = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    minutes = (Math.floor(Math.random() * (currentMinutes - 1 + 1)) + 1).toString();
    hours = (Math.floor(Math.random() * (currentHour - 6 + 1)) + 6).toString();

  } else {
    minutes = (Math.floor(Math.random() * (59 - 1 + 1)) + 1).toString();
    hours = (Math.floor(Math.random() * (20 - 6 + 1)) + 6).toString();
  }
  if (parseInt(hours) < 10)
    hours = "0" + hours;
  if (parseInt(minutes) < 10)
    minutes = "0" + minutes;

  return hours + ':' + minutes;

}
