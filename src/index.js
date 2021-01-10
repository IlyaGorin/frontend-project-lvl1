import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxCorrectAnsweCount = 3;

export const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

export const isEven = (number) => number % 2 === 0;

export const isPrime = (number) => {
  let result = true;

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      result = false;
    }
  }

  return result;
};

export const setGamesLogic = (question, pairs) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);

  let answerCount = 0;
  while (answerCount < maxCorrectAnsweCount) {
    console.log(car(pairs[answerCount]));
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

  if (answerCount === maxCorrectAnsweCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};
