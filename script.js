        // Données des produits
        const products = [
            {
                id: 1,
                name: "T-shirt Premium",
                price: 29.99,
                image: "/api/placeholder/250/200",
                description: "T-shirt en coton bio"
            },
            {
                id: 2,
                name: "Jean Slim",
                price: 59.99,
                image: "/api/placeholder/250/200",
                description: "Jean slim stretch confortable"
            },
            {
                id: 3,
                name: "Robe d'été",
                price: 49.99,
                image: "/api/placeholder/250/200",
                description: "Robe légère et élégante"
            },
            {
                id: 4,
                name: "Veste en cuir",
                price: 129.99,
                image: "/api/placeholder/250/200",
                description: "Veste en cuir véritable"
            },
            // Ajoutez d'autres produits ici
        ];

        // Panier
        let cart = [];

        // Afficher les produits
        function displayProducts() {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">${product.price}€</p>
                        <p>${product.description}</p>
                        <button onclick="addToCart(${product.id})" class="add-to-cart">
                            Ajouter au panier
                        </button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
        }

        // Ajouter au panier
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartCount();
                updateCartDisplay();
            }
        }

        // Mettre à jour le compteur du panier
        function updateCartCount() {
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = cart.length;
        }

        // Afficher/Masquer le panier
        function toggleCart() {
            const cartModal = document.getElementById('cartModal');
            cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
            updateCartDisplay();
        }

        // Mettre à jour l'affichage du panier
        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.price}€</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="add-to-cart" style="background-color: #e74c3c;">
                        Supprimer
                    </button>
                `;
                cartItems.appendChild(cartItem);
                total += item.price;
            });

            cartTotal.textContent = `Total: ${total.toFixed(2)}€`;
        }

        // Supprimer du panier
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartCount();
            updateCartDisplay();
        }

        // Commander
        function checkout() {
            if (cart.length === 0) {
                alert('Votre panier est vide !');
                return;
            }
            alert('Commande validée ! Merci de votre achat.');
            cart = [];
            updateCartCount();
            toggleCart();
        }

        // Initialiser l'affichage
        displayProducts();
    
        document
        .getElementById("contactForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const message = document.getElementById("message").value;
      
          alert(`Merci ${name}! Votre message a été envoyé.`);
          // Optionnel: Envoyer les données à un serveur
          this.reset();
        });
      