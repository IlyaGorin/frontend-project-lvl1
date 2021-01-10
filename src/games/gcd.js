import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const questionText = 'Find the greatest common divisor of given numbers.';
const getQuestion = (number1, number2) => `Question: ${number1} ${number2}`;
const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return getGCD(number2, number1 % number2);
};

const getPairsColl = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const question = getQuestion(randomNumber1, randomNumber2);
    const trueAnswer = getGCD(randomNumber1, randomNumber2);
    const pair = cons(question, trueAnswer);
    pairs.push(pair);
  }

  return pairs;
};

const startGame = () => {
  const pairsColl = getPairsColl();
  setGamesLogic(questionText, pairsColl);
};

export default startGame;
