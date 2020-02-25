function doubleAll(input) {
  let outcome = []

  for (let i = 0; i < input.length; i++ ){
    // console.log(input[i] * 2)
    outcome.push(input[i] * 2)
  }
  return outcome
}

function absoluteValues(input) {
  let outcome = []

  for (let i = 0; i < input.length; i++ ){
    if (input[i]  % 2 === -1){
    outcome.push(input[i] * -1)
} else { 
  outcome.push(input[i])
}
  }
  return outcome
}

function yelledGreetings(input) {
  let outcome = []

  for (let i = 0 ; input.length > i ; i++){
    // console.log(input[i] + '!')
    outcome.push(input[i] + '!')
    }
    return outcome
}

function changeToInitials(input) {
  
}

function doubleOdd(input) {
  let outcome = []

  for (let i = 0; i < input.length; i++ ){
    if (input[i]  % 2 === 1 || input[i] % 2 === -1){
    outcome.push(input[i] * 2)
} else { 
  outcome.push(input[i])
}
  }
  return outcome
}


function upperCaseFirstLetters(input) {
  let outcome = []

  for (let i = 0 ; input.length > i ; i++){

    }
    return outcome
}

function add1ToLeft(input) {
  let outcome = []

  for (let i = 0; i < input.length; i++ ){
    if (input[i]  % 2 === -1){
    outcome.push(input[i])
} else { 
  outcome.push('1' + input[i])
}
  }
  return outcome
}



module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}