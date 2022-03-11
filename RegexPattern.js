//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

class UserValidation {
    //Function To Validate Given Strings Sequences Using Regex Pattern(UC1)
    static checkStringSequences() {
        console.log("\nValidating Sequences");
        try {
            //Get input from user
            let inputStringArr = ["111", "1aaa", "aa11", "bcc", "1a1aab", "1abb23a"];
            //Regex pattern for sequences
            let sequencePattern = new RegExp('^[0-9]*[a-zA-Z]{3,}[a-z0-9A-Z]*$');
            //Testing string sequences with pattern using iterate over the array of strings
            UserValidation.iterateOverLoop(inputStringArr, sequencePattern)
        } catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }

    //Function To Validate Given Pincodes Using Regex Pattern
    static checkPincodes() {
        console.log("\nValidating Pincode's");
        try {
            let pincodeArr = ["784 561", "9456123", "abc124", "123456", "A456123", "B78456", "400701"];
            //Regex pattern for pincode not allowing spaces
            let pincodePattern = new RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
            //Testing pincode with pattern using iterate over the array of pincodes
            UserValidation.iterateOverLoop(pincodeArr, pincodePattern)
        } catch (e) {
            //catch the error and print it
            console.error(e);
        }
    }

    //Function To Iterate Over An Given Array Of Strings And Check If Its Match The Patter(UC1)
    static iterateOverLoop(inputArr, pattern) {
        for (let input of inputArr) {
            let res = pattern.test(input);
            if (res)
                console.log(`${input}\tis Valid`);
            else
                console.log(`${input}\tis Invalid`);
        }
    }
}

//Function To Call Pattern Class Methods To Check It Its Valid Or InValid
function checkPatterns() {
    console.log("Welcome To The Regex Pattern Program")
    while (true) {
        console.log("1: Validating Strings Sequences \n2: Validating Pincodes \n3: Exit");
        let choice = parseInt(prompt("Enter a choice from above: "));
        switch (choice) {
            case 1:
                UserValidation.checkStringSequences();
                break;
            case 2:
                UserValidation.checkPincodes();
                break;
            case 3:
                process.exit(1);
            default:
                console.log("Wrong Choice")
                continue;
        }
    }
}
checkPatterns();