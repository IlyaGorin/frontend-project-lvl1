import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxCorrectAnswerCount = 3;

export const setGamesLogic = (question, pairs) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);

  let answerCount = 0;
  while (answerCount < maxCorrectAnswerCount) {
    console.log(`Qustion: ${car(pairs[answerCount])}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = String(cdr(pairs[answerCount]));
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${userName}!`,
      );
      break;
    }
  }

  if (answerCount === maxCorrectAnswerCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};
