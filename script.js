
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (let link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.getElementById("openPopup");
    const popupWindow = document.getElementById("popupWindow");
    const closePopupButton = document.getElementById("closePopup");

    openPopupButton.addEventListener("click", function() {
        popupWindow.style.display = "block";
    });

    closePopupButton.addEventListener("click", function() {
        popupWindow.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupWindow) {
            popupWindow.style.display = "none";
        }
    });
});
