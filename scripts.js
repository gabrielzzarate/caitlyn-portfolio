
function init() {
  const header = document.querySelector('#header');
  console.log(window.scrollY);
  document.addEventListener('scroll', headerScrollState)
}

init();

function headerScrollState() {
  const header = document.querySelector('#header');
  
  console.log(window.scrollY);

  if (window.scrollY > 844) {
    return header.classList.add('scrolled');
  } else if (window.scrollY < 844) {
    return header.classList.remove('scrolled');
  }
}