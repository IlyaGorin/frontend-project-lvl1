import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import {
  setGamesLogic,
  maxCorrectAnswerCount,
} from '../index.js';

const operators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';
const getQuestion = (number1, number2, operator) => `${number1} ${operator} ${number2}`;

const getMathResult = (number1, number2, operator) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }

  return result;
};

const getPairs = () => {
  const pairsCollection = [];

  for (let index = 0; index < maxCorrectAnswerCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = getRandomNumber(0, operators.length - 1);
    const question = getQuestion(randomNumber1, randomNumber2, operators[randomOperator]);
    const answer = String(getMathResult(randomNumber1, randomNumber2, operators[randomOperator]));
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
