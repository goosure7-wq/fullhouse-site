// Unified Product Database for Fullhouse Pill
// All 106 products scraped from https://fullhousepill.com/shop (9 pages)
const products = [
    {
        "id": 1,
        "title": "Tadalista 60",
        "category": "Uncategorized",
        "price": 70,
        "maxPrice": 500,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Tadalista 60",
        "description": "Tadalafil-based medication for improved performance and confident experiences."
    },
    {
        "id": 2,
        "title": "Sildigra 100",
        "category": "Uncategorized",
        "price": 60,
        "maxPrice": 425,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Sildigra 100",
        "description": "Reliable sildenafil treatment with a strong track record for erectile function."
    },
    {
        "id": 3,
        "title": "Sildalist 120",
        "category": "Uncategorized",
        "price": 65,
        "maxPrice": 500,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Sildalist 120",
        "description": "A combination strength for both confidence and long-lasting effects."
    },
    {
        "id": 4,
        "title": "Poxet 90 Tablet",
        "category": "Erectile Dysfunction",
        "price": 75,
        "maxPrice": 550,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Poxet 90 Tablet",
        "description": "Designed to provide reliable PE support and better performance."
    },
    {
        "id": 5,
        "title": "Malegra Oral Jelly",
        "category": "Uncategorized",
        "price": 80,
        "maxPrice": 550,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Malegra Oral Jelly",
        "description": "Quick-acting oral jelly for discreet, rapid relief."
    },
    {
        "id": 6,
        "title": "Malegra 200",
        "category": "Uncategorized",
        "price": 65,
        "maxPrice": 450,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Malegra 200",
        "description": "A higher-strength sildenafil dose for dependable ED support."
    },
    {
        "id": 7,
        "title": "Ivermectin Tablet 6mg",
        "category": "Uncategorized",
        "price": 70,
        "maxPrice": 400,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Ivermectin Tablet 6mg",
        "description": "A well-known antiparasitic tablet for targeted health needs."
    },
    {
        "id": 8,
        "title": "Dapoxetine Tablets",
        "category": "Premature Ejaculation",
        "price": 75,
        "maxPrice": 570,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Dapoxetine Tablets",
        "description": "Effective dapoxetine treatment for better control and longer-lasting intimacy.",
        "oldPrice": 90
    },
    {
        "id": 9,
        "title": "Minoxidil Tablets",
        "category": "Hair Loss",
        "price": 95,
        "maxPrice": 280,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Minoxidil Tablets",
        "description": "Hair growth support tablets formulated to reduce shedding and improve scalp health."
    },
    {
        "id": 10,
        "title": "Kamagra Oral Jelly 100 mg",
        "category": "Erectile Dysfunction",
        "price": 80,
        "maxPrice": 550,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Kamagra Oral Jelly 100 mg",
        "description": "A fast-absorbing jelly formulation for quick ED relief."
    },
    {
        "id": 11,
        "title": "Alprostadil Injection 500 mcg",
        "category": "Erectile Dysfunction",
        "price": 250,
        "maxPrice": 750,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": true,
        "subtitle": "Alprostadil Injection 500 mcg",
        "description": "A potent injectable therapy for more advanced erectile dysfunction treatment.",
        "oldPrice": 300,
        "hasDiscount": true
    },
    {
        "id": 12,
        "title": "Dutasteride 0.5 mg",
        "category": "Hair Loss",
        "price": 75,
        "maxPrice": 425,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Dutasteride 0.5 mg",
        "description": "A proven hair loss therapy that helps block DHT and support regrowth."
    },
    {
        "id": 13,
        "title": "Kamagra 100 mg tablet",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 500,
        "rating": 4.75,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A well-known sildenafil formulation for dependable sexual performance."
    },
    {
        "id": 14,
        "title": "RU-486 (Mifepristone) Tablets",
        "category": "Abortion",
        "price": 185,
        "maxPrice": 360,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Modalert 200 mg Tablets",
        "description": "Trusted modafinil tablets for managing sleepiness and boosting productivity.",
        "oldPrice": 110
    },
    {
        "id": 15,
        "title": "Super Kamagra (Sildenafil Citrate and Dapoxetine)",
        "category": "Erectile Dysfunction",
        "price": 85,
        "maxPrice": 565,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Combination therapy designed to improve erection and delay ejaculation."
    },
    {
        "id": 16,
        "title": "MTP Kit (Combipack of Mifepristone and Misoprostol)",
        "category": "Abortion",
        "price": 180,
        "maxPrice": 515,
        "rating": 4.75,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Modvigil 200 mg",
        "description": "Stronger modafinil support for longer-lasting wakefulness and daily focus.",
        "oldPrice": 120
    },
    {
        "id": 17,
        "title": "Vidalista 60 mg",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 500,
        "rating": 4.57,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Tadalafil-based formula for long-acting sexual confidence."
    },
    {
        "id": 18,
        "title": "Cenforce 200 mg (Sildenafil Citrate)",
        "category": "Cenforce",
        "price": 65,
        "maxPrice": 450,
        "rating": 4.63,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Cenforce 200 mg (Sildenafil Citrate)",
        "description": "A stronger dose of sildenafil for more resilient erectile performance."
    },
    {
        "id": 19,
        "title": "Cenforce 150 mg Tablets (Sildenafil Citrate)",
        "category": "Cenforce",
        "price": 65,
        "maxPrice": 475,
        "rating": 4.6,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Sildigra 100",
        "description": "Reliable sildenafil treatment with a strong track record for erectile function."
    },
    {
        "id": 20,
        "title": "Super P Force Tablets (Sildenafil+ Dapoxetine)",
        "category": "Premature Ejaculation",
        "price": 75,
        "maxPrice": 550,
        "rating": 4.4,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Sildalist 120",
        "description": "A combination strength for both confidence and long-lasting effects."
    },
    {
        "id": 21,
        "title": "Cenforce D 160 mg tablet",
        "category": "Erectile Dysfunction",
        "price": 75,
        "maxPrice": 550,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A combination ED tablet that includes dapoxetine for better control."
    },
    {
        "id": 22,
        "title": "Fildena Xxx 100 Mg Chewable Tablets",
        "category": "Erectile Dysfunction",
        "price": 75,
        "maxPrice": 550,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "An easy-to-take chewable sildenafil tablet for fast onset and discreet dosing."
    },
    {
        "id": 23,
        "title": "Cenforce 100 mg Tablets (Sildenafil Citrate)",
        "category": "Cenforce",
        "price": 60,
        "maxPrice": 425,
        "rating": 4.59,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Cenforce 100 mg Tablets (Sildenafil Citrate)",
        "description": "Popular 100 mg sildenafil tablets for consistent, discreet relief."
    },
    {
        "id": 24,
        "title": "Suhagra 100 mg Tablets",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 450,
        "rating": 4.5,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Suhagra 100 mg Tablets",
        "description": "A popular sildenafil option for reliable results and discreet home delivery.",
        "oldPrice": 50
    },
    {
        "id": 25,
        "title": "Vidalista 20 mg",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 450,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Tadalafil-based ED medication for long-lasting performance and discreet delivery."
    },
    {
        "id": 26,
        "title": "Vidalista 40 mg",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 4.5,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Stronger tadalafil formula for enhanced erectile support and endurance."
    },
    {
        "id": 27,
        "title": "Vigora 100 mg",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 450,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Sildenafil-based medication for reliable erectile performance."
    },
    {
        "id": 28,
        "title": "Fildena 100 mg",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 450,
        "rating": 4.5,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A trusted sildenafil tablet for ED relief with quick onset."
    },
    {
        "id": 29,
        "title": "Waklert 150 mg",
        "category": "Narcolepsy",
        "price": 75,
        "maxPrice": 550,
        "rating": 4.5,
        "image": "images/product-placeholder.svg",
        "sale": true,
        "subtitle": "Waklert 150 mg",
        "description": "A premium wakefulness medication for improved daytime focus and energy.",
        "oldPrice": 95,
        "hasDiscount": true
    },
    {
        "id": 30,
        "title": "Aurogra 100 mg Tablets",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 450,
        "rating": 4.57,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A well-known sildenafil formulation for dependable sexual performance."
    },
    {
        "id": 31,
        "title": "Cenforce 120 mg Tablets (Sildenafil Citrate)",
        "category": "Cenforce",
        "price": 65,
        "maxPrice": 500,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Sildenafil tablets for powerful ED support in a 120 mg dose."
    },
    {
        "id": 32,
        "title": "Cenforce FM (Sildenafil Citrate)",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 450,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Sildenafil-based formula with a feminine-friendly tablet shape."
    },
    {
        "id": 33,
        "title": "Climax Spray",
        "category": "Premature Ejaculation",
        "price": 75,
        "maxPrice": 495,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Premature Ejaculation Medication: Pills and Treatment",
        "description": "A fast-acting topical spray for improved performance and delayed climax."
    },
    {
        "id": 34,
        "title": "Modalert 200 mg Tablets",
        "category": "Narcolepsy",
        "price": 75,
        "maxPrice": 550,
        "rating": 4,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Modalert 200 mg Tablets",
        "description": "Trusted modafinil tablets for managing sleepiness and boosting productivity.",
        "oldPrice": 110
    },
    {
        "id": 35,
        "title": "Extra Super P Force 200 mg",
        "category": "Erectile Dysfunction",
        "price": 85,
        "maxPrice": 400,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Cenforce 200 mg (Sildenafil Citrate)",
        "description": "A stronger dose of sildenafil for more resilient erectile performance."
    },
    {
        "id": 36,
        "title": "Silagra 100 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 515,
        "rating": 4.5,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A premium sildenafil tablet for consistent erectile support and discreet shipping."
    },
    {
        "id": 37,
        "title": "Kamagra 50mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 420,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A combination ED tablet that includes dapoxetine for better control."
    },
    {
        "id": 38,
        "title": "Artvigil 150 mg",
        "category": "Narcolepsy",
        "price": 80,
        "maxPrice": 435,
        "rating": 5,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "An easy-to-take chewable sildenafil tablet for fast onset and discreet dosing."
    },
    {
        "id": 39,
        "title": "Ceebis 20 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "outOfStock": true,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Tadalafil-based ED medication for long-lasting performance and discreet delivery."
    },
    {
        "id": 40,
        "title": "Cenforce 50 mg Tablets (Sildenafil Citrate)",
        "category": "Cenforce",
        "price": 60,
        "maxPrice": 420,
        "rating": 4.67,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Stronger tadalafil formula for enhanced erectile support and endurance."
    },
    {
        "id": 41,
        "title": "Cytotec 200 mcg (Misoprostol) Tablets",
        "category": "Abortion",
        "price": 110,
        "maxPrice": 360,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Sildenafil-based medication for reliable erectile performance."
    },
    {
        "id": 42,
        "title": "Tadarise 20 mg",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 450,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A trusted sildenafil tablet for ED relief with quick onset."
    },
    {
        "id": 43,
        "title": "Vidalista Black 80 mg",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 500,
        "rating": 4.6,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Aurogra tablets for effective erectile dysfunction treatment."
    },
    {
        "id": 44,
        "title": "Fildena 50 Mg",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 420,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Sildenafil tablets for powerful ED support in a 120 mg dose."
    },
    {
        "id": 45,
        "title": "Caverta 100 mg",
        "category": "Erectile Dysfunction",
        "price": 110,
        "maxPrice": 345,
        "rating": 4.67,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Sildenafil-based formula with a feminine-friendly tablet shape."
    },
    {
        "id": 46,
        "title": "Modvigil 200 mg",
        "category": "Narcolepsy",
        "price": 110,
        "maxPrice": 475,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Modvigil 200 mg",
        "description": "Stronger modafinil support for longer-lasting wakefulness and daily focus.",
        "oldPrice": 120
    },
    {
        "id": 47,
        "title": "Tadacip 20 mg Tablets",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 480,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Narcolepsy symptoms, treatment and medication",
        "description": "Modafinil tablets to help manage sleepiness and improve focus."
    },
    {
        "id": 48,
        "title": "Vidalista Professional 20mg",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 450,
        "rating": 0,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "Combination sildenafil and dapoxetine tablets for ED and delay control."
    },
    {
        "id": 49,
        "title": "Vilitra 60 mg (Vardenafil)",
        "category": "Erectile Dysfunction",
        "price": 75,
        "maxPrice": 515,
        "rating": 4.5,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Erectile Dysfunction Medication, Pills and Treatment Online",
        "description": "A premium sildenafil tablet for consistent erectile support and discreet shipping."
    },
    {
        "id": 50,
        "title": "Finast 5 mg Tablets for Hair Loss",
        "category": "Hair Loss",
        "price": 70,
        "maxPrice": 450,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 51,
        "title": "Vidalista 5 mg",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 425,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 52,
        "title": "Cenforce Professional 100 mg Tablets",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 425,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 53,
        "title": "Fildena 25 mg tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 420,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 54,
        "title": "Kamagra Chewable Tablets 100 mg",
        "category": "Erectile Dysfunction",
        "price": 75,
        "maxPrice": 515,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 55,
        "title": "Modalert 100 mg",
        "category": "Narcolepsy",
        "price": 90,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 56,
        "title": "Vilitra 40 mg (Vardenafil)",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 500,
        "rating": 5,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 57,
        "title": "Cenforce Soft 100 mg Chewable Tablet",
        "category": "Cenforce",
        "price": 75,
        "maxPrice": 515,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 58,
        "title": "Tadalista 40 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 59,
        "title": "Vidalista CT 20mg – Chewable Tadalafil Tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 60,
        "title": "Tastylia 20 mg",
        "category": "Erectile Dysfunction",
        "price": 80,
        "maxPrice": 525,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 61,
        "title": "Vega 100 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 465,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 62,
        "title": "Malegra 50 mg",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 420,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 63,
        "title": "Tadalista 10mg Tadalafil Tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 64,
        "title": "Tadalista 5 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 60,
        "maxPrice": 425,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 65,
        "title": "Tadarise 40 Mg",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 66,
        "title": "Tadarise 60 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 67,
        "title": "Cenforce 25 mg (Sildenafil Citrate)",
        "category": "Cenforce",
        "price": 60,
        "maxPrice": 420,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 68,
        "title": "Filitra 20 mg",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 69,
        "title": "Finax 1mg (Finasteride) Tablet",
        "category": "Hair Loss",
        "price": 70,
        "maxPrice": 375,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 70,
        "title": "Fincar 5mg (Finasteride)",
        "category": "Hair Loss",
        "price": 70,
        "maxPrice": 450,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 71,
        "title": "Modawake 200 mg",
        "category": "Narcolepsy",
        "price": 90,
        "maxPrice": 450,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 72,
        "title": "Poxet 30 mg",
        "category": "Premature Ejaculation",
        "price": 75,
        "maxPrice": 550,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 73,
        "title": "Poxet 60mg (Dapoxetine)",
        "category": "Premature Ejaculation",
        "price": 75,
        "maxPrice": 550,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 74,
        "title": "Tadaflo 20 mg",
        "category": "Erectile Dysfunction",
        "price": 105,
        "maxPrice": 550,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 75,
        "title": "Tadapox 20mg (Tadalafil+Dapoxetine)",
        "category": "Premature Ejaculation",
        "price": 75,
        "maxPrice": 550,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 76,
        "title": "Vilitra 10 mg (Vardenafil)",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 77,
        "title": "Vilitra 20 mg Tablets (Vardenafil)",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 78,
        "title": "Zeagra 100 mg Tablet",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 79,
        "title": "Penegra 100 Mg",
        "category": "Uncategorized",
        "price": 110,
        "maxPrice": 345,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 80,
        "title": "Tadalista Professional",
        "category": "Erectile Dysfunction",
        "price": 65,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 81,
        "title": "Forzest 20 mg",
        "category": "Erectile Dysfunction",
        "price": 110,
        "maxPrice": 195,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 82,
        "title": "Modvigil 100 mg Tablets",
        "category": "Narcolepsy",
        "price": 100,
        "maxPrice": 425,
        "rating": 4.6,
        "image": "images/product-placeholder.svg",
        "sale": false,
        "subtitle": "Modvigil 100 mg Tablets",
        "description": "An effective wakefulness aid for handling fatigue and improving alertness."
    },
    {
        "id": 83,
        "title": "Eriacta 100 mg",
        "category": "Erectile Dysfunction",
        "price": 70,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 84,
        "title": "Finpecia 1mg (Finasteride)",
        "category": "Hair Loss",
        "price": 70,
        "maxPrice": 350,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 85,
        "title": "Dostiheal 0.25 Tablet",
        "category": "Erectile Dysfunction",
        "price": 100,
        "maxPrice": 425,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 86,
        "title": "Dostiheal 0.50 Tablet",
        "category": "Erectile Dysfunction",
        "price": 80,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 87,
        "title": "Avana 50mg",
        "category": "Erectile Dysfunction",
        "price": 90,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 88,
        "title": "Avana 200mg",
        "category": "Erectile Dysfunction",
        "price": 105,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 89,
        "title": "Avana 100mg",
        "category": "Erectile Dysfunction",
        "price": 105,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 90,
        "title": "Aspadol 100 mg",
        "category": "Uncategorized",
        "price": 75,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": true
    },
    {
        "id": 91,
        "title": "Zopiclone 10 mg",
        "category": "Uncategorized",
        "price": 105,
        "maxPrice": 490,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 92,
        "title": "Doxycycline 100 mg",
        "category": "Uncategorized",
        "price": 70,
        "maxPrice": 425,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 93,
        "title": "Azithromycin 500 mg",
        "category": "Uncategorized",
        "price": 70,
        "maxPrice": 480,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 94,
        "title": "Cernos Gel 1%",
        "category": "Uncategorized",
        "price": 75,
        "maxPrice": 435,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 95,
        "title": "Zopiclone 7.5 mg",
        "category": "Uncategorized",
        "price": 90,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 96,
        "title": "Altraz 1 mg (Anastrozole) Tablet",
        "category": "Uncategorized",
        "price": 90,
        "maxPrice": 495,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 97,
        "title": "Atorva 40 mg",
        "category": "Uncategorized",
        "price": 70,
        "maxPrice": 375,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 98,
        "title": "Trajenta 5 mg",
        "category": "Uncategorized",
        "price": 105,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 99,
        "title": "Stablon 12.5 mg Tablet",
        "category": "Uncategorized",
        "price": 75,
        "maxPrice": 475,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 100,
        "title": "Silodosin Capsule",
        "category": "Uncategorized",
        "price": 60,
        "maxPrice": 405,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 101,
        "title": "Motilium 10 mg",
        "category": "Uncategorized",
        "price": 55,
        "maxPrice": 260,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 102,
        "title": "Levolin 50 mcg Inhaler",
        "category": "Uncategorized",
        "price": 60,
        "maxPrice": 195,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 103,
        "title": "Fucicort Cream",
        "category": "Uncategorized",
        "price": 60,
        "maxPrice": 210,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 104,
        "title": "Novelon Tablets",
        "category": "Uncategorized",
        "price": 55,
        "maxPrice": 105,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 105,
        "title": "Ginette 35",
        "category": "Uncategorized",
        "price": 60,
        "maxPrice": 160,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    },
    {
        "id": 106,
        "title": "Lovegra 100 mg",
        "category": "Women's Health",
        "price": 70,
        "maxPrice": 500,
        "rating": 0,
        "image": "product.webp",
        "sale": false
    }
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

// Generate star rating HTML
function renderStars(rating) {
    if (!rating) return '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.25;
    let html = '<div class="product-stars">';
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fa-solid fa-star"></i>';
    }
    if (halfStar) {
        html += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="fa-regular fa-star"></i>';
    }
    html += `<span class="rating-text">Rated ${rating.toFixed(2)} out of 5</span>`;
    html += '</div>';
    return html;
}

