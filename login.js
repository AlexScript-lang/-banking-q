const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    
const email = document.getElementById("loginEmail").value.trim();
const password = document.getElementById("loginPassword").value;
    
    if (email === "" || password === "") {
        loginMessage.textContent = "Please fill in all fields.";
        return;
}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        loginMessage.textContent = "Please enter a valid email address.";
        return;
}
    const demoEmail = "demo@bankingq.com";
    const demoPassword = "Banking123";

    if (email !== demoEmail || password !== demoPassword) {
        loginMessage.textContent = "Invalid email or password. Please try again.";
        return;
}
    loginMessage.textContent = "Login successful! Welcome to Banking Q.";
    loginMessage.style.color = "green";
    loginMessage.style.display = "block";
    loginMessage.style.fontSize = "16px";

    loginForm.reset();

});