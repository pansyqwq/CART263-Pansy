// library ref: because we are loading a module
import * as THREE from 'three';

// We need to very briefly introduce textures here - NOTE: there is alot more to this topic: here we ONLY discuss the loading of a texture - not the different types, how to cover, wrap, place, apply filters etc....
// Textures, as you probably know, are images that will cover the surface of your geometries. Many types of textures can have different effects on the appearance of your geometry. To load the texture, you need the path to the image file, and then to load the file:we will use the inbuilt Three.js object: the TextureLoader. 
const loader = new THREE.TextureLoader();

const water_texture = await loader.loadAsync( 'textures/Ice002_1K-JPG_Color.jpg' );
//need to ensure that the textures are encoded correctly - mapping the colors correctly.
water_texture.colorSpace = THREE.SRGBColorSpace;



//SCENE
//All Three.js scenes are rendered inside an html canvas element. This is why we have one setup in our html page :) 
// The scene is like a container. You place your objects, models, particles, lights, etc. in it, and at some point, you will ask Three.js to render that scene. To create a scene, we use the Scene class.
const scene = new THREE.Scene() 

const material = new THREE.MeshBasicMaterial({
    map: water_texture// map the texture
})


// material.color = new THREE.Color('#ad86dd') 
//or
material.color = new THREE.Color('rgba(130, 252, 250, 1)') // it's multiplying the color on top
material.transparent = true
material.opacity = 0.5// opacity


const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5//give the sphere a position

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.3, 16, 32),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)//we add all three to the scene



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
camera.position.x = -3
camera.position.z = 3


// Another very useful function to consider is all Object3D instances have an super useful method named lookAt(...) that lets you ask an object to look at something. 
// The object will automatically rotate its -z axis toward the target you provided. No complicated maths needed. 
// You can use it to rotate the camera toward an object, orientate a cannon to face an enemy, or move the character's eyes to an object. 
//need to be after camera 

  //or
camera.lookAt(plane.position)

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
renderer.render(scene, camera)





