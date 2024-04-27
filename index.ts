import inquirer from "inquirer";
const user: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your paragraph to count the word"
    }
])
let userAnswer = user.sentence.trim().split(" ");//trim k method string me say start or end k whitespace khtam krta hain or split k method break krata hain jo hum os ko bata hain k kaha say break krna hain or eik array return krta hain.  
// console.log(userAnswer);


for(let i = 0; i < userAnswer.length; i++){
    if (userAnswer[i] === "") {
        userAnswer.splice(i, 1);
        // console.log("correct",);
        i--;
    }
}


console.log(`Your total words in a paragraph is ${userAnswer.length}`);



