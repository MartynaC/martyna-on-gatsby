import * as THREE from "three";
import { Mesh } from "three";

export function createTruncatedTetrahedron() {
  // Create a scene
  let scene, camera, renderer, mesh;

  if (renderer) {
    while (renderer.domElement.firstChild) {
      renderer.domElement.removeChild(renderer.domElement.firstChild);
    }
    renderer.dispose();
  }
  if (mesh) {
    scene.remove(mesh);
  }
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ alpha: true } );
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const shape = new THREE.Shape();

  shape.moveTo(0, 1);
  shape.lineTo(Math.sqrt(2)/2, 0.5);
  shape.lineTo(Math.sqrt(2), 1);
  shape.lineTo(Math.sqrt(2), 2);
  shape.lineTo(Math.sqrt(2)/2, 1.5);
  shape.lineTo(0, 2);
  shape.lineTo(0, 1);
  
  const extrudeSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false
  };
  renderer.setClearColor( 0x000000, 0 ); // the default
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshPhongMaterial({color: 0x00aa00});
  const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 5);
scene.add(light);

  const tetrahedron = new THREE.Mesh(geometry, material);
  scene.add(tetrahedron);
  // Render the scene
  renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame(animate);
    tetrahedron.rotation.x += 0.01;
    tetrahedron.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();
  return renderer.domElement;
}
