// Google Maps - Directions
function initMap() {
    const uluru = { lat: 38.167510, lng: -121.144230 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
      });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

// Confetti Click
const play = document.querySelector("#logo");
const svgContainer = document.getElementById('svg'); 
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer, 
    animType: 'svg', 
    loop: false, 
    autoplay: false,
    path:  'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
});
play.addEventListener('click', () => {
    svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0,true);
    console.log('button')
});
animItem.addEventListener('complete', () => {
    svgContainer.classList.add('hide');
});