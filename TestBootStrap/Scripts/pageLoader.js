var loadTime;

function pageLoader() {
    loadTime = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader-background").style.display = "none";
    document.getElementById("preload-target").style.display = "block";
}