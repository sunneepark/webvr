const body = document.querySelector('a-scene');
const $ = (query) => body.querySelector(query);


const animate = () => {
  const variation = Math.sin(Date.now() / 1000); //how many milliseconds pass

  let curPosition = $('#ball').getAttribute('position'); //ball's current position
  
  curPosition.x -= variation;
  curPosition.z -= variation;

  $('#ball').setAttribute('position',curPosition);

  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);