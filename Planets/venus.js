import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

//Venus Planet
const venusGeometry = new THREE.SphereGeometry(0.06, 32, 32);
const venusTexture = new THREE.TextureLoader().load('./assets/venus.jpg');
const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.name = "Venus";
venus.position.set(108 + sunRadius, 0, 0);

//Orbit of Venus
const venusOrbitRadius = 108 + sunRadius;
const venusOrbitPoints = 100;
const venusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(venusOrbitRadius, venusOrbitPoints));
venusOrbitGeometry.attributes.position.count -= 1;
const venusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x422d09 });
const venusOrbit = new THREE.LineLoop(venusOrbitGeometry, venusOrbitMaterial);

//Venus ring
const venusRingRadius = 0.07; // Przykładowy promień obręczy
const venusRingSegments = 100; // Przykładowa liczba segmentów obręczy
const venusRingGeometry = new THREE.RingGeometry(venusRingRadius, venusRingRadius + 0.01, venusRingSegments);
const venusRingMaterial = new THREE.MeshBasicMaterial({ color: 0xf5c45a, side: THREE.DoubleSide });
const venusRing = new THREE.Mesh(venusRingGeometry, venusRingMaterial);

//venusSpeed with Orbit
const venusSpeed = 0.0034;

//venusRotate
const venusAxis = new THREE.Vector3(0, 1, 0).normalize();
const venusRotate = 0.003 ;

export {venus, venusOrbit, venusRing, venusSpeed, venusAxis, venusRotate}