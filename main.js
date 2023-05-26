import * as THREE from 'three';
import { sun, sunAxis, sunRotate } from './Planets/sun.js'
import { mercury, mercuryOrbit, mercuryRing, mercurySpeed, mercuryAxis, mercuryRotate } from './Planets/mercury'
import { venus, venusOrbit, venusRing, venusSpeed, venusAxis, venusRotate } from './Planets/venus'
import { earth, earthOrbit, earthRing, earthSpeed, earthAxis, earthRotate } from './Planets/earth'
import { mars, marsOrbit, marsRing, marsSpeed, marsAxis, marsRotate } from './Planets/mars'
import { jupiter, jupiterOrbit, jupiterRing, jupiterSpeed, jupiterAxis, jupiterRotate } from './Planets/jupiter'
import { saturn, saturnOrbit, saturnRing, saturnSpeed, saturnAxis, saturnRotate } from './Planets/saturn'
import { uranus, uranusOrbit, uranusRing, uranusSpeed, uranusAxis, uranusRotate } from './Planets/uranus'
import { neptune, neptuneOrbit, neptuneRing, neptuneSpeed, neptuneAxis, neptuneRotate } from './Planets/neptune'

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


let selectedPlanet = sun;
let isDragging = false;
let prevMouseX = 0;
let prevMouseY = 0;





let test = false;
let closeIconHolder;

function selectPlanet(planet) {
  if (planet.name !== '') {
    if (planet.name === 'Mercury') {
      if(test === false) {

        let root = document.getElementById('cont');
        let content = document.createElement('div');
        content.classList.add('my-content');
        content.id = 'content'
  
        let planetName = document.createElement('div');
        planetName.classList.add('planet-name');
        planetName.textContent = 'Mercury';
        planetName.id = 'planetName'
  
        closeIconHolder = document.createElement('div');
        closeIconHolder.classList.add('close-icon');
        closeIconHolder.textContent = 'X';
        closeIconHolder.id = 'X'
  
        let holdeofDescNames = document.createElement('div')
        holdeofDescNames.classList.add('desc-names-holder')
        holdeofDescNames.id = 'holdeofDescNames'
  
        let descriptionName = document.createElement('div')
        descriptionName.classList.add('desc-name')
        descriptionName.textContent = 'description of the planet'
        descriptionName.id = 'descriptionName'
  
        let descriptionHolder = document.createElement('div')
        descriptionHolder.classList.add('description-holder')
        descriptionHolder.textContent = 'Merkury – najmniejsza i najbliższa Słońca planeta Układu Słonecznego. Jako planeta dolna znajduje się dla ziemskiego obserwatora zawsze blisko Słońca, dlatego jest trudna do obserwacji. Mimo to należy do planet widocznych gołym okiem i była znana już w starożytności. Merkurego dojrzeć można jedynie tuż przed wschodem lub tuż po zachodzie Słońca. Ukształtowanie powierzchni Merkurego przypomina Księżyc: są na nim liczne kratery uderzeniowe i pozbawiony jest on atmosfery. Temperatura powierzchni waha się od −173 °C do 427 °C. W przeciwieństwie do Księżyca, planeta ma jednak duże żelazne jądro, generujące pole magnetyczne stukrotnie słabsze od ziemskiego[4]. Rozmiar jądra sprawia, że Merkury ma jedną z największych gęstości spośród planet Układu Słonecznego[5] (Ziemia ma nieznacznie większą gęstość). Merkury nie ma naturalnych satelitów. Pierwsze udokumentowane obserwacje Merkurego sięgają pierwszego tysiąclecia p.n.e. Starożytni Grecy początkowo uważali, że są to dwa ciała niebieskie: pierwsze widzialne tylko przed wschodem Słońca (nazywali je Apollo), drugie widzialne tylko po zachodzie Słońca (nazywali je Hermesem)[6]. Starożytni Egipcjanie, Chaldejczycy oraz późniejsi astronomowie greccy wiedzieli, że Merkury widoczny o poranku i wieczorem jest tą samą planetą. Było to znane Egipcjanom już około 1150 roku p.n.e. Za sprawą szybkiego ruchu planety, powodowanego jej krótką orbitą, Rzymianie nadali planecie nazwę na cześć posłańca bogów i patrona handlarzy – Merkurego. Symbol astronomiczny planety to stylizowana wersja kaduceusza Hermesa[7]. W porównaniu z innymi planetami Układu Słonecznego o Merkurym wiadomo stosunkowo niewiele; ze względu na problemy natury technicznej zbadały go dotychczas tylko dwie sondy. Pierwsza z nich – Mariner 10 – w latach 1974–1975 trzykrotnie przeleciała obok Merkurego i wykonała mapy 45% powierzchni. Sonda MESSENGER w 2008 i 2009 roku dokonała trzech przelotów obok planety, po czym w latach 2011–2015 badała ją z orbity jako sztuczny satelita. Wystrzelona w 2018 roku sonda BepiColombo ma dotrzeć na orbitę wokół Merkurego w 2025 roku.'
        descriptionHolder.id = 'desc-holder'
  
        let detailsName = document.createElement('div')
        detailsName.classList.add('details-name')
        detailsName.textContent = 'details'
  
        let detailsHolder = document.createElement('div')
        detailsHolder.classList.add('details-holder')
        detailsHolder.textContent = ''
  
        holdeofDescNames.append(descriptionName, detailsName)
        content.append(planetName, closeIconHolder, holdeofDescNames, descriptionHolder);
        root.append(content);
  
        test = true;

      }
    }

    selectedPlanet = planet;
    camera.lookAt(selectedPlanet.position);
  }
}

