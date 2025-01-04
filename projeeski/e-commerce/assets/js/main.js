/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login')
  })
}

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style__switcher").classList.toggle("open");
})

// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
  if(document.querySelector(".style__switcher").classList.contains("open")) {
    document.querySelector(".style__switcher").classList.remove("open");
  }
})

// THEME COLORS
function themeColors() {
  const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");
  themeColorsContainer.addEventListener("click", ({target}) => {
    if(target.classList.contains("js-theme-color-item")) {
      localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
      setColors();
    }
  })
  function setColors() {
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0, path.length - 1);
    colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

    if(document.querySelector(".js-theme-color-item.active")) {
      document.querySelector(".js-theme-color-item.active").classList.remove("active");
    }
    document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
  }
  if(localStorage.getItem("color") !== null) {
    setColors();
  }
  else {
    const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
    document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active");
  }
}

themeColors();






















/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
});


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LIGHT BOX ===============*/

/*=============== LIGHT BOX ===============*/
// Diğer tüm kodlarınız buraya kadar gelir.
// HIDE STYLE SWITCHER ON SCROLL



/*=============== QUESTIONS ACCORDION ===============*/
const quizData = [
  {
      question: "Which product is typically used to cleanse your skin?",
      options: ["Toner", "Moisturizer", "Cleanser", "Sunscreen"],
      correct: "Cleanser"
  },
  {
      question: "If you have oily skin, which product is most suitable?",
      options: ["Heavy moisturizer", "Mattifying moisturizer", "Glycolic acid", "Hyaluronic acid"],
      correct: "Mattifying moisturizer"
  },
  {
      question: "Which product is essential to prevent UV damage to the skin?",
      options: ["Eye cream", "Serum", "Sunscreen", "Toner"],
      correct: "Sunscreen"
  },
  {
      question: "Which ingredient is best for dry skin?",
      options: ["Salicylic acid", "Hyaluronic acid", "Tea tree oil", "Retinol"],
      correct: "Hyaluronic acid"
  },
  {
      question: "Which ingredient is commonly used for acne-prone skin?",
      options: ["Niacinamide", "Salicylic acid", "Vitamin C", "Ceramides"],
      correct: "Salicylic acid"
  },
  {
      question: "How often should you apply sunscreen to protect your skin effectively?",
      options: ["Once a day", "Every 2 hours", "Only when it's sunny", "Before bedtime"],
      correct: "Every 2 hours"
  },
  {
      question: "What is the main benefit of Vitamin C in skincare?",
      options: ["Hydration", "Brightening the skin", "Reducing acne", "Exfoliation"],
      correct: "Brightening the skin"
  }
];

const quizContainer = document.getElementById("quiz-container");
const quizResult = document.getElementById("quiz-result");
const quizSubmit = document.getElementById("quiz-submit");

// Load quiz questions dynamically
function loadQuiz() {
  quizData.forEach((item, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("quiz__question");
      questionDiv.innerHTML = `
          <p>${index + 1}. ${item.question}</p>
          ${item.options
              .map(
                  (option) =>
                      `<label>
                          <input type="radio" name="question${index}" value="${option}">
                          ${option}
                      </label>`
              )
              .join("")}
      `;
      quizContainer.appendChild(questionDiv);
  });
}

// Check answers and display results
function checkAnswers() {
  let score = 0;

  quizData.forEach((item, index) => {
      const selectedOption = document.querySelector(
          `input[name="question${index}"]:checked`
      );

      if (selectedOption && selectedOption.value === item.correct) {
          score++;
      }
  });

  quizResult.textContent = `You got ${score} out of ${quizData.length} questions correct!`;
}

// Add event listener for quiz submission
quizSubmit.addEventListener("click", checkAnswers);

// Initialize the quiz
loadQuiz();
