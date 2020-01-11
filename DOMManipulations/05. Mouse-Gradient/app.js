function attachGradientEvents() {
    let box = document.getElementById('gradient');

    box.addEventListener('mousemove', showCoords);
    box.addEventListener('mouseout', gradientOut);

    function showCoords(event) {
        let x = event.offsetX / (event.target.clientWidth - 1);
        x = Math.floor(x * 100);
        document.getElementById('result').textContent = x + '%';
    }

    function gradientOut() {
        document.getElementById('result').textContent = ""
    }

}