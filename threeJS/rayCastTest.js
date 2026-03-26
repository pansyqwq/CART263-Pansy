import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const mouse = new THREE.Vector2();
const scene = new THREE.Scene()
let currentIntersectedObj = null;
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

const controls = new OrbitControls(camera, canvas)

const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = -2

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object2.position.x = 2


const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

scene.add(object1, object2, object3)

const raycaster = new THREE.Raycaster()//need to be before animation
//ray will start somewhere on left of the spheres
const rayOrigin = new THREE.Vector3(- 5, 0, 0)
//right (positive x)
const rayDirection = new THREE.Vector3(10, 0, 0)  //reduce magnitude BUT keep direction
console.log(rayDirection.length())//calculate the length of the function and print it
//set direction only (has length ==1)
rayDirection.normalize()//normalize the vector and print it 
console.log(rayDirection.length())
raycaster.set(rayOrigin, rayDirection) //raycaster has been oriented

const objectsToTest = [object1, object2, object3]
const intersects = raycaster.intersectObjects(objectsToTest)

const rayOrigin_n = new THREE.Vector3(-3, -2, 0);
    raycaster.set(rayOrigin_n, rayDirection); //raycaster has been oriented

 window.addEventListener("mousemove", function(event) {
  mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
  mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
  //console.log(mouse);
  });
    
function animate(timer) {
    // controls.update();

    // object1.position.y = Math.sin(timer / 1000 * 0.5) * 1.5;
    // object2.position.y = Math.sin(timer / 1000 * 0.4) * 1.5;
    // object3.position.y = Math.sin(timer / 1000 * 0.3) * 1.5;

    // const rayOrigin = new THREE.Vector3(-3, -2, 0);
    // const rayDirection = new THREE.Vector3(1, 0, 0);
    // rayDirection.normalize();

    // raycaster.set(rayOrigin, rayDirection);

    // const objectsToTest = [object1, object2, object3];
    // const intersects = raycaster.intersectObjects(objectsToTest);// we are storing every intersection inside intersects

    

    // for (const object of objectsToTest) {
    //     object.material.color.set('#ff0000');
    // }

    // for (const intersect of intersects) {
    //     intersect.object.material.color.set('#0000ff');// when they intersect, set the object to blue
    // }

    // renderer.render(scene, camera);
    // window.requestAnimationFrame(animate);

controls.update();

  raycaster.setFromCamera(mouse, camera);

  const objectsToTest = [object1, object2, object3];
  const intersects = raycaster.intersectObjects(objectsToTest);

if (intersects.length > 0) {
      //there was none so we enter
      if (currentIntersectedObj === null) {
        currentIntersectedObj = intersects[0]; //take first
        console.log("mouse enter");
        currentIntersectedObj.object.material.color.set("#00c3ff");
      }
      else{
      
       //the currently selected one is NO LONGER IN THE LIST
       if (intersects.find(findIfCurrentObjIsActive) === undefined) {
        currentIntersectedObj.object.material.color.set("#ff0000");
        currentIntersectedObj = intersects[0]; //take first
        currentIntersectedObj.object.material.color.set("#00c3ff");

       }
    }
  }

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
 }


animate(0);

