document.querySelectorAll(".product-card").forEach((card) => {
  const increaseBtn = card.querySelector(".increase-btn");
  const decreaseBtn = card.querySelector(".decrease-btn");
  const quantityInput = card.querySelector(".quantity-input");

  increaseBtn.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < parseInt(quantityInput.getAttribute("max"))) {
      quantityInput.value = currentValue + 1;
    }
  });

  decreaseBtn.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > parseInt(quantityInput.getAttribute("min"))) {
      quantityInput.value = currentValue - 1;
    }
  });
});
