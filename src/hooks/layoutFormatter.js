export default () => {
  const getCol = (col) => `${(col / 12) * 100}%`;

  return {
    getCol,
  };
};
