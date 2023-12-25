const items = document.querySelectorAll('.img-item');
console.log(items);
console.log(items.length);
// for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 50px', 0],
      filter: ['blur(10px)', 'blur(0)'],
    };
    
    const options = {
      duration: 600,
      delay: i * 400,
      fill: 'forwards',
    };
  
    items[i].animate(keyframes, options);
  }
  
  var map = L.map('map').setView([33.58281351385995, 130.43205078708584], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
// const whiteIcon = L.icon({
//     iconUrl: 'images/ico.png',
//     shadowUrl: 'images/ico_shadow.png',
  
//   iconSize:     [40, 40], // size of the icon
//   shadowSize:   [40, 40], // size of the shadow
//   iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//   shadowAnchor: [20, 40],  // the same for the shadow
//   popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//   });

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });

  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
  blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
  yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });

L.marker([33.58281351385995, 130.43205078708584], { icon: whiteIcon }).addTo(map).bindPopup('山王公園');
