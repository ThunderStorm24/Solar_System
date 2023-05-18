import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

const uranusGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const uranusTexture = new THREE.TextureLoader().load('./assets/uranus.jpg');
const uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(680 + sunRadius, 0, 0);
uranus.name = "Uranus";


const uranusOrbitRadius = 680 + sunRadius;
const uranusOrbitPoints = 100;
const uranusOrbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(uranusOrbitRadius, uranusOrbitPoints));
uranusOrbitGeometry.attributes.position.count -= 1;
const uranusOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x3a737a });
const uranusOrbit = new THREE.LineLoop(uranusOrbitGeometry, uranusOrbitMaterial);

const uranusRingRadius = 0.09; // Przykładowy promień obręczy
const uranusRingSegments = 100; // Przykładowa liczba segmentów obręczy dla Marsa
const uranusRingGeometry = new THREE.RingGeometry(uranusRingRadius, uranusRingRadius + 0.01, uranusRingSegments);
const uranusRingMaterial = new THREE.MeshBasicMaterial({ color: 0x77B7D8, side: THREE.DoubleSide });
const uranusRing = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);

export { uranus, uranusOrbit, uranusRing }