// var promise = new Promise(function (resolve, reject) {
//     var allOK;
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log(position.coords.latitude, position.coords.longitude);
//         allOK = true;
//     });
//
//     if (allOK) {
//         console.log('All OK!');
//     } else {
//         console.log('Something went wrong!');
//     }
// });
//
// console.log(promise);

var output = document.querySelector('div');
//var output = document.getElementById('output');

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude +
        "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
};

function error() {
    output.innerHTML = "Unable to retrieve your location";
};

output.innerHTML = "<p>Locating…</p>";

navigator.geolocation.getCurrentPosition(success, error);