// Global Pricing Map for Pills
const PILL_PRICING = {
    30: 65,
    60: 105,
    120: 150,
    240: 240,
    500: 500
};

// Global Cart functionality wrapped around LocalStorage
class Cart {
    static getItems() {
        const cartStr = localStorage.getItem('fullhouseCart');
        return cartStr ? JSON.parse(cartStr) : [];
    }

    static addItem(productId, quantity = 1, pillCount = 30, price = PILL_PRICING[30]) {
        const items = this.getItems();
        // Group by product id AND pill count
        const existing = items.find(item => item.id === productId && item.pillCount == pillCount);
        if (existing) {
            existing.quantity += quantity;
        } else {
            items.push({ id: productId, quantity, pillCount, price });
        }
        localStorage.setItem('fullhouseCart', JSON.stringify(items));
        this.updateBadge();
        return items;
    }

    static removeItem(productId, pillCount) {
        const items = this.getItems().filter(item => !(item.id === productId && item.pillCount == pillCount));
        localStorage.setItem('fullhouseCart', JSON.stringify(items));
        this.updateBadge();
        return items;
    }

    static updateQuantity(productId, pillCount, quantity) {
        let items = this.getItems();
        const existing = items.find(item => item.id === productId && item.pillCount == pillCount);
        if (existing) {
            existing.quantity = parseInt(quantity);
            if(existing.quantity <= 0) {
                items = items.filter(item => !(item.id === productId && item.pillCount == pillCount));
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
            // Use variant price if available, otherwise fallback
            const itemPrice = item.price || (products.find(p => p.id === item.id)?.price || 0);
            return total + (itemPrice * item.quantity);
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

