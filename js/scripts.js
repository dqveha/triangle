
$(document).ready(function() {
  $("#triangleForm").submit(function(event) {
    event.preventDefault();
    const a = parseInt($("#sideOne").val());
    const b = parseInt($("#sideTwo").val());
    const c = parseInt($("#sideThree").val());
    
    if (a === b && b === c) {
      console.log("show equilateral")
      $("#answer").show();
      $("#output").text("This is an equilateral triangle!").show();
    } 
    else if (((a === b && b !== c) && (a + b > c)) || ((b === c && c !== a) && (c + b > a)) || ((c === a && a !== b) && (a + c > b))) {
      console.log("show b")
      $("#answer").show();
      $("#output").text("This is an isosceles triangle!");
    } 
    else if ((a + b <= c) || (c + a <= b) || (c + b <= a)) {
      console.log("show c")
      $("#answer").show();
      $("#output").text("YOU'RE A SQUARE WITHOUT A FOURTH SIDE.");
    } 
    else {
      console.log("show d")
      $("#answer").show();
      $("#output").text("Uh, a scalene triangle!");
    }
  });
});



// <!-- 
// 1) Three input fields
//   a) pythagorean theorem
// 2) After undergoing the equation, it will spit out either:
//   a) Equilateral: All sides are equal. *** if
//   b) Isosceles: Exactly 2 sides are equal. *** else if
//   c) Scalene: No sides are equal. *** else if
//   d) NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side. a + b <= c *** else
//   ====> Likely an if/else statement 
// 3)

// NOT A TRIANGLE: A + B TOGETHER IS LESS THAN OR EQUAL TO C
// TRIANGLE: A + B TOGETHER IS GREATER THAN C
// // -->