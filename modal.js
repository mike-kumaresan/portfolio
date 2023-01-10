// When the user clicks the appropriate anchor tag, open the modal
document.querySelectorAll(".anchor-listener").forEach(item => {
  item.addEventListener(
    "click",
    function(event) {
      event.preventDefault();
      const el = event.target;
      // Get value stored in data-item for Modal ID from anchor tag
      const elLink = el.getAttribute("data-item-link");

      // Get the modal element
      let modal = document.getElementById(elLink);

      // Make Modal visible
      if (modal != null) {
        modal.style.display = "block";
      }
    },
    false
  );
});

// To close modal when user clicks on button
document.querySelectorAll(".close").forEach(item => {
  item.addEventListener("click", function(event) {
    event.preventDefault();
    // which element was clicked
    const elSpan = event.target;
    //Get Value stored in data- attribute that corresponds with id of element to close
    let elSpanDataItemValue = elSpan.getAttribute("data-item-span");

    if (elSpanDataItemValue != null) {
      elSpanDataItemValue = elSpanDataItemValue.substr(5); // format result to get the Modal ID

      // Get Modal element and close it
      const closeModal = document.getElementById(elSpanDataItemValue);
      closeModal.style.display = "none";
    }
  });
});
