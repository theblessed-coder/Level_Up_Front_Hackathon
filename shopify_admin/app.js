// Getting DOM elements
const alert = document.querySelector("#alert");
const userDetails = document.querySelector("#user-details");

const alertContainer = document.querySelector(".notification-container");
const userDetailsDropDownContainer = document.querySelector(
  ".notification-username"
);

const userModal = document.querySelector("#user-details-modal");
const alertModal = document.querySelector("#alert-modal");
const closeUserDetailsModal = document.querySelector(".close-details-modal");
const closeNotificationModal = document.querySelector(".close-notification");
const userDetailsDropDownDivs = document.querySelectorAll(".sub-container");

const allDropDownMenuItems = document.querySelectorAll(".sub-container");
const menuArrays = [...allDropDownMenuItems];

const LoaderAndTextContainer = document.querySelectorAll(".setup-guide");
const setup = document.querySelectorAll(".setup-div");
const setupArray = [...LoaderAndTextContainer];
const circles = document.querySelectorAll("#img_div");

// Get the caret icons that collapses the plan container
const closeCaret = document.querySelector("#close");
const openCaret = document.querySelector("#open");

const planListContainer = document.querySelector("#list-container");
const imageContainer = document.querySelectorAll(".img-container");
const progressBar = document.querySelector(".progress");
const barValue = document.querySelector(".value");
const totalItem = document.querySelector(".total-item");

const deleteIconsm = document.querySelector(".delete-sm");
const deleteIconlg = document.querySelector(".delete-lg");
const selectPlan = document.querySelector(".select-plan");

// Defining Variables and initializations
let totalChecked = 0;
progressBar.max = setupArray?.length;
totalItem.innerHTML = setupArray?.length;
let isFocused = false;

// Function to open the alert modal
const openAlertModal = () => {
  // Toggle classes and styles for alert modal visibility
  userModal.classList.remove("show-info-modal");
  alertModal.classList.toggle("show-notification-modal");
  alertContainer.classList.toggle("alert-border");
  userDetailsDropDownContainer.style.border = "none";
};

// Function to close the alert modal
const closeAlertModal = () => {
  // Toggle classes and styles to hide alert modal
  alertModal.classList.toggle("show-notification-modal");
  alertContainer.classList.toggle("alert-border");
};

// Function to open user details modal
const openUserModal = (e) => {
  e.stopPropagation();
  alertModal.classList.remove("show-notification-modal");
  userModal.classList.add("show-info-modal");
  userDetailsDropDownContainer.style.border = "2px solid #005bd3";
  alertContainer.classList.remove("alert-border");

  const firstElement = document.querySelector(".all-stores");
};

// Function to close user details modal
const closeDetailsModal = () => {
  userModal.classList.remove("show-info-modal");
  userDetailsDropDownContainer.style.border = "none";
};

// Function to handle arrow key navigation for dropdown menus
const handleArrowFunctionKeyPressed = (event, index) => {
  // Handle arrow key navigation logic

  const isLastMenuItem = index === allDropDownMenuItems?.length - 1;
  const isFirstMenuItem = index === 0;
  const nextMenuItem = allDropDownMenuItems.item(index + 1);
  const prevMenuItem = allDropDownMenuItems.item(index - 1);

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      allDropDownMenuItems.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      allDropDownMenuItems.item(allDropDownMenuItems?.length - 1).focus();
      return;
    }
    prevMenuItem.focus();
  }
};

// Adding event listeners for arrow key navigation
allDropDownMenuItems.forEach((menu, index) => {
  menu.addEventListener("keyup", (event) => {
    handleArrowFunctionKeyPressed(event, index);
  });
});

// Function to handle opening of the card
const handleCaretOpenClick = () => {
  // Handle opening of the card logic
  openCaret.classList.remove("show-icon");
  openCaret.classList.add("hide-icon");
  closeCaret.classList.remove("hide-icon");
  closeCaret.classList.add("show-icon");
  planListContainer.classList.remove("close-container");

  LoaderAndTextContainer.forEach((el, index) => {
    const setupGuide = el.querySelector(".setup-details");
    setupGuide.classList.remove("hide");
  });
  circles?.forEach((div) => {
    const d = div.querySelector(".img-container");
    d.classList.remove("img-container-hide");
  });
};

