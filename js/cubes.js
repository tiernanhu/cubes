var camera, scene, renderer, mesh1;
var camera_direction = 1;

init();
animate();

function cube(x, y, z, color, wf) {
  var geometry = new THREE.CubeGeometry(x, y, z);
  var material = new THREE.MeshLambertMaterial( { color: color, wireframe: wf } );
  return new THREE.Mesh( geometry, material );
}

function init() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 700;

  scene = new THREE.Scene();

  mesh1 = cube(200, 200, 200, 0x0f0f0f, true);
  scene.add( mesh1 );

mesh2 = cube(150, 150, 150, 0x0f0f0f, true);
  scene.add( mesh2 );
	
mesh3 = cube(100, 100, 100, 0x0f0f0f, true);
  scene.add( mesh3 );

mesh4 = cube(50, 50, 50, 0x0f0f0f, false);
  scene.add( mesh4 );

  renderer = new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  $("#container").append( renderer.domElement );
}

function animate() {
  requestAnimationFrame( animate );

  mesh1.rotation.x += 0.05;
  mesh1.rotation.y += 0.02;

 mesh2.rotation.x += 0.05;
  mesh2.rotation.y += 0.02;

 mesh3.rotation.x += 0.05;
  mesh3.rotation.y += 0.02;

 mesh4.rotation.x += 0.05;
  mesh4.rotation.y += 0.02;

  camera.position.z += (camera_direction * 20);
  if (camera.position.z > 4000) {
     camera_direction = -1;	
  }

  if (camera.position.z < 400) {
	camera_direction = 1;
  }

renderer.render( scene, camera ); 
}