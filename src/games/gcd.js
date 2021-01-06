import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';
const setQuestion = (number1, number2) => `Question: ${number1} ${number2}`;
const getTrueAnswer = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return getTrueAnswer(number2, number1 % number2);
};

const setPairsFaq = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const pair = cons(
      setQuestion(randomNumber1, randomNumber2),
      String(getTrueAnswer(randomNumber1, randomNumber2)),
    );
    pairs.push(pair);
  }

  return pairs;
};

const startGame = () => {
  const pairsColl = setPairsFaq();
  setGamesLogic(question, pairsColl);
};

export default startGame;
