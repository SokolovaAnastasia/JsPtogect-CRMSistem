let oneObjeck = {
  id: '',
  createdAt: '',
  updatedAt: '',
  name: '',
  surname: '',
  lastName: '',
}
const pageWidth = document.documentElement.scrollWidth
const searchSave = document.getElementById('modal__save')
const searchModal = document.getElementById('modal__container')
const searchSaveChange = document.getElementById('modal__savechange')
const searchChange = document.getElementById('modal__closechange')
const searchDelete = document.getElementById('modal__closedelete')
const searchBody = document.getElementById('body')
const searchBodyOut = document.getElementsByTagName('body')
const newСlient = document.getElementById('main__btn')
const addContact = document.getElementById('modal__addcontact')
const modalAddcontactOpen = document.getElementById('modal__addcontact_open')
const modalChangecontactOpen = document.getElementById('modal__addcontact_openchange')




function addKlientTopLine() { // функция создаёт верхнюю строку с названиями столбцов 
  const searchTable = Array.from(document.getElementsByClassName('main__tbod'))[0]
  const searchlastMainContent = Array.from(document.getElementsByClassName('main__trtop'))
  let lastMainContent = searchlastMainContent[searchlastMainContent.length - 1]
}








dataTwo = "2022-06-22T11:06:46.472Z"

function correctDate(dataTwo) { //функция  корректирует дату

  let dd = dataTwo.split('')[8] + dataTwo.split('')[9]
  let mm = dataTwo.split('')[5] + dataTwo.split('')[6]
  let yy = dataTwo.split('')[0] + dataTwo.split('')[1] + dataTwo.split('')[2] + dataTwo.split('')[3]
 date = dd + '.' + mm + '.' + yy

 let aa = dataTwo.split('')[11] + dataTwo.split('')[12]
 let bb = dataTwo.split('')[14] + dataTwo.split('')[15]

 namber = aa + ':' + bb
  return (date, namber)
}


const inporiginOne = document.querySelectorAll('.modal__inporiginone')[0]
const inporiginTwo = document.querySelectorAll('.modal__inporigintwo')[0]
const inporiginThree = document.querySelectorAll('.modal__inporiginthree')[0]

aaa = 'modal__placeholder_origin'
namberOne = 0
namberTwo = 2
namberThree = 4


const inporiginOneChange = document.querySelectorAll('.modal__inpchange_one')[0]
const inporiginTwoChange = document.querySelectorAll('.modal__inpchange_two')[0]
const inporiginThreeChange = document.querySelectorAll('.modal__inpchange_three')[0]


modalPl = 'modal__placeholder_chan'
namberOneChange = 1
namberTwoChange = 3
namberThreeChange = 5
function hidePlase(inporiginOne, namberOne, aaa) { // эта функция скрывает плейсхолдер

  inporiginOne.addEventListener('blur', function () {
    if (inporiginOne.parentElement.parentElement.children[namberOne + 1].children[0].value === '') {
      inporiginOne.parentElement.parentElement.children[namberOne].classList.add(aaa)

    }
  })
  inporiginOne.addEventListener('change', function () {


    inporiginOne.parentElement.parentElement.children[namberOne].classList.remove(aaa)


  })
}

newСlient.addEventListener('click', function () { // обработчик клик на добавить клиента 
  searchModal.classList.remove('modal__container')
  searchBody.classList.remove('body')
  searchBodyOut[0].classList.add('loadedOut')
  addContact.classList.add('modal__addcontact')
  oneObjeck.contacts = []

  hidePlase(inporiginOne, namberOne, aaa)
  hidePlase(inporiginTwo, namberTwo, aaa)
  hidePlase(inporiginThree, namberThree, aaa)

})



const searchModalInpOne = document.getElementById('modal__inp_one')
const searchModalInpTwo = document.getElementById('modal__inp_two')
const searchModalInpThree = document.getElementById('modal__inp_three')
function inisials(oneObjeck) { // функция добавляет в oneObjeck инициалы

  let nameValue = searchModalInpOne.value
  let surnameValue = searchModalInpTwo.value
  let lastNameValue = searchModalInpThree.value
  oneObjeck.name = nameValue
  oneObjeck.surname = surnameValue
  oneObjeck.lastName = lastNameValue
  searchModalInpOne.value = ''
  searchModalInpTwo.value = ''
  searchModalInpThree.value = ''
}

function addKlient() { // функция создаёт строку и 6 ячеек
  let addTd = document.createElement('td')
  addTd.classList.add('main__content')
  let searchTable = Array.from(document.querySelectorAll('.main__tr'))[0]
  searchTable.append(addTd)
  let searchTd = Array.from(document.getElementsByTagName('tb'))
  let searchTdlast = searchTd[searchTd.length - 1]
  let searchlastMainContent = Array.from(document.querySelectorAll('.main__content'))
  let lastMainContent = searchlastMainContent[searchlastMainContent.length - 1]
  for (let a = 0; a < 6; a++) {
    let createTd = document.createElement('th')
    lastMainContent.append(createTd)
    createTd.classList.add('line' + a)
  }
}



const changeClass = 'change'
const changeText = 'Изменить'
const deletesClass = 'deletes'
const deletesText = 'Удалить'

function buttonLast(changeClass, changeText) { //  функция добавляет кнопки изменить удалить

  let actions = document.querySelectorAll('.line5')
  let actionsChangeDelete = actions[actions.length - 1]
  let actionsTextAdd = document.createElement('button')
  actionsChangeDelete.append(actionsTextAdd)
  actionsTextAdd.classList.add(changeClass)
  actionsTextAdd.textContent = changeText

}
data = ''
createdAts = dataTwo

function separatelyDate(baseCreatedAt, createdAts, ElementsTdThreeLast, data) { // функция изменяет дату на экране
  correctDate(createdAts)
  baseCreatedAt = ElementsTdThreeLast.innerHTML = `<span class = "dataOneData">${date}</span>${' '} <span class = "dataOneNamber">${namber}</span>`
}


searchSelec = ''
function dopOption(searchSelec) { // эта функция создаёт доп вариант option
  let nameBtnSelect = document.querySelectorAll('.title')
  let massivOne = []
  for (let i = 0; i < nameBtnSelect.length; i++) {
    massivOne.push(nameBtnSelect[i].textContent)
  }

  if (searchSelec.length > 1) {
    let optionMenu = document.querySelectorAll('.vsb-menu')
    let uniqSet = new Set();
    for (let i = 0; i < massivOne.length; i++) {
      for (let j = 0; j < i; j++)
        if (massivOne[j] === massivOne[i]) {
          uniqSet.add(massivOne[i])
        }
    }

    let uniq = Array.from(uniqSet)

    for (let h = 1; h < optionMenu.length; h++) {
      let eachChildrenMenu = optionMenu[optionMenu.length - 1].children[0].children
      for (let g = 0; g < eachChildrenMenu.length; g++) {
        if (eachChildrenMenu[g].textContent.replace(/\s/g, '') === uniq[0]) {
          eachChildrenMenu[g].textContent = `Доп. ${eachChildrenMenu[g].textContent.toLowerCase()}`
        }

        if (massivOne.slice(0, -1).includes(eachChildrenMenu[g].textContent.replace(/\s/g, '')) === true) {
          eachChildrenMenu[g].textContent = `Доп. ${eachChildrenMenu[g].textContent.toLowerCase()}`
        }
      }
    }
  }
}

