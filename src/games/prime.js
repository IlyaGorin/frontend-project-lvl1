import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  maxCorrectAnswersCount,
  playGame,
} from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let index = 2; index < Math.sqrt(number); index += 1) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
};

const generateRounds = () => {
  const rounds = [];

  for (let index = 0; index < maxCorrectAnswersCount; index += 1) {
    const randomNumber = getRandomNumber(1, 1000);
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    const question = randomNumber;
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
