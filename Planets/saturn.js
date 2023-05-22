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
const saturnOrbitPoints = 100;
const saturnOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(saturnOrbitRadius, saturnOrbitPoints));
saturnOrbitGeometry.attributes.position.count -= 1;
const saturnOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xa09165 });
const saturnOrbit = new THREE.LineLoop(saturnOrbitGeometry, saturnOrbitMaterial);


const saturnRingRadius = 0.09; // Przykładowy promień obręczy
const saturnRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const saturnRingGeometry = new THREE.RingGeometry(saturnRingRadius, saturnRingRadius + 0.01, saturnRingSegments);
const saturnRingMaterial = new THREE.MeshBasicMaterial({ color: 0xC7A876, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);

//saturnSpeed
const saturnSpeed = 0.0011;

//saturnRotate
const saturnAxis = new THREE.Vector3(0, 1, 0).normalize();
const saturnRotate = 0.0017;

export { saturn, saturnOrbit, saturnRing, saturnSpeed, saturnAxis, saturnRotate }