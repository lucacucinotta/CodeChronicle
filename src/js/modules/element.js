import logo from "/src/img/logo.svg";
import websiteIcon from "/src/img/website.svg";
import githubIcon from "/src/img/github.svg";
import linkedinIcon from "/src/img/linkedin.svg";

let websiteLink = "https://lucacucinotta.github.io";
let githubLink = "https://github.com/lucacucinotta";
let linkedinLink = "https://www.linkedin.com/in/luca-cucinotta-4b836b278";

export function header() {
  let header = document.createElement("header");

  let span = document.createElement("span");
  span.classList.add("me-3");
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

  let container = document.createElement("div");
  container.classList.add("container", "mt-4");

  let buttonMore = document.createElement("button");
  buttonMore.setAttribute("id", "buttonMore");
  buttonMore.classList.add("mt-3", "mb-3");
  buttonMore.innerHTML = "Load More";

  document.body.append(main);
  main.append(h1, h2, container, buttonMore);
}

export function footer() {
  let footer = document.createElement("footer");

  let myTrademark = document.createElement("span");
  myTrademark.innerHTML = "© 2023 Luca Cucinotta";
  myTrademark.classList.add("ms-3");

  let personalLink = document.createElement("div");
  personalLink.classList.add("me-3");

  document.body.append(footer);
  footer.append(myTrademark, personalLink);

  function createIcon(linkOut, svgIconLink) {
    let a = document.createElement("a");
    a.href = linkOut;
    a.target = "_blank";

    let img = document.createElement("img");
    img.src = svgIconLink;
    img.classList.add("iconLink");

    personalLink.append(a);
    a.append(img);
  }

  createIcon(websiteLink, websiteIcon);
  createIcon(githubLink, githubIcon);
  createIcon(linkedinLink, linkedinIcon);
}
