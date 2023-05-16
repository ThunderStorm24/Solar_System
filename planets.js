
export default function planets () {
    const mercuryGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const mercuryMaterial = new THREE.MeshPhongMaterial({ color: 0x964B00 });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.position.set(2, 0, 0);
    scene.add(mercury);
    
    const venusGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const venusMaterial = new THREE.MeshPhongMaterial({ color: 0xFFA500 });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(3.5, 0, 0);
    scene.add(venus);
    
    const earthGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(5, 0, 0);
    scene.add(earth);
    
    const marsGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const marsMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(7, 0, 0);
    scene.add(mars);
    
    const jupiterGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const jupiterMaterial = new THREE.MeshPhongMaterial({ color: 0xFF4500 });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.position.set(10, 0, 0);
    scene.add(jupiter);
    
    const saturnGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const saturnMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.position.set(13, 0, 0);
    scene.add(saturn);
    
    const uranusGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const uranusMaterial = new THREE.MeshPhongMaterial({ color: 0x00FFFF });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.position.set(16, 0, 0);
    scene.add(uranus);
    
    const neptuneGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const neptuneMaterial = new THREE.MeshPhongMaterial({ color: 0x00008B });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.position.set(19, 0, 0);
    scene.add(neptune);

}
