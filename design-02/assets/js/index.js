const body = document.querySelector('body');
document.getElementById('toggle').onchange = ({target}) =>{
    body.style.background=(target.checked?'#212121':'');
}
