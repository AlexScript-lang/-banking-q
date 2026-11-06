const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
    const target = Number(counter.dataset.target);
    let count = 0;

    const interval = setInterval(function () {
        count++;

        counter.textContent = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 20);
});

const reviews = document.querySelectorAll(".review");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentReviews = 0;

nextBtn.addEventListener("click", function () {

reviews[currentReviews].classList.remove("active");

currentReviews++;

if (currentReviews >= reviews.length) {
    currentReviews = 0;
}

reviews[currentReviews].classList.add("active");

});

prevBtn.addEventListener("click", function () {

reviews[currentReviews].classList.remove("active");

currentReviews--;

if (currentReviews < 0) {
    currentReviews = reviews.length - 1;
}

reviews[currentReviews].classList.add("active");

});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

question.addEventListener("click", function() {

    const faqItem = question.parentElement;
    const faqAnswer = faqItem.querySelector(".faq-answer");
    const icon = question.querySelector("span");


    document.querySelectorAll(".faq-item").forEach(function(item) {

        item.classList.remove("active");

        item.querySelector(".faq-answer").style.display = "none";

        item.querySelector(".faq-question span").textContent = "+";

    });

    if (faqAnswer.style.display === "none" || faqAnswer.style.display === "") {

        faqAnswer.style.display = "block";
        faqItem.classList.add("active");
        icon.textContent = "−";

    }

});


});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    
    if (fullName === "") {
        formMessage.textContent = "please enter your full name.";
        return;
    }
    
    if (email === "") {
        formMessage.textContent = "please enter your email.";
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }
    
    if (subject === "" ) {
        formMessage.textContent = "please enter a message.";
        return;
    }
    
    if (message === "") {
        formMessage.textContent = "please enter a message.";
        return;
    }
    
    
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("subject:", subject);
    console.log("message:", message);
    
    formMessage.textContent = "Your message has been validated successfully";
    formMessage.style.color = "green";
    formMessage.style.display = "block";
    formMessage.style.fontSize = "16px";
    
    contactForm.reset();
});

const featuresLinks = document.getElementById("featuresLinks");
featuresLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("features").scrollIntoView ( {
        behavior: "smooth"
    });
});

const savingsLinks = document.getElementById("savingsLinks");
savingsLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("savings").scrollIntoView ({
        behavior: "smooth"
    });
});

const aboutLinks = document.getElementById("aboutLinks");
aboutLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("about").scrollIntoView ({
        behavior: "smooth"
    });
});

const blogLinks = document.getElementById("blogLinks");
blogLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("blog").scrollIntoView ({
        behavior: "smooth"
    });
});

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    
      if (navLinks.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

}
