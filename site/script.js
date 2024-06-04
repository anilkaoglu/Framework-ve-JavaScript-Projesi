// menu

const toggleButton = document.getElementById('toggleButton');
const menuList = document.getElementById('menuList');

toggleButton.addEventListener('click', function() {
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
});


// tema

let darkMode = false;

function changeTheme() {
  const body = document.body;
  const button = document.getElementById('themeButton');

  darkMode = !darkMode;

  if (darkMode) {
    body.style.backgroundColor = 'rgb(204, 204, 204)';
    button.textContent = 'Aydınlık Tema';
  } else {
    body.style.backgroundColor = 'rgb(107, 107, 107)';
    button.textContent = 'Karanlık Tema';
  }
}

// form

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    if (name.trim() == '' || email.trim() == '') {
      alert('Lütfen boş yerleri doldurunuz!');
      return false;
    }
  
    if (!validateEmail(email)) {
      alert('Lütfen geçerli bir mail adresi giriniz!');
      return false;
    }
  
    return true;
  }
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }