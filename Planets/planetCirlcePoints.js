import * as THREE from 'three';

export default function getCirclePoints(radius, segments) {
    const points = [];
    const angleStep = (Math.PI * 2) / segments;
    for (let i = 0; i < segments; i++) {
        const angle = i * angleStep;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        points.push(new THREE.Vector3(x, 0, z));
    }
    return points;
  }
  