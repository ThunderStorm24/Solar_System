import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sunLight = new THREE.PointLight(0xffffff, 1);
sunLight.position.set(0, 0, 0);

const light = new THREE.AmbientLight( 0x404040 , 0.2); // soft white light
scene.add( light );

const environmentTexture = new THREE.TextureLoader().load('./assets/star_milky.jpg');
scene.background = environmentTexture;

/* const backgroundGeometry = new THREE.SphereGeometry(-40, 32, 32);
const backgroundTexture = new THREE.TextureLoader().load('./assets/star_milky.jpg');
const backgroundMaterial = new THREE.MeshStandardMaterial({ map: backgroundTexture });
const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
background.position.set(5, 0, 0);
scene.add(background); */

const uint8 = new Uint8Array(4)
uint8.fill(255)
const texture = new THREE.DataTexture(uint8, 1, 1);
texture.needsUpdate = true;


const sunRadius = 6.9634;
const sunGeometry = new THREE.SphereGeometry(sunRadius, 32, 32);
const sunTexture = new THREE.TextureLoader().load('./assets/sun.jpg');
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
sunMaterial.lightMap = texture;
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.add(sunLight);
sun.name = "Sun";
sun.position.set(0, 0, 0);
scene.add(sun);

const mercuryGeometry = new THREE.SphereGeometry(0.02439, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load('./assets/mercury.jpg');
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.name = "Mercury";
mercury.position.set(58 + sunRadius, 0, 0);
scene.add(mercury);

const mercuryOrbitRadius = 58 + sunRadius; // Przeniesiona definicja zmiennej
const mercuryOrbitPoints = 100;
const mercuryOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(mercuryOrbitRadius, mercuryOrbitPoints));
mercuryOrbitGeometry.attributes.position.count -= 1;
const mercuryOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x714e81 });
const mercuryOrbit = new THREE.LineLoop(mercuryOrbitGeometry, mercuryOrbitMaterial);
scene.add(mercuryOrbit);


const mercuryRingRadius = 0.05; // Przykładowy promień obręczy
const mercuryRingSegments = 100; // Przykładowa liczba segmentów obręczy
const mercuryRingGeometry = new THREE.RingGeometry(mercuryRingRadius, mercuryRingRadius + 0.01, mercuryRingSegments);
const mercuryRingMaterial = new THREE.MeshBasicMaterial({ color: 0x714e81, side: THREE.DoubleSide });
const mercuryRing = new THREE.Mesh(mercuryRingGeometry, mercuryRingMaterial);
mercury.add(mercuryRing);

mercuryRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

const venusGeometry = new THREE.SphereGeometry(0.06, 32, 32);
const venusTexture = new THREE.TextureLoader().load('./assets/venus.jpg');
const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.name = "Venus";
venus.position.set(108 + sunRadius, 0, 0);
scene.add(venus);

const venusOrbitRadius = 108 + sunRadius;
const venusOrbitPoints = 100;
const venusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(venusOrbitRadius, venusOrbitPoints));
venusOrbitGeometry.attributes.position.count -= 1;
const venusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x422d09 });
const venusOrbit = new THREE.LineLoop(venusOrbitGeometry, venusOrbitMaterial);
scene.add(venusOrbit);

const venusRingRadius = 0.07; // Przykładowy promień obręczy
const venusRingSegments = 100; // Przykładowa liczba segmentów obręczy
const venusRingGeometry = new THREE.RingGeometry(venusRingRadius, venusRingRadius + 0.01, venusRingSegments);
const venusRingMaterial = new THREE.MeshBasicMaterial({ color: 0xf5c45a, side: THREE.DoubleSide });
const venusRing = new THREE.Mesh(venusRingGeometry, venusRingMaterial);
venus.add(venusRing);

// Obrót obręczy
venusRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

