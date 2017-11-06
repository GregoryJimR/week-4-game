var goalNumber;
var crystalVal = [];
var counter = 0;
var wins = 0;
var losses = 0;


$('#begin').on('click', function() {
    crystalVal = [];
    for (var i = 0; i < 4; i++) {
        var ranNum = Math.floor(Math.random() * 11) + 1;
        crystalVal.push(ranNum);
        console.log(crystalVal);
        counter = 0;
    }
    goalNumber = (Math.floor(Math.random() * 101) + 19);
    console.log("goal: " + goalNumber);
    $("#guesses").text("Your Number: " + counter);
    $("#goal").text("Goal Number: " + goalNumber);
    $('#begin').text("Good Luck!");
});

$(".crystal").on("click", function() {
    var crystalGrab = $(this).val();
    switch (crystalGrab) {
        case "0":
            counterAdd = crystalVal[0]
            break;
        case "1":
            counterAdd = crystalVal[1]
            break;
        case "2":
            counterAdd = crystalVal[2]
            break;
        case "3":
            counterAdd = crystalVal[3]
        default:
            console.log("issue with switch identifying button value");
    }
    counter += counterAdd;
    console.log("counterAdd " + crystalVal[0] + "  counter: " + counter);
    $("#guesses").text("Your Number: " + counter)
    if (goalNumber === counter) {
        $('#begin').text("YOU WIN! Click to continue playing");
        wins++;
        $('#wins').text("Total Wins: " + wins)
    }
    else if (goalNumber < counter) {
        $('#begin').text("YOU LOSE! Click to start over");
        losses++;
        $('#losses').text("Total Losses: " + losses);
    }

});

//19-120 for comp number
//crystal 1-12
