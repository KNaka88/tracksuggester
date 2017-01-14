$(document).ready(function(){

  //Back End Logic Goes Here
  var userName;
  var userEmail;
  var designPoints = 0; //add priority on CSS/Design
  var cPoints = 0; //add priority on C#
  var phpPoints = 0; //add priority on php;
  var rubyPoints = 0; //add priority on Ruby
  var javaPoints = 0; //add priority on Java
  var companySize; //add prioity based on company size;
  var speciality; //add priority based on speciality (web-dev, android, web-interactive, database)
  var maxPoint = 0; //record best track points

  var convertCompanySizeToPoints = function(companySize){
    switch (companySize){
      case "large-company":
              cPoints += 3;
              javaPoints += 2;
              phpPoints += 1;
              break;
      case "medium-company":
              phpPoints  += 3;
              javaPoints += 3;
              rubyPoints += 2;
              break;
      case "startup-company":
              rubyPoints += 3;
              javaPoints += 2;
              phpPoints += 1;
              break;
      default:
              alert("Unexpected Error has occured");
    };
  };

  var convertSpecialityToPoints = function(speciality){
    switch (speciality){
      case "web-development":
              phpPoints += 3;
              rubyPoints += 2;
              break;
      case "android":
              javaPoints += 5;
              break;
      case "web-interactive":
              rubyPoints += 3;
              phpPoints += 2;
              break;
      case "database":
              cPoints += 3;
              javaPoints += 2;
              break;
      default:
              alert("Unexpected Error has occurred");
    };
  };

  var trackSuggestion = function(){
    convertCompanySizeToPoints(companySize);
    convertSpecialityToPoints(speciality);

    //Find Highest Score
    maxPoint = designPoints;
    if(cPoints >= maxPoint)   { maxPoint = cPoints; };
    if(phpPoints >= maxPoint) { maxPoint = phpPoints; };
    if(javaPoints >= maxPoint){ maxPoint = javaPoints; };
    if(rubyPoints >= maxPoint){ maxPoint = rubyPoints; };

    //Show the track of Highest Score
    if(maxPoint === designPoints){
      $(".track-name").append("Design Track");

    };
    if(cPoints >= maxPoint){
      $(".track-name").append("C#/.NET Track");
    }
    if(maxPoint === phpPoints){
      $(".track-name").append("PHP/Drupal Track");

    };
    if(maxPoint === javaPoints){
      $(".track-name").append("Java/Android Track");
    }
    if(maxPoint === rubyPoints){
      $(".track-name").append("Ruby/Rails Track");
    }

    //For Debugging purpose
    console.log("designPoints" + designPoints);
    console.log("cPoints" + cPoints);
    console.log("phpPoints" + phpPoints);
    console.log("rubyPoints" + rubyPoints);
    console.log("javaPoints" + javaPoints);
    //
  };



  //Front Logic Goes Here
  // Title Button
  $("#title button").click(function(event){
    $("#question1").slideToggle();
    event.preventDefault();
  });

  // Question1 Ask name and email
  $("form#form1").submit(function(event){
    userName = $("input#user-name").val();
    userEmail = $("input#user-email").val();
    $("#question2").slideToggle();
    $("#title button").hide();
    event.preventDefault();
  });

  // Question2 Design Preference
  $("form#form2").submit(function(event){
    //designPoints = parseInt($("input:radio[name=design-preference]:checked").val());
    $("#question3").slideToggle();
    $("#question1 button").hide();
    event.preventDefault();
  });

  // Question3 Ask passion to Microsoft (C#)
  $("form#form3").click(function(event){
    cPoints = parseInt($("input:radio[name=c-preference]:checked").val());
    $("#question4").slideToggle();
    $("#question2 button").hide();
    event.preventDefault();
  });

  // Question4 Company Size Preference
  $("#question4 button").click(function(event){
    companySize = $("input:radio[name=company-size]:checked").val();
    $("#question5").slideToggle();
    $("#question3 button").hide();
    event.preventDefault();
  });

  // Question5 Speciality Preference
  $("#question5 button").click(function(event){
    speciality = $("input:radio[name=speciality]:checked").val();
    $("#question6").slideToggle();
    $("#question4 button").hide();
    event.preventDefault();
  });

  // Question6 Wordpress and PHP Preference
  $("#question6 button").click(function(event){
    phpPoints = parseInt($("input:radio[name=php-preference]:checked").val());
    //Show Result
    $("#result").slideToggle();
    $("#question5 button").hide();
    $("#question6 button").hide();
    trackSuggestion();
    $(".userName").text(userName);

    event.preventDefault();
  });




});
