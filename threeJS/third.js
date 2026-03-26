// library ref: because we are loading a module
import * as THREE from 'three';

// We need to very briefly introduce textures here - NOTE: there is alot more to this topic: here we ONLY discuss the loading of a texture - not the different types, how to cover, wrap, place, apply filters etc....
// Textures, as you probably know, are images that will cover the surface of your geometries. Many types of textures can have different effects on the appearance of your geometry. To load the texture, you need the path to the image file, and then to load the file:we will use the inbuilt Three.js object: the TextureLoader. 
const loader = new THREE.TextureLoader();

const water_texture = await loader.loadAsync('textures/Ice002_1K-JPG_Color.jpg');
//need to ensure that the textures are encoded correctly - mapping the colors correctly.
water_texture.colorSpace = THREE.SRGBColorSpace;



//SCENE
//All Three.js scenes are rendered inside an html canvas element. This is why we have one setup in our html page :) 
// The scene is like a container. You place your objects, models, particles, lights, etc. in it, and at some point, you will ask Three.js to render that scene. To create a scene, we use the Scene class.
const scene = new THREE.Scene()

const material = new THREE.MeshBasicMaterial({
    map: water_texture// map the texture
})



const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube1.position.x = 1.5
group.add(cube1)
/*https://threejs.org/docs/#SphereGeometry*/
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(.75, 32, 16),
    new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
)
sphere.position.y = 1.5 //object position relative to the group
sphere.position.x = 3
group.add(sphere)


group.position.x = -3 //if u move the group, both objects will move
group.rotation.x = Math.PI *.25
// group.scale.x = .5
// group.scale.y = .5
// group.scale.z = .5
group.scale.set(.5,.5,.5)
//could do
//camera.lookAt(group.position)



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





