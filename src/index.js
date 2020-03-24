const {
  AUTH_USER,
  GAME_MASTER,
  CHARACTER_CLASSES,
  CHARACTER_RACES,
  CHARACTER_ALIGNMENTS,
  CHARACTER_SKIN_COLORS,
  CHARACTER_HAIR_COLORS
} = require('./constants/characters');


module.exports = {
  characters: {
    AUTH_USER,
    GAME_MASTER,
    classes: CHARACTER_CLASSES,
    races: CHARACTER_RACES,
    alignments: CHARACTER_ALIGNMENTS,
    skinColors: CHARACTER_SKIN_COLORS,
    hairColors: CHARACTER_HAIR_COLORS
  }
};
