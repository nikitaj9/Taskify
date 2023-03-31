// Original JS code
const year = document.getElementById("#year") as HTMLSpanElement
const thisYear : string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear as string
