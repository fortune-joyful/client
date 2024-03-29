const baseUrl = 'http://localhost:3000'

showAlert = (err) => {
  console.log(err)
}

seeDetail = (event, zodiac) => {
  console.log(zodiac)
  detailZodiac(event, zodiac)
  $('#homepage').hide()
  $('#detail-page').show()
}

getFortune = () => {
  $('#cookie-fortune').empty()
  Swal.showLoading()
  $.ajax({
      url: `${baseUrl}/cookies/fortune`,
      method: 'get',
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .done(({
      fortune
    }) => {
      Swal.close()
      $('#cookie-fortune').append(fortune)
    })
    .fail(showAlert)
}

$(document).ready(function () {

  if(!localStorage.getItem('token')){
    $("#homepage").hide()
    $("#nav").hide()
    $(".login-wrap").show()
  } else {
    $(".login-wrap").hide()
    $("#homepage").show()
    $("#nav").show()
  }

    $('#register').submit(function(event){
      event.preventDefault()
      console.log('masuk register')
      manualSignUp()
    })

    $('#login').submit(function(event){
      event.preventDefault()
      console.log('masuk login')
      manualSignIn()
    })

  $('#cookie-page').hide()

  $('#fortune-cookie-button').click(() => {
    $('#homepage').hide()
    $('#cookie-page').show()
  })

  $('#crack-button').click(() => {
    getFortune()
  })

  $('.navbar-brand').click(() => {
    $('#tarot-page').hide()
    $('#cookie-page').hide()
    $('#detail-page').hide()
    $('#homepage').show()
    $(".detail").empty()
  })

  $('.tr-image').click(function (e) {
    e.preventDefault()
    getCard()
  })

  $('#to-tarot-page').click(function (e) {
    e.preventDefault()
    $('#homepage').hide()
    $('#tarot-page').show()
  })

})