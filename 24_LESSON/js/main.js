const year = document.querySelector('#year');
const thisYear = new Date().getFullYear();
console.log(thisYear)
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;