const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Website enquiry - ${data.get('service')}`;
  const body = [
    'Hello Shri Ram Fire Safety,', '',
    'I would like to enquire about your services.', '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email') || 'Not provided'}`,
    `Service required: ${data.get('service')}`, '',
    'Requirement:', data.get('message'), '',
    'Please contact me to discuss the next steps.'
  ].join('\n');
  document.getElementById('formStatus').textContent = 'Opening your email application. Please review and send the message there.';
  window.location.href = `mailto:shriramfire101@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
