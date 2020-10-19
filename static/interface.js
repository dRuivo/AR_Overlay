
var socket = io();
socket.on('connect', function() {
    //console.log("Connected")
    socket.emit('my event', {data: 'I\'m connected!'});
});

socket.on('bala', function() {
    var entityEl = document.querySelector('#bala');
    //console.log(entityEl);
    if (entityEl) {
        if (entityEl.getAttribute('value') === "bala bala") {
            entityEl.setAttribute('value', "bala");
        } else {
            entityEl.setAttribute('value', "bala bala");
        }
    }
});

AFRAME.registerComponent('foo', {
    init: function () {
        ;  // Reference to the scene element.
        var el = this.el;
        el.setAttribute('color', "#000")
        console.log(el.getAttribute('color'))
        el.addEventListener('mousedown', function(evt) {
            console.log('click')
            el.setAttribute('color', "#FFF");
        })
    }
});