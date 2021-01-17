import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxCorrectAnswersCount = 3;

export const playGame = (gameDescription, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  let answersCount = 0;
  while (answersCount < maxCorrectAnswersCount) {
    const question = car(rounds[answersCount]);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = cdr(rounds[answersCount]);

    if (userAnswer !== trueAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
    answersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