// Function to handle closing of the card
const handleCaretCloseClick = () => {
  // Handle closing of the card logic
  closeCaret.classList.remove("show-icon");
  closeCaret.classList.add("hide-icon");
  openCaret.classList.remove("hide-icon");
  openCaret.classList.add("show-icon");
  planListContainer.classList.add("close-container");
  LoaderAndTextContainer.forEach((el, index) => {
    const setupGuide = el.querySelector(".setup-details");
    setupGuide.classList.add("hide");
  });
  circles?.forEach((div) => {
    const d = div.querySelector(".img-container");
    d.classList.add("img-container-hide");
  });
};

// Function to handle clicking on headers for div opening and closing
LoaderAndTextContainer?.forEach((div, index) => {
  // Logic to open/close divs when header text is clicked
  const defaultHeader = div.querySelector(".default");
  const headerAndText = div.querySelector(".display");
  const image = div.querySelector(".hide-img");
  const setupGuide = div.querySelector(".setup-details");

  let nextPosition = (index + 1) % setupArray?.length;

  if (index === setupArray?.length - 1) {
    nextPosition = (index - 1 + setupArray?.length) % setupArray?.length;
  }

  if (nextPosition >= setupArray?.length) {
    nextPosition = 0;
  }

  if (index === 0) {
    defaultHeader.classList.add("hide");
    headerAndText.classList.add("show");
    image.classList.add("show");
    setupGuide.classList.add("add-bg");
    if (setupArray[setupArray?.length - 1]) {
      const lastIndexElement = setupArray[setupArray?.length - 1];
      const lastIndexsetupGuide =
        lastIndexElement.querySelector(".setup-details");
      const lastIndexDefaultHeader = lastIndexElement.querySelector(".default");
      const lastIndexHeaderAndText = lastIndexElement.querySelector(".display");
      const lastIndexImage = lastIndexElement.querySelector(".hide-img");

      if (lastIndexHeaderAndText.classList.contains("show")) {
        lastIndexDefaultHeader.classList.remove("hide");
        lastIndexsetupGuide.classList.remove("add-bg");
        lastIndexHeaderAndText.classList.remove("show");
        lastIndexImage.classList.remove("show");
      }
    }
  }

  defaultHeader.addEventListener("click", () => {
    defaultHeader.classList.add("hide");
    headerAndText.classList.add("show");
    image.classList.add("show");
    setupGuide.classList.add("add-bg");

    if (index > 0) {
      if (setupArray[index - 1]) {
        const firstElement = setupArray[index - 1];
        const firstsetupGuide = firstElement.querySelector(".setup-details");
        const firstDefaultHeader = firstElement.querySelector(".default");
        const firstHeaderAndText = firstElement.querySelector(".display");
        const firstImage = firstElement.querySelector(".hide-img");

        if (firstHeaderAndText.classList.contains("show")) {
          firstDefaultHeader.classList.remove("hide");
          firstsetupGuide.classList.remove("add-bg");
          firstHeaderAndText.classList.remove("show");
          firstImage.classList.remove("show");
        }
      }
    }

    if (setupArray[nextPosition]) {
      const nextElement = setupArray[nextPosition];
      const nextsetupGuide = nextElement.querySelector(".setup-details");
      const nextDefaultHeader = nextElement.querySelector(".default");
      const nextHeaderAndText = nextElement.querySelector(".display");
      const nextImage = nextElement.querySelector(".hide-img");
      if (nextHeaderAndText.classList.contains("show")) {
        nextDefaultHeader.classList.remove("hide");
        nextsetupGuide.classList.remove("add-bg");
        nextHeaderAndText.classList.remove("show");
        nextImage.classList.remove("show");
      }
    }

    if (index === setupArray?.length - 1) {
      const lastIndexElement = setupArray[setupArray?.length - 1];
      const lastIndexHeaderAndText = lastIndexElement.querySelector(".display");

      if (lastIndexHeaderAndText.classList.contains("show")) {
        const firstIndexElement = setupArray[0];
        const firstIndexsetupGuide =
          firstIndexElement.querySelector(".setup-details");
        const firstIndexDefaultHeader =
          firstIndexElement.querySelector(".default");
        const firstIndexHeaderAndText =
          firstIndexElement.querySelector(".display");
        const firstIndexImage = firstIndexElement.querySelector(".hide-img");

        if (firstIndexHeaderAndText.classList.contains("show")) {
          firstIndexDefaultHeader.classList.remove("hide");
          firstIndexsetupGuide.classList.remove("add-bg");
          firstIndexHeaderAndText.classList.remove("show");
          firstIndexImage.classList.remove("show");
        }
      }
    }

    if (index === 0) {
      const firstIndexElement = setupArray[setupArray?.length - 1];
      const firstIndexHeaderAndText =
        firstIndexElement.querySelector(".display");

      if (firstIndexHeaderAndText.classList.contains("show")) {
        const lastIndexElement = setupArray[setupArray?.length - 1];
        const lastIndexsetupGuide =
          lastIndexElement.querySelector(".setup-details");
        const lastIndexDefaultHeader =
          lastIndexElement.querySelector(".default");
        const lastIndexHeaderAndText =
          lastIndexElement.querySelector(".display");
        const lastIndexImage = lastIndexElement.querySelector(".hide-img");

        if (lastIndexHeaderAndText.classList.contains("show")) {
          lastIndexDefaultHeader.classList.remove("hide");
          lastIndexsetupGuide.classList.remove("add-bg");
          lastIndexHeaderAndText.classList.remove("show");
          lastIndexImage.classList.remove("show");
        }
      }
    }
  });
});

