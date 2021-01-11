import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  setGamesLogic,
  maxCorrectAnswerCount,
} from '../index.js';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = true;

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      result = false;
    }
  }

  return result;
};

const getPairs = () => {
  const pairsCollection = [];

  for (let index = 0; index < maxCorrectAnswerCount; index += 1) {
    const randomNumber = getRandomNumber(1, 1000);
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
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
