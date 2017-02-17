$(document).ready(function() {

$('.tweet-compose').focus(function(){

  var thisHeight = $(this).height()
  $(this).height('5em')
  $('#tweet-controls').css('display', 'inherit')
})
$('.tweet-compose').blur(function(){

  var thisHeight = $(this).height()
  // $(this).height(thisHeight/2.5)
  // $('#tweet-controls').css('display', 'none')
})
//
// $('#char-count').keypress(function(){
//   var max = 140;
//    var len = $(this).val().length;

   var maxLength = 140;
   $('.tweet-compose').keyup(function() {
     console.log("First keyup")
     var length = $(this).val().length;
     var length = maxLength-length;
     $('#char-count').text(length);
     if(length<=10 && length>=0){
       $('#char-count').css('color', 'red')
     }
     else if(length >=11){
       $('#char-count').css('color', 'black')
     }
    })

   $('.tweet-compose').keyup(function(){
     console.log("Second keyup")
    thetext = $(this).val();

    if (thetext.length > 140) {
        $('.button').attr('disabled', 'disabled');
    } else {
        $('.button').removeAttr('disabled');
    }
})
var testnumcounter = 0;
  var thetext = $('.tweet-compose').val();
  console.log(thetext)
$('#tweet-submit').click(function(){
var tstamp =  moment().format('h:m a - D MMM YYYY')
  var newTweet = $(".tweet:first-child").clone()
  var testnumcounter = 0;
  $('.fullname', newTweet).text('Jesus')
  $('.username', newTweet).text('@HolyTrinity')
  $('.avatar', newTweet).prop('src', 'img/alagoon.jpg')
  $('.tweet-text', newTweet).text(thetext)
  $('.time', newTweet).text(tstamp)
  $('.num-retweets', newTweet).text(testnumcounter)

    newTweet.prependTo( "#stream" );
})
var numvar = $('.num-retweets').val()
$('#stream')
  .on('mouseenter', '.content', function(){
    $(this).find('.tweet-actions').css('display', 'inherit')
   })
   .on('mouseleave', '.content', function(){
      $(this).find('.tweet-actions').css('display', 'none')
   })
   .on('click', '.content', function(){
    //  console.log(this)
     $(this).find('.stats').css('display', 'inherit')

   })
   .on('mouseleave', '.content', function(){
      $(this).find('.stats').css('display', 'none')
   })
   .on('click', '.tweet-actions li:nth-child(2)', function(e){

     var $count = $(this).parent().parent().parent().find('.num-retweets')
     var num = $count.text();
     num = parseInt(num) + 1
     $count.text(num)

     })

// $('').click(function(){
//   var num = $(this).closest('.num-retweets').text();
//   num = parseInt(num) + 1
//   console.log($(this).closest('.num-retweets').text())
//   $(this).closest('.num-retweets').text(num)
// })
  // .on('click', '.action-retweet', function(){
  //   console.log('clicked retweet')
  //   var num = $(this).closest('.num-retweets').text();
  //   num = parseInt(num) + 1
  //   console.log($(this).closest('.num-retweets').text())
  //   $(this).closest('.num-retweets').text(num)
  //
  //   })


  // End OF OUR DOCUMENT
})
// $('.tweet').on('click', '.tweet-actions li:nth-child(2)', function(e) {
//   $(e.delegateTarget).find('.num-retweets').text('5532234234')
// })
//
// Ask Brian about the var thetext = $(this).val();    dont fully understand this one.
