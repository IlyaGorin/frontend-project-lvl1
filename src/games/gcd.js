import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  setGamesLogic,
  maxCorrectAnswerCount,
} from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getQuestion = (number1, number2) => `${number1} ${number2}`;
const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return getGCD(number2, number1 % number2);
};

const getPairs = () => {
  const pairsCollection = [];

  for (let index = 0; index < maxCorrectAnswerCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const question = getQuestion(randomNumber1, randomNumber2);
    const answer = String(getGCD(randomNumber1, randomNumber2));
    const pair = cons(question, answer);
    pairsCollection.push(pair);
  }

  return pairsCollection;
};

const startGame = () => {
  const pairs = getPairs();
  setGamesLogic(gameDescription, pairs);
};

export default startGame;