const earthGeometry = new THREE.SphereGeometry(0.063, 32, 32);
const earthTexture = new THREE.TextureLoader().load('./assets/earth.jpg');
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(149 + sunRadius, 0, 0);
earth.name = "Earth";
scene.add(earth);

const earthOrbitRadius = 149 + sunRadius;
const earthOrbitPoints = 100;
const earthOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(earthOrbitRadius, earthOrbitPoints));
earthOrbitGeometry.attributes.position.count -= 1;
const earthOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x00394c });
const earthOrbit = new THREE.LineLoop(earthOrbitGeometry, earthOrbitMaterial);
scene.add(earthOrbit);

const earthRingRadius = 0.07; // Przykładowy promień obręczy
const earthRingSegments = 100; // Przykładowa liczba segmentów obręczy
const earthRingGeometry = new THREE.RingGeometry(earthRingRadius, earthRingRadius + 0.01, earthRingSegments);
const earthRingMaterial = new THREE.MeshBasicMaterial({ color: 0x4a90e2, side: THREE.DoubleSide });
const earthRing = new THREE.Mesh(earthRingGeometry, earthRingMaterial);
earth.add(earthRing);

// Obrót obręczy
earthRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

const marsGeometry = new THREE.SphereGeometry(0.03, 32, 32);
const marsTexture = new THREE.TextureLoader().load('./assets/mars.jpg');
const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(228 + sunRadius, 0, 0);
mars.name = "Mars";
scene.add(mars);

const marsOrbitRadius = 228 + sunRadius;
const marsOrbitPoints = 100;
const marsOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(marsOrbitRadius, marsOrbitPoints));
marsOrbitGeometry.attributes.position.count -= 1;
const marsOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x562b0e });
const marsOrbit = new THREE.LineLoop(marsOrbitGeometry, marsOrbitMaterial);
scene.add(marsOrbit);

const marsRingRadius = 0.09; // Przykładowy promień obręczy dla Marsa
const marsRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const marsRingGeometry = new THREE.RingGeometry(marsRingRadius, marsRingRadius + 0.01, marsRingSegments);
const marsRingMaterial = new THREE.MeshBasicMaterial({ color: 0x562b0e, side: THREE.DoubleSide });
const marsRing = new THREE.Mesh(marsRingGeometry, marsRingMaterial);
mars.add(marsRing);

marsRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

const jupiterGeometry = new THREE.SphereGeometry(0.71, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load('./assets/jupiter.jpg');
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(478 + sunRadius, 0, 0);
jupiter.name = "Jupiter";
scene.add(jupiter);

const jupiterOrbitRadius = 478 + sunRadius;
const jupiterOrbitPoints = 100;
const jupiterOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(jupiterOrbitRadius, jupiterOrbitPoints));
jupiterOrbitGeometry.attributes.position.count -= 1;
const jupiterOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x7a4e40 });
const jupiterOrbit = new THREE.LineLoop(jupiterOrbitGeometry, jupiterOrbitMaterial);
scene.add(jupiterOrbit);

const jupiterRingRadius = 0.09; // Przykładowy promień obręczy
const jupiterRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const jupiterRingGeometry = new THREE.RingGeometry(jupiterRingRadius, jupiterRingRadius + 0.01, jupiterRingSegments);
const jupiterRingMaterial = new THREE.MeshBasicMaterial({ color: 0x7a4e40, side: THREE.DoubleSide });
const jupiterRing = new THREE.Mesh(jupiterRingGeometry, jupiterRingMaterial);
jupiter.add(jupiterRing);

jupiterRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

const saturnGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const saturnTexture = new THREE.TextureLoader().load('./assets/saturn.jpg');
const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(600 + sunRadius, 0, 0);
saturn.name = "Saturn";
scene.add(saturn);

