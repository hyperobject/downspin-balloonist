var velRef = document.querySelector('a-scene').systems.firebase.firebase.database().ref('/velocity');
var ball = document.querySelector('#sphero');

window.setInterval(function() {
    let xzVec = new THREE.Vector2(ball.body.velocity.x, ball.body.velocity.z);
    velRef.set({
        velocity: ball.body.velocity,
        polar: {
            angle: xzVec.angle() * (180/(2*Math.PI)),
            length: xzVec.length()
        }
    });
}, 250);
