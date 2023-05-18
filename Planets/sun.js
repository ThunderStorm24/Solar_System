import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

const sunGeometry = new THREE.SphereGeometry(sunRadius, 32, 32);
const sunTexture = new THREE.TextureLoader().load('../assets/sun.jpg');
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
sunMaterial.lightMap = texture;
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.add(sunLight);
sun.name = "Sun";
sun.position.set(0, 0, 0);

export default sun