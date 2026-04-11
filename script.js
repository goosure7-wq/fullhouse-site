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
                <span class="product-cat">${p.category}</span>
                <h3 class="product-title"><a href="shop.html">${p.title}</a></h3>
                <div class="product-rating">
                    ${generateStars(p.rating)}
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        ${p.oldPrice ? `<del>${formatCurrency(p.oldPrice)}</del>` : ''}
                        ${formatCurrency(p.price)}
                    </div>
                    <button class="add-to-cart" title="Add to Cart" onclick="handleAddToCart(${p.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function handleAddToCart(productId) {
    if (typeof Cart !== 'undefined') {
        Cart.addItem(productId, 1);
        alert('Added to cart!');
    }
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
    if(typeof Cart !== 'undefined') {
        Cart.updateBadge(); // Load initial cart count
    }
    renderProducts();
    setupMobileMenu();
    setupHeader();
});