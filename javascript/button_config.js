document.addEventListener("DOMContentLoaded", () => {
  selectCCU();
});

const selectCCU = () => {
  // Grab the SDC buttons
  let ccuButton = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of ccuButton) {
    button.addEventListener("click", function () {
      // Grab top div
      ccuDiv = document.getElementById("top-ccu-div");
      console.log(ccuDiv);
      // Reassign the class name
      ccuDiv.classList.add("button-config-div");
      // Grab the dataset using 'this' keyword
      let ccu = this.dataset.ccu;
      // I want to pass this camera to the 'showPrinters'
      showButtonTitle(ccu);
      //   backButton();
    });
  }
};

const showButtonTitle = (ccu) => {
  let titleElement = document.getElementById("title-element");
  if (ccu === "sixteen") {
    titleElement.innerHTML = "1688 Button Configuration";
  } else {
    titleElement.innerHTML = "CCU";
  }
  hideButton(ccu);
};

const hideButton = (ccu) => {
  // Grab ccu div
  let ccuDiv = document.getElementById("ccu-div");
  // reassign class name
  ccuDiv.classList.add("ccu-display-none-div");
  showDiagram(ccu);
};

const showDiagram = (ccu) => {
  let diagramShowDiv = document.getElementById("diagram-show-div");
  diagramShowDiv.id = "diagram-show-div-clicked";
  let diagramMainDiv = document.createElement("div");
  diagramMainDiv.setAttribute("class", "diagram-main-div");
  let diagramImgDiv = document.createElement("div");
  diagramImgDiv.setAttribute("class", "diagram-img-div");
  diagramMainDiv.appendChild(diagramImgDiv);
  diagramShowDiv.appendChild(diagramMainDiv);
  console.log(diagramShowDiv);
  //   console.log(ccu);
};
