const {
  AUTH_USER,
  GAME_MASTER,
  CHARACTER_CLASS_TYPES,
  CHARACTER_CLASSES,
  CHARACTER_RACE_TYPES,
  CHARACTER_RACES,
  CHARACTER_ALIGNMENTS,
  CHARACTER_SKIN_COLORS,
  CHARACTER_HAIR_COLORS
} = require('./constants/characters');
const { UPDATE_GAME } = require('./constants/sync');


module.exports = {
  characterConstants: {
    AUTH_USER,
    GAME_MASTER,
    classTypes: CHARACTER_CLASS_TYPES,
    classes: CHARACTER_CLASSES,
    raceTypes: CHARACTER_RACE_TYPES,
    races: CHARACTER_RACES,
    alignments: CHARACTER_ALIGNMENTS,
    skinColors: CHARACTER_SKIN_COLORS,
    hairColors: CHARACTER_HAIR_COLORS
  },
  syncConstants: {
    UPDATE_GAME
  }
};
