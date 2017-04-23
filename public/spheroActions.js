var scene = document.querySelector('a-scene');
var ball = document.querySelector('#sphero');
var cyl=document.querySelector('#cyl')

ball.addEventListener('body-loaded', function (e) {
   var bodyPos = new CANNON.Vec3().copy(ball.getAttribute('position'));
   //ball.body.applyImpulse(new CANNON.Vec3(-10,0,-90),new CANNON.Vec3(bodyPos.x+1,bodyPos.y,bodyPos.z));
   ball.body.applyImpulse(new CANNON.Vec3(100*Math.random(),0,100*Math.random()),new CANNON.Vec3(bodyPos.x+1,bodyPos.y,bodyPos.z));
});

ball.addEventListener('collide', function (e) {
      var cylPos=new CANNON.Vec3().copy(cyl.getAttribute('position'));
      ball.body.applyImpulse(new CANNON.Vec3(100*Math.random(),0,100*Math.random()),new CANNON.Vec3(cylPos.x,cylPos.y,cylPos.z));
    });
