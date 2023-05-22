import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

//Mercury 
const mercuryGeometry = new THREE.SphereGeometry(0.02439, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load('./assets/mercury.jpg');
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.name = "Mercury";
mercury.position.set(58 + sunRadius, 0, 0);

//Orbit of Mercury
const mercuryOrbitRadius = 58 + sunRadius; // Przeniesiona definicja zmiennej
const mercuryOrbitPoints = 100;
const mercuryOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(mercuryOrbitRadius, mercuryOrbitPoints));
mercuryOrbitGeometry.attributes.position.count -= 1;
const mercuryOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x714e81 });
const mercuryOrbit = new THREE.LineLoop(mercuryOrbitGeometry, mercuryOrbitMaterial);

//Ring of Mercury
const mercuryRingRadius = 0.05; // Przykładowy promień obręczy
const mercuryRingSegments = 100; // Przykładowa liczba segmentów obręczy
const mercuryRingGeometry = new THREE.RingGeometry(mercuryRingRadius, mercuryRingRadius + 0.01, mercuryRingSegments);
const mercuryRingMaterial = new THREE.MeshBasicMaterial({ color: 0x714e81, side: THREE.DoubleSide });
const mercuryRing = new THREE.Mesh(mercuryRingGeometry, mercuryRingMaterial);

//mercurySpeed with Orbit
const mercurySpeed = 0.0047;

//MercuryRotate
const mercuryAxis = new THREE.Vector3(0, 1, 0).normalize();
const mercuryRotate = 0.006 ;

export {mercury , mercuryOrbit, mercuryRing, mercurySpeed, mercuryAxis, mercuryRotate} 