class instantGrams {
  constructor(){
    this.instantGrams = []
  }

  render(){
    this.instantGrams.map(function(gram){
      return gram.render()
    }).join("")
  }

  addAGram(instantGram){
    var newGram = instantGram
    this.instantGrams.push(newGram)
  }
}
