document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".welcome h2", { duration: 1.5, x: -200, opacity: 0, ease: "power2" });
    gsap.from(".welcome p", { duration: 1.5, x: 200, opacity: 0, delay: 0.5, ease: "power2" });
    gsap.from("footer p", { duration: 2, y: 50, opacity: 0, delay: 1, ease: "power2" });// Header animation
    

    // Nav links animation
    gsap.from("nav ul li", {
        duration: 1,
        opacity: 0,
        y: -30,
        stagger: 0.2,
        delay: 1
    });
   
  gsap.from(".product", {
    scrollTrigger: {
        trigger: ".product",
        start: "top 80%", // ابدأ التحريك عندما يكون العنصر 80% من العرض
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3
});

    // About section animation
    gsap.from(".about p, .about h3", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
          end: "top 50%",
            toggleActions: "play none none none"
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    });
  
 

  
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalItemsElement = document.getElementById("total-items");
    const totalPriceElement = document.getElementById("total-price");

    let cart = [];

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const product = button.closest(".product");
            const productId = button.getAttribute("data-id");
            const productName = product.querySelector("p").textContent;
            const productPrice = parseFloat(product.querySelector("p").textContent.replace("سعر: $", ""));
            const productImage = product.querySelector("img").src;

            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            });

            product.style.display = "none";
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(function(item) {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>سعر: $${item.price.toFixed(2)}</p>
            `;

            cartItemsContainer.appendChild(cartItem);

            totalItems++;
            totalPrice += item.price;
        });

        totalItemsElement.textContent = `عدد الأصناف: ${totalItems}`;
        totalPriceElement.textContent = `المجموع: $${totalPrice.toFixed(2)}`;

        if (totalItems === 0) {
            cartItemsContainer.innerHTML = "<p>لا توجد منتجات في السلة حالياً.</p>";
        }
    }

    const checkoutButton = document.getElementById("checkout-button");
    const checkoutSection = document.getElementById("checkout-section");

    checkoutButton.addEventListener("click", function() {
        checkoutSection.style.display = "block";
        document.querySelector(".cart").style.display = "none";
    });

    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

   
    // Scroll-triggered animations
    gsap.from(".container h2", {
        scrollTrigger: {
            trigger: ".container h2",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        duration: 1.5,
        opacity: 0,
        y: 50
    });

    gsap.from(".product", {
        scrollTrigger: {
            trigger: ".product",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.3
         }); 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج الفعلي
    window.location.href = 'index.html'; // توجيه المستخدم إلى الصفحة الرئيسية
}); 
document.addEventListener('DOMContentLoaded', function() {
    // كود المنتجات والسلة كما هو

    // إضافة تعليق
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.getElementById('comment').value;
        addComment(commentText);
        document.getElementById('comment').value = ''; // إعادة تعيين الحقل
    });

    function addComment(commentText) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentText);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();
    }

    function displayComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentList.innerHTML = '<h3>التعليقات السابقة:</h3>';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = comment;
            commentList.appendChild(commentElement);
        });
    }

    displayComments(); // عرض التعليقات عند تحميل الصفحة
});


});