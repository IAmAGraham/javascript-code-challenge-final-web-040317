$(document).ready(function(){
  formListener()
})

function formListener(){
$("#submit_button").click(function(e){
  e.preventDefault();
  var url = $("#image_url").val()
  var caption = $("#caption").val()
  var instantGram = new InstantGram(url, caption)
  var eachGram = new InstantGram(instantGram)
  instantGram.render()

  $("#image_url").val()
  $("#caption").val()

  clearForm.call("#photo-form")
  //here clearForm.call(this) didn't work either, so we threw it directly on the photo form
  // ya gotta be able to reset forms after you submit, ya know?
  })
}

function clearForm(){
  $("#photo-form")[0].reset()

  // tried using this.reset() but clearly giving me issues. Went a little old-school here.
}
