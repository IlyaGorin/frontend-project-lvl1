import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
  isEven,
} from '../index.js';

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = (number) => `Question: ${number}`;

const getPairsColl = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber = getRandomNumber();
    const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const question = getQuestion(randomNumber);
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
