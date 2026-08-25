document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (form.action.includes('YOUR_FORM_ID')) {
    note.textContent = "Form isn't set up yet — see the setup instructions to connect it to your email.";
    return;
  }

  submitBtn.disabled = true;
  note.textContent = 'Sending...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      note.textContent = "Thanks! Your request has been sent — we'll be in touch soon.";
      form.reset();
    } else {
      note.textContent = "Something went wrong sending your request — please call (567) 395-4787 instead.";
    }
  } catch (err) {
    note.textContent = "Something went wrong sending your request — please call (567) 395-4787 instead.";
  } finally {
    submitBtn.disabled = false;
  }
});
