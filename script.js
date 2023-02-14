addCarimbo = () => {
    const carimbo = document.getElementById('carimbos');
    let img = document.createElement('img');
    img.src = './carimbo.jpg';
    img.alt = 'Carimbo!';
    img.style.border = '3px solid';
    img.style.borderColor = randomColor();
    carimbo.appendChild(img);
}

randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

removeCarimbo = () => {
    const carimbo = document.getElementById('carimbos');
    carimbo.removeChild(carimbo.lastChild);
}

styleChange = (property, value) => {
    const carimbo = document.getElementById('carimbos');
    carimbo.style[property] = value;
}