const saturnOrbitRadius = 600 + sunRadius;
const saturnOrbitPoints = 100;
const saturnOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(saturnOrbitRadius, saturnOrbitPoints));
saturnOrbitGeometry.attributes.position.count -= 1;
const saturnOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xa09165 });
const saturnOrbit = new THREE.LineLoop(saturnOrbitGeometry, saturnOrbitMaterial);
scene.add(saturnOrbit);

const saturnRingRadius = 0.09; // Przykładowy promień obręczy
const saturnRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const saturnRingGeometry = new THREE.RingGeometry(saturnRingRadius, saturnRingRadius + 0.01, saturnRingSegments);
const saturnRingMaterial = new THREE.MeshBasicMaterial({ color: 0xC7A876, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturn.add(saturnRing);

saturnRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

const uranusGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const uranusTexture = new THREE.TextureLoader().load('./assets/uranus.jpg');
const uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(680 + sunRadius, 0, 0);
uranus.name = "Uranus";
scene.add(uranus);

const uranusOrbitRadius = 680 + sunRadius;
const uranusOrbitPoints = 100;
const uranusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(uranusOrbitRadius, uranusOrbitPoints));
uranusOrbitGeometry.attributes.position.count -= 1;
const uranusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x3a737a });
const uranusOrbit = new THREE.LineLoop(uranusOrbitGeometry, uranusOrbitMaterial);
scene.add(uranusOrbit);

const uranusRingRadius = 0.09; // Przykładowy promień obręczy
const uranusRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const uranusRingGeometry = new THREE.RingGeometry(uranusRingRadius, uranusRingRadius + 0.01, uranusRingSegments);
const uranusRingMaterial = new THREE.MeshBasicMaterial({ color: 0x77B7D8, side: THREE.DoubleSide });
const uranusRing = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
uranus.add(uranusRing);

uranusRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

const neptuneGeometry = new THREE.SphereGeometry(0.24, 32, 32);
const neptuneTexture = new THREE.TextureLoader().load('./assets/neptune.jpg');
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(750 + sunRadius, 0, 0);
neptune.name = "Neptune";
scene.add(neptune);

const neptuneOrbitRadius = 750 + sunRadius;
const neptuneOrbitPoints = 100;
const neptuneOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(neptuneOrbitRadius, neptuneOrbitPoints));
neptuneOrbitGeometry.attributes.position.count -= 1;
const neptuneOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x5064a1 });
const neptuneOrbit = new THREE.LineLoop(neptuneOrbitGeometry, neptuneOrbitMaterial);
scene.add(neptuneOrbit);

const neptuneRingRadius = 0.09; // Przykładowy promień obręczy
const neptuneRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const neptuneRingGeometry = new THREE.RingGeometry(neptuneRingRadius, neptuneRingRadius + 0.01, neptuneRingSegments);
const neptuneRingMaterial = new THREE.MeshBasicMaterial({ color: 0x3068E8, side: THREE.DoubleSide });
const neptuneRing = new THREE.Mesh(neptuneRingGeometry, neptuneRingMaterial);
neptune.add(neptuneRing);

neptuneRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

