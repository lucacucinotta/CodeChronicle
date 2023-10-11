const axios = require("axios");
const _ = require("lodash");

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../scss/style.scss";
import { header, main, footer, card } from "./modules/element.js";

header();
main();
footer();

const API_URL = process.env.API_URL;
const API_ID = process.env.API_ID;
let count = 0;
const loadMore = document.querySelector("#buttonMore");

async function fetchNews() {
  await axios
    .get(API_URL)
    .then((response) => {
      const newsData = _.get(response, "data");
      newsData.slice(count, count + 10).forEach(fetchItems);
    })
    .catch((err) => {
      alert(`Something gone wrong : ${err}`);
    });
}

async function fetchItems(id) {
  await axios
    .get(`${API_ID}/${id}.json`)
    .then((response) => {
      const itemNewsData = _.get(response, "data");
      card(itemNewsData);
    })
    .catch((err) => {
      alert(`Something gone wrong : ${err}`);
    });
}

fetchNews();

loadMore.addEventListener("click", () => {
  count += 10;
  fetchNews();
});
