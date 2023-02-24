"use strict";

const selectFrom = document.querySelector('.language-from')
const selectTo = document.querySelector('.language-to')

const selectArr = new Array(selectFrom, selectTo)

const languages = [{
    value: 'en',
    text: 'English'
}, {
    value: 'uk',
    text: 'Ukrainian'
}, {
    value: 'gre',
    text: 'Greek'
},{
    value: 'cs',
    text: 'Czech'
},{
    value: 'zh',
    text: 'Chinese'
},{
    value: 'bg',
    text: 'Bulgarian'
},{
    value: 'ja',
    text: 'Japanese'
},{
    value: 'it',
    text: 'Italian'
},{
    value: 'lt',
    text: 'Lithuanian'
},{
    value: 'fr',
    text: 'French'
},{
    value: 'pt',
    text: 'Portuguese'
},{
    value: 'de',
    text: 'German'
},{
    value: 'es',
    text: 'Spanish'
},{
    value: 'et',
    text: 'Estonian'
},{
    value: 'hi',
    text: 'Hindi'
},{
    value: 'pl',
    text: 'Polish'
},{
    value: 'vi',
    text: 'Vietnamese'
},]

for (let j = 0; j < selectArr.length; j++) {
    for (let i = 0; i < languages.length; i++) {
        const option = languages[i]
        const el = document.createElement("option")
        el.textContent = option.text
        el.value = option.value
        selectArr[j].appendChild(el)
    }
}
selectTo[1].selected = true

const table = document.querySelector('table')

function createTable(selectArr) {
    for (let i = 0; i < 12; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < selectArr.length; j++) {
            const td = document.createElement('td')
            const date = new Date(2023, i)

            td.textContent += date.toLocaleString(selectArr[j].value, {
                month: 'long'
            })
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
createTable(selectArr)

selectFrom.addEventListener('change', () => {
    for (let n = 0; n < selectTo.options.length; n++) {
      if (selectFrom.value === selectTo.value) {
        selectTo.selectedIndex = n + 1
      } else {
        break
      }
    }
  
    table.innerHTML = ''
    createTable(selectArr)
  })

selectTo.addEventListener('change', () => {
    if (selectTo.value === selectFrom.value)  {
      selectFrom.selectedIndex = (selectTo.selectedIndex || selectTo.options.length) - 1
    }
  
    table.innerHTML = ''
    createTable(selectArr)
  })
// selectTo.addEventListener('change', () => {
//     for (let k = 0; k < selectFrom.options.length; k++) {
//         if (selectTo.value === selectFrom.value) {
//             selectFrom.selectedIndex = k + 1
//             table.innerHTML = ''
//             createTable(selectArr)
//         } else {
//             table.innerHTML = ''
//             createTable(selectArr)
//         }
//     }
// })


