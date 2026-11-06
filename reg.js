const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
const fullName = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const dob = document.getElementById("dob").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (fullName === "" || email === "" || phone === "" || dob === "" || password === "" || confirmPassword === "") {
    registerMessage.textContent = "Please fill in all fields.";
    return;
}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
    registerMessage.textContent = "Please enter a valid email address.";
    return;
}
    if (password.length < 8) {
    registerMessage.textContent = "Password must contain at least 8 characters.";
    return;
} 
    if (password !== confirmPassword) {
    registerMessage.textContent = "Passwords do not match. Please try again.";
    return;
}
    registerMessage.textContent = "Your registration details have been validated successfully!";
    registerMessage.style.color = "green";
    registerMessage.style.display = "block";
    registerMessage.style.fontSize = "16px";

    registerForm.reset();

});