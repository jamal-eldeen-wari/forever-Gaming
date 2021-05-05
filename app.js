// TO CHECK IF MY CODE RUNS OR NOT;
// For Testing purposes(rdr2, CODBO, CODMW, LoUR, Uncharted, FIFA21);
// Once you open the website make sure to refresh it again;
alert ("Welcome to My Website");
document.write('<h3 id = "middle">'+ "We want to know what is your favorite game of all time, we are making a poll please answer the question :) "+'</h3>');

var favGame = prompt("What is your favorite game ?");
if (favGame == "rdr2" || favGame=="Red Dead Redemption 2"){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" width = "200px" class = "center" >');
}
else if (favGame == "CODMW" || favGame == "Call of Duty Modern Warfare"){
  document.write('<h3 id = "middle">'+ "Your favorite game is " + '</h3>');
  document.write('<img src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg" width = "200px" class = "center">');
}
else if(favGame == "CODBO" || favGame == "Call of Duty: Black Ops: Cold War" || favGame == "Warzone"){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Black_Ops_Cold_War.jpeg/220px-Black_Ops_Cold_War.jpeg" width = "200px" class = "center">');
}
else if (favGame == "FIFA21"|| favGame == "fifa21" || favGame == "EA SPORTS FIFA 21"){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://images-na.ssl-images-amazon.com/images/I/81mBk8%2BsxrL._AC_SX385_.jpg"width = "200px" class = "center">');
}else if (favGame == "Last of Us Remastered"|| favGame == "LoUR" || favGame == "Last of Us"){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/Uf86AuvSNRplUW1tpSsYJqQX.png"width = "200px" class = "center">');
}else if (favGame == "Uncharted 4 "|| favGame == "U4" || favGame == "Uncharted"){
  document.write('<h3 id = "middle">'+ "Your favorite game is "+ '</h3>');
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg"width = "200px" class = "center">');
}
else{
  document.write("Please enter a correct game name :)");
}
