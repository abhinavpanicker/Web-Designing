console.log('Hello World');

const btn = document.querySelector(".btn-open");
const form =document.querySelector("form");
btn.addEventListener("click", function(){
    console.log("CLICK");
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        btn.textContent ="Close";
    }else{
        form.classList.add("hidden");
        btn.textContent="Share a fact";
    }    
});
 
// let hi = 2;
// let hello = 19;
// let bye = hi + hello;
// console.log(bye)
// console.log(hello+1)

// console.log(parseInt("24.533ccc"));

function ExamDate(Date){
const examdate = 30;
const dateremaining = examdate - Date;
return dateremaining;
}
const date1 = ExamDate(18);
console.log(date1);

















// const btn = document.querySelector(".btn-open");
// const form =document.querySelector(".form");

// btn.addEventListener("click", function() {
//     if(form.classList.contains("hidden")) {
//         form.classList.remove("hidden");
//         btn.textContent= "Close";
//     } else{
//     form.classList.add("hidden")
//     btn.textContent="Share a fact";
//     }
// });


/*
function calcFactAge(year){
   const currentYear =2024;
   const age = currentYear - year;
   console.log(age);
   return age;
}

const age1 = calcFactAge(2015)
console.log(age1);


let votesIntersting =20;
let votesMindblowing =7;

console.log(votesIntersting===votesMindblowing);

if(votesIntersting===votesMindblowing){
    alert("The interesting and Mindblowing is same");
}else if(votesIntersting > votesMindblowing){
    console.log("Intersting fact");
}else{
    console.log("mindblowing fact")
}


let votesFalse = 9;
const upvotes = votesInteresting + votesMindblowing;
const message = 
*/

// const fact = ['Delhi is the captial of India', 2015, true];
// console.log(fact);
// console.log(fact[0]);

// const [text, createdIn, isCorrect] = fact;
// console.log(createdIn);
// const newFact = [...fact, 'society'];
// console.log(newFact);