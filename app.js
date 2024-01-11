// const navigateToPage = (pageId) => {
//   const pages = document.querySelectorAll(".page");
//   pages.forEach((page) => {
//     if (page.id === pageId) {
//       page.classList.add("active");
//     } else {
//       page.classList.remove("active");
//     }
//   });
// };
// window.addEventListener("load", () => {
//   const initialPageId = location.hash.substr(1);
//   navigateToPage(initialPageId || "home");
// });
// window.addEventListener("hashchange", () => {
//   const pageId = location.hash.substr(1);
//   navigateToPage(pageId || "home");
// });

// location hash podhod
// =========================

// history api
const navigateToPage = (pageId) => {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    if (page.id === pageId) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
};
const updateUrl = (pageId) => {
  const url = `#${pageId}`;
  history.pushState({ page: pageId }, null, url);
};
window.addEventListener("load", () => {
  const initialPageId = location.hash.substr(1);
  navigateToPage(initialPageId || "home");
});
const ourLinks = document.querySelectorAll("menu a");
ourLinks.forEach((link) => {
  link.addEventListener("click", (el) => {
    el.preventDefault();
    const pageId = link.getAttribute("href").substr(1);
    navigateToPage(pageId);
    updateUrl(pageId);
  });
});
window.addEventListener("popstate", (el) => {
  const pageId = el.state ? el.state.page : "home";
  navigateToPage(pageId);
});
// ================================

const openTabs = (event, tabId) => {
  const tabContents = document.querySelectorAll(".tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add(active);
};
document.querySelector("#tabOne").style.display = "block";
