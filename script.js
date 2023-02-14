"use strict";

const selectFrom = document.querySelector('.language-from')
const selectTo = document.querySelector('.language-to')

const selectArr = new Array(selectFrom, selectTo)

const languages = [{
    value: 'en',
    text: 'English'
}, {
    value: 'uk',
    text: 'Українська'
}, {
    value: 'gre',
    text: 'Ελληνικά'
}]

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

            selectFrom.addEventListener('change', () => {
                td.textContent = date.toLocaleString(selectArr[j].value, {
                    month: 'long'
                })
                for (let n = 0; n < selectTo.options.length; n++) {
                    if (selectFrom.value === selectTo.value) {
                        selectTo.selectedIndex = i + n
                        td.textContent = date.toLocaleString(selectArr[j].value, {
                            month: 'long'
                        })
                    }
                }
            })

            selectTo.addEventListener('change', (event) => {
                td.textContent = date.toLocaleString(selectArr[j].value, {
                    month: 'long'
                })
                for (let k = 0; k < selectFrom.options.length; k++) {
                    if (selectTo.value === selectFrom.value) {
                        selectFrom.selectedIndex = k + 1
                        td.textContent = date.toLocaleString(selectFrom.value, {
                            month: 'long'
                        })
                    }
                }
            })
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

createTable(selectArr)