const openActive = 'modal__addcontact_openactive'
const searchUll = 'addUI'
function addContactDop(openActive, modalAddcontactOpen, searchUll) { // функция добавляет формы для контактов
  modalAddcontactOpen.classList.remove(openActive)
  let addSelect = document.createElement('select')
  addSelect.classList.add('modal__select')


  let addLi = document.createElement('li')
  addLi.classList.add('addLi')
  addLi.classList.add('flex')
  let searchUlls = document.getElementById(searchUll)
  searchUlls.append(addLi)
  addLi.prepend(addSelect)





  const addOption1 = document.createElement('option')
  const addOption2 = document.createElement('option')
  const addOption3 = document.createElement('option')
  const addOption4 = document.createElement('option')




  const addInput = document.createElement('input')
  addLi.append(addInput)
  addInput.classList.add('input__contact')
  addInput.placeholder = 'Введите данные контакта'

  addOption1.textContent = 'Телефон'
  addOption2.textContent = 'Email'
  addOption3.textContent = 'VK'
  addOption4.textContent = 'Facebook'


  addOption1.value = 'Телефон'
  addOption2.value = 'Email'
  addOption3.value = 'VK'
  addOption4.value = 'Facebook'


  addOption1.classList.add('benefits__option')
  addOption2.classList.add('benefits__option')
  addOption3.classList.add('benefits__option')
  addOption4.classList.add('benefits__option')


  const searchSelec = Array.from(document.querySelectorAll('.modal__select'))


  let searchSelect = searchSelec[searchSelec.length - 1]
  searchSelect.append(addOption1)
  searchSelect.append(addOption2)
  searchSelect.append(addOption3)
  searchSelect.append(addOption4)




  let searchInpu = Array.from(document.querySelectorAll('.input__contact'))
  let searchInput = searchInpu[0]
  searchSelect.classList.add('modal__select')
  searchInput.classList.add('modal__input')
  const aboveBtn = document.getElementById('modal__addcontact')
  aboveBtn.classList.add('modal__addcontact_above')

  const aboveBtnChange = document.getElementById('modal__addcontact_openchange')
  aboveBtnChange.classList.add('modal__addcontact_above')
  selectFocus()

  dopOption(searchSelec)

  checkMark()

}

function checkMark() { // эта функция изменяет галочки у селекта
  let btnSelect = document.querySelectorAll('.vsb-main')
  for (const btn of btnSelect) {
    btn.addEventListener('click', function () {
      this.querySelectorAll('.caret')[0].classList.add('caret_active')
    })
  }


  let btnOption = document.querySelectorAll('.benefits__option')
  for (value of btnOption) {
    value.addEventListener('click', function () {
      this.parentElement.parentElement.parentElement.children[0].querySelectorAll('.caret')[0].classList.remove('caret_active')
    })
  }
}

function amountOption() { // эта функция убирает лишние option после подключения библиотеки
  let amountLi = document.querySelectorAll('.vsb-menu')



  for (let i = 0; i < amountLi.length; i++) {
    if (amountLi[i].children[0].children.length > 5) {
      for (let q = 0; q <= 4; q++) {
        amountLi[i].children[0].children[0].parentElement.removeChild(amountLi[i].children[0].children[0])
      }
    }

  }
}



function selectFocus() { //эта функция редактирует селект и подключает библиотеку
  let select = document.querySelectorAll('.modal__select')

  for (let i = select.length - 1; i < select.length; i++) {

    select[i].id = `example${i}`
    let mySelect = new vanillaSelectBox(`#example${i}`, {
      placeHolder: "Телефон",
    })
  }



}


function removeAddBtnKontakts(amountKontacts, addContact) {
  if (amountKontacts.length === 10) {
    addContact.classList.remove('modal__addcontact')
  }
  if (amountKontacts.length !== 10) {
    addContact.classList.add('modal__addcontact')
  }

}

function addNewForm(addContact, openActive, modalAddcontactOpen, searchUll, oneObjeck) {
  addContact.addEventListener('click', async e => { // обработчик, создаёт объект внутри массива с контактами
    e.preventDefault()

    addContactDop(openActive, modalAddcontactOpen, searchUll)

    massivObject = oneObjeck.contacts
    let newContactObject = {}
    newContactObject.type = ''
    newContactObject.value = ''
    massivObject.push(newContactObject)
    let amountKontacts = document.querySelectorAll('.addLi')
    removeAddBtnKontakts(amountKontacts, addContact)
    amountOption()
  })
}

addNewForm(addContact, openActive, modalAddcontactOpen, searchUll, oneObjeck)



dataContacts = ''
data = oneObjeck
ElementsTdFiveLast = ''
massivKontacts = ''

