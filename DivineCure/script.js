// Script functionality for UI and rendering referencing products.js

// Generate Stars HTML
function generateStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<i class="fa-solid fa-star"></i>';
        } else {
            html += '<i class="fa-regular fa-star"></i>';
        }
    }
    return html;
}

// Render Products on Landing Page
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    // Display only first 8 products on home page
    const dispProducts = typeof products !== 'undefined' ? products.slice(0, 8) : [];

    grid.innerHTML = dispProducts.map(p => `
        <div class="product-card">
            ${p.hasDiscount ? '<span class="product-badge">Sale</span>' : ''}
            <div style="background: var(--bg-light); display: flex; justify-content: center; align-items: center; height: 220px; color: var(--text-muted);"><i class="fa-solid fa-pills" style="font-size: 3rem; color: #cbd5e1;"></i></div>
            <div class="product-content">
                <span class="product-cat">${getCategoryIconHtml(p.category)} ${p.category}</span>
                <h3 class="product-title"><a href="product.html?id=${p.id}">${p.title}</a></h3>
                ${p.subtitle ? `<p class="product-subtitle">${p.subtitle}</p>` : ''}
                <div class="product-rating">
                    ${generateStars(p.rating)}
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label style="font-size:0.85rem; font-weight:600; color:var(--text-muted); display:block; margin-bottom:5px;">Pill Quantity:</label>
                    <select class="pill-selector" style="width:100%; padding:8px; border:1px solid var(--border-color); border-radius:4px; margin-bottom:10px;" onchange="updatePrice(this)">
                        <option value="30" data-price="65">30 Pills</option>
                        <option value="60" data-price="105">60 Pills</option>
                        <option value="120" data-price="150">120 Pills</option>
                        <option value="240" data-price="240">240 Pills</option>
                        <option value="500" data-price="500">500 Pills</option>
                    </select>
                    <div class="product-price-range" style="font-size:1.2rem; font-weight:bold; color:var(--primary);">$65.00</div>
                </div>

                <div style="display:flex; gap:10px; align-items:center;">
                    <input type="number" min="1" value="1" class="product-qty" style="width:60px; padding:8px; border:1px solid var(--border-color); border-radius:4px;">
                    <button class="btn add-cart-btn btn-primary" onclick="addToCartFromCard(this, ${p.id})" style="flex:1;"><i class="fa-solid fa-cart-plus"></i> Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updatePrice(selectElem) {
    const price = selectElem.options[selectElem.selectedIndex].getAttribute('data-price');
    const priceDisplay = selectElem.parentElement.querySelector('.product-price-range');
    if (priceDisplay) {
        priceDisplay.textContent = '$' + parseFloat(price).toFixed(2);
    }
}

function handleAddToCart(productId, quantity = 1, pillCount = 30, price = 65) {
    if (typeof Cart !== 'undefined') {
        Cart.addItem(productId, quantity, pillCount, price);
        alert(`Added ${quantity} item(s) of ${pillCount} pills to cart!`);
    }
}

function addToCartFromCard(button, productId) {
    const card = button.closest('.product-card');
    if (!card) return;
    
    const qtyInput = card.querySelector('.product-qty');
    const quantity = Math.max(1, parseInt(qtyInput?.value, 10) || 1);
    
    const pillSelect = card.querySelector('.pill-selector');
    const pillCount = parseInt(pillSelect.value, 10);
    const price = parseFloat(pillSelect.options[pillSelect.selectedIndex].getAttribute('data-price'));
    
    handleAddToCart(productId, quantity, pillCount, price);
}


// Mobile Menu Toggle
function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const desktopNav = document.querySelector('.desktop-nav');

    if (toggle && mobileNav && desktopNav) {
        mobileNav.innerHTML = desktopNav.innerHTML; // Copy desktop nav

        toggle.addEventListener('click', () => {
            if (mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'block';
            }
        });
    }
}

// Sticky Header effect
function setupHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });
}

// Initialize logic
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Cart !== 'undefined') {
        Cart.updateBadge(); // Load initial cart count
    }
    renderProducts();
    setupMobileMenu();
    setupHeader();
});