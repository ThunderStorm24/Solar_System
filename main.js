import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 0, 0);
scene.add(light);

const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.name = "Sun";
sun.position.set(0, 0, 0);
scene.add(sun);

const mercuryGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const mercuryMaterial = new THREE.MeshPhongMaterial({ color: 0x964B00 });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.name = "Mercury";
mercury.position.set(2, 0, 0);
scene.add(mercury);

const venusGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const venusMaterial = new THREE.MeshPhongMaterial({ color: 0xFFA500 });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.name = "Venus";
venus.position.set(3.5, 0, 0);
scene.add(venus);

const earthGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(5, 0, 0);
earth.name = "Earth";
scene.add(earth);

const marsGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const marsMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(7, 0, 0);
mars.name = "Mars";
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const jupiterMaterial = new THREE.MeshPhongMaterial({ color: 0xFF4500 });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(10, 0, 0);
jupiter.name = "Jupiter";
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const saturnMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(13, 0, 0);
saturn.name = "Saturn";
scene.add(saturn);

const uranusGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const uranusMaterial = new THREE.MeshPhongMaterial({ color: 0x00FFFF });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(16, 0, 0);
uranus.name = "Uranus";
scene.add(uranus);

const neptuneGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const neptuneMaterial = new THREE.MeshPhongMaterial({ color: 0x00008B });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(19, 0, 0);
neptune.name = "Neptune";
scene.add(neptune);

const earthAxis = new THREE.Vector3(0, 1, 0).normalize();
const earthSpeed = 0.01;

let selectedPlanet = null;
let isDragging = false;
let prevMouseX = 0;
let prevMouseY = 0;

function selectPlanet(planet) {
  selectedPlanet = planet;
  /* if (selectedPlanet) {
       selectedPlanet.material.color.set(selectedPlanet.originalColor);
     }
   
     selectedPlanet = planet;
     selectedPlanet.originalColor = selectedPlanet.material.color.clone();
   
     selectedPlanet.material.color.set(0xff0000); */

  camera.lookAt(selectedPlanet.position);
}

function onMouseDown(event) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    selectPlanet(intersects[0].object);
  }

  isDragging = true;
}
function onMouseMove(event) {
  if (isDragging) {
    const movementX = event.clientX - prevMouseX;
    const movementY = event.clientY - prevMouseY;

    const rotationSpeed = 0.01;
    const rotationX = movementY * rotationSpeed;
    const rotationY = movementX * rotationSpeed;

    camera.position.sub(selectedPlanet.position);
    camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationY);
    camera.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), rotationX);
    camera.position.add(selectedPlanet.position);

    camera.lookAt(selectedPlanet.position);
  }

  prevMouseX = event.clientX;
  prevMouseY = event.clientY;
}

function onMouseUp(event) {
  isDragging = false;
}

function onScroll(event) {
  const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

  const zoomSpeed = 0.1;
  const zoomFactor = 1 + delta * zoomSpeed;

  const distance = camera.position.distanceTo(selectedPlanet.position);

  let minDistance;

  switch (selectedPlanet.name) {
    case 'Sun':
    case 'Jupiter':
    case 'Uranus':
    case 'Saturn':
      minDistance = 2;
      break;
    case 'Mercury':
    case 'Mars':
      minDistance = 0.68;
      break;
    case 'Venus':
    case 'Earth':
      minDistance = 0.75;
      break;
    case 'Neptune':
      minDistance = 1.5;
      break;
  }
  if ((distance > minDistance && distance <= 40) || (distance <= minDistance && delta > 0) || (distance > 40 && delta < 0)) {
    const cameraPosition = camera.position.clone().sub(selectedPlanet.position).multiplyScalar(zoomFactor).add(selectedPlanet.position);
    camera.position.copy(cameraPosition);
  }

}


function animate() {
  requestAnimationFrame(animate);
  earth.rotateOnAxis(earthAxis, earthSpeed);
  renderer.render(scene, camera);
}

// Dodawanie nasłuchiwania na zdarzenia myszy
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp, false);

document.addEventListener('wheel', onScroll);



// Ustawianie pozycji kamery
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

animate();