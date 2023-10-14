const container = document.getElementById('container');
const img = document.querySelector('img');
container.addEventListener('mouseover', (event) => {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = `scale(2)`;
    console.log(x, y);
});

//-------------reset zoom--------
container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = "center center";
    img.style.transform = `scale(1)`;
})