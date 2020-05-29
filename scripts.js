(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
function initMap() {
	var MyLatLng = {lat: 40.745709, lng: -73.48813}
  var map = new google.maps.Map(document.getElementById('map'), {
    center: MyLatLng ,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: MyLatLng,
    map: map,
    title: 'Hello World!'
  });
}
$(document).ready(function(){
  // your code goes here
  $(function () {
   $('#item1').tooltip();
 });
  var $root = $('html, body');
        $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
        });
        
        $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#button').on('click', function() {
  // now we're going to work in here
  var comment = $('.message-box').val();
  if (comment == "") {
  	$(".message-box").css("border", "2px solid red");
  	}else{
   $('#visible-comment').html(comment);
     $('.message-box').hide();
   };

  return false;
});
  });
        $(".message-box").on("keyup", function() {        

        // in here is where the rest of our code for this lesson will go  
        var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
        $("#char-count").html(charCount); //here we show a running character count to the user
        if(charCount > 50) {
      $("#char-count").css("color", "red");
} else {
       // need it to be black
       $("#char-count").css("color", "black");
};
});
for(var i = 0; i < works.length; ++i ) {
 $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
			<a href='#' class='work-img'>\
  <img class='img-responsive' src='" + works[i].pic + "'>\
  <span class='info'><p class='proj-title'>Title:</p> [Coming Soon] </span>\
	</a>\
    </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};
$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});
});
        });
        return false;
        });
        
        $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#button').on('click', function() {
  // now we're going to work in here
  var comment = $('.message-box').val();
  if (comment == "") {
  	$(".message-box").css("border", "2px solid red");
  	}else{
   $('#visible-comment').html(comment);
     $('.message-box').hide();
   };

  return false;
});
  });
        $(".message-box").on("keyup", function() {        

        // in here is where the rest of our code for this lesson will go  
        var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
        $("#char-count").html(charCount); //here we show a running character count to the user
        if(charCount > 50) {
      $("#char-count").css("color", "red");
} else {
       // need it to be black
       $("#char-count").css("color", "black");
};
});
for(var i = 0; i < works.length; ++i ) {
 $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
			<a href='#' class='work-img'>\
  <img class='img-responsive' src='" + works[i].pic + "'>\
  <span class='info'><p class='proj-title'>Title:</p> [Coming Soon] </span>\
	</a>\
    </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};
$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});
});here
  $(function () {
   $('#item1').tooltip();
 });
  var $root = $('html, body');
        $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
        });
        
        $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#button').on('click', function() {
  // now we're going to work in here
  var comment = $('.message-box').val();
  if (comment == "") {
  	$(".message-box").css("border", "2px solid red");
  	}else{
   $('#visible-comment').html(comment);
     $('.message-box').hide();
   };

  return false;
});
  });
        $(".message-box").on("keyup", function() {        

        // in here is where the rest of our code for this lesson will go  
        var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
        $("#char-count").html(charCount); //here we show a running character count to the user
        if(charCount > 50) {
      $("#char-count").css("color", "red");
} else {
       // need it to be black
       $("#char-count").css("color", "black");
};
});
for(var i = 0; i < works.length; ++i ) {
 $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
       <img class='img-responsive' src='" + works[i] + "'>\
    </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};
});
  if (comment == "") {
  	$(".message-box").css("border", "2px solid red");
  	}else{
   $('#visible-comment').html(comment);
     $('.message-box').hide();
   };

  return false;
});
  });
        $(".message-box").on("keyup", function() {        

        // in here is where the rest of our code for this lesson will go  
        var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
        $("#char-count").html(charCount); //here we show a running character count to the user
        if(charCount > 50) {
      $("#char-count").css("color", "red");
} else {
       // need it to be black
       $("#char-count").css("color", "black");
};
});
});
   $('#visible-comment').html(comment);
     $('.message-box').hide();

  return false;
});
  });
});