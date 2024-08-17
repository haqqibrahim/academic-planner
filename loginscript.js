document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Dummy login check (you can add your own authentication logic here)
    var username = document.getElementById("afam").value;
    var password = document.getElementById("nwokolo").value;

    if (username === "afam" && password === "nwokolo") { // Example credentials
        window.location.href = "index.html"; // Redirect to the homepage
    } else {
        document.getElementById("errorMsg").style.display = "block"; // Show error message
    }
});
