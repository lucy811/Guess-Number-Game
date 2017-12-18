
var grades, roundGrade, activePerson, numberGuessing, winningGrade;

init();

//Generate a random winningScore from 1 to 200
winningGrade = Math.floor(Math.random() * 200) + 1;

document.getElementById('try').addEventListener('click', function() {
    if(numberGuessing) {
        // 1. Random number
        var number1 = Math.floor(Math.random() * 10) + 1;
        var number2 = Math.floor(Math.random() * 10) + 1;

        //2. Display the result
        document.getElementById('number-1').style.display = 'block';
        document.getElementById('number-2').style.display = 'block';

        //3. Update UI
        document.getElementById('number-1').textContent = number1;
        document.getElementById('number-2').textContent = number2;

        //4. Update the round grade If the first number was not a 2 and the second number was not a 6
        if (number1 !== 2 && number2 !== 6) {
            //Add grade
            roundGrade += number1 + number2;
            document.querySelector('#current-' + activePerson).textContent = roundGrade;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});


document.getElementById('hold').addEventListener('click', function() {
    if (numberGuessing) {
        //1.Add current grade to Global grade
        grades[activePerson] += roundGrade;

        //2.Update the UI
        document.querySelector('#grade-' + activePerson).textContent = grades[activePerson];
    
        //3.Check if player won the game
        if (grades[activePerson] >= winningGrade) {
            document.querySelector('#name-' + activePerson).textContent = 'Winner!';
            document.getElementById('number-1').style.display = 'none';
            document.getElementById('number-2').style.display = 'none';
            document.querySelector('.person-' + activePerson + '-panel').classList.add('winner');
            document.querySelector('.person-' + activePerson + '-panel').classList.remove('active');
            document.getElementById('final-1').textContent = winningGrade;
            document.getElementById('winner-img').style.display = 'block';
            numberGuessing = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {

    if(activePerson === 0){
        activePerson = 1; 
    }else{
        activePerson = 0;
    }
    
    roundGrade = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.person-0-panel').classList.toggle('active');
    document.querySelector('.person-1-panel').classList.toggle('active');

    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'none';
}

document.getElementById('new').addEventListener('click', init);

function init() {
    grades = [0, 0];
    activePerson = 0;
    roundGrade = 0;
    numberGuessing = true;

    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'none';

    document.getElementById('grade-0').textContent = '0';
    document.getElementById('grade-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Michael';
    document.getElementById('name-1').textContent = 'Jason';
    document.querySelector('.person-0-panel').classList.remove('winner');
    document.querySelector('.person-1-panel').classList.remove('winner');
    document.querySelector('.person-0-panel').classList.remove('active');
    document.querySelector('.person-1-panel').classList.remove('active');
    document.querySelector('.person-0-panel').classList.add('active');
    document.getElementById('winner-img').style.display = 'none';
}