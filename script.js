const industrial = document.querySelector('.industrial');
const center = document.querySelector('.center');
const countryside = document.querySelector('.countryside');
const map = document.querySelector('#map');


document.addEventListener('DOMContentLoaded', function(){
    industrial.addEventListener('mouseout',() => {
        map.src = 'img/map.png';
    });
    center.addEventListener('mouseout', () =>{
        map.src = 'img/map.png';
    });
    countryside.addEventListener('mouseout', ()=>{
        map.src = 'img/map.png';
    });
    industrial.addEventListener('mouseover', () => {
        map.src = 'img/industrial.png';
    });
    center.addEventListener('mouseover', () => {
        map.src = 'img/center.png';
    });
    countryside.addEventListener('mouseover', ()=>{
        map.src = 'img/contry-side.png';
    })

});