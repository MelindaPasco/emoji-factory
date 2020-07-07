window.onload = function() {

    TweenMax.fromTo("#smiley", 1.5, {opacity: 0, y: -80}, {opacity: 1, y: 0});

    $("#build").click(function() {
        // HIDE BUTTON
        $("#build").css("visibility", "hidden");

        var eyeChoice =  $("#eyeChoice").val();
        var mouthChoice = $("#mouthChoice").val();

        // EYES CHOICE
        if (eyeChoice == "sad") {
            $("#eyes").attr("src", "Sources/sad_eyes.png");
        }else if (eyeChoice == "wink") {
            $("#eyes").attr("src", "Sources/tongue_eyes.png");
        }else if (eyeChoice == "love") {
            $("#eyes").attr("src", "Sources/in-love_eyes.png");
        }else {
            $("#eyes").attr("src", "Sources/happy_eyes.png");
        }

        // MOUTH CHOICE
        if (mouthChoice == "sad") {
            $("#mouth").attr("src", "Sources/sad_mouth.png");
        }else if (mouthChoice == "open") {
            $("#mouth").attr("src", "Sources/in-love_mouth.png");
        }else if (mouthChoice == "tongue") {
            $("#mouth").attr("src", "Sources/tongue_mouth.png");
        } else {
            $("#mouth").attr("src", "Sources/happy_mouth.png");
        }


        // CLICKING BUILD
        TweenMax.to("#smiley", 2, {x:125});

        // EYES BUILD
        TweenMax.to("#noise1", 1, {opacity: 1}).delay(1.5);
        TweenMax.to("#noise1", 1, {opacity: 0}).delay(2.5);
        TweenMax.to("#smiley", 2, {x:325}).delay(3);
        TweenMax.to("#face", 2, {x:200}).delay(3);

        // MOUTH BUILD
        $("#mouth").delay(6000).queue(function (showMouth) { 
          $(this).css("visibility", "visible"); 
          showMouth(); 
        });
        TweenMax.to("#noise2", 1, {opacity: 1}).delay(4.5);
        TweenMax.to("#noise2", 1, {opacity: 0}).delay(5.5);
        TweenMax.to("#smiley", 2, {x:425}).delay(6);
        TweenMax.to("#face", 2, {x:300}).delay(6);

        // AWAY WITH YOU
        TweenMax.to("#smiley", 2, {x:660}).delay(10);
        TweenMax.to("#face", 2, {rotation:360, x:535, clearProps:"rotation"}).delay(10);

        // RESET THE THINGY
        $("#mouth").delay(6400).queue(function (swap) { 
            $(this).css("visibility", "hidden");
            $("#build").css("visibility", "visible");
            swap();
        });
        TweenMax.to("#smiley", 0.1, {opacity:0}).delay(11.5);
        TweenMax.to("#face", 0.1, {opacity:0}).delay(11.5);
        TweenMax.to("#smiley", 0.1, {x:0,y:-80}).delay(12);
        TweenMax.to("#face", 0.1, {x:0}).delay(12);
        TweenMax.to("#smiley", 1, {opacity: 1, y: 0}).delay(12.5);
        TweenMax.to("#face", 1, {opacity: 1}).delay(12.5);

        console.log("Not broken yet ! GG");
    });
    
}