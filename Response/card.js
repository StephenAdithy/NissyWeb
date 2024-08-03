function changeQuantity(change) {
    const quantityElement = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += change;
    if (currentQuantity < 0) {
        currentQuantity = 0;
    }
    quantityElement.textContent = currentQuantity;
}