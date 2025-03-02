document.addEventListener('DOMContentLoaded', () => {
    iniciarPantallaDeCarga();
    
    // Inicializar el panel de filtros
    const openFilterButton = document.querySelector('.open-filter');
    const filterOverlay = document.getElementById('filterOverlay');

    openFilterButton.addEventListener('click', function() {
        filterOverlay.style.display = 'flex';
    });

    // Evento para cerrar el panel de filtros al hacer clic fuera del panel
    filterOverlay.addEventListener('click', function(e) {
        if (e.target === filterOverlay) {
            filterOverlay.style.display = 'none';
        }
    });
});

function iniciarPantallaDeCarga() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%";
    const matrixTextElement = document.getElementById('matrix-text');
    const progressBarElement = document.getElementById('progress-bar');
    const progressPercentageElement = document.getElementById('progress-percentage');
    let progress = 0;

    const matrixInterval = setInterval(() => {
        const randomText = Array(8).fill(0).map(() => characters.charAt(Math.floor(Math.random() * characters.length))).join("");
        if (matrixTextElement) {
            matrixTextElement.textContent = `LOADING_SYSTEM: ${randomText}`;
        }
    }, 50);

    const progressInterval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(progressInterval);
            clearInterval(matrixInterval);
            setTimeout(() => {
                const splashScreen = document.getElementById('splash-screen');
                const app = document.getElementById('app');
                if (splashScreen) {
                    splashScreen.style.opacity = '0';
                    setTimeout(() => {
                        splashScreen.style.display = 'none';
                        if (app) app.style.display = 'block';
                        cargarProductos(); // Cargar productos después de la pantalla de carga
                        inicializarFiltros(); // Inicializar los filtros después de cargar los productos
                    }, 500);
                }
            }, 500);
        } else {
            progress += 1;
            if (progressBarElement) progressBarElement.style.width = `${progress}%`;
            if (progressPercentageElement) progressPercentageElement.textContent = `${progress}%`;
        }
    }, 30);
}

function inicializarFiltros() {
    const filterButton = document.getElementById('filterButton');
    const filterPanel = document.getElementById('main-collection-filters');

    if (filterButton && filterPanel) {
        filterButton.style.display = 'none'; // Initially hide the filter button
        setTimeout(() => {
            filterButton.style.display = 'block'; // Show the filter button after loading
        }, 4000); // Adjust time based on your loading screen duration

        filterButton.addEventListener('click', () => {
            filterPanel.classList.toggle('open');
        });

        const filterItems = document.querySelectorAll('.filter-content ul li');
        const removeAllButton = document.querySelector('.remove-all');
        const applyButton = document.querySelector('.apply');

        filterItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('selected');
            });
        });

        if (removeAllButton) {
            removeAllButton.addEventListener('click', () => {
                filterItems.forEach(item => {
                    item.classList.remove('selected');
                });
            });
        }

        if (applyButton) {
            applyButton.addEventListener('click', () => {
                const selectedFilters = Array.from(filterItems)
                    .filter(item => item.classList.contains('selected'))
                    .map(item => item.textContent.trim());
                
                console.log('Filtros seleccionados:', selectedFilters);
                filterPanel.classList.remove('open');
            });
        }
    }
}

function cargarProductos() {
    const productos = [
        {
            id: 1,
            nombre: "Camiseta Casual",
            precio: 29.99,
            descripcion: "Camiseta de algodón 100% premium",
            imagen: "https://via.placeholder.com/300x400"
        },
        // ... resto de los productos
    ];

    const contenedor = document.getElementById('productos-container');
    
    if (contenedor) {
        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.className = 'product';
            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <button onclick="comprarProducto(${producto.id})">Comprar Ahora</button>
            `;
            contenedor.appendChild(productoElement);
        });
    }
}

function comprarProducto(id) {
    const productos = [
        {
            id: 1,
            nombre: "Camiseta Casual",
            precio: 29.99,
            descripcion: "Camiseta de algodón 100% premium",
            imagen: "https://via.placeholder.com/300x400"
        },
        // ... resto de los productos
    ];

    const producto = productos.find(p => p.id === id);
    if (producto) {
        const mensaje = `Hola, me interesa comprar ${producto.nombre}`;
        const whatsappURL = `https://wa.me/+573215803766?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, '_blank');
    }
}

// Agregar al final del archivo JavaScript existente

document.addEventListener('DOMContentLoaded', () => {
    // Mantener todo el código existente del DOMContentLoaded

    // Agregar manejo del panel de filtros
    const filterButton = document.querySelector('.mobile-facets__open-wrapper');
    const filterPanel = document.querySelector('.facets-container');
    
    if (filterButton && filterPanel) {
        filterButton.addEventListener('click', () => {
            filterPanel.classList.toggle('active');
            // Si el panel tiene la clase 'active', está abierto
            const isOpen = filterPanel.classList.contains('active');
            
            if (isOpen) {
                filterPanel.style.right = '0';
                document.body.style.overflow = 'hidden'; // Prevenir scroll
            } else {
                filterPanel.style.right = '-100%';
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
    }

    // Cerrar el panel cuando se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!filterPanel.contains(e.target) && !filterButton.contains(e.target)) {
            filterPanel.classList.remove('active');
            filterPanel.style.right = '-100%';
            document.body.style.overflow = '';
        }
    });
});
