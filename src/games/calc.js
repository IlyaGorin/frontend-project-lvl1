import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const operators = ['+', '-', '*'];
const question = 'What is the result of the expression?';
const setQuestion = (number1, number2, operator) => `Question: ${number1} ${operator} ${number2}`;

const getTrueAnswer = (number1, number2, operator) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = String(number1 + number2);
      break;
    case '-':
      result = String(number1 - number2);
      break;
    case '*':
      result = String(number1 * number2);
      break;
    default:
      break;
  }

  return result;
};

const setPairsFaq = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = getRandomNumber(0, operators.length - 1);
    const pair = cons(
      setQuestion(randomNumber1, randomNumber2, operators[randomOperator]),
      getTrueAnswer(randomNumber1, randomNumber2, operators[randomOperator]),
    );
    pairs.push(pair);
  }

  return pairs;
};

const startGame = () => {
  const pairsColl = setPairsFaq();
  setGamesLogic(question, pairsColl);
};

export default startGame;
