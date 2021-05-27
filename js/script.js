const headerLists = document.getElementId("header-list");

headerLists.forEach((list) => {
  list.addEventListener("mouseover", () => {
    removeActiveClasses();
    list.classList.add("different colors");
  });
});

function removeActiveClasses() {
  headerLists.forEach((headerList) => {
    list.classList.remove("dirrerent colors");
  });
}
