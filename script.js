addCarimbo = () => {
    const carimbo = document.getElementById('carimbos');
    let img = document.createElement('img');
    img.src = './carimbo.jpg';
    img.alt = 'Carimbo!';
    carimbo.appendChild(img);
}

removeCarimbo = () => {
    const carimbo = document.getElementById('carimbos');
    carimbo.removeChild(carimbo.lastChild);
}

styleChange = (property, value) => {
    const carimbo = document.getElementById('carimbos');
    carimbo.style[property] = value;
}
