// Calaulate the risk
const calculateRisk = (currentValue, loanAmount) => {
  const risk = Number(loanAmount / currentValue);
  if (risk >= 0.5) return risk + 0.1;
  return risk;
};

module.exports = {
  calculateRisk,
};
