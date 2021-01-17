import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  maxCorrectAnswersCount,
  playGame,
} from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRounds = () => {
  const rounds = [];

  for (let index = 0; index < maxCorrectAnswersCount; index += 1) {
    const question = getRandomNumber();
    const answer = isEven(question) ? 'yes' : 'no';
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
