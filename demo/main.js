// Initialize the cat names
const catNames = [
  "finn",
  "shahid",
  "aj",
  "huda",
  "frank",
  "miranda",
  "jessica",
  "nevin",
  "youn",
];

const root = document.getElementById("root");

// Make the header
const header = document.createElement("h1");
header.classList.add("header");
header.textContent = "Cat Badge Generator";
root.appendChild(header);

// Make the input container
const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");
root.appendChild(inputContainer);

// Make the input
const input = document.createElement("input");
input.classList.add("input");
input.placeholder = "Enter a cat name";
inputContainer.appendChild(input);

// Make the add button
const addButton = document.createElement("button");
addButton.classList.add("add-button");
addButton.textContent = "Add";
inputContainer.appendChild(addButton);

// Add event listener to the add button
addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue) {
    catNames.push(inputValue);
    renderAllCats(catNames);
    input.value = "";
  }
});

// Make the container for the cat badges
const container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);

// Render a cat badge
const renderCatBadge = (catName) => {
  // Make the badge container
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("badge-container");
  container.appendChild(badgeContainer);

  // Make the badge label
  const badgeLabel = document.createElement("div");
  badgeLabel.classList.add("badge-label");
  badgeLabel.textContent = catName;
  badgeContainer.appendChild(badgeLabel);

  // Make the badge
  const circle = document.createElement("div");
  circle.classList.add("badge");
  badgeContainer.appendChild(circle);

  // Fill the badge with a cat image
  const catImage = document.createElement("img");
  catImage.src = `https://robohash.org/${catName}?set=set4`;
  catImage.alt = "cat";
  catImage.classList.add("cat-image");
  circle.appendChild(catImage);

  // Allow the user to delete the badge
  circle.addEventListener("click", (event) => {
    if (event.target.classList.contains("cat-image")) {
      catNames = catNames.filter((name) => name !== catName);
      renderAllCats(catNames);
    }
  });
};

// Render all the cat badges
const renderAllCats = (cats) => {
  // Clear the container
  container.innerHTML = "";

  // Render all the cat badges
  cats.forEach((cat) => {
    renderCatBadge(cat);
  });
};

// Render all the cats initially
renderAllCats(catNames);
