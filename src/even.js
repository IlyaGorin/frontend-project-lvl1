import readlineSync from 'readline-sync';

const getTrueAnswer = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';

  return result;
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  return randomNumber;
};

const startGame = () => {
  const maxCorrectAnsweCount = 3;
  let answerCount = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (answerCount < maxCorrectAnsweCount) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = getTrueAnswer(randomNumber);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again,${userName}!`,
      );
      break;
    }
  }

  if (answerCount === maxCorrectAnsweCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
