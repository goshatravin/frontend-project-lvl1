import getRandomNumber from '../getRandomNumber.js';

const getGcd = (a, b) => {
  if (!b) {
    return a.toString();
  }

  return getGcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, correctAnswer];
};
export default () => [getGameData, description];
