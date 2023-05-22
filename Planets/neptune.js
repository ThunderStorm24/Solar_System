import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

//Neptun planet
const neptuneGeometry = new THREE.SphereGeometry(0.24, 32, 32);
const neptuneTexture = new THREE.TextureLoader().load('./assets/neptune.jpg');
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(750 + sunRadius, 0, 0);
neptune.name = "Neptune";

//Neptun Orbit
const neptuneOrbitRadius = 750 + sunRadius;
const neptuneOrbitPoints = 100;
const neptuneOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(neptuneOrbitRadius, neptuneOrbitPoints));
neptuneOrbitGeometry.attributes.position.count -= 1;
const neptuneOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x5064a1 });
const neptuneOrbit = new THREE.LineLoop(neptuneOrbitGeometry, neptuneOrbitMaterial);

//Neptune Ring
const neptuneRingRadius = 0.09; // Przykładowy promień obręczy
const neptuneRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const neptuneRingGeometry = new THREE.RingGeometry(neptuneRingRadius, neptuneRingRadius + 0.01, neptuneRingSegments);
const neptuneRingMaterial = new THREE.MeshBasicMaterial({ color: 0x3068E8, side: THREE.DoubleSide });
const neptuneRing = new THREE.Mesh(neptuneRingGeometry, neptuneRingMaterial);

//neptuneSpeed with Orbit
const neptuneSpeed = 0.0003; // 1 miesiac

//neptuneRotate
const neptuneAxis = new THREE.Vector3(0, 1, 0).normalize();
const neptuneRotate = 0.00047; // 1 miesiac

export { neptune, neptuneOrbit, neptuneRing, neptuneSpeed, neptuneAxis, neptuneRotate }