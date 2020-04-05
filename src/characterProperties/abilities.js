const roll = size => Math.floor(Math.random() * size + 1);

const rollCharacter = () => {
  // Roll four die, toss out the lowest, and return the total.
  const rollAbility = () => {
    const scores = [];
    for (let i = 0; i < 4; i++) {
      scores.push(roll(6));
    }
    scores.splice(scores.indexOf(Math.min(...scores)), 1);
    return scores.reduce((total, x) => total + x, 0);
  };

  const scores = [];
  for (let i = 0; i < 6; i++) {
    scores.push(rollAbility());
  }

  return {
    scores,
    min: Math.min(...scores),
    max: Math.max(...scores),
    total: scores.reduce((total, x) => total + x, 0)
  };
};

module.exports = {
  rollCharacter,
};
