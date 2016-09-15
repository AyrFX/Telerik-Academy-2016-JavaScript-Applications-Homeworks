(function () {
    var output = document.querySelector('#output');
    var promise = new Promise(function (resolve) {
        output.innerHTML = 'Waiting for 2000 ms...';
        setTimeout(function () {
            resolve();
        }, 2000);
    });

    promise.then(function success() {
        window.location = 'http://www.telerikacademy.com';
    });
}());
