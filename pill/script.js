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
                <div class="product-price-range">Price range: ${formatCurrency(p.price)} through ${formatCurrency(p.maxPrice)}</div>
                <input type="number" min="1" value="1" class="product-qty">
                <button class="btn add-cart-btn" onclick="addToCartFromCard(this, ${p.id})">Add to Cart</button>
                <button class="btn btn-primary select-options-btn" onclick="window.location.href='product.html?id=${p.id}'">Select options</button>
                <p class="product-note">This product has multiple variants. The options may be chosen on the product page.</p>
            </div>
        </div>
    `).join('');
}

// Render Category Sections
function renderCategorySection(gridId, category) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const catProducts = typeof products !== 'undefined' ? products.filter(p => p.category === category).slice(0, 4) : [];

    grid.innerHTML = catProducts.map(p => `
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
                <div class="product-price-range">Price range: ${formatCurrency(p.price)} through ${formatCurrency(p.maxPrice)}</div>
                <input type="number" min="1" value="1" class="product-qty">
                <button class="btn add-cart-btn" onclick="addToCartFromCard(this, ${p.id})">Add to Cart</button>
                <button class="btn btn-primary select-options-btn" onclick="window.location.href='product.html?id=${p.id}'">Select options</button>
                <p class="product-note">This product has multiple variants. The options may be chosen on the product page.</p>
            </div>
        </div>
    `).join('');
}

function handleAddToCart(productId, quantity = 1) {
    if (typeof Cart !== 'undefined') {
        Cart.addItem(productId, quantity);
        Cart.updateBadge();
        alert(`Added ${quantity} item${quantity === 1 ? '' : 's'} to cart!`);
    }
}

function addToCartFromCard(button, productId) {
    const card = button.closest('.product-card');
    if (!card) return;
    const qtyInput = card.querySelector('.product-qty');
    const quantity = Math.max(1, parseInt(qtyInput?.value, 10) || 1);
    handleAddToCart(productId, quantity);
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