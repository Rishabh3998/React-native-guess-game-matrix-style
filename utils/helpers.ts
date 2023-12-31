export const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log({ randomNumber });
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};
