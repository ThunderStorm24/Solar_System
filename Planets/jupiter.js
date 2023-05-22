import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

//Jupiter
const jupiterGeometry = new THREE.SphereGeometry(0.71, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load('./assets/jupiter.jpg');
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(478 + sunRadius, 0, 0);
jupiter.name = "Jupiter";

//Jupiter orbit
const jupiterOrbitRadius = 478 + sunRadius;
const jupiterOrbitPoints = 100;
const jupiterOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(jupiterOrbitRadius, jupiterOrbitPoints));
jupiterOrbitGeometry.attributes.position.count -= 1;
const jupiterOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x7a4e40 });
const jupiterOrbit = new THREE.LineLoop(jupiterOrbitGeometry, jupiterOrbitMaterial);

//jupiter Ring
const jupiterRingRadius = 0.09; // Przykładowy promień obręczy
const jupiterRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const jupiterRingGeometry = new THREE.RingGeometry(jupiterRingRadius, jupiterRingRadius + 0.01, jupiterRingSegments);
const jupiterRingMaterial = new THREE.MeshBasicMaterial({ color: 0x7a4e40, side: THREE.DoubleSide });
const jupiterRing = new THREE.Mesh(jupiterRingGeometry, jupiterRingMaterial);

//jupiterSpeed with Orbit
const jupiterSpeed = 0.0013;

//jupiterRotate
const jupiterAxis = new THREE.Vector3(0, 1, 0).normalize();
const jupiterRotate = 0.0015;

export { jupiter, jupiterOrbit, jupiterRing, jupiterSpeed, jupiterAxis, jupiterRotate }