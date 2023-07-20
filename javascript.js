const topDiv = document.getElementById('honest_overlay');
const container = document.getElementById('body');
const h2Elements = document.querySelectorAll('h2');
const aElements = document.querySelectorAll('a');
const imgElements = document.querySelectorAll('img');
const pElements = document.querySelectorAll('p');
let mouseX = 0;
let mouseY = 0;
let circlesize = 50;
let targetSize = circlesize;

container.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateCircleSize() {

  const sizeDifference = targetSize - circlesize;
  const step = sizeDifference * 0.1; // Adjust the step value to control the speed of the size change

  if (Math.abs(sizeDifference) <= Math.abs(step)) {
    circlesize = targetSize;
  } else {
    circlesize += step;
  }

  topDiv.style.clipPath = `circle(${circlesize}px at ${mouseX}px ${mouseY + window.scrollY}px)`;

  requestAnimationFrame(updateCircleSize);
}

updateCircleSize();

// Get the parent element that contains the elements with the "hover" class
const parentElement = document.getElementById('professional_underlay');

// Add event listener to the parent element
parentElement.addEventListener('mouseover', (event) => {
  // Check if the hovered element has the "hover" class
  if (event.target.classList.contains('hover')) {
    targetSize = 200;
  }
  else if (event.target.classList.contains('hover120')) {
    targetSize = 120;
  }
  else if (event.target.classList.contains('hover550')) {
    targetSize = 550;
  }
  else if (event.target.classList.contains('hover20')) {
    targetSize = 20;
  }
});

// Add event listener to reset the targetSize when mouse leaves the parent element
parentElement.addEventListener('mouseout', () => {
  targetSize = 50;
});




//STORYTEXT DISPLAY BLOCK WHEN HOVERED
const story_start = document.querySelector('.story_start');
const storytext = document.querySelector('.storytext');
const storytexts = document.querySelectorAll('.storytext');
const story_beginning = document.querySelector('.story_beginning');

story_start.addEventListener('mouseenter', () => {
  storytexts.forEach(storytext => {
    storytext.style.maxHeight = storytext.scrollHeight + 'px';
    story_beginning.style.transition = 'opacity 0s';
    story_beginning.style.opacity = '1.0';
  });
});

storytext.addEventListener('mouseout', () => {
  storytexts.forEach(storytext => {
    storytext.style.transition = 'max-height 0.8s ease';
    storytext.style.maxHeight = '0';
    story_beginning.style.transition = 'opacity 0.5s ease';
    story_beginning.style.opacity = '0';
  });
});


//PLAY VIDEO WHEN HOVERING OVER IT
const videoElements = document.querySelectorAll('.project_video');
const project_text = document.querySelectorAll('.project_text');

videoElements.forEach((video, index) => {
  video.addEventListener('mouseover', () => {
    videoElements[index].classList.add('play');
    videoElements[index + (videoElements.length/2)].classList.add('play');
    project_text[index].style.opacity = '1';
    videoElements[index].play();
    videoElements[index + (videoElements.length/2)].play();
  });

  video.addEventListener('mouseout', () => {
    videoElements[index].classList.remove('play');
    videoElements[index + (videoElements.length/2)].classList.remove('play');
    project_text[index].style.opacity = '0';
    videoElements[index].pause();
    videoElements[index + (videoElements.length/2)].pause();
  });
});


