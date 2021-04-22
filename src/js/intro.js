function strokeAnimate() {
  return new Promise(function(resolve,reject) {
    let text = document.querySelector('.textSvg');
    let text2 = document.querySelector('.textSvg.bottom');
  
    setTimeout(function(){
      text.style.strokeDashoffset = '0';
      text.style.transition = 'stroke-dashoffset 3s ease-out, fill 1s'; 
    },500);
    setTimeout(function(){
      text2.style.strokeDashoffset = '0';
      text2.style.transition = 'stroke-dashoffset 3s ease-out, fill 1s'; 
    },2000);
    setTimeout(function(){
      resolve();
    },5000);
  });
}

function fillAnimate(weight,sec) {
  return new Promise(function(resolve,reject) {
    let text3 = document.querySelector('.textSvg');
    let text4 = document.querySelector('.textSvg.bottom');

    setTimeout(function(){
        text3.style.fill = '#000000';
    },500);
    setTimeout(function(){
      text4.style.fill = '#000000';
      setTimeout(function(){
        text3.style.strokeWidth = weight;
        text3.style.transition = '2s';
        text4.style.strokeWidth = weight;
        text4.style.transition = '2s';
        setTimeout(function(){
          resolve();
        },sec);
      },1000);
    },700);
  });
}

function finishAni() {
  return new Promise(function(resolve,reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'index.html');
    xhttp.onreadystatechange = function() {
      let http = xhttp.responseURL;
      console.log(http);
      localStorage.setItem('intro','stop');
      location.replace(http);
    }
    xhttp.send();
    resolve();
  });
}
async function logItems() {
  let textAni = await strokeAnimate();
  let fillAni = await fillAnimate(5,2000);
  let finish = await finishAni();
}

logItems();