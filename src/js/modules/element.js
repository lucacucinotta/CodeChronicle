import logo from "/src/img/logo.svg";
import websiteIcon from "/src/img/website.svg";
import githubIcon from "/src/img/github.svg";
import linkedinIcon from "/src/img/linkedin.svg";
import topArrow from "/src/img/top.svg";
import bottomArrow from "/src/img/bottom.svg";
import { getFullDate } from "./function.js";

let websiteLink = "https://lucacucinotta.github.io";
let githubLink = "https://github.com/lucacucinotta";
let linkedinLink = "https://www.linkedin.com/in/luca-cucinotta-4b836b278";

export function header() {
  let header = document.createElement("header");
  header.setAttribute("id", "top");

  let span = document.createElement("span");
  span.classList.add("ms-3");
  span.innerHTML = "CodeChronicle";

  let img = document.createElement("img");
  img.src = logo;
  img.classList.add("logo", "me-3");

  document.body.append(header);
  header.append(span, img);
}

export function main() {
  let main = document.createElement("main");
  main.classList.add("mt-3");

  let h1 = document.createElement("h1");
  h1.innerHTML = "CodeChronicle";

  let h2 = document.createElement("h2");
  h2.innerHTML = "Fresh News from Hacker News API";

  let spinnerLoading = document.createElement("div");
  spinnerLoading.classList.add("spinner");

  let container = document.createElement("div");
  container.classList.add("container", "mt-4");

  let buttonMore = document.createElement("button");
  buttonMore.setAttribute("id", "buttonMore");
  buttonMore.classList.add("mt-3", "mb-3");
  buttonMore.innerHTML = "Load More";

  let boxDirection = document.createElement("div");
  boxDirection.classList.add("boxDirection");
  function createArrowIcon(linkOut, svgIconLink) {
    let a = document.createElement("a");
    a.href = linkOut;

    let img = document.createElement("img");
    img.src = svgIconLink;
    img.classList.add("arrowDirection");

    boxDirection.append(a);
    a.append(img);
  }
  createArrowIcon("#top", topArrow);
  createArrowIcon("#bottom", bottomArrow);

  document.body.append(main);
  main.append(h1, h2, spinnerLoading, container, boxDirection, buttonMore);
}

export function card(data) {
  let container = document.querySelector(".container");

  let card = document.createElement("div");
  card.classList.add("card");

  let cardTitle = document.createElement("h3");
  cardTitle.innerHTML = `${data.title}`;

  let cardData = document.createElement("p");
  cardData.innerHTML = `Posted by ${data.by} | ${getFullDate(data.time)}`;

  let buttonLink = document.createElement("a");
  buttonLink.href = `${data.url}`;
  buttonLink.target = "_blank";
  let buttonNews = document.createElement("button");
  buttonNews.setAttribute("id", "buttonNews");
  buttonNews.innerHTML = "Read the News";
  buttonLink.append(buttonNews);

  container.append(card);
  card.append(cardTitle, cardData, buttonLink);
}

export function footer() {
  let footer = document.createElement("footer");
  footer.classList.add("fixed-bottom");
  footer.setAttribute("id", "bottom");

  let myTrademark = document.createElement("span");
  myTrademark.innerHTML = "© 2023 Luca Cucinotta";
  myTrademark.classList.add("ms-3");

  let personalLink = document.createElement("div");
  personalLink.classList.add("me-3");

  document.body.append(footer);
  footer.append(myTrademark, personalLink);

  function createLinkIcon(linkOut, svgIconLink) {
    let a = document.createElement("a");
    a.href = linkOut;
    a.target = "_blank";

    let img = document.createElement("img");
    img.src = svgIconLink;
    img.classList.add("iconLink");

    personalLink.append(a);
    a.append(img);
  }

  createLinkIcon(websiteLink, websiteIcon);
  createLinkIcon(githubLink, githubIcon);
  createLinkIcon(linkedinLink, linkedinIcon);
}