// Function to handle circular button clicks and accessibility
LoaderAndTextContainer?.forEach((ele, index) => {
  // Logic for circular button clicks and accessibility updates
  const setupGuide = ele.querySelector(".setup-details");
  const d = ele.querySelector(".img-container");
  const normal = ele.querySelector("#normal");
  const hover = ele.querySelector("#hover");
  const loading = ele.querySelector("#loading");
  const checked = ele.querySelector("#checked");
  const defaultHeader = ele.querySelector(".default");
  const headerAndText = ele.querySelector(".display");
  const image = ele.querySelector(".hide-img");

  d.addEventListener("mouseover", () => {
    normal.classList.add(`hide-normal`);
    hover.classList.add(`show_solid_circle`);
  });

  d.addEventListener("mouseout", () => {
    normal.classList.remove(`hide-normal`);
    hover.classList.remove(`show_solid_circle`);
  });

  d.addEventListener("click", () => {
    defaultHeader.classList.add("hide");
    headerAndText.classList.add("show");
    image.classList.add("show");
    setupGuide.classList.add("add-bg");

    let nextPosition = (index + 1) % setupArray?.length;

    if (index === setupArray?.length - 1) {
      nextPosition = (index - 1 + setupArray?.length) % setupArray?.length;
    }

    if (nextPosition >= setupArray?.length) {
      nextPosition = 0;
    }

    loading.classList.toggle(`show_half_circle`);
    normal.classList.add(`hide-normal`);
    hover.classList.remove(`show_solid_circle`);

    if (setupArray[nextPosition]) {
      if (!loading.classList.contains("show_half_circle")) {
        totalChecked--;
      } else {
        totalChecked++;
      }

      progressBar.value = totalChecked;
      barValue.innerHTML = totalChecked;
    }

    if (!loading.classList.contains("show_half_circle")) {
      if (index === setupArray?.length - 1) {
        checked.classList.remove("show_checked");
        normal.style.display = "block";
        normal.style.visibility = "visible";
        setupGuide.classList.add("add-bg");
        headerAndText.classList.add("show");
        image.classList.add("show");
        defaultHeader.classList.add("hide");
      } else {
        checked.classList.remove("show_checked");
        normal.style.display = "block";
        normal.style.visibility = "visible";
        setupGuide.classList.remove("add-bg");
        headerAndText.classList.remove("show");
        image.classList.remove("show");
        defaultHeader.classList.remove("hide");
      }
    }

    loading.addEventListener("transitionend", () => {
      checked.classList.add("show_checked");

      if (index > 0) {
        const prevElement = setupArray[index - 1];
        const prevsetupGuide = prevElement.querySelector(".setup-details");
        const prevDefaultHeader = prevElement.querySelector(".default");
        const prevHeaderAndText = prevElement.querySelector(".display");
        const prevImage = prevElement.querySelector(".hide-img");
        prevsetupGuide.classList.remove("add-bg");
        prevDefaultHeader.classList.remove("hide");
        prevHeaderAndText.classList.remove("show");
        prevImage.classList.remove("show");
      }

      if (setupArray[nextPosition]) {
        const nextElement = setupArray[nextPosition];
        const nextsetupGuide = nextElement.querySelector(".setup-details");
        const nextDefaultHeader = nextElement.querySelector(".default");
        const nextHeaderAndText = nextElement.querySelector(".display");
        const nextImage = nextElement.querySelector(".hide-img");
        if (nextHeaderAndText.classList.contains("show")) {
          nextDefaultHeader.classList.remove("hide");
          nextsetupGuide.classList.remove("add-bg");
          nextHeaderAndText.classList.remove("show");
          nextImage.classList.remove("show");
        }
      }

      if (index === setupArray?.length - 1) {
        const lastIndexElement = setupArray[setupArray?.length - 1];
        const lastIndexHeaderAndText =
          lastIndexElement.querySelector(".display");

        if (lastIndexHeaderAndText.classList.contains("show")) {
          const firstIndexElement = setupArray[0];
          const firstIndexsetupGuide =
            firstIndexElement.querySelector(".setup-details");
          const firstIndexDefaultHeader =
            firstIndexElement.querySelector(".default");
          const firstIndexHeaderAndText =
            firstIndexElement.querySelector(".display");
          const firstIndexImage = firstIndexElement.querySelector(".hide-img");

          if (firstIndexHeaderAndText.classList.contains("show")) {
            firstIndexDefaultHeader.classList.remove("hide");
            firstIndexsetupGuide.classList.remove("add-bg");
            firstIndexHeaderAndText.classList.remove("show");
            firstIndexImage.classList.remove("show");
          }
        }
      }

      if (index === 0) {
        const firstIndexElement = setupArray[0];
        const firstIndexHeaderAndText =
          firstIndexElement.querySelector(".display");

        if (firstIndexHeaderAndText.classList.contains("show")) {
          const lastIndexElement = setupArray[setupArray?.length - 1];
          const lastIndexsetupGuide =
            lastIndexElement.querySelector(".setup-details");
          const lastIndexDefaultHeader =
            lastIndexElement.querySelector(".default");
          const lastIndexHeaderAndText =
            lastIndexElement.querySelector(".display");
          const lastIndexImage = lastIndexElement.querySelector(".hide-img");

          if (lastIndexHeaderAndText.classList.contains("show")) {
            lastIndexDefaultHeader.classList.remove("hide");
            lastIndexsetupGuide.classList.remove("add-bg");
            lastIndexHeaderAndText.classList.remove("show");
            lastIndexImage.classList.remove("show");
          }
        }
      }
    });
  });
});

// Adding event listeners for various interactions
closeNotificationModal.addEventListener("click", (e) => {
  // Close alert modal on click
  e.stopPropagation();
  closeAlertModal();
});

alert.addEventListener("click", openAlertModal);

userDetails.addEventListener("click", openUserModal);

closeUserDetailsModal.addEventListener("click", (e) => {
  // Close user details modal on click
  e.stopPropagation();
  closeDetailsModal();
});

// Adding event listeners for caret clicks
closeCaret.addEventListener("click", handleCaretCloseClick);
openCaret.addEventListener("click", handleCaretOpenClick);

// Adding event listeners for delete icon clicks
deleteIconsm.addEventListener("click", () => {
  // Hide select plan on delete icon click
  selectPlan.style.display = "none";
  selectPlan.style.visibility = "hidden";
});

deleteIconlg.addEventListener("click", () => {
  // Hide select plan on delete icon click
  selectPlan.style.display = "none";
  selectPlan.style.visibility = "hidden";
});