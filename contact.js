// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Validate form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name && email && phone && subject && message) {
        // Simulate successful form submission
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
        
        // Clear the form
        document.getElementById("contactForm").reset();
    } else {
        // Show error message if validation fails
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
    }
});
