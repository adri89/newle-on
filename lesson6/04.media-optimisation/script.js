// /*
// 1. selectionner le lien

// 2. Attahcer un écouteur d'événements à ce lien
$('a#navbarDropdownMenuLink').click(function(){
    $('.dropdown-menu').toggle();  
})



const date= new Date().getFullYear('march 12, 2019')
$('#js-current-year').append(date);


$('#js-bmi-form').submit(function(Event){
Event.preventDefault();
let weight = $('#js-bmi-weight').val();
let height = $('#js-bmi-height').val();

const BMI =weight/((height/100) * (height/100))
console.log(BMI);
if(BMI < 18.5){
    'underweight'
} else if (BMI >= 18.5 && BMI <= 25){
   'healthy' 
} else {
    'overweight'
}
$('.result').append(BMI);

});




