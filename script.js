if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      // console.log(latitude, longitude);

      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('First popup.<br> For the demo.')
        .openPopup();

      L.marker([latitude + 0.005, longitude + 0.005])
        .addTo(map)
        .bindPopup('Second popup.<br> For the demo.')
        .openPopup();

      L.marker([latitude - 0.005, longitude - 0.005])
        .addTo(map)
        .bindPopup('Third popup.<br> For the demo.')
        .openPopup();

      L.marker([26.7290439, 88.4411272])
        .addTo(map)
        .bindPopup('ISKCON temple,<br> Siliguri')
        .openPopup();

      L.marker([26.7669426, 88.4428718])
        .addTo(map)
        .bindPopup('Salugara Monastery,<br> Siliguri')
        .openPopup();
    },
    function () {
      alert('Could not get your position');
    }
  );
