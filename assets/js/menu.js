var camera, scene, renderer;
var controls;

var Element = function (x, y, z, ry, content) {
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.height = '100px';
  div.style.cursor = 'pointer';
  div.style.backgroundColor = '#00695c';
  div.id = 'menu';
  div.className = 'color-block aqua-gradient z-depth-2 py-4 text-center white-text';
  div.addEventListener('click', function () {
    var a = div.childNodes;
    if (a[0].innerHTML === 'Periodictable') {
      if (window.location.hostname.indexOf('localhost') > -1) {
        window.location.replace('http://localhost:4200/view-img');
      } else {
        window.location.replace('https://vunht.github.io/test-console/view-img');
      }
    } else {
      alert('Not Found !!');
    }
  });

  div.addEventListener('mouseover', function() {
    div.style.backgroundColor = '#2BBBAD';
  });

  div.addEventListener('mouseout', function() {
    div.style.backgroundColor = '#00695c';
  });

  var tagp = document.createElement('p');
  tagp.style.width = '200px';
  tagp.style.height = '100px';
  tagp.style.border = '0px';
  tagp.style.color = '#ffffff';
 // tagp.style.textAlign = 'center';
 tagp.style.paddingTop = '15px';
  tagp.innerHTML = content;
  div.appendChild(tagp);
  var object = new THREE.CSS3DObject(div);
  object.position.set(x, y, z);
  object.rotation.y = ry;
  return object;
};
init();
animate();

function init() {
  var container = document.getElementById('container');
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.set(500, 350, 0);
  scene = new THREE.Scene();
  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  var group = new THREE.Group();
  // group.add( new Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
  // group.add( new Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
  // group.add( new Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
  // group.add( new Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
  group.add(new Element(0, 0, 240, 0, 'Periodictable'));
  group.add(new Element(240, 0, 0, Math.PI / 2, 'dasboard 2'));
  group.add(new Element(0, 0, -240, Math.PI, 'dasboard 3'));
  group.add(new Element(-240, 0, 0, -Math.PI / 2, 'dasboard 4'));

  scene.add(group);
  controls = new THREE.TrackballControls(camera);
  controls.rotateSpeed = 4;
  window.addEventListener('resize', onWindowResize, false);
  // Block iframe events when dragging camera
  var blocker = document.getElementById('blocker');
  blocker.style.display = 'none';
  // document.addEventListener('mousedown', function () {
  //   blocker.style.display = '';
  // });
  // document.addEventListener('mouseup', function () {
  //   blocker.style.display = 'none';
  // });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
