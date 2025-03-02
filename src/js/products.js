function viewProduct(productId) {
    window.location.href = `products.html?id=${productId}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const products = {
        "h01": {
            name: "ENEMY RHINESTONE CROP ZIP HOODIE BLACK",
            price: "$143.00",
            description: "Stylish hoodie with rhinestone details.",
            image: "https://namedcollective.com/cdn/shop/files/enemy-rhinestone-crop-zip-hoodie-black-1.jpg?v=1738753537",
            image2: "https://namedcollective.com/cdn/shop/files/enemy-rhinestone-crop-zip-hoodie-black-2.jpg?v=1738753538",
            image3: "https://namedcollective.com/cdn/shop/files/enemy-rhinestone-crop-zip-hoodie-black-3.jpg?v=1738753538&width=1680",
            image4: "https://namedcollective.com/cdn/shop/files/enemy-rhinestone-crop-zip-hoodie-black-4.jpg?v=1738753538&width=1445",
            image5: "https://namedcollective.com/cdn/shop/files/enemy-rhinestone-crop-zip-hoodie-black-5.jpg?v=1738753538&width=1445",
            similar: [
                { name: "PREY FAUX FUR ZIP HOODIE PINK CAMO", price: "$157.00", image: "https://namedcollective.com/cdn/shop/files/prey-faux-fur-zip-hoodie-pink-camo-1.jpg?v=1738753512&width=1680" }
            ]
        },
        "h02": {
            name: "PREY FAUX FUR ZIP HOODIE PINK CAMO",
            price: "$157.00",
            description: "Stylish faux fur zip hoodie in pink camo pattern.",
            image: "https://namedcollective.com/cdn/shop/files/prey-faux-fur-zip-hoodie-pink-camo-1.jpg?v=1738753512&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/prey-faux-fur-zip-hoodie-pink-camo-2.jpg?v=1738753512&width=1680"
        },
        "h03": {
            name: "FERAL FAUX FUR STUDDED ZIP HOODIE BLACK",
            price: "$172.00",
            description: "Studded zip hoodie with faux fur details in black.",
            image: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-black-1.jpg?v=1738753466&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-black-2.jpg?v=1738753466&width=1680"
        },
        "h04": {
            name: "PREY FAUX FUR ZIP HOODIE SNOW CAMO",
            price: "$157.00",
            description: "Faux fur zip hoodie in snow camo pattern.",
            image: "https://namedcollective.com/cdn/shop/files/prey-faux-fur-zip-hoodie-snow-camo-1.jpg?v=1738753514&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/prey-faux-fur-zip-hoodie-snow-camo-2.jpg?v=1738753514&width=1680"
        },
        "h05": {
            name: "PREY FAUX FUR FITTED ZIP HOODIE TREE CAMO",
            price: "$136.00",
            description: "Fitted zip hoodie with faux fur in tree camo pattern.",
            image: "https://namedcollective.com/cdn/shop/files/PREYFITTEDHOODIENATURALFRONTWIDE.jpg?v=1738753516&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/prey-faux-fur-fitted-zip-hoodie-tree-camo-2.jpg?v=1738753516&width=1680"
        },
        "h06": {
            name: "FERAL FAUX FUR FITTED ZIP HOODIE BLACK",
            price: "$150.00",
            description: "Fitted zip hoodie with faux fur in black.",
            image: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-fitted-zip-hoodie-black-1.jpg?v=1738753458&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-fitted-zip-hoodie-black-2.jpg?v=1738753459&width=1680"
        },
        "h07": {
            name: "FERAL FAUX FUR REVERSIBLE BOMBER JACKET BLACK",
            price: "$322.00",
            description: "Reversible bomber jacket with faux fur in black.",
            image: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-reversible-bomber-jacket-black-1_05009eb4-8845-4b2e-9299-ccfdc16fddd3.jpg?v=1738753469&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-reversible-bomber-jacket-black-3_a4c5d31d-a975-4989-9478-4844bf1cfd08.jpg?v=1738753469&width=1680"
        },
        "h08": {
            name: "FERAL FAUX FUR STUDDED ZIP HOODIE SNOW LEOPARD",
            price: "$172.00",
            description: "Studded zip hoodie with faux fur in snow leopard pattern.",
            image: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-snow-leopard-1.jpg?v=1738753464&width=1680",
            image2: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-snow-leopard-2.jpg?v=1738753464&width=1680",
            image3: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-snow-leopard-4.jpg?v=1738753464&width=1680",
            image4: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-snow-leopard-5.jpg?v=1738753464&width=1680",
            image5: "https://namedcollective.com/cdn/shop/files/feral-faux-fur-studded-zip-hoodie-snow-leopard-7.jpg?v=1738753465&width=1680"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && products[productId]) {
        const product = products[productId];
        
        // Actualizar información del producto
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('productDescription').textContent = product.description;

        // Configurar Swiper
        const galleryContainer = document.querySelector('.product-gallery');
        galleryContainer.innerHTML = `
            <div class="swiper product-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="swiper-slide">
                        <img src="${product.image2}" alt="${product.name}">
                    </div>
                    ${product.image3 ? `
                        <div class="swiper-slide">
                            <img src="${product.image3}" alt="${product.name}">
                        </div>
                        <div class="swiper-slide">
                            <img src="${product.image4}" alt="${product.name}">
                        </div>
                        <div class="swiper-slide">
                            <img src="${product.image5}" alt="${product.name}">
                        </div>
                    ` : ''}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        `;

        // Inicializar Swiper
        const swiper = new Swiper('.product-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            if (!localStorage.getItem('announcementShown')) {
                document.getElementById('announcementOverlay').style.display = 'flex';
                localStorage.setItem('announcementShown', 'true');
            }
        
            document.getElementById('closeButton').addEventListener('click', function() {
                document.getElementById('announcementOverlay').style.display = 'none';
            });
        
            // Mostrar el nombre y el email del usuario si están almacenados
            const userEmail = localStorage.getItem('userEmail');
        
            if (userEmail) {
                document.getElementById('userEmail').textContent = userEmail; // Cambia 'value' por 'textContent'
            }
        });
        
    }
});