const calculateRisk = (currentValue, loanAmount) => {
  return loanAmount / currentValue;
};

module.exports = {
  calculateRisk,
};
