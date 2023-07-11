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
let debugvar = 0;
let pageoffset = 0;

// window.addEventListener('scroll', e => {
//   pageoffset = window.pageYOffset;
// });

container.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  console.log(mouseX, mouseY)
});






function updateCircleSize() {

  const sizeDifference = targetSize - circlesize;
  const step = sizeDifference * 0.1; // Adjust the step value to control the speed of the size change

  if (Math.abs(sizeDifference) <= Math.abs(step)) {
    circlesize = targetSize;
  } else {
    circlesize += step;
  }

  // console.log(sizeDifference, circlesize)

  topDiv.style.clipPath = `circle(${circlesize}px at ${mouseX}px ${mouseY + window.pageYOffset}px)`;

  requestAnimationFrame(updateCircleSize);
}

updateCircleSize();

h2Elements.forEach(h2 => {
  h2.addEventListener('mouseover', () => {
    // Update the target size to double the size of the mouse circle when hovering over an h2 element
    targetSize = 200;
  });

  h2.addEventListener('mouseout', () => {
    // Update the target size to the default size of the mouse circle when the mouse moves out of an h2 element
    targetSize = 50;
  });
});

aElements.forEach(a => {
  a.addEventListener('mouseover', () => {
    // Update the target size to double the size of the mouse circle when hovering over an h2 element
    targetSize = 20;
  });

  a.addEventListener('mouseout', () => {
    // Update the target size to the default size of the mouse circle when the mouse moves out of an h2 element
    targetSize = 50;
  });
});

// imgElements.forEach(img => {
//   img.addEventListener('mouseenter', () => {
//     // Update the target size to double the size of the mouse circle when hovering over an h2 element
//     targetSize = 300;
//   });

//   img.addEventListener('mouseout', () => {
//     // Update the target size to the default size of the mouse circle when the mouse moves out of an h2 element
//     targetSize = 50;
//   });
// });

pElements.forEach(p => {
  p.addEventListener('mouseover', () => {
    // Update the target size to double the size of the mouse circle when hovering over an h2 element
    targetSize = 150;
  });

  p.addEventListener('mouseout', () => {
    // Update the target size to the default size of the mouse circle when the mouse moves out of an h2 element
    targetSize = 50;
  });
});
