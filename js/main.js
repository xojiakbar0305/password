var password = 'oriflar0202'
var attempts = 4
var elForm = document.querySelector('.form')
var elInput = elForm.querySelector('.input')
var elOption = document.querySelector('.alert')
var elButtonReset = document.querySelector('.open-button')

elButtonReset.addEventListener('click', function() {
  location.reload()
})

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  var resultInput = elInput.value.trim()

  if (attempts === 0) {
    elOption.textContent = `siz boshqa xisobga kirishga urundingiz. Xisob egasiga xabar yuborildi`
    elOption.classList.add('alert-warning')
    elInput.classList.remove('is-invalid')
    elOption.classList.remove('alert-info')
    elForm.classList.add('d-none')
    document.body.style.background = 'red'
    elButtonReset.classList.add('d-block')
    if (resultInput === password) {
      elOption.textContent = `Xush kelibsiz`
      elOption.classList.remove('alert-warning')
      elOption.classList.add('alert-info')
      elForm.classList.remove('d-none')
    }
    return
  }
  if (elInput.value === '') {
    elOption.textContent = `bir nima kiriting`
    elOption.classList.add('alert-warning')
    elOption.classList.remove('alert-info')
  }
  else if (resultInput === password) {
    elOption.textContent = `Xush kelibsiz`
    elOption.classList.remove('alert-warning')
    elOption.classList.add('alert-info')
  }

  else {
    elOption.textContent = `Nato'g'ri parol`
    elOption.classList.add('alert-warning')
    elOption.classList.remove('alert-info')
  }
  attempts--

  elInput.value = ''
  elInput.focus()
})