let labelNobre = document.querySelector("#label-nobre")
let labelExotica = document.querySelector("#label-exotica")
let labelAmbas = document.querySelector("#label-ambas")


labelAmbas.addEventListener('click', function() {
  if (labelExotica.classList.contains('mudança-cor') || labelNobre.classList.contains('mudança-cor') && labelAmbas.classList.contains('mudança-cor') == false) {
    labelExotica.classList.remove('mudança-cor')
    labelNobre.classList.remove('mudança-cor')
    labelAmbas.classList.add('mudança-cor')
  } else if (labelAmbas.classList.contains('mudança-cor')) {
    labelAmbas.classList.remove('mudança-cor')
  } else {
    labelAmbas.classList.add('mudança-cor')
  }
})

labelExotica.addEventListener('click', function() {
  if (labelAmbas.classList.contains('mudança-cor') || labelNobre.classList.contains('mudança-cor') && labelExotica.classList.contains('mudança-cor') == false) {
    labelAmbas.classList.remove('mudança-cor')
    labelNobre.classList.remove('mudança-cor')
    labelExotica.classList.add('mudança-cor')
  } else if (labelExotica.classList.contains('mudança-cor')) {
    labelExotica.classList.remove('mudança-cor')
  } else {
    labelExotica.classList.add('mudança-cor')
  }
})

labelNobre.addEventListener('click', function() {
  if (labelAmbas.classList.contains('mudança-cor') || labelExotica.classList.contains('mudança-cor') && labelNobre.classList.contains('mudança-cor') == false) {
    labelAmbas.classList.remove('mudança-cor')
    labelExotica.classList.remove('mudança-cor')
    labelNobre.classList.add('mudança-cor')
  } else if (labelNobre.classList.contains('mudança-cor')) {
    labelNobre.classList.remove('mudança-cor')
  } else {
    labelNobre.classList.add('mudança-cor')
  }
})

let todos = document.querySelector("#todos-os-meios-checkbox")
let email = document.querySelector("#email-checkbox")
let sms = document.querySelector("#sms-checkbox")


todos.addEventListener('click', function() {
  console.log(todos.checked);
  if (todos.checked === false) {
    email.removeAttribute('checked', 'checked')
    sms.removeAttribute('checked', 'checked')
  } else {
    email.setAttribute('checked', 'checked')
    sms.setAttribute('checked', 'checked')
  }
})