function addKontacts(data, ElementsTdFiveLast, dataContacts, massivKontacts) { //  функция отображает контакты
  massivKontacts = []
  dataContacts = data.contacts

  if (ElementsTdFiveLast !== undefined) {
    let finalMassiv = ElementsTdFiveLast.textContent
    let idEach = data.id
    let g = []
    for (let i = 0; i < dataContacts.length; i++) {


      if (data.contacts[i].type === 'VK' && g.includes('VK') !== true) {
        let VK = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "VK" id="p${idEach}${i}${0}" class = "imgvk imgvalue"><img src="../imgs/vk.png"></a>`
        massivKontacts.push(VK)
        g.push(data.contacts[i].value)
        g.push('VK')
      }

      if (data.contacts[i].type === 'Телефон' && g.includes('Телефон') !== true) {
        let tel = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "Телефон" id="p${idEach}${i}${1}" class = "imgtel imgvalue"><img src="../imgs/phone.png"></a>`
        massivKontacts.push(tel)
        g.push(data.contacts[i].value)
        g.push('Телефон')
      }

      if (data.contacts[i].type === 'Facebook' && g.includes('Facebook') !== true) {
        let fb = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "Facebook" id="p${idEach}${i}${2}" class = "imgFacebook imgvalue"><img src="../imgs/fb.png"></a>`
        massivKontacts.push(fb)
        g.push(data.contacts[i].value)
        g.push('Facebook')
      }

      if (data.contacts[i].type === 'Email' && g.includes('Email') !== true) {

        let email = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "Email" id="p${idEach}${i}${3}" class = "imgmail imgvalue"><img src="../imgs/mail.png"></a>`
        massivKontacts.push(email)
        g.push(data.contacts[i].value)
        g.push('Email')
      }
    }

    for (let i = 0; i < dataContacts.length; i++) {

      if (data.contacts[i].type === 'Facebook' && g.includes(data.contacts[i].value) === false) {
        let fb = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "Facebook" id="p${idEach}${i}${4}" class = "imgother imgvalue"><img src="../imgs/other.png"></a>`

        massivKontacts.push(fb)
        g.push(data.contacts[i].value)
        g.push('Facebook')
      }

      if (data.contacts[i].type === 'Email' && g.includes(data.contacts[i].value) === false) {
        let email = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "Email" id="p${idEach}${i}${5}" class = "imgother imgvalue"><img src="../imgs/other.png"></a>`
        massivKontacts.push(email)
        g.push(data.contacts[i].value)
        g.push('Email')

      }
      if (data.contacts[i].type === 'Телефон' && g.includes(data.contacts[i].value) === false) {
        let tel = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "Телефон" id="p${idEach}${i}${6}" class = "imgother imgvalue"><img src="../imgs/other.png"></a>`
        massivKontacts.push(tel)
        g.push(data.contacts[i].value)
        g.push('Телефон')
      }

      if (data.contacts[i].type === 'VK' && g.includes(data.contacts[i].value) === false) {
        let VK = ElementsTdFiveLast.innerHTML = `<a href = "#" type = "VK" id="p${idEach}${i}${7}" class = "imgother imgvalue"><img src="../imgs/other.png"></a>`
        massivKontacts.push(VK)
        g.push(data.contacts[i].value)
        g.push('VK')
      }

    }

    finalMassiv = ElementsTdFiveLast.innerHTML = massivKontacts.join('')





    ElementsFive = ''
    tolt(ElementsFive, data)
  }


}



function eachId(eachIdTyppy, eachIdContentType, eachIdContent) { //эта функция добавляет тултипы

  tippy(eachIdTyppy, {
    content: eachIdContent.innerHTML = `${eachIdContentType + ': '}${'<span><a href = "#" class="tippycolor">'}${eachIdContent}${'</a></span>'}`,
    allowHTML: true,
    interactive: true,
    appendTo: document.body,
    delay: 500,
    theme: 'radi',
  });

}
function eachIdOne(eachIdTyppy, eachIdContentType, eachIdContent) { //эта функция добавляет тултипы

  tippy(eachIdTyppy, {
    content: eachIdContent.innerHTML = `${'<span><a href = "#" class="tippycolor">'}${eachIdContent}${'</a></span>'}`,
    allowHTML: true,
    interactive: true,
    appendTo: document.body,
    delay: 500,
    theme: 'radi',
  });

}



function tolt(ElementsFive, data) { // эта функция добавляет тултипы
  ElementsFive = Array.from(document.getElementsByClassName('line4'))
  let ElementsFiveLast = ElementsFive[ElementsFive.length - 1]

  for (let i = 0; i < (ElementsFiveLast.children).length; i++) {
    let imgValue = Array.from(document.querySelectorAll('.imgvalue'))
    let lastElement = imgValue.slice(-(ElementsFiveLast.children).length)
    let eachIdContentType = data.contacts[i].type
    let eachIdContent = data.contacts[i].value
    let eachIdTyppyId = lastElement[i].id

    let eachIdTyppy = `${'#'}${eachIdTyppyId}`


    if (imgValue[i].classList.contains('imgother') === false) {
      eachIdOne(eachIdTyppy, eachIdContentType, eachIdContent)
    }

    if (imgValue[i].classList.contains('imgother') === true) {
      eachId(eachIdTyppy, eachIdContentType, eachIdContent)
    }

  }


}



function dataWindows(data) { // функция отображает id , инициалы и даты
  let ElementsTdOne = Array.from(document.getElementsByClassName('line0'))

  let ElementsTdOneLast = ElementsTdOne[ElementsTdOne.length - 1]
  if (ElementsTdOneLast !== undefined) {
    ElementsTdOneLast.textContent = data.id
    oneObjeck.id = data.id
    let sixNamberId = oneObjeck.id.split('').slice(-6).toString().replace(/[^0-9]/g, '')

    ElementsTdOne[ElementsTdOne.length - 1].insertAdjacentHTML('afterend', `<span class = "sixNamberId">${sixNamberId}</cpan>`)

    let ElementsTdTwo = Array.from(document.getElementsByClassName('line1'))
    let ElementsTdTwoLast = ElementsTdTwo[ElementsTdTwo.length - 1]
    ElementsTdTwoLast.textContent = data.name + ' ' + data.surname + ' ' + data.lastName

    let ElementsTdThree = Array.from(document.getElementsByClassName('line2'))
    let ElementsTdThreeLast = ElementsTdThree[ElementsTdThree.length - 1]

    let baseCreatedAt = ''
    createdAts = data.createdAt
    separatelyDate(baseCreatedAt, createdAts, ElementsTdThreeLast, data)
    oneObjeck.createdAt = data.createdAt
    let ElementsTdFour = Array.from(document.getElementsByClassName('line3'))
    let ElementsTdFourLast = ElementsTdFour[ElementsTdFour.length - 1]

    updatedAts = data.updatedAt
    let baseUpdatedAt = ''
    separatelyDate(baseUpdatedAt, updatedAts, ElementsTdFourLast, data)
    oneObjeck.updatedAt = data.updatedAt
  }




}


async function loadProducts() { // при создании элемента помещает в базу
  const clients =
    await fetch('http://localhost:3000/api/clients', {
      method: 'POST',
      body: JSON.stringify(oneObjeck)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        dataWindows(data)
        let ElementsTdFive = Array.from(document.getElementsByClassName('line4'))

        let ElementsTdFiveLast = ElementsTdFive[ElementsTdFive.length - 1]

        data = oneObjeck
        dataContacts = data.contacts
        massivKontacts = ''
        addKontacts(data, ElementsTdFiveLast, dataContacts, massivKontacts)

      })
}
modalSelect = ''
modalSelectMassiv = []

function changeKontacts(searchSave, oneObjeck, modalSelect, modalSelectMassiv) {
  searchSave.addEventListener('click', async e => { //  обработчик помещает значения из формы с контактами в базу
    e.preventDefault();


    modalSelect = document.querySelectorAll('.modal__select')

    let searchModalInpKontact = document.querySelectorAll('.input__contact')

    for (let u = 0; u < modalSelect.length; u++) {

      let a = 'x'
      modalSelectMassiv.push(a)
    }
    console.log(modalSelectMassiv.length);
    for (let i = 0; i < modalSelectMassiv.length; i++) {
      if (oneObjeck.contacts[i] !== undefined) {
        oneObjeck.contacts[i].type = modalSelect[i].value
        oneObjeck.contacts[i].value = searchModalInpKontact[i].value
      }




    }
    modalSelectMassiv = []

  })

}

changeKontacts(searchSave, oneObjeck, modalSelect, modalSelectMassiv)



// переменные для нового списка с контактами для нового клиента
addUIKliner = 'addUI'
modalAddcontactOpenKliner = 'modal__addcontact_open'
modalAddcontactOpenactiveKliner = 'modal__addcontact_openactive'

// переменные для изменений списка контактов
addUIKlinerChange = 'addUIChange'
modalAddcontactOpenKlinerChange = 'modal__addcontact_openchangediv'
modalAddcontactOpenactiveKlinerChange = 'modal__addcontact_openactivechange'


function clinerFormKontscts(addUIKliner, modalAddcontactOpenKliner, modalAddcontactOpenactiveKliner) { // функция очищает список с контактами при закрытии
  const aboveBtn = document.getElementById('modal__addcontact')
  aboveBtn.classList.remove('modal__addcontact_above')

  const aboveBtnChange = document.getElementById('modal__addcontact_openchange')
  aboveBtnChange.classList.remove('modal__addcontact_above')

  const contentList = document.getElementById(addUIKliner)

  const redForm = document.getElementById(modalAddcontactOpenKliner)
  redForm.classList.add(modalAddcontactOpenactiveKliner)
  contentList.innerHTML = ''
  window.location.hash = ''
}


searchSave.addEventListener('click', async searchSaves => { // обработчик при клике на сохранить выполняет все предыдущие функции
  let modalSavePreloaderNone = document.querySelectorAll('.modal__savePreloader_none')[0]
  modalSavePreloaderNone.classList.add('modal__savePreloader')

  let errClass = document.querySelectorAll('.error')
  let errClassBorder = document.querySelectorAll('.modal__inp_err')
  let massValueKont = []
  let searchModalInpKontact = document.querySelectorAll('.modal__input')

  for (let h = 0; h < searchModalInpKontact.length; h++) {
    massValueKont.push(searchModalInpKontact[h].value)
    if (searchModalInpKontact[h].value === '') {
      searchModalInpKontact[h].classList.add('modal__inp_err')
    }
  }
  if (searchModalInpOne.value !== '' && searchModalInpTwo.value !== '' && searchModalInpThree.value !== '' && massValueKont.includes('') === false) {

    if (errClassBorder.length !== 0) {
      for (let y = 0; y < errClassBorder.length; y++) {
        errClassBorder[y].classList.remove('modal__inp_err')
      }
    }
    if (errClass.length !== 0) {
      errClass[0].parentElement.removeChild(errClass[0])
    }

    inisials(oneObjeck)
    addKlient()
    buttonLast(changeClass, changeText)
    buttonLast(deletesClass, deletesText)
    loadProducts()
    searchSaves.preventDefault()
    clinerFormKontscts(addUIKliner, modalAddcontactOpenKliner, modalAddcontactOpenactiveKliner)
    searchModal.classList.add('modal__container')
    searchBody.classList.add('body')
    searchBodyOut[0].classList.remove('loadedOut')
    addContact.classList.add('modal__addcontact')
    modalAddcontactOpen.classList.add('modal__addcontact_openactive')
    modalSavePreloaderNone.classList.add('modal__savePreloader_none')
    modalSavePreloaderNone.classList.remove('modal__savePreloader')
    let aboveBtn = document.getElementById('modal__addcontact')
    aboveBtn.classList.remove('modal__addcontact_above')


  }
  else {
    if (searchModalInpOne.value === '') {
      searchModalInpOne.classList.add('modal__inp_err')
    }
    if (searchModalInpTwo.value === '') {
      searchModalInpTwo.classList.add('modal__inp_err')
    }
    if (searchModalInpThree.value === '') {
      searchModalInpThree.classList.add('modal__inp_err')
    }
    if (errClass.length === 0) {
      searchSave.parentElement.childNodes[7].insertAdjacentHTML('beforebegin', '<p class = "error">Все поля должны быть заполненны</p>')
    }
    modalSavePreloaderNone.classList.remove('modal__savePreloader')

  }





})
function keydownForm(searchModalInpOne, searchModalInpTwo, searchModalInpThree) { // если ошибка выполняется при пустом вводе
  searchModalInpOne.addEventListener('keydown', function () {
    searchModalInpOne.classList.remove('modal__inp_err')
  })
  searchModalInpTwo.addEventListener('keydown', function () {
    searchModalInpTwo.classList.remove('modal__inp_err')
  })
  searchModalInpThree.addEventListener('keydown', function () {
    searchModalInpThree.classList.remove('modal__inp_err')
  })
}
keydownForm(searchModalInpOne, searchModalInpTwo, searchModalInpThree)
searchSave.addEventListener('click', async reboot => {

  let reboots = document.querySelectorAll('.main__content')
  if (reboots !== undefined) {
    reboots[0].parentElement.innerHTML = ''
  }

  loading()
})


let searchModalChange = document.getElementById('modal__containerchange')
let searchModalDelete = document.getElementById('modal__containerdelete')
let searchModalAdd = document.getElementById('modal__close')

idElementsOne = 'modal__containerchange'
idElementsTwo = 'modal__containerdelete'
idElementsThree = 'modal__container'

function kliner(searchChange, searchModalChange, idElementsOne) { //закрытие по крестику модалок 
  searchChange.addEventListener('click', function () {
    let errClass = document.querySelectorAll('.error')[0]
    let modalInpErr = document.querySelectorAll('.modal__inp_err')
    if (errClass !== undefined) {
      errClass.parentElement.removeChild(errClass)
    }
    if (modalInpErr.length !== 0) {
      for (let y = 0; y < modalInpErr.length; y++) {
        modalInpErr[y].classList.remove('modal__inp_err')
      }
    }
    const searchModalInpOne = document.getElementById('modal__inp_one')
    const searchModalInpTwo = document.getElementById('modal__inp_two')
    const searchModalInpThree = document.getElementById('modal__inp_three')
    searchModalInpOne.value = ''
    searchModalInpTwo.value = ''
    searchModalInpThree.value = ''
    searchModalChange.classList.add(idElementsOne)
    searchBody.classList.add('body')
    searchBodyOut[0].classList.remove('loadedOut')
    clinerFormKontscts(addUIKliner, modalAddcontactOpenKliner, modalAddcontactOpenactiveKliner)
    clinerFormKontscts(addUIKlinerChange, modalAddcontactOpenKlinerChange, modalAddcontactOpenactiveKlinerChange)
  })
}
let cancellation = document.getElementById('modal__deletefromadd')

kliner(searchChange, searchModalChange, idElementsOne)
kliner(searchDelete, searchModalDelete, idElementsTwo)
kliner(searchModalAdd, searchModal, idElementsThree)
kliner(cancellation, searchModal, idElementsThree)


const cancellationbtn = document.getElementById('modal__deletefromaddno')
cancellationbtn.addEventListener('click', function () {
  searchBody.classList.add('body')
  searchBodyOut[0].classList.remove('loadedOut')
  searchModalDelete.classList.add('modal__containerdelete')
})


// далее удаление и изменение
function del(deleteKlient) { // функция при 1 нажатии на удалить
  deleteKlient = document.getElementsByClassName('deletes')
  let deleteKlientLast = deleteKlient[deleteKlient.length - 1]
  deleteKlientLast.addEventListener('click', function () {
    searchBody.classList.remove('body')
    searchModalDelete.classList.remove('modal__containerdelete')
    searchBodyOut[0].classList.add('loadedOut')
    let lineId = (deleteKlientLast.parentElement.parentElement.childNodes)[0].textContent
    confirmation(lineId)
  })
}

function dels(deleteKlient) { // эта функция удаляет при нажатии в изменении
  deleteKlient = document.getElementsByClassName('deletesChange')
  let deleteKlientLast = deleteKlient[deleteKlient.length - 1]
  deleteKlientLast.addEventListener('click', async d => {
    d.preventDefault()
    let sectionId = document.getElementById('modal__containerchange')
    let lineId = sectionId.children[0].children[0].children[0].children[0].children[1].textContent.replace(/[^0-9]/g, '')
    sectionId.classList.add('modal__containerchange')
    searchBody.classList.remove('body__active')
    searchModalDelete.classList.remove('modal__containerdelete')
    confirmation(lineId)
  })
}





async function deleteEl(lineId) { // эта функция удаляет из базы
  const clients =
    await fetch('http://localhost:3000/api/clients/' + lineId, {
      method: 'DELETE',
      body: JSON.stringify(oneObjeck)
    })
      .then((response) => {
        return response.json();
      })
}




function confirmation(lineId) { // функция при подтверждении удалить запуск удаление из базы
  const deleteBtn = document.getElementById('modal__delete')
  deleteBtn.addEventListener('click', function () {
    let generalLine = document.querySelectorAll('.line0')
    for (let i = 0; i < generalLine.length; i++) {
      let AllId = generalLine[i].textContent
      if (AllId === lineId) {
        let ElementWithId = generalLine[i]
        let lineWithId = ElementWithId.parentNode
        lineWithId.parentNode.removeChild(lineWithId)
        deleteEl(lineId)
      }
    }
    searchBody.classList.add('body')
    searchBodyOut[0].classList.remove('loadedOut')
    searchModalDelete.classList.add('modal__containerdelete')
  })
}

// переменные для изменений 
const inpOne = document.getElementById('modal__inp_onechange')
const inpTwo = document.getElementById('modal__inp_twochange')
const inpThree = document.getElementById('modal__inp_threechange')
const searchUllChange = 'addUIChange'
const openActives = 'modal__addcontact_openactivechange'
const modalChangecontactsOpen = document.getElementById('modal__addcontact_openchangediv')


let originalСontacts = []

function change(changeKlientChange, changeKlientLast, data, lineIdChange, hashKlientId) { //функция открывает уже имеющиеся контакты
  function changeCentr() {
    searchBody.classList.remove('body')
    searchBodyOut[0].classList.add('loadedOut')
    searchModalChange.classList.remove('modal__containerchange')

    idKlient.textContent = 'ID:' + lineIdChange
    for (let e = 0; e < data.length; e++) {

      if (data[e].id === lineIdChange) {

        inpOne.value = data[e].name
        inpTwo.value = data[e].surname
        inpThree.value = data[e].lastName

        for (let o = 0; o < data[e].contacts.length; o++) {
          addContactDop(openActives, modalChangecontactsOpen, searchUllChange)
          let inputContact = document.querySelectorAll('.input__contact')
          inputContact[inputContact.length - 1].value = data[e].contacts[o].value
          originalСontacts.push(data[e].contacts[o])
          deletBtn()
        }
        let falshId = document.querySelectorAll('.idKlient_falsh')[0]
        falshId.textContent = 'ID:' + lineIdChange.split('').slice(-6).toString().replace(/[^0-9]/g, '')



        let reversMassivKontacts = data[e].contacts
        for (let d = 0; d < data[e].contacts.length; d++) {
          let modalSelect = Array.from(document.querySelectorAll('.modal__select'))

          modalSelect[d].id = `example${d}`
          let mySelect = new vanillaSelectBox(`#example${d}`, {
            placeHolder: reversMassivKontacts[d].type,
          })
        }
        amountOption()
      }


      checkMark()



    }
    const screenHeight = window.screen.height
    const actualHeight = modalChangecontactsOpen.parentElement.parentElement.offsetHeight

    if (actualHeight > screenHeight) {
      modalChangecontactsOpen.parentElement.parentElement.parentElement.parentElement.style = 'align-items: flex-start;'
    }
    if (actualHeight < screenHeight) {
      modalChangecontactsOpen.parentElement.parentElement.parentElement.parentElement.style = 'align-items: center;'
    }
    searchBtnChanges(searchBtnChange, data)
    let amountKontacts = document.querySelectorAll('.addLi')
    removeAddBtnKontakts(amountKontacts, modalChangecontactOpen)
  }

  if (window.location.hash === '#' + lineIdChange) {
    changeCentr()
  }
  changeKlientLast.addEventListener('click', function () {
    changeCentr()
  })
}

