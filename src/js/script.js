import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';

function main() {
  const canvas = document.querySelector('canvas');
  const gl = canvas.getContext('webgl');
  gl.clearColor(0.0,0.5,0.0,1.0);
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 35;
  const aspect = 2;  // the canvas default
  const near = 1.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 4;


  


  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
  
    light.position.set(0.0,0.0,1.0);
    scene.add(light);
   

  }

  const boxWidth = 2;
  const boxHeight = 1;
  const boxDepth = 0.8;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const cubes = [];
  const loader = new THREE.TextureLoader();
  const materials = [
    new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerTop.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBottom.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerFront.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBack.png')}),
  ];
  
    

    const cube = new THREE.Mesh(geometry, materials); 
    scene.add(cube);
  cubes.push(cube);




  

  const controls = new OrbitControls(camera, canvas);
  controls.rotateSpeed = 0.3; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
        controls.zoomSpeed = 1.2; // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.
        controls.panSpeed = 5; // 패닝 속도 입니다. 기본값(Float)은 1입니다.
        controls.minDistance = 2; // 마우스 휠로 카메라 거리 조작시 최소 값. 기본값(Float)은 0 입니다.
        controls.maxDistance = 100; // 마우스 휠로 카메라 거리 조작시 최대 값. 기본값(Float)은 무제한 입니다.

  controls.target.set(0, 0, 0);

 

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  

 

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    
    
   
    

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