const earthAxis = new THREE.Vector3(0, 1, 0).normalize();
const earthSpeed = 0.001;
const sunAxis = new THREE.Vector3(0, -1, 0).normalize();
const sunSpeed = 0.001;


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
  if (planet.name!==''){
    console.log(planet);
    selectedPlanet = planet;
    
   /* if (selectedPlanet) {
        selectedPlanet.material.color.set(selectedPlanet.originalColor);
      }
    
      selectedPlanet = planet;
      selectedPlanet.originalColor = selectedPlanet.material.color.clone();
    
      selectedPlanet.material.color.set(0xff0000); */

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

  function updateRingScale() {
    const distanceM = mercury.position.distanceTo(camera.position);
    const scaleM = Math.sqrt(distanceM) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    mercuryRing.scale.set(scaleM, scaleM, 1);
    const distanceV = venus.position.distanceTo(camera.position);
    const scaleV = Math.sqrt(distanceV) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    venusRing.scale.set(scaleV, scaleV, 1);
    const distanceE = earth.position.distanceTo(camera.position);
    const scaleE = Math.sqrt(distanceE) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    earthRing.scale.set(scaleE, scaleE, 1);
    const distanceMa = mars.position.distanceTo(camera.position);
    const scaleMa = Math.sqrt(distanceMa) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    marsRing.scale.set(scaleMa, scaleMa, 1);
    const distanceJ = jupiter.position.distanceTo(camera.position);
    const scaleJ = Math.sqrt(distanceJ) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    jupiterRing.scale.set(scaleJ, scaleJ, 1);
    const distanceU = uranus.position.distanceTo(camera.position);
    const scaleU = Math.sqrt(distanceU) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    uranusRing.scale.set(scaleU, scaleU, 1);
    const distanceS = saturn.position.distanceTo(camera.position);
    const scaleS = Math.sqrt(distanceS) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    saturnRing.scale.set(scaleS, scaleS, 1);
    const distanceN = neptune.position.distanceTo(camera.position);
    const scaleN = Math.sqrt(distanceN) * 10; // Ustawienie odpowiedniej skali, możesz dostosować wartość
    neptuneRing.scale.set(scaleN, scaleN, 1);
  }

function animate() {
  requestAnimationFrame(animate);
  updateRingScale();
  sun.rotateOnAxis(sunAxis, sunSpeed);
  mercury.rotateOnAxis(earthAxis, earthSpeed);
  venus.rotateOnAxis(earthAxis, earthSpeed);
  earth.rotateOnAxis(earthAxis, earthSpeed);
  mars.rotateOnAxis(earthAxis, earthSpeed);
  jupiter.rotateOnAxis(earthAxis, earthSpeed);
  saturn.rotateOnAxis(earthAxis, earthSpeed);
  uranus.rotateOnAxis(earthAxis, earthSpeed);
  neptune.rotateOnAxis(earthAxis, earthSpeed);

  renderer.render(scene, camera);
}

// Dodawanie nasłuchiwania na zdarzenia myszy
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('wheel', onScroll);
document.addEventListener('mouseup', onMouseUp, false);

const sunC = document.getElementById("sun");
sunC.addEventListener('click',onSunClick)
function onSunClick(){
  console.log("test0");
    selectPlanet(sun);
}

const mercuryC = document.getElementById("mercury");
mercuryC.addEventListener('click',onMercuryClick)
function onMercuryClick(){
    console.log("test1");
    selectPlanet(mercury);
}

const venusC = document.getElementById("venus");
venusC.addEventListener('click',onVenusClick)
function onVenusClick(){
    console.log("test2");
    selectPlanet(venus);
}

const earthC = document.getElementById("earth");
earthC.addEventListener('click',onEarthClick)
function onEarthClick(){
    console.log("test3");
    selectPlanet(earth);
}

const marsC = document.getElementById("mars");
marsC.addEventListener('click',onMarsClick)
function onMarsClick(){
    console.log("test4");
    selectPlanet(mars);
}

const jupiterC = document.getElementById("jupiter");
jupiterC.addEventListener('click',onJupiterClick)
function onJupiterClick(){
    console.log("test5");
    selectPlanet(jupiter);
}

const saturnC = document.getElementById("saturn");
saturnC.addEventListener('click',onSaturnClick)
function onSaturnClick(){
    console.log("test6");
    selectPlanet(saturn);
}

const uranusC = document.getElementById("uranus");
uranusC.addEventListener('click',onUranusClick)
function onUranusClick(){
    console.log("test7");
    selectPlanet(uranus);
}

const neptuneC = document.getElementById("neptune");
neptuneC.addEventListener('click',onNeptuneClick)
function onNeptuneClick(){
    console.log("test18");
    selectPlanet(neptune);
}


// Ustawianie pozycji kamery
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 20;

animate();