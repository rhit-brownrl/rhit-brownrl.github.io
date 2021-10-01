scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.onclick = (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = (event) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}