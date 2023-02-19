import axios from 'axios';

const formatTimer = totalSeconds => {
  const seconds = totalSeconds % 60;
  const minutes = (totalSeconds - seconds) / 60;
  return appendZero(minutes) + ':' + appendZero(seconds);
};
const appendZero = value => {
  if (value >= 0 && value <= 9) return '0' + value;
  return value;
};

const actualPrice = (price, discount) => {
  if (discount) return price - price * discount;
  return price;
};

const configureAxios = () => {
  /* 
  ! put base url with every axios request instead of write base url every request 
  ! axios.defaults.baseURL -> equal base url
  */
  // TODO -> must execute this function in the first 1- app.js or index.js
  axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
};

export {formatTimer, actualPrice, configureAxios};