function changeKontaktsKontent() { //эта функция меняет содержимое уже имеющегося контакта в случае изменения
  for (let n = 0; n < originalСontacts.length; n++) {
    let searchModalInpKontact = Array.from(document.querySelectorAll('.input__contact'))
    let searchModalSelectKontact = Array.from(document.querySelectorAll('.vsb-main'))

    let searchModalInpKontactRev = searchModalInpKontact.reverse()

    let searchModalSelectKontactRe = searchModalSelectKontact.reverse()

    let searchModalSelectKontactRev = searchModalSelectKontactRe[n].children[0].children[0].textContent
    if (originalСontacts[n].value !== searchModalInpKontactRev[n].value) {
      originalСontacts[n].value = searchModalInpKontactRev[n].value
    }
    if (originalСontacts[n].type !== searchModalSelectKontactRev) {
      originalСontacts[n].type = searchModalSelectKontactRev
    }
    amountOption()
  }
}
let changeObject = {}
changeObject.contacts = []
addNewForm(modalChangecontactOpen, openActives, modalChangecontactsOpen, searchUllChange, changeObject)

function originalСont() { // функция пушит все старые контакты в новый массив в котором изменения
  for (let y = 0; y < originalСontacts.length; y++) {
    changeObject.contacts.push(originalСontacts[y])
  }
}

