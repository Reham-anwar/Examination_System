var index = 0;
var score = 0;
var checkArr = [];
var colorArr = [];
var count = 0;
var questions = quiz.sort(function() {
    return 0.5 - Math.random();
});


function start() {
    window.location.replace("questions.html");
}

function getCookie(cookieName) {
    var getCook = document.cookie; //get cookie
    var res = "not found";
    var arr1 = getCook.split("; ");
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split("=");
        if (arr2[0] === cookieName) {
            res = arr2[1];
        }
    }
    return res;
}
var getname = getCookie("fname") + " " + getCookie("lname");
console.log(getname);
////////////////////timer//////////////
$(function() {
    var totalTimer = 100;
    var min = 0;
    var sec = 0;
    var counter = 0;
    var timer = setInterval(function() {
        counter++;
        min = Math.floor((totalTimer - counter) / 60); ////////calculate min/////////
        sec = totalTimer - (min * 60) - counter;

        $(".timerBox span").text(min + ":" + sec);
        if (counter == totalTimer) {
            timeOut();
            clearInterval(timer);
        }

        // console.log("min : " + min);
        // console.log("sec : " + sec);

    }, 1000);

    printQuestion(index);
});

////////print questions///////////////
function printQuestion(i) {
    //console.log(questions[0]);
    $(".questionNum span").text(i + 1);
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
    if (i != 0) {
        $("#prev").css('display', 'block');
    }
}

/////////////check answer ///////////////////////
function checkAns(option) {
    var optionClicked = $(option).data("opt");
    console.log(option);
    $(".optionBox span").removeClass();
    $(option).addClass("checked");
    colorArr[index] = optionClicked;
    if (optionClicked == questions[index].answer) {
        checkArr[index] = questions[index].answer;

    } else {
        checkArr[index] = 0;
    }
    // console.log(score);
}

/////////////next button///////////////////////
function next() {
    // console.log("n");
    $(".optionBox span").removeClass();
    if (index < (questions.length) - 1) {
        index++;
        for (var z = 0; z < colorArr.length; z++) {
            if (index == z) {
                console.log("ind" + index);
                var value = colorArr[z] - 1;
                var option = $(".optionBox span")[value];
                console.log(option);
                $(option).addClass("checked");
            }
        }
        printQuestion(index);
    }

}

//////////////prev button/////////////////////
function prev() {
    $(".optionBox span").removeClass();
    if (index > 0) {
        index--;
        for (var z = 0; z < colorArr.length; z++) {
            if (index == z) {
                console.log("ind" + index);
                var value = colorArr[z] - 1;
                var option = $(".optionBox span")[value];
                console.log(option);
                $(option).addClass("checked");
            }
        }

        printQuestion(index);
    }

}

///////////////////mark button////////////////
function mark() {
    $(".content-right").show();
    $("#span" + index).show();
}

///////////////////print mark//////////////////

function showQuestion(x) {
    printQuestion(x);
}
/////////////////////result screen////////////
function showResult() {
    $("#questionScreen").hide();
    $(".content-right").hide();
    for (var y = 0; y < checkArr.length; y++) {
        console.log(checkArr[y]);
        if (checkArr[y] != 0) {
            count++;
        }
    }
    for (var l = 0; l < colorArr.length; l++) {
        console.log("color" + colorArr[l]);
    }
    score = count;
    $("#scoreScreen").show();
}
////////////////////////check function///////////////
function check() {
    showResult();
    if (score > 4) {
        $(".resultBox h1").text("Congratulation");
        $(".resultBox h2").text(getname);
        $("#score").text("Score : " + score);
        $("#failImg").hide();
        $("#timeOut").hide();
        $(".startBtn").hide();
    } else {
        $(".resultBox h1").text("Sorry You Have Failed");
        $(".resultBox h2").text(getname);
        $("#score").text("Score : " + score);
        $("#successImg").hide();
        $("#timeOut").hide();
        $("#cong").hide();
    }
}
////////////////////////time out/////////////////////////////
function timeOut() {
    showResult();
    if (score > 5) {
        $(".resultBox h1").text("Congratulation");
        $(".resultBox h2").text(getname);
        $("#score").text("Score : " + score);
        $("#failImg").hide();
        $("#timeOut").hide();
        $(".startBtn").hide();
    } else {
        $(".resultBox h1").text("Time Out You Have Failed");
        $(".resultBox h2").text(getname);
        $("#score").text("Score : " + score);
        $("#successImg").hide();
        $("#failImg").hide();
        $("#cong").hide();
    }
}