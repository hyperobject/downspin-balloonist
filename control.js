var firebase = require('firebase');
var config = {}; // config here
firebase.initializeApp(config);
var polarRef = firebase.database().ref('velocity/polar');

var orb = require('sphero')('/dev/tty.Sphero-RBR-AMP-SPP');
orb.connect(function () {
    orb.color('cyan');
    polarRef.on('value', function(snapshot) {
        data = snapshot.val();
        switch(data.angle) {

        }
        orb.roll(Math.sqrt(data.length)*20, Math.round(data.angle / 45.0) * 45);
    });
});
