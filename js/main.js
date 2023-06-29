window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var currentSection = '';

  document.querySelectorAll('section').forEach(function (section) {
    var sectionTop = section.offsetTop - navbar.offsetHeight;
    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  switch (currentSection) {
    case 'section1':
      navbar.style.backgroundColor = 'transparent';
      break;
    case 'section2':
      navbar.style.backgroundColor = 'black';
      break;
    case 'section3':
      navbar.style.backgroundColor = 'black';
      break;
    case 'section4':
      navbar.style.backgroundColor = 'black';
      break;
    default:
      navbar.style.backgroundColor = 'transparent'; // Color predeterminado
      break;
  }
});

function showItems(event, category) {
  event.preventDefault();

  const items = document.querySelectorAll('.card');
  const categoryLinks = document.querySelectorAll('.categories li a');

  items.forEach(item => {
    item.style.display = 'none';

    if (category === 'todo' || item.classList.contains(category)) {
      item.style.display = 'block';
    }
  });

  categoryLinks.forEach(link => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.smooth-scroll');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', smoothScroll);
  }
  function smoothScroll(e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
});

isCartOpen = false
function switchCart() {
  var cart = document.getElementById('carrito');
  var btncart = document.getElementById('btnCart');
  var resumen = document.getElementById('resumen');
  var btnPedido = document.getElementById('btnPedido');
  if (isCartOpen == false) {
    cart.style.width = '400px';
    btncart.style.right = '420px'

    resumen.style.display='block';
    btnPedido.style.display='block'
    isCartOpen = true;

  } else {
    cart.style.width = '0px';
    btncart.style.right = '50px';

    resumen.style.display='none';
    btnPedido.style.display='none'
    isCartOpen = false;
  }
};

function switchToRegister() {
  var login = document.getElementById('loginform');
  var registro = document.getElementById('registerForm')

  login.style.display = 'none'
  registro.style.display = 'block'
}
function switchToLogin() {
  var login = document.getElementById('loginform');
  var registro = document.getElementById('registerForm')
  registro.style.display = 'none'
  login.style.display = 'block'
}

