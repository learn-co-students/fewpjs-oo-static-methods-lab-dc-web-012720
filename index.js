class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
   const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
   let stringToArray = string.split(' ')
   let finalArray = []

   stringToArray[0] = this.capitalize(stringToArray[0])
   finalArray.push(stringToArray[0])
   for (let i = 1; i < stringToArray.length; i++) {
     let word = stringToArray[i];
     if (exceptions.includes(word)) {
       word = word
     } else {
       word = this.capitalize(word)
     }
     finalArray.push(word)
      }
      return finalArray.join(' ')
  }
}