function valueInisials() { // функция заполняет изменённые данные в новый массив фио
  changeObject.name = inpOne.value
  changeObject.surname = inpTwo.value
  changeObject.lastName = inpThree.value
}

function deletBtn() { // функция добавляет кнопки к имеющимся контактам
  let kard = document.querySelectorAll('.modal__subcontainertwos_kard')
  if (kard.length !== 1) {
    let deletB = document.createElement('button')
    deletB.classList.add('delBtns')
    deletB.id = 'deletB'
    let inputDelTwo = document.querySelectorAll('.addLi')

    let inputDel = inputDelTwo[inputDelTwo.length - 1]
    inputDel.classList.add('input__contact_btn')
    inputDel.append(deletB)
  }


}
searchBtnChange = ''


function searchBtnChanges(searchBtnChange, data) { // эта функция удаляет контакт из базы и с экрана
  searchBtnChange = document.querySelectorAll('.delBtns')

  for (let d = 0; d < searchBtnChange.length; d++) {


    searchBtnChange[d].addEventListener('click', async f => {
      f.preventDefault()
      let conformityType = searchBtnChange[d].parentElement.children[1].children[0].textContent
      let conformityValue = searchBtnChange[d].parentElement.children[2].value

      for (let f = 0; f < originalСontacts.length; f++) {

        if (conformityType === originalСontacts[f].type && conformityValue === originalСontacts[f].value) {
          let indexDeleteKontact = originalСontacts.indexOf(originalСontacts[f])

          originalСontacts.splice(indexDeleteKontact, 1)
          if (searchBtnChange[d].parentElement !== null) {

            searchBtnChange[d].parentElement.parentElement.removeChild(searchBtnChange[d].parentElement)
          }

        }
      }

    })
  }
}

async function changeBase(lineId) { // функция производит изменения в базе и обновляет страницу
  const clients =
    await fetch('http://localhost:3000/api/clients/' + lineId, {
      method: 'PATCH',
      body: JSON.stringify(changeObject)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let rebootsis = document.querySelectorAll('.main__content')
        rebootsis[0].parentElement.innerHTML = ''

        loading()
      })
}

changeKontacts(searchSaveChange, changeObject, modalSelect, modalSelectMassiv)

const modalInpchangeOne = document.querySelectorAll('.modal__inpchange_one')[0]
const modalInpchangeTwo = document.querySelectorAll('.modal__inpchange_two')[0]
const modalInpchangeThree = document.querySelectorAll('.modal__inpchange_three')[0]

