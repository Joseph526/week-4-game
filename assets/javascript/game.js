$(document).ready(function () {

    // Declare global variables
    var numberToMatch = 0;
    var gemSecrets = [0, 0, 0, 0];
    var totalScore;
    var winCount = 0;
    var lossCount = 0;

    // Declare functions
    // Function to initialize the start of a round
    function startGame() {
        //Reset the user's score
        totalScore = 0;
        printResult();

        // Generate random numbers
        numberToMatch = Math.floor(Math.random() * 103) + 18;
        $("#randomNumber").text(numberToMatch);
        for (i = 0; i < gemSecrets.length; i++) {
            gemSecrets[i] = Math.floor(Math.random() * 12) + 1;
        }
    }

    // Function to update results on screen
    function printResult() {
        $("#totalScore").text(totalScore);
        $("#win").text(winCount);
        $("#loss").text(lossCount);
    }

    // Function for on.click method
    // Get random number from applicable crystal, add to totalScore
    $(".imgCrystal").click(function () {
        totalScore += gemSecrets[$(this).attr("value")];

        // Check if totalScore equals/exceeds numberToMatch
        if (totalScore === numberToMatch) {
            $("#resultMessage").text("You win!");
            winCount++;
            startGame();
        }

        else if (totalScore > numberToMatch) {
            $("#resultMessage").text("You lose!");
            lossCount++;
            startGame();
        }

        printResult();
    });

    // Call function to start game
    startGame();
});