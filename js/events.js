//define functions here


$(document).ready(function(getIt){

// call functions here

});

function getIt(){
  $("p").on("click",function(){
    window.alert("Hey!");
  })
}
function frameIt(){
  $("img").on("load",function(){
    $("img").addClass("tasty");
  })
}
function pressIt(){
  $("input").on('keydown',function(key){
    if(key.which == 71){alert('g was pressed');
    }});
}
function submitIt(){
  $("form").on("submit",function(){
    window.alert("Your form is going to be submitted now.");
  })
}