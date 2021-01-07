import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setQuestion = (number) => `Question: ${number}`;

const getTrueAnswer = (number) => {
  let isPrime = 'yes';

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      isPrime = 'no';
      break;
    }
  }

  return isPrime;
};

const setPairsFaq = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber = getRandomNumber(1, 1000);
    const pair = cons(setQuestion(randomNumber), getTrueAnswer(randomNumber));
    pairs.push(pair);
  }

  return pairs;
};

const startGame = () => {
  const pairsColl = setPairsFaq();
  setGamesLogic(question, pairsColl);
};

export default startGame;
