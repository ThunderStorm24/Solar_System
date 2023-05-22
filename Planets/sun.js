import * as THREE from 'three';
import getCirclePoints from './planetCirlcePoints';
const sunRadius = 6.9634;

const sunLight = new THREE.PointLight(0xffffff, 1);
sunLight.position.set(0, 0, 0);

const uint8 = new Uint8Array(4)
uint8.fill(255)
const texture = new THREE.DataTexture(uint8, 1, 1);
texture.needsUpdate = true;

const sunGeometry = new THREE.SphereGeometry(sunRadius, 32, 32);
const sunTexture = new THREE.TextureLoader().load('./assets/sun.jpg');
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
sunMaterial.lightMap = texture;
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.add(sunLight);
sun.name = "Sun";
sun.position.set(0, 0, 0);

export { sun }