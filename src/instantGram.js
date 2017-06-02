class InstantGram{
  constructor(imageUrl, caption){
    this.imageUrl = imageUrl
    this.caption = caption
  }

  render(){
    return $("#photo-list").append(`<ul><img src="${this.imageUrl}"></ul><ul>"${this.caption}"</ul>`)
  }
}
