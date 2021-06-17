class Calculator {
  constructor() {
    this.map = [
      'CE', // 0
      'C', // 1
      '⌫', // 2
      '/', // 3
      'br',
      '7',
      '8',
      '9',
      '*', // 8
      'br',
      '4',
      '5',
      '6',
      '-', // 13
      'br',
      '1',
      '2',
      '3',
      '+', // 18
      'br',
      '±', // 20
      '0',
      '.', // 22
      '=' // 23
    ]

    this.temp = 0
    this.memory = 0
    this.lastAction = null
    this.result = document.querySelector('#result')
  }

  plus() {
    this.lastAction = '+'
    this.memory = this.memory + Number(this.result.textContent)
    this.clear()
  }

  minus() {
    this.lastAction = '-'
    this.memory = Number(this.result.textContent) - this.memory
    this.clear()
  }

  divide() {
    this.lastAction = ':'
    this.memory = Number(this.result.textContent)
    this.clear()
  }

  multiply() {
    this.lastAction = '*'
    if (!this.memory) this.memory++
    this.memory = this.memory * Number(this.result.textContent)
    this.clear()
  }

  clear() {
    this.result.textContent = 0
  }

  allClear() {
    this.temp = 0
    this.memory = 0
    this.clear()
  }

  comma() {
    if (this.result.textContent.indexOf('.') === -1) {
      this.result.textContent += '.'
    }
  }

  delete() {
    if (this.result.textContent.length > 1) {
      this.result.textContent = this.result.textContent.slice(0, -1)
    } else {
      this.clear()
    }
  }

  equally() {
    if (this.memory !== 0) {
      if (this.lastAction === '*') {
        this.result.textContent = this.memory * Number(this.result.textContent)
      }
    }

    if (this.lastAction === ':') {
      this.result.textContent = this.memory / Number(this.result.textContent)
    }

    if (this.lastAction === '+') {
      this.result.textContent = this.memory + Number(this.result.textContent)
    }

    if (this.lastAction === '-') {
      this.result.textContent = this.memory - Number(this.result.textContent)
    }

    this.memory = 0

    if (this.result.textContent === 'Infinity' || this.result.textContent === 'NaN') {
      this.result.textContent = 'ERROR'
    }
  }

  plusMinus() {
    this.result.textContent = -this.result.textContent
  }

  useButton(digit) {
    if (this.result.textContent === '0') {
      if (digit === this.map[22]) {
        this.result.textContent = '0.'
      } else {
        this.clear()
        this.result.textContent = ''
      }
    }

    switch (digit) {
      case this.map[0]:
        this.allClear()
        break
      case this.map[1]:
        this.clear()
        break
      case this.map[2]:
        this.delete()
        break
      case this.map[3]:
        this.divide()
        break
      case this.map[8]:
        this.multiply()
        break
      case this.map[13]:
        this.minus()
        break
      case this.map[18]:
        this.plus()
        break
      case this.map[20]:
        this.plusMinus()
        break
      case this.map[22]:
        this.comma()
        break
      case this.map[23]:
        this.equally()
        break
      default:
        this.result.textContent += digit
    }
  }

  createElement(tagName, opts) {
    const elem = document.createElement(tagName)
    Object.assign(elem, opts)
    Object.assign(elem.style, opts?.style)
    return elem
  }
}

const calculator = new Calculator()

calculator.map.forEach((value, index) => {
  const target = document.querySelector('#calculator')

  if (value === 'br') {
    return target.appendChild(
      calculator.createElement('br')
    )
  }

  const button = calculator.createElement('button', {
    textContent: value,
    style: index === 2 ? {
      fontSize: 'small',
      paddingBottom: '3px'
    } : null,
    onclick: function () {
      calculator.useButton(this.textContent)
    }
  })

  target.appendChild(button)
})