//get the button, display a triangle after cklicking on it
var btnGetTriangle = document.getElementById('btnGetTriangle');
btnGetTriangle.addEventListener("click", getTriangle);

//create triangle type and validate it
function getTriangle() {

    var nr1, nr2, nr3, result;

    //get the number values from the input fields
    nr1 = document.getElementById('nr1').value;
    nr2 = document.getElementById('nr2').value;
    nr3 = document.getElementById('nr3').value;
    
    result = document.getElementById('result');
     
    //check if input fields are empty, check if they are less and equal to 0
    if(isNaN(nr1) || isNaN(nr2) || isNaN(nr3) || (nr1 == null || nr1 == "") || (nr2 == null || nr2 == "") || (nr3 == null || nr3 == "") || (nr1 <= 0 || nr2 <= 0 || nr3 <= 0)){
        result.innerHTML = "Please, fill ALL fields with positive numbers!";
        result.style.color = "#ff0000";
    }
    else {
        checkTriangle(nr1, nr2, nr3);
        result.style.color = "#bc960b";
        result.style.fontSize = "22px";
    }
}


// Make sure the triangle can exist 
function checkTriangle(a, b, c) {
  
    if (a + b > c && b + c > a && a + c > b) {
        getTypeTriangle(a, b, c)
    }
    else {
        return result.innerHTML = "Triangle does not exixt";
    }
  }


//define and get the given triangle's type
function getTypeTriangle(a, b, c) {

    if((a === b) && (b === c) && (c === a)) {
        return result.innerHTML = "Equilateral";
    } else if((a === b) || (b === c) || (c === a)) {
        return result.innerHTML = "Isosceles";
    } else if((a != b) && (b != c) && (c != a)) {
        return result.innerHTML = "Scalene";
    } else {
        return result.innerHTML = "Error";  
    }
}


//animate the main row
$('.js--wp--row').waypoint(function(direction){
    $('.js--wp--row').addClass('animated rollIn');
}, {
    offset: '75%'
});

