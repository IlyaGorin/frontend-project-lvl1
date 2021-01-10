import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const questionText = 'What number is missing in the progression?';
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

const hideProgressionElement = (arr, randomNumber) => {
  const newArr = [...arr];
  newArr[randomNumber] = separator;
  return newArr;
};

const getQuestion = (arr) => {
  const str = hideProgressionElement(arr).join(' ');
  return `Question: ${str}`;
};

const getPairsColl = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const progression = generateProgression();
    const randomNumber = getRandomNumber(1, progression.length - 1);
    const arrWidthHideElement = hideProgressionElement(progression, randomNumber);
    const trueAnswer = progression[randomNumber];
    const question = getQuestion(arrWidthHideElement);
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
