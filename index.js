class Formatter {
  static capitalize(string) {
    let array = string.split("")
    array[0] = array[0].toUpperCase()
    let newArray = array.join("")
    return newArray
  }
  
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  static titleize(string) {
    let array = string.split(" ")
    let newArray = array.map((word) => {
      if (word == array[0]) {
        return this.capitalize(word)
      } else if (word == "a" || word == "an" || word == "but" || word == "of" || word == "and" || word == "for" || word == "at" || word == "by" || word == "from" || word == "the"){
        return word
      } else {
      return this.capitalize(word)}
    })
    return newArray.join(" ")
  }
}

console.log(Formatter.titleize("i am hungry"))

// console.log(Formatter.capitalize("hello"))