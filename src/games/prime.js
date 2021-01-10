import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
  isPrime,
} from '../index.js';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = (number) => `Question: ${number}`;

const getPairsColl = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber = getRandomNumber(1, 1000);
    const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
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
