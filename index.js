class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(str) {
    const nonCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = str.split(' ')
    
    for(let i = 0; i < words.length; i++) {
      if(i === 0 || !nonCapWords.includes(words[i])) {
        words[i] = this.capitalize(words[i])
      }
    }
    return  words.join(' ')
  }
}