let name = document.querySelector('.nameInput')
let select = document.querySelector('.select')
let reyting = document.querySelector('.reytingInput')
let add = document.querySelector('.addFilm')
let spanSchet = document.querySelector('.spanSchet')
let spisok = document.querySelector('.spisok-ul')

add.addEventListener('click', () => {
  if (name.value.trim() === '' || select.value === '' || reyting.value === ''){
    alert('Введите данные фильма')
    return
  }

  let element = document.createElement('li')

  let blokInfo = document.createElement('div')
  blokInfo.className = 'info'

  let text = document.createElement('div')

  let zagolovok = document.createElement('div')
  zagolovok.className = 'name'
  zagolovok.textContent = name.value

  let opisanie = document.createElement('div')
  opisanie.textContent = select.value + ' | Рейтинг: ' + reyting.value

  text.append(zagolovok, opisanie)
  blokInfo.append(text)

  let event = document.createElement('div')

  let zvezda = document.createElement('span')
  zvezda.className = 'zvezda'
  zvezda.textContent = '★'

  if (reyting.value <= 3) {
  zvezda.style.color = 'red'
} else if (reyting.value <= 7) {
  zvezda.style.color = 'rgb(255, 163, 25)'
} else {
  zvezda.style.color = 'green'
}


  let delet = document.createElement('button')
  delet.className = 'delet'
  delet.textContent = 'Удалить'

  delet.addEventListener('click', () => {
  films.splice(index, 1)
  saveToLocalStorage()
  renderFilms()
})

  event.append(zvezda, delet)
  element.append(blokInfo, event)
  spisok.append(element)

  spanSchet.textContent = spisok.querySelectorAll('li').length

  name.value = ''
  select.value = ''
  reyting.value = ''

})

let mode = document.querySelector('.mode')

mode.addEventListener('click', () => {
  document.body.classList.toggle('dark')

  if (document.body.className == 'dark') {
    mode.textContent = '☀️'
  } else {
    mode.textContent = '🌙'
  }
})

add.addEventListener('click', () => {
  if (name.value === '' || janr.value === '' || reyting.value === '') return

  let newFilm = {
    name: name.value,
    janr: janr.value,
    reyting: Number(reyting.value)
  }

  films.push(newFilm)
  saveToLocalStorage()
  renderFilms()

  // ⬇️ ОЧИСТКА ПОЛЕЙ
  name.value = ''
  reyting.value = ''
  janr.selectedIndex = 0
})