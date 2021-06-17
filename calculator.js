const result = document.getElementById('tempResult')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multi')
const div = document.getElementById('div')
const equally = document.getElementById('equally')

let temp = 0
let memory = 0

document.getElementById('1').onclick = () => {
  stringPlus(1)
}
document.getElementById('2').onclick = () => {
  stringPlus(2)
}
document.getElementById('3').onclick = () => {
  stringPlus(3)
}
document.getElementById('4').onclick = () => {
  stringPlus(4)
}
document.getElementById('5').onclick = () => {
  stringPlus(5)
}
document.getElementById('6').onclick = () => {
  stringPlus(6)
}
document.getElementById('7').onclick = () => {
  stringPlus(7)
}
document.getElementById('8').onclick = () => {
  stringPlus(8)
}
document.getElementById('9').onclick = () => {
  stringPlus(9)
}
document.getElementById('0').onclick = () => {
  stringPlus(0)
}
document.getElementById('comma').onclick = () => {
  if(result.textContent.indexOf('.') === -1){
    result.textContent += '.'
  }
 
}
document.getElementById('clear').onclick = () => {
  result.textContent = 0
}
document.getElementById('allClear').onclick = () => {
  result.textContent = 0
  memory = 0
}
document.getElementById('delete').onclick = () => {
  if (result.textContent.length > 1) {
    result.textContent = result.textContent.slice(0, -1)
  }
  else {
    result.textContent = 0
  }
}
document.getElementById('plusMinus').onclick = () => {
  if (result.textContent !== '0') {
    result.textContent = -result.textContent
  }
}

function stringPlus(digit) {
  if (result.textContent === '0') {
    temp = result.textContent
    result.textContent = ''
  }
  result.textContent += digit
}

plus.onclick = () => {
  lastAction = '+'
  memory = memory + Number(result.textContent)
  result.textContent = 0
}

minus.onclick = () => {
  lastAction = '-'
  memory = Number(result.textContent) - memory
  result.textContent = 0
}

multi.onclick = () => {
  lastAction = '*'
  if (memory === 0) { memory++ }
  memory = memory * Number(result.textContent)
  result.textContent = 0
}

div.onclick = () => {
  lastAction = ':'
  memory = Number(result.textContent)
  result.textContent = 0
}



equally.onclick = () => {
  if (memory !== 0) {
    if (lastAction === '*') {
      result.textContent = memory * Number(result.textContent)
    }
  }
  if (lastAction === ':') {
    result.textContent = memory / Number(result.textContent)
  }
  if (lastAction === '+') {
    result.textContent = memory + Number(result.textContent)
  }
  if (lastAction === '-') {
    result.textContent = memory - Number(result.textContent)
  }

  memory = 0
  if (result.textContent === 'Infinity') { result.textContent = 'ERROR' }
  if (result.textContent === 'NaN') { result.textContent = 'ERROR' }
}