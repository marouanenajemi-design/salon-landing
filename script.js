const header = document.getElementById('header');
const toggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (toggle && mobileMenu && header) {
  toggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
    });
  });
}

function showMessage() {
  const msg = document.getElementById('formMessage');
  if (!msg) return;

  msg.textContent = 'Merci ! Votre demande a bien été enregistrée. Nous vous contacterons rapidement.';
  msg.style.color = '#1c7c25';
  msg.style.fontWeight = '700';
}

window.showMessage = showMessage;
