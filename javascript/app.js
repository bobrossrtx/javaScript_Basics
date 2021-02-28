{
    // === VAR examples === //
    var someText = "This is text";
    let someMoreText = "This is also text";
    const andSomeMoreText = "And this is text";

    var doubleQuoteString = "Double quote text ${someMoreText}";
    var singleQuoteString = 'Single quote text ${someMoreText}';
    var backTicString = `Back-tic text: ${someMoreText}`; //able to take a string or number

    var snake_case = "hisssss";

    var firstName = "Sean";
    var lastName = "Schnarr";

    // === STRING === //
    let firstString = "hello";
    const secondString = "world";
    const RegEx = "\"world\"";
    firstString = "goodbye";
    const bothStrings = `${firstString} ${secondString}`;
    
    // console.log(bothStrings);

    // === NUMBER === //
    const newScore = 32;
    let highScore = 47;

    highScore++ // add 1 to the highScore
    highScore += 2; // adds 2 to the high score
    highScore -= 3; // remove 3 from the high score.
    ++highScore; // add 1 to the original high schore
    highScore -= -1 // add 1 to the high score.
    highScore =+ false // remove 1 to high score. // BUT THIS IS BAD

    if (newScore > highScore) {
        console.log("We have a new high score");
        highScore = newScore;
    } else {
        console.log("If you're not first; You're last, Ricky Bobby");
    };
    
    // === BOOLEAN === // 
    var boolType1 = true || false;      // true || false
    var boolType2 = 1 || 0;             // true || false
    var boolType3 = "1" || "0";         // true || false
    var alwaysFalsey = undefined;       // false
    var alsoFalsey = null;              // false
    var moreFalsey = NaN;               // false
    // type checking ===
    // value checking ==

    //yes no, true false, a d, so on.
    // const bool = 1;
    // 1 or true or "1" = kinda true
    // 0 or false or NaN or undefined or null = kinda false
    // if (null) {
    //     console.log("True");
    // } else {
    //     console.log("False");
    // };

    // === ARRAY === //
    var arr = ["hello", " ", "world"];
    var arrTwo = ["hello", "", "earth", 2];
    //         [ 0, 1, 2, 3, 4, ...];
    arrTwo[1] = " ";
    arrTwo[2] = arr[2];

    console.log(arrTwo); // output = ["hello", " ", "world"]
    console.log(...arrTwo) // output = hello world
    console.table(arrTwo); // output is SQL style
    console.log(arrTwo.join(" ")) // output is csv = hello, ,world
    console.log(arrTwo.length.toString()); // output = 4;

    // === OBJECT / JSON === //
    const playerOne = {
        name: "Player One",
        hp: 12,
        level: 2,
        armor: 1,

        jump: function(input) {
            // this hero jumps
        }
    };

    const playerTwo = {
        name: "Player Two",
        hp: 10,
        level: 1,
        
        jump: function(input) {
            // this hero jumps
        }
    };

    const enemy = {
        hp: 3,
        attack: function(player) {
            // STEP 1: make a random number
            let damage = Math.floor(Math.random() * 7) + 1;

            // OPTION: check for armor
            if (player.hasOwnProperty("armor")) {
                // remove armors worth of damage.
                damage - player.armor;

                console.log(`${player.name} was protected by their armor!`);

                // NOT LESS THAN 1 damage damage can be done.
                if (damage < 1) { damage = 1 };
            };

            // STEP 2: Log the players name and damage done.
            console.log(`Enemy attacks ${player.name} for ${damage} damage.`);
            
            // LAST STEP: remove the hp from that player.
            player.hp -= damage;
        }
    };

    // What are the player hps?
    console.log(`
    ${playerOne.name} hp: ${playerOne.hp}.
    ${playerTwo.name} hp: ${playerTwo.hp}.
    `);

    // Enemy Attack!
    enemy.attack(playerOne);
    enemy.attack(playerTwo);
    enemy.attack(playerTwo);

    // Now what are the player hps?
    console.log(`
    ${playerOne.name} hp: ${playerOne.hp}.
    ${playerTwo.name} hp: ${playerTwo.hp}.
    `);


    // === FOR, DO & WHILE - LOOPS === //
    

    // === FUNCTIONS 5 TYPES TODAY === //

}