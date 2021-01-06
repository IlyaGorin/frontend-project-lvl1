import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const question = 'What number is missing in the progression?';
const separator = '..';

const generateProgression = () => {
  const progressionStart = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(2, 7);
  const progressionArr = [];
  let startNumber = progressionStart;

  for (let index = 0; index < progressionLength; index += 1) {
    progressionArr.push(startNumber);
    startNumber += progressionStep;
  }

  return progressionArr;
};

const hideProgressionElement = (arr) => {
  const faq = {};
  const newArr = arr;
  const randomElement = getRandomNumber(1, arr.length - 1);
  const hideNumber = newArr[randomElement];
  newArr[randomElement] = separator;
  faq.question = `Question: ${newArr.join(' ')}`;
  faq.answer = String(hideNumber);
  return faq;
};

const setPairsFaq = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const progression = generateProgression();
    const pairsFaq = hideProgressionElement(progression);
    const pair = cons(pairsFaq.question, pairsFaq.answer);
    pairs.push(pair);
  }

  return pairs;
};

const startGame = () => {
  const pairsColl = setPairsFaq();
  setGamesLogic(question, pairsColl);
};

export default startGame;