searchSaveChange.addEventListener('click', async a => { // обработчик выполняет все функции по изменению контакта
  let modalSavePreloaderNone = document.querySelectorAll('.modal__savePreloader_noneChange')[0]
  modalSavePreloaderNone.classList.add('modal__savePreloaderChange')
  const aboveBtnChange = document.getElementById('modal__addcontact_openchange')
  aboveBtnChange.classList.remove('modal__addcontact_above')



  let errClass = document.querySelectorAll('.error')
  let errClassBorder = document.querySelectorAll('.modal__inp_err')
  let massValueKont = []
  let searchModalInpKontact = document.querySelectorAll('.modal__input')

  for (let h = 0; h < searchModalInpKontact.length; h++) {
    massValueKont.push(searchModalInpKontact[h].value)
    if (searchModalInpKontact[h].value === '') {
      searchModalInpKontact[h].classList.add('modal__inp_err')
    }
  }

  if (modalInpchangeOne.value !== '' && modalInpchangeTwo.value !== '' && modalInpchangeThree.value !== '' && massValueKont.includes('') === false) {
    if (errClassBorder.length !== 0) {
      for (let y = 0; y < errClassBorder.length; y++) {
        errClassBorder[y].classList.remove('modal__inp_err')
      }
    }
    if (errClass.length !== 0) {
      errClass[0].parentElement.removeChild(errClass[0])
    }
    a.preventDefault()
    lineId = modalChangecontactOpen.parentElement.parentElement.children[0].children[1].textContent.replace(/[^0-9]/g, '')

    let changePreloader = document.querySelectorAll('.change')
    for (let i = 0; i < changePreloader.length; i++) {
      if (changePreloader[i].parentElement.parentElement.children[0].textContent === lineId) {

        changePreloader[i].insertAdjacentHTML('afterbegin', '<span class="change__preloader"></span>')
        changePreloader[i].classList.add('change_clinerclass')
      }
    }

    changeKontaktsKontent()
    originalСont()
    valueInisials()
    changeBase(lineId)
    clinerFormKontscts(addUIKlinerChange, modalAddcontactOpenKlinerChange, modalAddcontactOpenactiveKlinerChange)
    searchModalChange.classList.add('modal__containerchange')
    searchBody.classList.add('body')
    searchBodyOut[0].classList.remove('loadedOut')
    modalChangecontactOpen.classList.add('modal__addcontact')
    modalChangecontactsOpen.classList.add('modal__addcontact_openchange')
    originalСontacts = []
    changeObject.contacts = []
    modalSavePreloaderNone.classList.remove('modal__savePreloaderChange')
  }
  else {
    if (modalInpchangeOne.value === '') {
      modalInpchangeOne.classList.add('modal__inp_err')
    }
    if (modalInpchangeTwo.value === '') {
      modalInpchangeTwo.classList.add('modal__inp_err')
    }
    if (modalInpchangeThree.value === '') {
      modalInpchangeThree.classList.add('modal__inp_err')
    }
    if (errClass.length === 0) {
      searchSaveChange.parentElement.childNodes[7].insertAdjacentHTML('beforebegin', '<p class = "error">Все поля должны быть заполненны</p>')
    }
    modalSavePreloaderNone.classList.remove('modal__savePreloaderChange')
  }
})
modalInpchangeOne.addEventListener('keydown', function () {
  modalInpchangeOne.classList.remove('modal__inp_err')
})
modalInpchangeTwo.addEventListener('keydown', function () {
  modalInpchangeTwo.classList.remove('modal__inp_err')
})
modalInpchangeThree.addEventListener('keydown', function () {
  modalInpchangeThree.classList.remove('modal__inp_err')
})
keydownForm(modalInpchangeOne, modalInpchangeTwo, modalInpchangeThree)
i = 0

function dataWindow(data, i) { // функция добавляет все контакты при загрузке
  data = data[i]
  dataWindows(data)
  ElementsTdFiveLast = document.querySelectorAll('.line4')[i]
  addKontacts(data, ElementsTdFiveLast, dataContacts, massivKontacts)
}


function bntRestKontClick(searchCreateBtnRestKontacts, lineFourLength) { //функция создаёт div и открывает по клику
  let divRestKontactKlient = document.createElement('div')
  lineFourLength.append(divRestKontactKlient)
  divRestKontactKlient.classList.add('divRestKontactsnone')


  for (let v = 0; v < searchCreateBtnRestKontacts.length; v++) { // этот обработчик открывает скрытые контакты
    let searchCreateBtnRest = searchCreateBtnRestKontacts[searchCreateBtnRestKontacts.length - 1]

    searchCreateBtnRest.addEventListener('click', function () {
      searchCreateBtnRest.classList.add('divRestKontactsnone')
      let restKontacts = searchCreateBtnRest.parentElement.children[searchCreateBtnRest.parentElement.children.length - 1]

      restKontacts.classList.add('divRestKontacts')
      restKontacts.classList.remove('divRestKontactsnone')
    })
  }


}

function placeDopKontacts(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix) { // эта функция помещает невместившиеся контакты

  let lineFour = document.querySelectorAll('.line4')

  for (let u = 0; u < lineFour.length; u++) {

    if (lineFour[u].lastChild !== null) {
      if (lineFour[u].lastChild.classList.contains('divRestKontactsnone')) {
        namber = 0

        function One(namber) {
          (lineFour[u].lastChild.parentElement.children[namber]).parentElement.lastChild.append(lineFour[u].lastChild.parentElement.children[namber])
        }


        if (lineFour[u].lastChild.parentElement.children.length === itemOne) {
          if (pageWidth >= 1024) {
            One(namber = 3)
          }
          if (pageWidth > 769 && pageWidth < 1024) {
            One(namber = 5)
          }
          if (pageWidth <= 769) {
            One(namber = 3)
          }
          lineFour[u].children[lineFour[u].children.length - 2].textContent = '+1'
        }



        if (lineFour[u].lastChild.parentElement.children.length === itemTwo) {
          if (pageWidth >= 1024) {
            One(namber = 3)
            One(namber = 4)

          }

          if (pageWidth > 769 && pageWidth < 1024) {
            One(namber = 4)
            One(namber = 5)
          }
          if (pageWidth <= 769) {
            One(namber = 3)
            One(namber = 4)
          }
          lineFour[u].children[lineFour[u].children.length - 2].textContent = '+2'
        }
        if (lineFour[u].lastChild.parentElement.children.length === itemThree) {
          if (pageWidth >= 1024) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)
          }

          if (pageWidth > 769 && pageWidth < 1024) {
            One(namber = 4)
            One(namber = 4)
            One(namber = 5)

          }
          if (pageWidth <= 769) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)
          }
          lineFour[u].children[lineFour[u].children.length - 2].textContent = '+3'
        }
        if (lineFour[u].lastChild.parentElement.children.length === itemFour) {
          if (pageWidth >= 1024) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)
          }


          if (pageWidth > 769 && pageWidth < 1024) {
            One(namber = 4)
            One(namber = 4)
            One(namber = 4)
            One(namber = 5)

          }
          if (pageWidth <= 769) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)
          }
          lineFour[u].children[lineFour[u].children.length - 2].textContent = '+4'
        }
        if (lineFour[u].lastChild.parentElement.children.length === itemFive) {
          if (pageWidth >= 1024) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)

          }

          if (pageWidth > 769 && pageWidth < 1024) {
            One(namber = 4)
            One(namber = 4)
            One(namber = 4)
            One(namber = 4)
            One(namber = 5)

          }
          if (pageWidth <= 769) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)

          }
          lineFour[u].children[lineFour[u].children.length - 2].textContent = '+5'
        }
        if (lineFour[u].lastChild.parentElement.children.length === itemSix) {
          if (pageWidth >= 1024) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)

          }
          if (pageWidth <= 769) {
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 3)
            One(namber = 4)

          }
          lineFour[u].children[lineFour[u].children.length - 2].textContent = '+6'
        }
      }
    }
  }
}


function sortirovka() { // эта функция удаляет все при сортировке
  let sort = document.querySelectorAll('.main__content')
  sort.forEach(function (elem) {
    elem.parentNode.removeChild(elem);

  });
}

function sortDop(btnName, createTable) { // эта функция выполняет удаление, обновление таблицы и смену класса
  sortirovka()
  createTable(btnName)

  btnName.classList.toggle('activ__sort_Name')
  btnName.classList.toggle('activ__sort_Names')


}


