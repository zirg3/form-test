document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  function hasSpecial(text) {
    const special = ['@', '#', '$', '%', '&', '*', '(', ')', '_', '+', '='];
    for (let i = 0; i < text.length; i++) {
      if (special.includes(text[i])) {
        return true;
      }
    }
    return false;
  }

  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.style.display = 'none');

  let isValid = true;

  const firstName = document.getElementById('firstName').value.trim();
  if (!firstName || hasSpecial(firstName)) {
    document.getElementById('firstNameError').style.display = 'block';
    isValid = false;
  }


  const lastName = document.getElementById('lastName').value.trim();
  if (!lastName || hasSpecial(firstName)) {
    document.getElementById('lastNameError').style.display = 'block';
    isValid = false;
  }

  const email = document.getElementById('email').value.trim();
  if (!email) {
    document.getElementById('emailRequiredError').style.display = 'block';
    isValid = false;
  }

  const queryType = document.querySelector('input[name="queryType"]:checked');
  if (!queryType) {
    document.getElementById('queryTypeError').style.display = 'block';
    isValid = false;
  }

  const message = document.getElementById('message').value.trim();
  if (!message) {
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
  }

  const consent = document.getElementById('consent').checked;
  if (!consent) {
    document.getElementById('consentError').style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMessage').style.display = 'block';
    document.querySelector('.data').innerHTML = `
      {
        firsName: ${firstName}, <br>
        lastName: ${lastName},<br>
        email: ${email},<br>
        queryType: ${queryType.value},<br>
        message: ${message},<br>
        consent: ${consent}<br>
      }
    `
    document.querySelector('#contactForm').reset()
  }
});