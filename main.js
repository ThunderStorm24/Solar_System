import * as THREE from 'three';
import { sun } from './Planets/sun.js'
import { mercury, mercuryOrbit, mercuryRing } from './Planets/mercury'
import { venus, venusOrbit, venusRing } from './Planets/venus'
import { earth, earthOrbit, earthRing } from './Planets/earth'
import { mars, marsOrbit, marsRing } from './Planets/mars'
import { jupiter, jupiterOrbit, jupiterRing } from './Planets/jupiter'
import { saturn, saturnOrbit, saturnRing } from './Planets/saturn'
import { uranus, uranusOrbit, uranusRing } from './Planets/uranus'
import { neptune, neptuneOrbit, neptuneRing } from './Planets/neptune'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040, 0.2); // soft white light
scene.add(light);

const environmentTexture = new THREE.TextureLoader().load('./assets/star_milky.jpg');
scene.background = environmentTexture;

scene.add(sun);

//Mercury
scene.add(mercury);
scene.add(mercuryOrbit);
mercury.add(mercuryRing);
mercuryRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

//Venus
scene.add(venus);
scene.add(venusOrbit);
venus.add(venusRing);
venusRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

//Earth
scene.add(earth);
scene.add(earthOrbit);
earth.add(earthRing);
earthRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

//Mars
scene.add(mars);
scene.add(marsOrbit);
mars.add(marsRing);
marsRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Jupiter
scene.add(jupiter);
scene.add(jupiterOrbit);
jupiter.add(jupiterRing);
jupiterRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Saturn
scene.add(saturn);
scene.add(saturnOrbit);
saturn.add(saturnRing);
saturnRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Uranus
scene.add(uranus);
scene.add(uranusOrbit);
uranus.add(uranusRing);
uranusRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Neptune
scene.add(neptune);
scene.add(neptuneOrbit);
neptune.add(neptuneRing);
neptuneRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

const earthAxis = new THREE.Vector3(0, 1, 0).normalize();
const earthSpeed = 0.001;

let selectedPlanet = sun;
let isDragging = false;
let prevMouseX = 0;
let prevMouseY = 0;

function getCirclePoints(radius, segments) {
  const points = [];
  const angleStep = (Math.PI * 2) / segments;
  for (let i = 0; i < segments; i++) {
    const angle = i * angleStep;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    points.push(new THREE.Vector3(x, 0, z));
  }
  return points;
}

function selectPlanet(planet) {
  if (planet.name !== '') {
    console.log(planet);
    selectedPlanet = planet;

    camera.lookAt(selectedPlanet.position);
  }
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
      minDistance = 12;
      break;
    case 'Jupiter':
      minDistance = 1.5;
      break;
    case 'Uranus':
      minDistance = 0.5;
      break;
    case 'Saturn':
      minDistance = 1.5;
      break;
    case 'Mercury':
      minDistance = 0.15;
      break;
    case 'Mars':
      minDistance = 0.16;
      break;
    case 'Venus':
      minDistance = 0.2;
      break;
    case 'Earth':
      minDistance = 0.20;
      break;
    case 'Neptune':
      minDistance = 0.6;
      break;
  }
  if ((distance > minDistance && distance <= 2000) || (distance <= minDistance && delta > 0) || (distance > 2000 && delta < 0)) {
    const cameraPosition = camera.position.clone().sub(selectedPlanet.position).multiplyScalar(zoomFactor).add(selectedPlanet.position);
    camera.position.copy(cameraPosition);
  }

}

const planetsRing = [
  { planet: mercury, ring: mercuryRing },
  { planet: venus, ring: venusRing },
  { planet: earth, ring: earthRing },
  { planet: mars, ring: marsRing },
  { planet: jupiter, ring: jupiterRing },
  { planet: saturn, ring: saturnRing },
  { planet: uranus, ring: uranusRing },
  { planet: neptune, ring: neptuneRing }
];

function updateRingScale() {
  planetsRing.forEach(({ planet, ring }) => {
    const distance = planet.position.distanceTo(camera.position);
    const scale = Math.sqrt(distance) * 8;
    ring.scale.set(scale, scale, 1);
  });
}

const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

function animate() {
  requestAnimationFrame(animate);
  updateRingScale();

  planets.forEach((planet) => {
    planet.rotateOnAxis(earthAxis, earthSpeed);
  });

  renderer.render(scene, camera);
}

// Dodawanie nasłuchiwania na zdarzenia myszy
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('wheel', onScroll);
document.addEventListener('mouseup', onMouseUp, false);


const planetElements = document.querySelectorAll("#modular-window div");

planetElements.forEach((planet) => {
  planet.addEventListener("click", onPlanetClick);
});

function onPlanetClick(event) {
  const planetId = event.target.id;

  switch (planetId) {
    case "sun":
      selectPlanet(sun);
      break;
    case "mercury":
      selectPlanet(mercury);
      break;
    case "venus":
      selectPlanet(venus);
      break;
    case "earth":
      selectPlanet(earth);
      break;
    case "mars":
      selectPlanet(mars);
      break;
    case "jupiter":
      selectPlanet(jupiter);
      break;
    case "saturn":
      selectPlanet(saturn);
      break;
    case "uranus":
      selectPlanet(uranus);
      break;
    case "neptune":
      selectPlanet(neptune);
      break;
    default:
      break;
  }
}


// Ustawianie pozycji kamery
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 20;

animate();