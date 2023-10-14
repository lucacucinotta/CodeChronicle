export function getFullDate(fetchTime) {
  let creationDate = new Date(fetchTime * 1000);
  let date = creationDate.getDate();
  let month = creationDate.getMonth() + 1;
  let year = creationDate.getFullYear();
  let fullDate = [date, month, year].join("-");
  return fullDate;
}

export function spinnerLoading() {
  let spinner = document.querySelector(".spinner");
  let container = document.querySelector(".container");
  let button = document.querySelector("#buttonMore");
  let boxDirection = document.querySelector(".boxDirection");
  let footer = document.querySelector("#bottom");

  setTimeout(() => {
    spinner.style.display = "none";
    container.style.display = "flex";
    button.style.display = "block";
    boxDirection.display = "flex";
    footer.classList.remove("fixed-bottom");
  }, 2500);
}
