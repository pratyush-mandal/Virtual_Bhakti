if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];
      console.log(coords);
      const map = L.map('map').setView(coords, 11);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      async function updateMap() {
        const response = await fetch('/data2.json');
        const data = await response.json();
        // console.log(data);

        for (item in data.data) {
          L.marker([
            data.data[item]['latitude'],
            data.data[item]['longitude'],
          ], { title: data.data[item]['name'] }).addTo(map).bindPopup(`<b>About: </b>${data.data[item]['about']} <br> <img src="${data.data[item]['photo']}" width="200" 
          height="100"/>`);
        }
      }
      updateMap();
    },
    function () {
      alert('Could not get your position');
    }
  );
}


// Sound of the Bell
const audio = new Audio("./sound/bell_sound.mp3");

document.getElementById('bell_button').addEventListener('click', function () {
  audio.play();
});