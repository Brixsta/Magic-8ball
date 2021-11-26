const eightBall = document.querySelector('.eight-ball');
const squish = new Audio("./squish.mp3");
const theme = new Audio("./theme.mp3");
theme.loop = true;

const EightBallGame = {
    active: false,
}

eightBall.addEventListener('click', ()=>{
    if(EightBallGame.active === false) {
        squish.play();
        theme.play();
        displayWisdom();
        EightBallGame.active = true;
    } else {
        removeWisdom();
        EightBallGame.active = false;
    }  
});

const displayWisdom = () => {
    const portHole = document.querySelector('.port-hole');
    const portHoleText = document.querySelector('.port-hole-text');
    const eightBall = document.querySelector('.eight-ball');
    
    eightBall.setAttribute('disabled', true);
    eightBall.classList.add('shake');
    portHole.classList.add('active');
    portHole.classList.add('fadeIn');
    portHoleText.textContent = generateRandomWisdom();

    setTimeout(()=>{
        eightBall.removeAttribute('disabled');
        portHole.classList.remove('fadeIn');
        eightBall.classList.remove('shake');
    },1000);
}

const removeWisdom = () => {    
    const portHole = document.querySelector('.port-hole');
    const portHoleText = document.querySelector('.port-hole-text');

    eightBall.setAttribute('disabled', true);

    portHole.classList.add('fadeIn');
    portHole.classList.remove('active');
    portHoleText.textContent = "8";

    setTimeout(()=>{
        eightBall.removeAttribute('disabled');
        portHole.classList.remove('fadeIn');
    },1000)
}

const generateRandomWisdom = () => {
    const text = 
    [
        "It is certain.", "It is decidedly so.", "Without a doubt.",
        "Yes defintely.", "You may rely on it.", "As I see it, yes.",
        "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.",
        "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
        "Cannot predict now.", "Don't count on it.", "My reply is no.",
        "My sources say no.", "Outlook not so good.", "Very doubtful."
    ];

    const randomIndex = Math.floor(Math.random() * text.length);

    return text[randomIndex];
}