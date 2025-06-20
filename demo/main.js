const catNames = ["finn", "jake", "lumpy", "princess", "bubblegum", "flapjack"];

const root = document.getElementById("root");

const header = document.createElement("h1");
header.textContent = "Cat Badge Generator";
root.appendChild(header);

const container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);

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
};

catNames.forEach((catName) => {
  renderCatBadge(catName);
});
