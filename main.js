// Please feel free to change the JS as you see fit! This is just a starting point.

const colorNames = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
]


let numberRows = 3; 

let columnLength = 3;

let optionSelection = document.getElementById("color-select")

let currentColor = colorNames[optionSelection.selectedIndex]

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  if (event.target.tagName == "OPTION"){
    currentColor = event.target.value
  }
  if (event.target.tagName == "TD") {
    const singleCell = document.getElementById(event.target.id)
    singleCell.style.backgroundColor = currentColor
  }
});

const addRowFunctionality = document.getElementById("add-row");
addRowFunctionality.addEventListener("click", (event => {
  createRow()
}))

const addColumnFunctionality = document.getElementById("add-column")
addColumnFunctionality.addEventListener("click", (event) => {
  createColumn()
})

const fillGridFunctionality = document.getElementById("fill-grid")
fillGridFunctionality.addEventListener("click", (event) => {
  dataColorChange(currentColor)
})

const clearGridFunctionality = document.getElementById("clear-grid")
clearGridFunctionality.addEventListener("click", (event) => {
  dataColorChange("white")
})

const createRow = () => {
  //get the tbody element
  const tBodyElement = document.querySelector("tbody")

  //get the last row
  const lastRowElement = document.getElementById(`row-${numberRows}`)

  //creates new element
  const newRowElement = document.createElement("tr");
  
  //increment number rows
  numberRows += 1

  //assign id to new element
  newRowElement.id = `row-${numberRows}`

  for(let i = 1; i <= columnLength; i++){
    const newDataCell = document.createElement("td")
    newDataCell.id = `data-${numberRows}-${i}`
    newRowElement.appendChild(newDataCell)
  }

  //append it to the tbody
  tBodyElement.appendChild(newRowElement)
}

const createColumn = () => {
  //increment column length
  columnLength += 1

  for (let i = 1; i <= numberRows; i++){
    //get a single row element
    const singleRowElement = document.getElementById(`row-${i}`)

    //create a new data cell element
    const newDataCell = document.createElement("td")

    newDataCell.id = `data-${i}-${columnLength}`

    //append it to the single row element
    singleRowElement.appendChild(newDataCell)
  }
}

const dataColorChange = (color) => {
  let gridCells = Array.from(document.getElementsByTagName("td"))
  for (let i = 0; i < gridCells.length; i++){
    gridCells[i].style.backgroundColor = color
  }
}