function sortKontacts(data, createTable) { //эта функция сортировки
  let btnName = document.querySelectorAll('.main__thtwo')[0]
  let btnId = document.querySelectorAll('.main__thone')[0]
  let btnCreatedAt = document.querySelectorAll('.main__ththree')[0]
  let btnUpdatedAt = document.querySelectorAll('.main__thfour')[0]


  function examination(btnName) {
    let btnNameRevers = document.querySelectorAll('.activ__sort_Name')
    if (btnNameRevers[0] !== btnName && btnNameRevers[0] !== undefined) {
      btnNameRevers[0].classList.add('activ__sort_Names')
      btnNameRevers[0].classList.remove('activ__sort_Name')
    }
  }

  btnName.addEventListener('click', function () {
    examination(btnName)
    let btnNameRevers = document.querySelectorAll('.activ__sort_Name')
    btnNameRevers[0] !== undefined ? data.sort((a, b) => a.name < b.name ? 1 : -1) : data.sort((a, b) => a.name > b.name ? 1 : -1)
    sortDop(btnName, createTable)

  })

  btnId.addEventListener('click', function () {
    examination(btnId)
    let btnNameRevers = document.querySelectorAll('.activ__sort_Name')
    btnNameRevers[0] !== undefined ? data.sort((a, b) => a.id < b.id ? 1 : -1) : data.sort((a, b) => a.id > b.id ? 1 : -1)
    sortDop(btnId, createTable)
  })
  btnCreatedAt.addEventListener('click', function () {
    examination(btnCreatedAt)
    let btnNameRevers = document.querySelectorAll('.activ__sort_Name')
    btnNameRevers[0] !== undefined ? data.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1) : data.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
    sortDop(btnCreatedAt, createTable)
  })


  btnUpdatedAt.addEventListener('click', function () {
    examination(btnUpdatedAt)
    let btnNameRevers = document.querySelectorAll('.activ__sort_Name')
    btnNameRevers[0] !== undefined ? data.sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1) : data.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
    sortDop(btnUpdatedAt, createTable)
  })
}






function loading() { // функция добавляет все данные из базы на экран при загрузке 
  fetch('http://localhost:3000/api/clients')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addKlientTopLine()

      function createTable() {
        let changeKlient = ''
        deleteKlient = ''
        dels(deleteKlient)
        for (let i = 0; i < data.length; i++) {
          addKlient()

          buttonLast(changeClass, changeText)
          buttonLast(deletesClass, deletesText)
          del(deleteKlient)
          dataWindow(data, i)

          hashKlientIdsis = ''
          let changeKlientChange = document.getElementsByClassName('change')
          let changeKlientLast = changeKlientChange[changeKlientChange.length - 1]
          let lineIdChange = (changeKlientLast.parentElement.parentElement.childNodes)[0].textContent
          change(changeKlientChange, changeKlientLast, data, lineIdChange, hashKlientIdsis)


          let changeKlientKard = document.getElementsByClassName('line1')
          let changeKlientLastKard = changeKlientKard[i]
          let lineIdKard = (changeKlientLastKard.parentElement.childNodes)[0].textContent
          let hashKlientId = changeKlientLastKard.parentElement.children[0].textContent

          if (window.location.hash !== '#' + hashKlientId) {
            change(changeKlientKard, changeKlientLastKard, data, lineIdKard, hashKlientId)
          }
          changeKlientLastKard.insertAdjacentHTML('afterbegin', `<a class = "hashKlientId" id= "${hashKlientId}">`)
          changeKlientLastKard.insertAdjacentHTML('beforeend', '</a>')
          const hashKlient = document.getElementById(hashKlientId)
          let hashContent = document.querySelectorAll('.modal__container_activechange')


          let hashClose = document.querySelectorAll('.modal__closechange')[0]
          let positionHiddenBtn = document.querySelectorAll('.line1')
          let base = hashContent[0].children[0].children[0].children[0]
          const modalSavechange = document.getElementById('modal__savechange')
          const addcontactOpenchange = document.getElementById('modal__addcontact_openchange')


          if (window.location.hash !== '') {



            for (let g = 0; g < positionHiddenBtn.length; g++) {
              positionHiddenBtn[g].style = 'position: unset;'
            }
            for (let g = 0; g < base.children[1].children.length; g++) {
              base.children[1].children[0].children[g].setAttribute('readonly', 'readonly')
            }

            hashClose.style = 'display: none;'
            base.children[0].children[0].textContent = 'Карточка клиента'
            hashContent[0].classList.add('modal__subcontainertwos_kard')

            modalSavechange.style = 'display: none;'
            addcontactOpenchange.style = 'display: none;'

            hashContent[0].classList.add('modal__subcontainertwos_kard')



          }

          hashKlient.addEventListener('click', function () {
            let massivKontacts = []
            window.location.hash = hashKlientId


            for (let g = 0; g < positionHiddenBtn.length; g++) {
              positionHiddenBtn[g].style = 'position: unset;'
            }
            for (let g = 0; g < base.children[1].children.length; g++) {
              base.children[1].children[0].children[g].setAttribute('readonly', 'readonly')
            }

            massivKontacts.push(base.children[0].children[0].textContent)
            base.children[0].children[0].textContent = 'Карточка клиента'
            hashContent[0].classList.add('modal__subcontainertwos_kard')

            modalSavechange.style = 'display: none;'
            addcontactOpenchange.style = 'display: none;'
            deletesChange.style = 'display: none;'







            hashClose.addEventListener('click', function () {
              hashContent[0].classList.remove('modal__subcontainertwos_kard')
              for (let g = 0; g < positionHiddenBtn.length; g++) {
                positionHiddenBtn[g].style = 'position: relative;'
                base.children[0].children[0].textContent = massivKontacts[0]
              }
              for (let g = 0; g < base.children[1].children.length; g++) {
                base.children[1].children[0].children[g].removeAttribute('readonly')
              }
              modalSavechange.style = 'display: block;'
              addcontactOpenchange.style = 'display: block;'


            })






          })

          mobilSwip()
          let lineFour = document.querySelectorAll('.line4')
          let lineFourLength = lineFour[lineFour.length - 1]

          function eachNamberBtn(namber) {
            if (lineFourLength.children.length > namber) {
              let createBtnRestKontacts = document.createElement('button')

              createBtnRestKontacts.classList.add('createBtnRestKontacts')

              lineFourLength.append(createBtnRestKontacts)

              let searchCreateBtnRestKontacts = document.getElementsByClassName('createBtnRestKontacts')

              bntRestKontClick(searchCreateBtnRestKontacts, lineFourLength)
            }
          }
          if (pageWidth >= 1024) {
            namber = 4
            eachNamberBtn(namber)
          }
          if (pageWidth >= 769 && pageWidth < 1024) {
            namber = 5
            eachNamberBtn(namber)
          }
          if (pageWidth >= 320 && pageWidth < 769) {
            namber = 4
            eachNamberBtn(namber)
          }

          modalPl = 'modal__placeholder_chan'
          namberOneChange = 1
          namberTwoChange = 3
          namberThreeChange = 5

          changeKlientChange[i].addEventListener('click', function () {
            hidePlase(inporiginOneChange, namberOneChange, modalPl)
            hidePlase(inporiginTwoChange, namberTwoChange, modalPl)
            hidePlase(inporiginThreeChange, namberThreeChange, modalPl)
          })
        }
        if (pageWidth > 1024) {
          itemOnesis = 7
          itemTwosis = 8
          itemThreesis = 9
          itemFoursis = 10
          itemFivesis = 11
          itemSixsis = 12
          placeDopKontacts(itemOnesis, itemTwosis, itemThreesis, itemFoursis, itemFivesis, itemSixsis)
        }


        if (pageWidth >= 769 && pageWidth <= 1024) {

          itemOne = 8
          itemTwo = 9
          itemThree = 10
          itemFour = 11
          itemFive = 12
          itemSix = 13
          placeDopKontacts(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix)
        }

        if (pageWidth < 769) {
          itemOnes = 7
          itemTwos = 8
          itemThrees = 9
          itemFours = 10
          itemFives = 11
          itemSixs = 12
          placeDopKontacts(itemOnes, itemTwos, itemThrees, itemFours, itemFives, itemSixs)

        }



      }

      createTable()
      sortKontacts(data, createTable)

    })

}
loading()


