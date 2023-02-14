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

export {formatTimer, actualPrice};
