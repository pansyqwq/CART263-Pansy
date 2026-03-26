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