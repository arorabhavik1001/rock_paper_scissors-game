const game = (userChoice) => {
    let personChoice, botChoice;
    personChoice = userChoice.id;
    botChoice = randomChoice()
    console.log(botChoice)
    result = judge(personChoice, botChoice);
    console.log(result);
    message = finalMessage(result)
    console.log(message)
    conveyToUser(personChoice, botChoice, message)
}

const randomChoice = () => {
    let optionsForBot = ['rock', 'paper', 'scissors']
    var randomChoice = Math.floor(Math.random() * optionsForBot.length)
    return optionsForBot[randomChoice];
}

const judge = (userChoice, botChoice) => {
    const optionBank = {
        'rock': {"rock":0.5, "paper":0, "scissors":1},
        'paper': {"rock":1, "paper":0.5, "scissors":0},
        'scissors': {"rock":0, "paper":1, "scissors":0.5}
    }
    let userScore = optionBank[userChoice][botChoice];
    let botScore = optionBank[botChoice][userChoice];
    return [userScore, botScore]
}

const finalMessage = ([userScore, botScore]) => {
    if(botScore===0){
        return "You Won, Good Friend! 🏆🏆🏆"
    }else if(userScore===0.5){
        return "It was a Draw!"
    }else if(userScore===0){
        return "Good try, but you're a STUPID LOSER 💩"
    }
}

const conveyToUser = (personChoice, botChoice, message) => {
    const images = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    const userChoiceImage = document.createElement("img")
    const div = document.getElementById("imgContainer")
    userChoiceImage.src = images[personChoice]
    if(personChoice=="rock"){
        userChoiceImage.setAttribute("width", "290px")
    }else if(personChoice=="paper"){
        userChoiceImage.setAttribute("width", "180px")
    }else if(personChoice=="scissors"){
        userChoiceImage.setAttribute("width", "200px")
    }
    div.appendChild(userChoiceImage);
    
    const result = document.createElement("h1");
    const resultText = document.createTextNode(message);
    result.appendChild(resultText)
    if(message=="You Won, Good Friend! 🏆🏆🏆"){
        result.setAttribute("style", "color: green")
    }else if(message=="It was a Draw!"){
        result.setAttribute("style", "color: rgb(175, 175, 0)")
    }else if(message=="Good try, but you're a STUPID LOSER 💩"){
        result.setAttribute("style", "color: red")
    }
    div.appendChild(result);

    const botChoiceImage = document.createElement("img")
    botChoiceImage.src = images[botChoice]
    if(botChoice=="rock"){
        botChoiceImage.setAttribute("width", "290px")
    }else if(botChoice=="paper"){
        botChoiceImage.setAttribute("width", "180px")
    }else if(botChoice=="scissors"){
        botChoiceImage.setAttribute("width", "200px")
    }
    div.appendChild(botChoiceImage);

    const resetButton = document.createElement("button")
    const buttonText = document.createTextNode("Retry")
    resetButton.setAttribute('id', 'resetbutton')
    resetButton.setAttribute('class', 'btn btn-dark')
    resetButton.appendChild(buttonText)
    resetButton.onclick = () => {location.reload()}
    const mainDiv = document.getElementById("section")
    mainDiv.appendChild(resetButton);
}