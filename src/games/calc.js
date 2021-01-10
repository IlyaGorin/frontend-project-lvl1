import { cons } from '@hexlet/pairs';
import {
  setGamesLogic,
  getRandomNumber,
  maxCorrectAnsweCount,
} from '../index.js';

const operators = ['+', '-', '*'];
const questionText = 'What is the result of the expression?';
const getQuestion = (number1, number2, operator) => `Question: ${number1} ${operator} ${number2}`;

const getMathResult = (number1, number2, operator) => {
  let result = '';

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

const getPairsColl = () => {
  const pairs = [];

  for (let index = 0; index < maxCorrectAnsweCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = getRandomNumber(0, operators.length - 1);
    const question = getQuestion(randomNumber1, randomNumber2, operators[randomOperator]);
    const trueAnswer = getMathResult(randomNumber1, randomNumber2, operators[randomOperator]);
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
