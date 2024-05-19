let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountaims4 = document.getElementById('mountaims4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let welcome = document.querySelector('.welcome');
window.onscroll = function(){
let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value *4 + 'px';
mountains3.style.top = value * 2 + 'px';
mountaims4.style.top = value * 1.5 + 'px';
river.style.top = value + 'PX';
boat.style.top = value + 'PX';
boat.style.left = value * 3 + 'px';
welcome.style.fontSize = value  + 'px';
if(scrollY >= 60){
    welcome.style.fontSize = 60  + 'px';
    welcome.style.position = 'fixed';
if(scrollY >= 478){
    welcome.style.display = 'none';
}else{
    welcome.style.display = 'block';
}
if(scrollY >=200){
  
  
    document.querySelector('.main').style.background ='linear-gradient(#9dbdd5, #dd9d70)';
}else
document.querySelector('.main').style.background = 'linear-gradient(#9dbdd5,#dd9d70)';
}

}

