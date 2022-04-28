// set base cube size
let cubeBase = cubeHeight = cubeWidth = 1;
let side;

//set camera position
let camerax = cameray = 0;
let cameraz = 3;

// Initialize the scene
const scene = new THREE.Scene();

// Create geometry args(base, width, height)
let geometry = new THREE.BoxGeometry(setCubeBase(), setCubeHeight(), setCubeWidth());

// Create material
const material = new THREE.MeshBasicMaterial({color: 'blue'});

// Create the mesh
const cube = new THREE.Mesh(geometry, material);

//Add cube to scene
scene.add(cube);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera args(FOV, aspect ratio (width divided by height))
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Set the camera z, x and y axis
camera.position.z = setCameraZ();
camera.position.x = setCameraX();
camera.position.y = setCameraY();

// Add camera to scene
scene.add(camera);

// Fetch the canvas class from 
const canvas = document.querySelector('.webgl');

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// Set the size of the Renderer
renderer.setSize(sizes.width, sizes.height);

// Render the scene
renderer.render(scene, camera);

// Set camera positon function

function setCameraPostion(){
    camera.position.z = document.getElementById("#z-axis");
    camera.position.x = document.getElementById("#x-axis");
    camera.position.y = document.getElementById("#y-axis");
}

// Set base, width, and height
function setCubeBase(){
    side = document.getElementById("base").value;
    return side;
}
function setCubeHeight(){
    side = document.getElementById("height").value;
    return side;
}
function setCubeWidth(){
    side = document.getElementById("width").value;
    return side;
}

// Set camera x, y, z
function setCameraX(){
    axis = document.getElementById("x-axis").value;
    return axis;
}

function setCameraY(){
    axis = document.getElementById("y-axis").value;
    return axis;
}

function setCameraZ(){
    axis = document.getElementById("z-axis").value;
    return axis;
}