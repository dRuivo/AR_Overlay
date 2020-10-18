console.log("Hello World");

var socket = io();
socket.on('connect', function() {
    console.log("Connected")
    socket.emit('my event', {data: 'I\'m connected!'});
});

socket.on('bala', function() {
    var entityEl = document.querySelector('#bala');
    console.log(entityEl);
    if (entityEl) {
        if (entityEl.getAttribute('value') === "bala bala") {
            entityEl.setAttribute('value', "bala");
        } else {
            entityEl.setAttribute('value', "bala bala");
        }
    }
});