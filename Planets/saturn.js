import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

const saturnGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const saturnTexture = new THREE.TextureLoader().load('./assets/saturn.jpg');
const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(600 + sunRadius, 0, 0);
saturn.name = "Saturn";


const saturnOrbitRadius = 600 + sunRadius;
const saturnOrbitPoints = 1000;
const saturnOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(saturnOrbitRadius, saturnOrbitPoints));
saturnOrbitGeometry.attributes.position.count -= 1;
const saturnOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xa09165 });
const saturnOrbit = new THREE.LineLoop(saturnOrbitGeometry, saturnOrbitMaterial);


const saturnRingRadius = 0.13; // Przykładowy promień obręczy
const saturnRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const saturnRingGeometry = new THREE.RingGeometry(saturnRingRadius, saturnRingRadius + 0.01, saturnRingSegments);
const saturnRingMaterial = new THREE.MeshBasicMaterial({ color: 0xC7A876, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

const saturnRingPlanetRadius = 0.8; // Promień pierścienia
const saturnRingPlanetSegments = 100; // Liczba segmentów pierścienia
const saturnRingPlanetGeometry = new THREE.RingGeometry(saturnRingPlanetRadius, saturnRingPlanetRadius + 0.2, saturnRingPlanetSegments);
const saturnRingPlanetMaterial = new THREE.MeshBasicMaterial({ color: 0xC7A876, side: THREE.DoubleSide });
const saturnRingPlanet = new THREE.Mesh(saturnRingPlanetGeometry, saturnRingPlanetMaterial);
saturnRingPlanet.rotation.x = Math.PI / 2;

// Ładowanie tekstury pierścienia
const saturnRingTexture = new THREE.TextureLoader().load('./assets/saturnRing.png');
saturnRingPlanetMaterial.map = saturnRingTexture;

// Ustawianie powtarzalności tekstury
saturnRingTexture.wrapS = THREE.RepeatWrapping;
saturnRingTexture.wrapT = THREE.RepeatWrapping;
saturnRingTexture.repeat.set(1, 1);

// Dodawanie pierścienia do obiektu Saturna
saturn.add(saturnRingPlanet);

//saturnSpeed
const saturnSpeed = 0.0020;

//saturnRotate
const saturnAxis = new THREE.Vector3(0, 1, 0).normalize();
const saturnRotate = 0.0017;

export { saturn, saturnOrbit, saturnRing, saturnSpeed, saturnAxis, saturnRotate, saturnRingPlanet }