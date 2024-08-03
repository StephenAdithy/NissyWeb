function loadProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productItem = `
            <div class="col-lg-4 col-md-6 col-sm-6" onclick="location.href='shop-details.html?id=${product.id}'">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style="background-image: url(${product.image});">
                        <ul class="product__item__pic__hover">
                             <li><a href="#" onclick="toggleFavorite(${product.id})"><i class="fa fa-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">${product.name}</a></h6>
                        <h5>${product.price}</h5>
                        <button class="featured__item__text-optionbtn">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', productItem);
    });
}
function loadProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details-container');
    const productDetails = `
        <div class="mt-4">
            <div class="product__details__quantity">
                <div class="quantity">
                    <div class="pro-qty">
                        <span class="dec qtybtn">-</span>
                        <input type="text" value="1">
                        <span class="inc qtybtn">+</span>
                    </div>
                </div>
            </div>                            
            <a href="#" class="primary-btn" onclick="addToCart(${product.id})">ADD TO CARD</a>
            <a href="#" class="primary-btn">BUY NOW</a>
        </div>
    `;
    productDetailsContainer.innerHTML = productDetails;
}
document.addEventListener('DOMContentLoaded', loadProducts);
