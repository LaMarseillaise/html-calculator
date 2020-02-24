let a = document.querySelector('[name="a"]')
let b = document.querySelector('[name="b"]')
let operation = document.querySelector('[name="operation"]')
let result = document.querySelector('#result')

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

const calculate = () => {
  result.textContent = operations[operation.value](parseInt(a.value), parseInt(b.value))
}
