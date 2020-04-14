(function() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

var navEls = document.querySelectorAll("#nav li");

navEls.forEach(function(elem, index) {
  elem.onclick = () => {
    toggleTab(elem.id, elem.dataset.target);
  };

  elem.addEventListener("keydown", e => {
    const firstTab = navEls[0];
    const lastTab = navEls[navEls.length - 1];

    switch (e.code) {
      case "ArrowRight": {
        const nextTab = navEls[index + 1];

        if (nextTab) {
          nextTab.focus();
        } else {
          firstTab.focus();
        }

        break;
      }

      case "ArrowLeft": {
        const prevTab = navEls[index - 1];

        if (prevTab) {
          prevTab.focus();
        } else {
          lastTab.focus();
        }

        break;
      }

      case "Enter":
      case "Space": {
        elem.click();

        break;
      }

      case "Home": {
        e.preventDefault();
        firstTab.focus();
        break;
      }

      case "End": {
        e.preventDefault();
        lastTab.focus();
        break;
      }

      default:
        break;
    }
  });
});

function toggleTab(selectedNav, targetId) {
  navEls.forEach(function(navEl) {
    const isActive = navEl.id == selectedNav;
    navEl.setAttribute("aria-selected", isActive ? "true" : "false");
    navEl.setAttribute("tab-index", isActive ? "0" : "-1");

    if (isActive) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}