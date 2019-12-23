function generateParticles(elSelector, count, minSize, maxSize) {
    const el = document.querySelector(elSelector);
    for (var i = 0; i < count; i++) {
        const size = rnd(minSize, maxSize);
        const posX = rnd(2, 98);
        const posY = rnd(2, 98);
        el.insertAdjacentHTML(
            "beforeend",
            '<span class="particle" style="width:' +
            size +
            "px; height:" +
            size +
            "px; left:" +
            posX +
            "%; top:" +
            posY +
            "%; animation-delay:" +
            rnd(0, 30) / 15 +
            's"></span>'
        );
    }
}

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

generateParticles("#id", 100, 2, 25);