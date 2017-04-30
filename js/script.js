$(document).ready(function() {
      $("form").submit(function(event) {
        var a = parseInt($("input#lengtha").val());
        var b = parseInt($("input#lengthb").val());
        var c = parseInt($("input#lengthc").val());
        var results="";



      if(c> a+b || b>a+c || a>b+c){
        results = "Not a Triangle";
      }else {
        if(a===b && a===c){
          results = "Equilateral";
        }else {
          if(a===b || a===c || b===c ){
          results = "Isosceles";
        }
        else {
          if(a!=b && a!=c){
             results = "Scalene";
          }
        }
      }
      }
        $(".output").text(results);
        event.preventDefault();
      });


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
});
