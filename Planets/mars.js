import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;


const marsGeometry = new THREE.SphereGeometry(0.03, 32, 32);
const marsTexture = new THREE.TextureLoader().load('./assets/mars.jpg');
const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(228 + sunRadius, 0, 0);
mars.name = "Mars";

const marsOrbitRadius = 228 + sunRadius;
const marsOrbitPoints = 1000;
const marsOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(marsOrbitRadius, marsOrbitPoints));
marsOrbitGeometry.attributes.position.count -= 1;
const marsOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x562b0e });
const marsOrbit = new THREE.LineLoop(marsOrbitGeometry, marsOrbitMaterial);


const marsRingRadius = 0.09; // Przykładowy promień obręczy dla Marsa
const marsRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const marsRingGeometry = new THREE.RingGeometry(marsRingRadius, marsRingRadius + 0.01, marsRingSegments);
const marsRingMaterial = new THREE.MeshBasicMaterial({ color: 0x562b0e, side: THREE.DoubleSide });
const marsRing = new THREE.Mesh(marsRingGeometry, marsRingMaterial);

//marsSpeed with Orbit
const marsSpeed = 0.0027;

//marsRotate
const marsAxis = new THREE.Vector3(0, 1, 0).normalize();
const marsRotate = 0.007;

export { mars, marsOrbit, marsRing, marsSpeed, marsAxis, marsRotate }