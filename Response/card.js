// function changeQuantity(change) {
//     const quantityElement = document.getElementById('quantity');
//     let currentQuantity = parseInt(quantityElement.textContent);
//     currentQuantity += change;
//     if (currentQuantity < 0) {
//         currentQuantity = 0;
//     }
//     quantityElement.textContent = currentQuantity;
// }

// function loadCartItems() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartItemsContainer = document.getElementById('cart-items');

//     let subtotal = 0;

//     cartItemsContainer.innerHTML = cart.map(item => {
//         subtotal += item.price * item.quantity;
//         return `
//             <div class="cart-item">
//                 <img src="${item.image}" alt="${item.name}">
//                 <div class="shoping__cart__table-products-details">
//                     <h5>${item.name}</h5>
//                     <div class="shoping__cart__table-products-details-para">${item.description}</div>
//                     <div>${item.weight}</div>
//                     <div class="shoping__cart__table-products-details-amtcounter">
//                         <div>₹ ${item.price}/-</div>
//                     </div>
//                     <div class="shoping__cart__table-products-details-remove" onclick="removeFromCart(${item.id})">REMOVE</div>
//                 </div>
//                 <div class="counter">
//                     <button class="counter-section-countbutton" onclick="changeQuantity(${item.id}, -1)">-</button>
//                     <span id="quantity-${item.id}">${item.quantity}</span>
//                     <button class="counter-section-countbutton" onclick="changeQuantity(${item.id}, 1)">+</button>
//                 </div>
//             </div>`;
//     }).join('');

//     document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
//     document.getElementById('total').textContent = `₹${subtotal.toFixed(2)}`;
// }

// function changeQuantity(productId, change) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const productIndex = cart.findIndex(item => item.id === productId);

//     if (productIndex !== -1) {
//         cart[productIndex].quantity += change;
//         if (cart[productIndex].quantity <= 0) {
//             cart.splice(productIndex, 1);
//         }
//         localStorage.setItem('cart', JSON.stringify(cart));
//         loadCartItems();
//         updateCartCount();
//     }
// }

// function removeFromCart(productId) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart = cart.filter(item => item.id !== productId);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     loadCartItems();
//     updateCartCount();
// }

// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
//     document.getElementById('cart-count').textContent = totalCount;
// }

// document.addEventListener('DOMContentLoaded', loadCartItems);



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadCartItems();
});

function loadCartItems() {
    console.log('Loading cart items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart);
    
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) {
        console.error('Cart items container not found');
        return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        console.log('Item:', item);
        subtotal += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="shoping__cart__table-products-details">
                    <h5>${item.name}</h5>
                    <div class="shoping__cart__table-products-details-para">${item.description}</div>
                    <div>${item.weight}</div>
                    <div class="shoping__cart__table-products-details-amtcounter">
                        <div>${item.price}/-</div>
                    </div>
                    <div class="shoping__cart__table-products-details-remove" onclick="removeFromCart(${item.id})">REMOVE</div>
                </div>
                <div class="counter">
                    <button class="counter-section-countbutton" onclick="changeQuantity1(-1,${item.id})">-</button>
                    <span id="quantity-${item.id}">${item.quantity}</span>
                    <button class="counter-section-countbutton" onclick="changeQuantity1(1,${item.id})">+</button>
                </div>
            </div>`;
    }).join('');

    updateCartSummary(subtotal);
}

function updateCartSummary(subtotal) {
    console.log('Updating cart summary. Subtotal:', subtotal);
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    if (!subtotalElement || !totalElement) {
        console.error('Subtotal or total elements not found');
        return;
    }

    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    totalElement.textContent = `₹${subtotal.toFixed(2)}`;
}
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}