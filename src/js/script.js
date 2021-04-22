import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';
    
function main() {
  const canvas = document.querySelector('#myCanvas');
  const gl = canvas.getContext('webgl');
  gl.clearColor(0,0,0,0);
  const renderer = new THREE.WebGLRenderer({canvas});
  const fov = 35;
  const aspect = 2;
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
  let mp4 = document.getElementById('video');
  let mp4Url = document.querySelector('#video').src;
  let videoTexture = new THREE.VideoTexture(mp4);
  let cubes = [];
  let loader = new THREE.TextureLoader();
  let materials;
  makeTexture();
  function makeTexture() {
    switch (mp4Url) {
      case './src/img/amongus.mp4':
        videoTexture = new THREE.VideoTexture(mp4);
        materials = [
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: videoTexture}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBottom.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerFront.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBack.png')}),
        ];
        break;
      case './src/img/amongus2.mp4':
        videoTexture = new THREE.VideoTexture(mp4);
        materials = [
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: videoTexture}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBottom.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerFront.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBack.png')}),
        ];
        break;
      case './src/img/bee.mp4':
        videoTexture = new THREE.VideoTexture(mp4);
        materials = [
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: videoTexture}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBottom.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerFront.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBack.png')}),
        ];
      case './src/img/ledAnimate.mp4':
        videoTexture = new THREE.VideoTexture(mp4);
        materials = [
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: videoTexture}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBottom.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerFront.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBack.png')}),
        ];
        break;
      default:
        materials = [
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerSide.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerTop.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBottom.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerFront.png')}),
          new THREE.MeshBasicMaterial({map: loader.load('./src/img/speakerBack.png')}),
        ];  
    }    
    let cube = new THREE.Mesh(geometry, materials); 
    scene.add(cube);
    cubes.push(cube);
  }

  const controls = new OrbitControls(camera, canvas);
  controls.rotateSpeed = 0.3; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
  controls.zoomSpeed = 0; // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.
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

  let selectImg = document.querySelectorAll('.gifs');
  selectImg.forEach(item => item.addEventListener('click',event => {
    mp4Url = document.querySelector('#video').src;
    let delIndex = document.querySelector('#video').src.split('/').indexOf('src');
    
    mp4Url = document.querySelector('#video').src.split('/').splice((delIndex-1),delIndex);
    mp4Url.splice(0,1,'.');
    mp4Url = mp4Url.join('/');

    let postUrl = mp4Url;
    makeTexture();
    //객체 생성부분
    var http;
    if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();
    } 
    else {
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //Ajax구현부분
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            //통신 성공시 구현부분
           
        }
    }
    http.open("POST", "./lib/sendUrl.php", true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send('mp4Url=' + encodeURIComponent(postUrl));
  }))

  function render() {
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
