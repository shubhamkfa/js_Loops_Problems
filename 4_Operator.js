// let num = prompt("Enter a Number:");
// if (num % 5 === 0){
//     console.log(num,"Number is Multiple of a 5");
// } else{
//     console.log(num,"Number is not a Multiple of 5")
// }


// alert (" Welcome Bruh !")


//by using propmt
/*


let num = prompt("Calculate the grade by entering your percentage here (0-100):");
if(num>=90 && num<=100){
    console.log("Congratulation! You got an Grade:A");
}else if(num>=70 && num<=89){
    console.log("Congratulation! You got an Grade:B");
}else if(num>=60 && num<=69){
    console.log("Congratulation! You got an Grade:C");
}else if(num>=50&& num <=59){
    console.log("Congratulation! You got an Grade:D");
}else {
    console.log("Sorry You have Faile! You got an Grade:F");
};
    

*/


let num=15;
let grade;

if(num>=90 && num<=100){
    grade="A";
}else if(num>=70 && num<=89){
    grade="B";
}else if(num>=60 && num<=69){
    grade="C";
}else if(num>=50&& num <=59){
    grade="D";
}else {
    grade="F";
};

console.log("According to Score your grade is :",grade);