// TO CHECK IF MY CODE RUNS OR NOT;
// For Testing purposes(rdr2, CODBO, CODMW, LoUR, Uncharted, FIFA21);
// Once you open the website make sure to refresh it again;

// HERE IS THE ALERT MESSAGE;
// alert ("Welcome to My Website");
// HERE IS THE CONSOLE.LOG SYNTAX;
// console.log("Welcome to My Website");

document.write('<h3 id = "middle">'+ "We want to know what is your favorite game of all time, we are making a poll please answer the question :) "+'</h3>');
// // HERE IS THE PROMPT;
// // var favGame = prompt("What is your favorite game ?");
// // HERE IS THE CONDITION;
// if (favGame == "rdr2" || favGame=="Red Dead Redemption 2"){
//   document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
//   document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" width = "200px" class = "center" >');
// }
// else if (favGame == "CODMW" || favGame == "Call of Duty Modern Warfare"){
  // document.write('<h3 id = "middle">'+ "Your favorite game is " + '</h3>');
  // document.write('<img src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg" width = "200px" class = "center">');
// }
// else if(favGame == "CODBO" || favGame == "Call of Duty: Black Ops: Cold War" || favGame == "Warzone"){
//   document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
// document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Black_Ops_Cold_War.jpeg/220px-Black_Ops_Cold_War.jpeg" width = "200px" class = "center">');
// }
// else if (favGame == "FIFA21"|| favGame == "fifa21" || favGame == "EA SPORTS FIFA 21"){
  // document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  // document.write('<img src = "https://images-na.ssl-images-amazon.com/images/I/81mBk8%2BsxrL._AC_SX385_.jpg"width = "200px" class = "center">');
// }else if (favGame == "Last of Us Remastered"|| favGame == "LoUR" || favGame == "Last of Us"){
  // document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  // document.write('<img src = "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/Uf86AuvSNRplUW1tpSsYJqQX.png"width = "200px" class = "center">');
// }else if (favGame == "Uncharted 4 "|| favGame == "U4" || favGame == "Uncharted"){
  // document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  // document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg"width = "200px" class = "center">');
// } 
// // IN CASE THE USER ENTERS NOTHING THIS MESSAGE SHOWS UP
// else{
//   document.write("Please enter a correct game name :)");
// }
// *****************************************************
//  ****************LAB05***********************

// Asking for favorite game;
var favGame = prompt("What is your favorite game (rdr2, fifa21, CODMW, CODBO, LoUR, Uncharted) ?");


//  It will stop looping when the user gives the correct answer;
while (favGame!="rdr2" && favGame!="fifa21" && favGame != "CODMW" && favGame != "CODBO" && favGame !="LoUR" && favGame!="Uncharted"){
  alert("Please write one of the games that are shown in the question.");
  var favGame = prompt("What is your favorite game (rdr2, fifa21, CODMW, CODBO, LoUR, Uncharted) ?");
}
// this function is for dispalying the game;
function favgames(){
  // initialize value for result is an empty string;
 
if (favGame == "rdr2"){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" width = "200px" class = "center" >'); 
  }else if(favGame == "fifa21"){
document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://images-na.ssl-images-amazon.com/images/I/81mBk8%2BsxrL._AC_SX385_.jpg"width = "200px" class = "center">');
}else if(favGame == "CODMW"){
  document.write('<h3 id = "middle">'+ "Your favorite game is " + '</h3>');
  document.write('<img src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg" width = "200px" class = "center">');
}else if(favGame == "CODBO"){
document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Black_Ops_Cold_War.jpeg/220px-Black_Ops_Cold_War.jpeg" width = "200px" class = "center">');
}else if(favGame == "LoUR"){
   document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/Uf86AuvSNRplUW1tpSsYJqQX.png"width = "200px" class = "center">');
}else if(favGame == "Uncharted" ){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg"width = "200px" class = "center">');

}
}
// Code for raiting
function rateFunc(){
 
  var rate = prompt("How many stars (1-5) do you rate "+ favGame +" ?");

document.write('<h3 id = "middle">'+ "Your Raiting for  "+favGame+"  is"+ '</h3>');

// for (var i = 0; i<rate; i++){
// document.write('<img id = "stars" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuPyLWYn_sS2AeIta3BRFYDCKOdcCRbD2Vg&usqp=CAU" width = "50px" class = "center">');
// }
if(rate == 1){
  // result = '<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Star_rating_1_of_5.png/180px-Star_rating_1_of_5.png" width = "150px" class = "center">';
document.write('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Star_rating_1_of_5.png/180px-Star_rating_1_of_5.png" width = "150px" class = "center">');
}
if(rate == 2){
document.write('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Star_rating_2_of_5.png/180px-Star_rating_2_of_5.png" width = "150px" class = "center">');
}
if(rate == 3){
document.write('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/3_stars.svg/1024px-3_stars.svg.png" width = "150px" class = "center">');
}

if(rate == 4){
document.write('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png" width = "150px" class = "center">');
}
if(rate == 5){
document.write('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Star_rating_5_of_5.png/180px-Star_rating_5_of_5.png" width = "150px" class = "center">');
}
if(favGame == "rdr2"){
  for (var i = 0 ; i<rate ; i++){
document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" width = "200px" class = "center" >');
}
}
if(favGame == "fifa21"){
  for (var i = 0 ; i<rate ; i++){
document.write('<img src = "https://images-na.ssl-images-amazon.com/images/I/81mBk8%2BsxrL._AC_SX385_.jpg"width = "200px" class = "center">');
}
}
if(favGame == "CODMW"){
  for (var i = 0 ; i<rate ; i++){
document.write('<img src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg" width = "200px" class = "center">');
  }
}

if(favGame == "CODBO"){
  for (var i = 0; i<rate ; i++){
document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Black_Ops_Cold_War.jpeg/220px-Black_Ops_Cold_War.jpeg" width = "200px" class = "center">');
  }
}

if(favGame == "LoUR"){
  for (var i = 0; i<rate ; i++){
document.write('<img src = "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/Uf86AuvSNRplUW1tpSsYJqQX.png"width = "200px" class = "center">');
  }
}

if(favGame == "Uncharted"){
  for (var i = 0; i<rate ; i++){
document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg"width = "200px" class = "center">');
  }
}

} 
favgames();
rateFunc();



