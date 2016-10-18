
//Creates a script to ask the user some questions.
//Declare variables
var userName;
var userFavColor;
var userFavFood;
var confirmName;
var confirmFavColor;
var confirmFavFood;
var userLocation;
var confirmLocation //Will be used to confirm the user's location

userName = prompt("Hi. What's your name?"); //Ask the user their name.
if(userName !=null){
confirmName = confirm("Hi " +userName + " Welcome to my page!"); //Confirm the user's entry and greet the user.
}
userFavColor = prompt("What's your favorite color?"); //Ask the user's favorite color
if(userFavColor != null){
confirmFavColor = confirm("Awesome! I bet"  +userFavColor +"looks great on you!"); //Confirm the user's entry.
}
userFavFood = prompt("What's your favorite food?");
if(userFavFood !=null){ //States what to do if the field is not empty.
confirmFavFood =confirm("Great choice! I'm sure " +userFavFood  +"tastes great.");
}
userLocation = prompt("Where are you located so I can get the weather for you today?");
confirmLocation = confirm("I hope the weather is nice in " +userLocation+ " today!"); //Confirms the user's lcoation.
