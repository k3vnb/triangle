$(document).ready(function() {
  $("form#triangleform").submit(function(event) {
    var sideA = parseFloat($("input#sidea").val());
    var sideB = parseFloat($("input#sideb").val());
    var sideC = parseFloat($("input#sidec").val());

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      alert("Please enter actualy numbers into the form this time.");
    } else {
      if (sideA === sideB && sideA === sideC) {
        alert("Whoo boy! You've got an equileteral triangle on your hands!");
      } else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
        alert("That, my friend, is no triangle! That is a lie!");
      } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        alert("I see you gotta isosceles.")
      } else {
        alert("Looks like you've been dealt a scalene triangle, bud!")
      };


    };
    event.preventDefault();
  });
});
// parseFloat($("#add2").val());
