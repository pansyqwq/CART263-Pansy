
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -1.5

const controls = new OrbitControls(camera, canvas)
// Note: By default, the camera and therefore the controls is looking at the center of the scene. We can change that with the target property. 
// For example - lets make its target the mesh:
controls.target = mesh.position

 // ANIMATION SETUP
window.requestAnimationFrame(animate)


function animate(timer){
// camera.position.x = Math.cos(timer/1000)
// camera.position.y = Math.sin(timer/1000)
controls.target.y = 0; // if u want the camera move in relation to this object on y axis 
//console.log(camera.position.x)
renderer.render(scene, camera)
window.requestAnimationFrame(animate)
controls.enableDamping = true;//smooth animation
}

controls.update()