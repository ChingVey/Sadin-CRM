const scriptURL = 'https://script.google.com/macros/s/AKfycbyJN9tAvKJbDPuAzJ3gN9ZIRmS2adAsOqWOwoqFg0v-on8AJl0Q7S99AdgzxiyoZjhi/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})