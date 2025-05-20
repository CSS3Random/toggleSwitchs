const body = document.querySelector('body');
document.getElementById('toggle').onchange = ({target}) =>{
    alert('hola mundo');
    body.style.background=(target.checked?'#212121':'');
}
