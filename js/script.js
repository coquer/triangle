//get the button, display a triangle after cklicking on it
var btnGetTriangle = document.getElementById('btnGetTriangle');
btnGetTriangle.addEventListener("click", getTriangle);

//create triangle type and validate it
function getTriangle() {
    //get the number values from the input fields
    var nr1 = parseFloat(document.getElementById('nr1').value);
    var nr2 = parseFloat(document.getElementById('nr2').value);
    var nr3 = parseFloat(document.getElementById('nr3').value);
    
    var result = document.getElementById('result');
     
    //check if input fields are empty, check if they are less and equal to 0
    if(!isValid(nr1) || !isValid(nr2) || !isValid(nr3)){
        result.innerHTML = "Please, fill ALL fields with positive numbers!";
        result.style.color = "#ff0000";
        return;

    }

    if (! checkTriangle(nr1, nr2, nr3)) {
        result.innerHTML = "Triangle does not exixt. TIP: The sum of 2 sides should be greater than the third side!";
        return;
    }
    
    var triangleType = checkTriangle(nr1, nr2, nr3); 
    result.innerHTML = triangleType;
    result.style.color = "#bc960b";
    result.style.fontSize = "22px";
}

// Make sure the triangle exists 
function checkTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b;
}


//define and get the given triangle's type
function getTypeTriangle(a, b, c) {
    if((a === b) && (b === c) && (c === a)) {
        return "Equilateral";
    } else if((a === b) || (b === c) || (c === a)) {
        return "Isosceles";
    } else if((a != b) && (b != c) && (c != a)) {
        return "Scalene";
    }
}

function isValid(elem) {
    return !isNaN(elem) || !elem || elem <= 0
}


//animate the main row
$('.js--wp--row').waypoint(function(direction){
    $('.js--wp--row').addClass('animated rollIn');
}, {
    offset: '75%'
});
