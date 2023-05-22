import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;


//Earth
const earthGeometry = new THREE.SphereGeometry(0.063, 32, 32);
const earthTexture = new THREE.TextureLoader().load('./assets/earth.jpg');
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(149 + sunRadius, 0, 0);
earth.name = "Earth";

//EarthOrbit
const earthOrbitRadius = 149 + sunRadius;
const earthOrbitPoints = 100;
const earthOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(earthOrbitRadius, earthOrbitPoints));
earthOrbitGeometry.attributes.position.count -= 1;
const earthOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x00394c });
const earthOrbit = new THREE.LineLoop(earthOrbitGeometry, earthOrbitMaterial);

//EarthRing
const earthRingRadius = 0.07; // Przykładowy promień obręczy
const earthRingSegments = 100; // Przykładowa liczba segmentów obręczy
const earthRingGeometry = new THREE.RingGeometry(earthRingRadius, earthRingRadius + 0.01, earthRingSegments);
const earthRingMaterial = new THREE.MeshBasicMaterial({ color: 0x4a90e2, side: THREE.DoubleSide });
const earthRing = new THREE.Mesh(earthRingGeometry, earthRingMaterial);

//EarthSpeed with Orbit
const earthSpeed = 0.0029;

//EarthRotate
const earthAxis = new THREE.Vector3(0, 1, 0).normalize();
const earthRotate = 0.004 ;

export {earth, earthOrbit, earthRing, earthSpeed, earthAxis, earthRotate }