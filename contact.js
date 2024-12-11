// Get elements
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const blurBackground = document.getElementById('blurBackground');
const registerActionBtn = document.getElementById('registerActionBtn');
const loginActionBtn = document.getElementById('loginActionBtn');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginEmailInput = document.getElementById('loginEmailInput');
const loginPasswordInput = document.getElementById('loginPasswordInput');

// Show the register form and blur background when register button is clicked
registerBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    registerForm.style.display = 'block'; // Show the register form
    blurBackground.style.display = 'block'; // Show the blur background
    loginForm.style.display = 'none'; // Hide the login form
});

// Show the login form and blur background when login button is clicked
loginBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    loginForm.style.display = 'block'; // Show the login form
    blurBackground.style.display = 'block'; // Show the blur background
    registerForm.style.display = 'none'; // Hide the register form
});

// Handle the register button click: clear fields and hide the form
registerActionBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    emailInput.value = '';
    passwordInput.value = '';
    registerForm.style.display = 'none'; // Hide the register form
    blurBackground.style.display = 'none'; // Hide the blur background
});

// Handle the login button click: clear fields and hide the form
loginActionBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    loginEmailInput.value = '';
    loginPasswordInput.value = '';
    loginForm.style.display = 'none'; // Hide the login form
    blurBackground.style.display = 'none'; // Hide the blur background
});

// Close form if clicked outside the form or on the blur background
window.addEventListener('click', function(event) {
    if (event.target === blurBackground || event.target === registerForm || event.target === loginForm) {
        registerForm.style.display = 'none'; // Hide register form
        loginForm.style.display = 'none'; // Hide login form
        blurBackground.style.display = 'none'; // Hide blur background
    }
});
