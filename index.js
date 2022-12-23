const btn = document.getElementById('check')
let guess_of_number = 0;
let numbers = [];
const computer = Math.floor(Math.random()*100) + 1;
console.log(computer);

btn.addEventListener('click',()=>{
    const guess = document.getElementById('guess').value;
    
    if (isNaN(guess)) {
        alert('Please Enter Number');
    }else if(guess.length == 0){
        alert('please enter number');
    }

    const msg1 = document.getElementById('msg1')
    const msg2 = document.getElementById('msg2')
    const msg3 = document.getElementById('msg3')

    guess_of_number += 1;

    msg2.innerText = `Guess Of Number: ${guess_of_number}`
    numbers.push(guess);

    msg3.innerText = `guessed number ${numbers}`


    if (guess < computer) {
        msg1.innerText = `Your guess is too low!!!`
    } else if(guess > computer){
        msg1.innerText = `Your guess is too high!!!`
    }else{
        msg1.innerText = `Yeppi you win!!`
        msg2.innerText = `the number is ${computer}`
        msg3.innerText = `your guesses is ${guess_of_number}`
    }
   
})