var printResults = function(name, birthDate, color, meal, email){
  jQuery("#output").empty();
  jQuery("#output").append("<h2>Results:</h2>");
  jQuery("#output").append("<p>Name: " + name + "</p>")
  jQuery("#output").append("<p>Birth Day: " + birthDate + "</p>")
  jQuery("#output").append("<p>Color: this whole section</p>")
  jQuery("#output").append("<p>Meal: " + meal + "</p>")
  jQuery("#output").append("<p>Email: " + email + "</p>")
  document.getElementById("output").style.color = color;
};

var emailConvert = function(email){
  if(email === "yes"){
    return "Signed Up";
  } else if (email === "no"){
    return "Not Signed Up";
  } else {
    return "Something Broke!!!";
  };
};


jQuery(document).ready(function(){
  jQuery("#survey").submit(function(event){
    event.preventDefault();
    var name = jQuery("input#name").val();
    var birthDate = jQuery("input#birthDate").val();
    var color = jQuery("input#color").val();
    var meal = jQuery("#meal").val();
    var email = jQuery("input:radio[name=email]:checked").val();

    email = emailConvert(email);
    printResults(name, birthDate, color, meal, email);
  });
});