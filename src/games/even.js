import { cons } from '@hexlet/pairs';
import { setGamesLogic, getRandomNumber, maxCorrectAnsweCount } from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTrueAnswer = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';

  return result;
};

const setQuestion = (number) => `Question: ${number}`;

const setPairsFaq = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber = getRandomNumber();
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
