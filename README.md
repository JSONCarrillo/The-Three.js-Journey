# The Three.js journey

This repository is centered around my learning journey of the Three.js and to act as a sort of diary of sorts.

## Getting Started

With in the directory titled 'getting-started' this goes into the creation of the first rendering of a simple blue cube. 

I went a bit overkill on this project and decided to add inputs that allow the user to set the size of the cube and the camera

### What was learned in this module

We must always start with setting the scene

`const scene = new THREE.Scene();`

Then we want to start adding components

For start, lets look at the subject, the cube. The cube contains 2 parts, the geometry, and the mesh. 

The geometry determines the base, width, and height of the cube. The mesh is the color/material we wish to put on the cube. In this example, I chose blue.

Then we just add the cube to the scene

<pre>
// Create geometry args(base, width, height)
let geometry = new THREE.BoxGeometry(setCubeBase(), setCubeHeight(), setCubeWidth());

// Create material
const material = new THREE.MeshBasicMaterial({color: 'blue'});

// Create the mesh
const cube = new THREE.Mesh(geometry, material);

//Add cube to scene
scene.add(cube); 
</pre>

For the camera, the camera takes 2 arguments, the FOV and the aspect ratio. The aspect ratio is the width divided by the height
`const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);`

We can then set the x, y, and z of the camera
<pre>
// Set the camera z, x and y axis
camera.position.z = setCameraZ();
camera.position.x = setCameraX();
camera.position.y = setCameraY();

// Add camera to scene
scene.add(camera);
</pre>

Finally we set up the canvas that will contain our scene and have the Three.js renderer render the scene within
<pre>
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
</pre>