import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  setGamesLogic,
  maxCorrectAnswerCount,
} from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const separator = '..';

const generateProgression = () => {
  const progressionStart = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(2, 7);
  const progression = [];
  let currentNumber = progressionStart;

  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(currentNumber);
    currentNumber += progressionStep;
  }

  return progression;
};

const hideProgressionElement = (progression, randomNumber) => {
  const progressionCopy = [...progression];
  progressionCopy[randomNumber] = separator;
  return progressionCopy;
};

const getQuestion = (progression) => {
  const progressionToString = progression.join(' ');
  return progressionToString;
};

const getPairs = () => {
  const pairsCollection = [];

  for (let index = 0; index < maxCorrectAnswerCount; index += 1) {
    const progression = generateProgression();
    const randomNumber = getRandomNumber(1, progression.length - 1);
    const progressionWithHideElement = hideProgressionElement(progression, randomNumber);
    const answer = String(progression[randomNumber]);
    const question = getQuestion(progressionWithHideElement);
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
