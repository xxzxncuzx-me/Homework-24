"use strict";

const selectFrom = document.querySelector('.language-from')
const selectTo = document.querySelector('.language-to')

console.log(selectFrom)
console.log(selectTo)

// const selectArr = Array.from(document.querySelectorAll('select'))
const selectArr = new Array(selectFrom, selectTo)
console.log(selectArr)

const languages = [{value:'en', text: 'English'}, {value:'uk', text:'Українська'}, {value:'gre', text:'Ελληνικά'}]

for (let j = 0; j < selectArr.length; j++) {
    for (let i = 0; i < languages.length; i++) {
        const option = languages[i]
        const el = document.createElement("option");
        el.textContent = option.text;
        el.value = option.value;
        selectArr[j].appendChild(el)
    }
}
selectTo[1].selected = true

selectFrom.addEventListener('change', () => {
    for (let i = 0; i < selectTo.options.length; i++) {
        if (selectFrom.value === selectTo.value) {
            selectTo.selectedIndex = i + 1
        }
    }                  
})

selectTo.addEventListener('change', (event) => {
    for (let i = 0; i < selectFrom.options.length; i++) {
        if (selectTo.value === selectFrom.value) {
            selectFrom.selectedIndex = i + 1
        }
    }
})

const table = document.querySelector('table')
for (let i = 0; i < 12; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < selectArr.length; j++) {
        const td = document.createElement('td')
        const date =new Date(2023, i)
        td.textContent += date.toLocaleString(selectArr[j].value, { month: 'long' })
        
        selectArr[j].addEventListener('change', () => {
            td.textContent = date.toLocaleString(selectArr[j].value, { month: 'long' })
        })

        tr.appendChild(td)
    }
    table.appendChild(tr)
}
