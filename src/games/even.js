import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  setGamesLogic,
  maxCorrectAnswerCount,
} from '../index.js';

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (number) => number % 2 === 0;

const getPairs = () => {
  const pairsCollection = [];

  for (let index = 0; index < maxCorrectAnswerCount; index += 1) {
    const randomNumber = getRandomNumber();
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    const question = randomNumber;
    const pair = cons(question, answer);
    pairsCollection.push(pair);
  }

  return pairsCollection;
};

const startGame = () => {
  const pairs = getPairs();
  setGamesLogic(questionText, pairs);
};

export default startGame;