function poisk(phrase) { // это функция поиска в строке 
  let table = document.querySelectorAll('.main__tbod')[0]
  var regPhrase = new RegExp(phrase.value)
  let flag = false
  for (let i = 1; i < table.rows.length; i++) {
    flag = false;
    for (var j = 4; j >= 0; j--) {
      flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
      if (flag) break;
    }
    if (flag) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }
  }
}



let searchBoard = document.querySelectorAll('.header__inp')[0] // обработчик поиска по клиентам
searchBoard.addEventListener('keyup', function () {
  setTimeout(poisk, 300, searchBoard)
})
function mobilSwip() { //эта свайпер для мобилки
  let btnOneSwipper = document.querySelectorAll('.swippone')[0]
  let btnTwoSwipper = document.querySelectorAll('.swipptwo')[0]
  let btnThreeSwipper = document.querySelectorAll('.swippthree')[0]

  let lineZer = document.getElementsByClassName('line0')
  let lineOn = document.getElementsByClassName('line1')
  let lineOnId = document.getElementsByClassName('sixNamberId')

  let lineOTw = document.getElementsByClassName('line2')
  let lineOTh = document.getElementsByClassName('line3')

  let lineOFo = document.getElementsByClassName('line4')
  let lineOFi = document.getElementsByClassName('line5')

  let topLineId = document.querySelectorAll('.main__thone')
  let topLineName = document.querySelectorAll('.main__thtwo')
  let topLineOneDate = document.querySelectorAll('.main__ththree')
  let topLineTwoDate = document.querySelectorAll('.main__thfour')
  let topLineTwoKontakts = document.querySelectorAll('.main__thfive')
  let topLineTwoBtn = document.querySelectorAll('.main__thsix')


  topLineId[0].classList.add('swip')
  topLineName[0].classList.add('swip')
  topLineTwoDate[0].classList.add('swipnone')
  topLineOneDate[0].classList.add('swipnone')
  topLineTwoKontakts[0].classList.add('swipnone')
  topLineTwoBtn[0].classList.add('swipnone')

  for (let i = 0; i < lineZer.length; i++) {
    lineZer[i].classList.add('swip')
    lineOn[i].classList.add('swip')
    lineOnId[i].classList.add('swip')
    lineOTw[i].classList.add('swipnone')
    lineOFo[i].classList.add('swipnone')
    lineOTh[i].classList.add('swipnone')
    lineOFi[i].classList.add('swipnone')


  }

  btnOneSwipper.addEventListener('click', function () {
    for (let i = 0; i < lineZer.length; i++) {
      // +красный 1
      lineZer[i].classList.add('swip')
      lineOn[i].classList.add('swip')
      lineOnId[i].classList.add('swip')
      // -желтый 1
      lineZer[i].classList.remove('swipnone')
      lineOn[i].classList.remove('swipnone')
      lineOnId[i].classList.remove('swipnone')
      // +желтый 2 и 3
      lineOTw[i].classList.add('swipnone')
      lineOTh[i].classList.add('swipnone')
      lineOFo[i].classList.add('swipnone')
      lineOFi[i].classList.add('swipnone')
      // - красный 2 и 3
      lineOTw[i].classList.remove('swip')
      lineOTh[i].classList.remove('swip')
      lineOFo[i].classList.remove('swip')
      lineOFi[i].classList.remove('swip')
    }
    topLineId[0].classList.add('swip')
    topLineName[0].classList.add('swip')

    topLineId[0].classList.remove('swipnone')
    topLineName[0].classList.remove('swipnone')

    topLineTwoDate[0].classList.add('swipnone')
    topLineOneDate[0].classList.add('swipnone')

    topLineTwoKontakts[0].classList.remove('swip')
    topLineTwoBtn[0].classList.remove('swip')

    topLineOneDate[0].classList.remove('swip')
    topLineTwoDate[0].classList.remove('swip')

    topLineTwoKontakts[0].classList.add('swipnone')
    topLineTwoBtn[0].classList.add('swipnone')
  })
  //  +красный 2

  btnTwoSwipper.addEventListener('click', function () {
    for (let i = 0; i < lineZer.length; i++) {
      // -красный 1
      lineZer[i].classList.remove('swip')
      lineOn[i].classList.remove('swip')
      lineOnId[i].classList.remove('swip')
      // -красный 3
      lineOFo[i].classList.remove('swip')
      lineOFi[i].classList.remove('swip')
      // +желтый 3
      lineOFo[i].classList.add('swipnone')
      lineOFi[i].classList.add('swipnone')
      // +желтый 1
      lineZer[i].classList.add('swipnone')
      lineOn[i].classList.add('swipnone')
      lineOnId[i].classList.add('swipnone')
      //  -желтый 2
      lineOTw[i].classList.remove('swipnone')
      lineOTh[i].classList.remove('swipnone')

      //  +красный 2
      lineOTw[i].classList.add('swip')
      lineOTh[i].classList.add('swip')
    }

    topLineId[0].classList.remove('swip')
    topLineName[0].classList.remove('swip')

    topLineId[0].classList.add('swipnone')
    topLineName[0].classList.add('swipnone')

    topLineTwoDate[0].classList.remove('swipnone')
    topLineOneDate[0].classList.remove('swipnone')

    topLineTwoDate[0].classList.add('swip')
    topLineOneDate[0].classList.add('swip')

    topLineTwoKontakts[0].classList.remove('swip')
    topLineTwoBtn[0].classList.remove('swip')

    topLineTwoKontakts[0].classList.add('swipnone')
    topLineTwoBtn[0].classList.add('swipnone')

  })
  btnThreeSwipper.addEventListener('click', function () {
    for (let i = 0; i < lineZer.length; i++) {
      // -красный 2 и 1
      lineOTw[i].classList.remove('swip')
      lineOTh[i].classList.remove('swip')
      lineZer[i].classList.remove('swip')
      lineOn[i].classList.remove('swip')
      lineOnId[i].classList.remove('swip')
      // +желтый 2 и 1
      lineOTw[i].classList.add('swipnone')
      lineOTh[i].classList.add('swipnone')
      lineZer[i].classList.add('swipnone')
      lineOn[i].classList.add('swipnone')
      lineOnId[i].classList.add('swipnone')
      // -желтый 3
      lineOFo[i].classList.remove('swipnone')
      lineOFi[i].classList.remove('swipnone')
      //  +красный 3
      lineOFo[i].classList.add('swip')
      lineOFi[i].classList.add('swip')
    }
    topLineId[0].classList.remove('swip')
    topLineName[0].classList.remove('swip')

    topLineId[0].classList.add('swipnone')
    topLineName[0].classList.add('swipnone')

    topLineTwoKontakts[0].classList.remove('swipnone')
    topLineTwoBtn[0].classList.remove('swipnone')

    topLineTwoKontakts[0].classList.add('swip')
    topLineTwoBtn[0].classList.add('swip')

    topLineTwoDate[0].classList.add('swipnone')
    topLineOneDate[0].classList.add('swipnone')

    topLineTwoDate[0].classList.remove('swip')
    topLineOneDate[0].classList.remove('swip')
  })

}
