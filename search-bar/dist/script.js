import vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";
/*const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const itemsContainer = document.getElementById("itemsContainer");

clearBtn.disabled = true;

searchInput.addEventListener("input", function() {
  clearBtn.disabled = !this.value;
  // Filter the items based on the input value
  itemsContainer.innerHTML = "";
  const items = getItems();
  const filteredItems = items.filter(item => item.includes(this.value));
  for (const item of filteredItems) {
    itemsContainer.innerHTML += `<div>${item}</div>`;
  }
});

clearBtn.addEventListener("click", function() {
  searchInput.value = "";
  clearBtn.disabled = true;
  itemsContainer.innerHTML = "";
});

function getItems() {
  // Implement your item fetching logic here, e.g. fetch from an API
  return ["Item 1", "Item 2", "Item 3", "Item 4"];
}
*/
const searchInput=document.getElementById("searchInput")
const clearBtn = document.getElementById("clearBtn");

searchInput.addEventListener("input", function() {
  clearBtn.disabled = !this.value;
});

clearBtn.addEventListener("click", function() {
  searchInput.value = "";
  clearBtn.disabled = true;
});