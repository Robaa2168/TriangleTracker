$(document).ready(function() {
      $(".user form").submit(function(event) {
        var a = parseInt($("input#lengtha").val());
        var b = parseInt($("input#lengthb").val());
        var c = parseInt($("input#lengthc").val());
        var result="";


      if(c> a+b || b>a+c || a>b+c){
        result = "Not a Triangle";
      }else {
        if(a===b && a===c){
          result = "Equilateral";
        }else {
          if(a===b || a===c || b===c ){
          result = "Isosceles";
        }
        else {
          if(a!=b && a!=c){
             result = "Scalene";
          }
        }
      }
      }
        $(".output").text(result);
        event.preventDefault();
      });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
