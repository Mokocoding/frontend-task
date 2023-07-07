const pageNames = ['post'];
const pageButtons = pageNames.map((pageName) => {
  return document.getElementById(pageName);
});

pageButtons.forEach((pageButton) => {
  pageButton.addEventListener('click', function () {
    window.location.href = `./pages/${this.id}/list/index.html`;
  });
});