if (test) {
  let XIcon = document.getElementById('X');
  XIcon.addEventListener('click', function () {
    let content = document.getElementById('content');
    if (content) {
      content.remove();
      test = false;
    }
  });
}

function handleCloseIconClick() {
  content.remove();
}

if (closeIconHolder !== undefined) {
  closeIconHolder.addEventListener('click', handleCloseIconClick);
}


function onMouseDown(event) {
  const clickedElementId = event.target.id;
  const menuIds = ['modular-window', 'sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'time', 'Move', 'stop-animation', 'ars', 'CameraMove', 'cont', 'desc-holder', 'content', 'holdeofDescNames', 'planetName', 'descriptionName'];

  if (!menuIds.includes(clickedElementId)) {
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
  { planet: mercury, ring: mercuryRing, speed: mercurySpeed },
  { planet: venus, ring: venusRing, speed: venusSpeed },
  { planet: earth, ring: earthRing, speed: earthSpeed },
  { planet: mars, ring: marsRing, speed: marsSpeed },
  { planet: jupiter, ring: jupiterRing, speed: jupiterSpeed },
  { planet: saturn, ring: saturnRing, speed: saturnSpeed },
  { planet: uranus, ring: uranusRing, speed: uranusSpeed },
  { planet: neptune, ring: neptuneRing, speed: neptuneSpeed }
];

const planetsRotate = [
  { planet: sun, planetAxis: sunAxis, planetRotate: sunRotate },
  { planet: mercury, planetAxis: mercuryAxis, planetRotate: mercuryRotate },
  { planet: venus, planetAxis: venusAxis, planetRotate: venusRotate },
  { planet: earth, planetAxis: earthAxis, planetRotate: earthRotate },
  { planet: mars, planetAxis: marsAxis, planetRotate: marsRotate },
  { planet: jupiter, planetAxis: jupiterAxis, planetRotate: jupiterRotate },
  { planet: saturn, planetAxis: saturnAxis, planetRotate: saturnRotate },
  { planet: uranus, planetAxis: uranusAxis, planetRotate: uranusRotate },
  { planet: neptune, planetAxis: neptuneAxis, planetRotate: neptuneRotate },
];

function updateRingScale() {
  planetsRing.forEach(({ planet, ring }) => {
    const distance = planet.position.distanceTo(camera.position);
    const scale = Math.sqrt(distance) * 8;
    ring.scale.set(scale, scale, 1);
  });
}

let number = 1;
let times = document.getElementById('time');
times.addEventListener('change', () => {
  number = times.value;
});


let orginalMarsPosition = mars.position


function rotatePlanets() {
  planetsRing.forEach(({ planet, speed }) => {
    if (movable) {
      const orbitCenter = new THREE.Vector3(0, 0, 0); // Środek orbity
      const axis = new THREE.Vector3(0, 1, 0); // Oś Y (wzdłuż pionowej osi Y)
      const rotationSpeed = speed * number; // Prędkość obrotu (w radianach na klatkę)

      planet.position.applyAxisAngle(axis, rotationSpeed);
      planet.position.add(orbitCenter);

      planet.rotation.y += rotationSpeed;


      if (follow) {
        // Aktualizacja pozycji kamery względem planety
        camera.position.copy(selectedPlanet.position); // Ustawienie pozycji kamery na pozycję planety
        const cameraOffset = new THREE.Vector3(0, 130, -200); // Przesunięcie kamery względem planety (można dostosować)
        cameraOffset.applyQuaternion(selectedPlanet.quaternion); // Zastosowanie rotacji planety do przesunięcia kamery
        camera.position.add(cameraOffset);
        camera.lookAt(selectedPlanet.position); // Skierowanie kamery w stronę planety
      }
    }
  });
}

// Funkcja renderująca scenę
function renderScene() {
  rotatePlanets();

  // Renderowanie sceny (kod renderowania nie jest zawarty w przykładzie, należy go dodać odpowiednio do Twojego kodu)
  // renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  renderScene();
  updateRingScale();

  planetsRotate.forEach(({ planet, planetAxis, planetRotate }) => {
    planet.rotateOnAxis(planetAxis, planetRotate);
  });

  renderer.render(scene, camera);
}


let movable = false;
let handleMove = document.getElementById('Move');
handleMove.addEventListener('click', () => {
  movable = true;
});

let pauseAnimation = document.getElementById('stop-animation')
pauseAnimation.addEventListener('click', (() => {
  movable = false
}))

let follow = false;
let handleCameraMove = document.getElementById('CameraMove');
handleCameraMove.addEventListener('click', () => {
  follow = !follow;
});

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
camera.far = 4000;
camera.updateProjectionMatrix();

animate();