export default function getGeolocation(id) {
  const $id = document.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    let coords = position.coords;

    $id.innerHTML = `
    <p>Your position is: </p>
    <ul>
    <li> Latitude: <b> ${coords.latitude}</b></li>
    <li> Longitude: <b> ${coords.longitude}</b></li>
    <li> Precission: <b> ${coords.accuracy}</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">See in googlemaps</a>
    `;
  };

  const error = (error) => {
    $id.innerHTML = `Error: ${error.code}: ${error.message}`;
    console.log(`Error: ${error.code}: ${error.message}`);
  };

 /*  console.log(
    navigator.geolocation.getCurrentPosition(success, error, options)
  ); */
}
