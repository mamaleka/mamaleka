window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.fontSize = '1rem';
    // document.getElementById('header').style.paddingBlock = '1rem';
  } else {
    document.getElementById('header').removeAttribute('style');
  }
}

const menuBtn = document.getElementById('menu-button')
const menu = document.getElementById('menu')
let showMenu = false;

const toggleShowMenu = () => {
  showMenu = !showMenu
  menu.style.display = showMenu?  "none": "block";

}
menuBtn.addEventListener('click', toggleShowMenu)