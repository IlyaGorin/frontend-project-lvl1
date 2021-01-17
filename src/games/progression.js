import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  maxCorrectAnswersCount,
  playGame,
} from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const separator = '..';

const generateProgression = (start, length, step) => {
  const progression = [];
  let currentNumber = start;

  for (let index = 0; index < length; index += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }

  return progression;
};

const hideProgressionElement = (progression, number) => {
  const progressionCopy = [...progression];
  progressionCopy[number] = separator;
  return progressionCopy;
};

const getQuestion = (progression) => {
  const progressionToString = progression.join(' ');
  return progressionToString;
};

const generateRounds = () => {
  const rounds = [];

  for (let index = 0; index < maxCorrectAnswersCount; index += 1) {
    const progressionStart = getRandomNumber(1, 10);
    const progressionLength = getRandomNumber(5, 15);
    const progressionStep = getRandomNumber(2, 7);
    const progression = generateProgression(progressionStart, progressionLength, progressionStep);
    const randomNumber = getRandomNumber(1, progression.length - 1);
    const progressionWithHideElement = hideProgressionElement(progression, randomNumber);
    const answer = String(progression[randomNumber]);
    const question = getQuestion(progressionWithHideElement);
    const round = cons(question, answer);
    rounds.push(round);
  }

  return rounds;
};

const startGame = () => {
  const gameRounds = generateRounds();
  playGame(gameDescription, gameRounds);
};

export default startGame;
