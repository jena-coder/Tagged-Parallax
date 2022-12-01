const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-layer');
const back = document.querySelector('.back-layer');

/* sensitivity for both layers --- higher the number lower the sensitivity */

const sFront = 150;
const sBack = 400;

//Add a mouse move event to the whole section
parallax.addEventListener('mousemove', e =>{

    //Get  the X,Y mouse coordinates
    const x = e.clientX;
    const y = e.clientY;
/* Using template literals( ` ), 
translate the front layer using the  
coordinates, and apply the front sensitivity */
front.style.transform = `
    translate(
        ${x / sFront}%,
        ${y / sFront}%
    )`;

back.style.transform = `
    translate(
        ${x / sBack}%,
        ${y / sBack}%
    )`;
})

