// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
//All Three.js scenes are rendered inside an html canvas element. This is why we have one setup in our html page :) 
// The scene is like a container. You place your objects, models, particles, lights, etc. in it, and at some point, you will ask Three.js to render that scene. To create a scene, we use the Scene class.
const scene = new THREE.Scene()

//A: the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)//3d dimension of the cube box
//B: the material
const material = new THREE.MeshBasicMaterial({ color: 0x800080 }) //the 3d model needs a material, material defines how the object reflects the light
//C: put together
const mesh = new THREE.Mesh(geometry, material) //we r creating a new mesh and i'm giving it the geometry and material
//D: ADD TO THE SCENE
scene.add(mesh)

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = 1.5
mesh_2.position.y = 1.25
mesh_2.position.z = -1

//scaling lets u deform the object
mesh.scale.x = 2
mesh.scale.y = 0.25
mesh.scale.z = 0.5

// Rotation is a little more complicated than position and scale. There are two ways of handling a rotation. You can use the more clear rotation property, but you can also use the less obvious quaternion property. 
// Three.js supports both, and updating one will automatically update the other. It's just a matter of which one you prefer. We will only go over standard rotation. 
// The rotation property also has x, y, and z properties, but instead of a Vector3, it's a Euler. 
// When you change the x, y, and z properties of a Euler, you can imagine putting a stick through your object's center in the axis's direction and then rotating that object on that stick. The value of these rotations is expressed in radians
mesh.rotation.x = Math.PI * 0.25 //1/8 of a circle, pi * 0.25
mesh.rotation.y = Math.PI * 0.25



const sizes = {
    width: 800,
    height: 600
}
//Camera
//The field of view is how large your vision angle is. If you use a very large angle, you'll be able to see in every direction at once but with much distortion, because the result will be drawn on a small rectangle. 
// If you use a small angle, things will look zoomed in. The field of view (or fov) is expressed in degrees and corresponds to the vertical vision angle. Here: we will use a 75 degrees angle.
//degree 影响透视
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)


//move camera
//MOVING THINGS INTO POSITION: Here's the issue: we haven't specified our object's position, nor our camera's. Both are in the default position, which is the center of the scene and we can't see an object from its inside (by default). 
//We need to move things. To do that, we have access to multiple properties on each object, such as position, rotation, and scale. 
//For now, we will use the position property to move the camera backward. The position property is an object with three relevant properties: x, y and z. By default, Three.js considers the forward/backward axis to be z. 
//To move the camera backward, we need to provide a positive value to that property:
//positive 3 means towards u 
//need to set camera position before rendering
camera.position.z = 3


// Another very useful function to consider is all Object3D instances have an super useful method named lookAt(...) that lets you ask an object to look at something. 
// The object will automatically rotate its -z axis toward the target you provided. No complicated maths needed. 
// You can use it to rotate the camera toward an object, orientate a cannon to face an enemy, or move the character's eyes to an object. 
//need to be after camera 
camera.lookAt(new THREE.Vector3(0, - 1, 0))
//or
// camera.lookAt(mesh_2.position)

//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)



//TURN ON AXES HELPER
//https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

//render:
// renderer.render(scene, camera)

let elapsedTime = 0
//To adapt the animation to the framerate, we need to know how much time it's been since the last frame: 
// There is a variable that is passed automatically into the requestAnimationFrame() that contained the time in ms since the program was loaded (like millis in p5). 
// You can then simply use that variable to calculate the time passed since the last frame.. 
// You can then use this value to rotate the object.
window.requestAnimationFrame(animate)
function animate(timer) {
    let deltaTime = timer - elapsedTime;//making the animation the same rate on different device
    elapsedTime = timer //update  new elapsedTime
    mesh.rotation.x += 0.001 * deltaTime
    mesh.rotation.y += 0.001 * deltaTime




    // Update objects -> elapsed time increases ...
    mesh_2.position.x = Math.cos(elapsedTime / 100)
    mesh_2.position.y = Math.sin(elapsedTime / 100)



    camera.position.x = Math.cos(elapsedTime / 900)
    camera.position.y = Math.sin(elapsedTime / 800)

    renderer.render(scene, camera)// put the rendering inside the animation frame to render it every frame
    window.requestAnimationFrame(animate)
}





