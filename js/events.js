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
    $("img").addclass("tasty");
  })
}
function pressIt(){
  $(document).on('keydown',function(key){
    if(key.which -== 81){alert('g was pressed');
    }});
  })
}