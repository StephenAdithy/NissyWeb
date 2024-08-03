    function getQueryParameter(name) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
$(document).ready(function() {
    $('.qtybtn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
});
function loadProductDetails(id) {
    if (typeof products === 'undefined') {
        console.error('Products data is not available.');
        return;
    }
    debugger
    const product = products[id];
    if (product) {
        if (product.productImage && product.productImage.length > 0) {
        document.querySelector(".product__details__pic__item img").src = product.productImage[0];
        }
        let slider = document.querySelector(".product__details__pic__slider");
        slider.innerHTML = "";
        for (let i = 0; i < product.productImage.length; i++) {
            let img = document.createElement("img");
            img.src = product.productImage[i];
            img.setAttribute("data-imgbigurl", product.productImage[i]);
            img.addEventListener("click", function() {
            document.querySelector(".product__details__pic__item img").src = this.src;
        });
            slider.appendChild(img);
        }
        document.querySelector(".product__details__text h3").innerText = product.name;
        document.querySelector(".product__details__price").innerText = product.price;
        document.querySelector(".description_details").innerText = product.description;
        document.querySelector(".description-tab").innerText = product.productdescription;
        document.querySelector(".information-tab").innerText = product.information;

        $('.product__details__pic__slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 4
        });

        let weightContainer = document.querySelector(".row.mt-3");
        weightContainer.innerHTML = "";
        product.weights.forEach((weight, index) => {
            let col = document.createElement("div");
            col.className = "col-lg-3 col-md-4 col-sm-4";
            let formCheck = document.createElement("div");
            formCheck.className = "form-check";
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.name = "weight";
            input.id = weight.id;
            input.value = weight.value;
            if (index === 0) {
                input.checked = true;
            }
            let label = document.createElement("label");
            label.className = "form-check-label";
            label.setAttribute("for", weight.id);
            label.innerText = weight.label;
            formCheck.appendChild(input);
            formCheck.appendChild(label);
            col.appendChild(formCheck);
            weightContainer.appendChild(col);
        });

        let infoList = document.querySelector(".product-details-info");
        infoList.querySelector("li:nth-child(1) span").innerText = product.availability;
        infoList.querySelector("li:nth-child(2) span").innerHTML = product.shipping;
        infoList.querySelector("li:nth-child(3) span").innerText = product.weightDetail;
        infoList.querySelector("li:nth-child(4) span").innerText = product.rate;
    }
}

window.onload = function () {
    let productId = getQueryParameter("id");
    if (productId) {
        loadProductDetails(productId);
        loadProduct(productId);
    }
};

function loadProduct(productId) {
    // Check if the container exists
    const productDetailsContainer = document.getElementById('product-details-container');
    if (!productDetailsContainer) {
        console.error('Container with ID product-details-container not found.');
        return;
    }

    // Build the HTML content
    const productDetails = `
        <div class="mt-4">
            <div class="product__details__quantity">
                <div class="quantity">
                    <div class="pro-qty">
                        <span class="dec qtybtn" onclick="changeQuantity(-1, ${productId})">-</span>
                        <input id="quantity-${productId}" type="text" value="1">
                        <span class="inc qtybtn" onclick="changeQuantity(1, ${productId})">+</span>
                    </div>
                </div>
            </div>                            
            <a href="#" class="primary-btn" onclick="handleAddToCart(${productId}); return false;">ADD TO CART</a>
            <a href="#" class="primary-btn">BUY NOW</a>
        </div>
    `;

    productDetailsContainer.innerHTML = productDetails;

    if (typeof handleAddToCart !== 'function') {
        console.error('handleAddToCart function is not defined.');
    }
}

function handleAddToCart(productId) {
    debugger
    let selectedWeight = document.querySelector("input[name='weight']:checked")?.value;
    
    // Get the quantity from the input field
    let quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = quantityElement ? parseInt(quantityElement.value) : 1;

    // Validate inputs
    if (!selectedWeight) {
        console.error('No weight selected');
        return;
    }

    if (isNaN(quantity) || quantity < 1) {
        console.error('Invalid quantity');
        return;
    }

    // Get the product from the products array
    let product = products.find(p => p.id === productId);
    
    if (product) {
        // Call the function to add to cart
        addToCart(productId, selectedWeight, quantity);
    } else {
        console.error('Product not found');
    }
}
