const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length
          result = word
      }
  }
  console.log(maxLength)
  return result
}

console.log(longestWord("Antonio foi no banheirosss e não sabemos o que aconteceu"))
