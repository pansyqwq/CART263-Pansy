//SEVEN - IMPORTED MODELS

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'//allow us to load 3d models
const gltfLoader = new GLTFLoader();

let gltfModel = null;

  try {
  gltfModel = await gltfLoader.loadAsync("model/Fox/glTF/Fox.gltf");
  addAndRun(gltfModel)

} catch (error) {
  console.log(error.message);
}


// canvas
const canvas = document.querySelector("canvas#three-ex");
const scene = new THREE.Scene();

//lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5) //enviroment light
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 50)// color all white, intensity 50
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
pointLight.castShadow= true;
scene.add(pointLight);

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);


//make a plane
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshBasicMaterial({ color: "#006aff" }),
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(plane)
addAndRun(gltfModel);
function addAndRun(loadedObj) {
    console.log(loadedObj);
    let foxModel = loadedObj.scene.children[0]
    scene.add(foxModel);
    foxModel.scale.x = 0.5;
    foxModel.scale.y = 0.5;
    foxModel.scale.z = 0.5;
window.requestAnimationFrame(animate);

    function animate() {
        // Update controls
        controls.update();
        // Render
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    }
}
