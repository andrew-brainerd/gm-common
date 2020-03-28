const {
  AUTH_USER,
  GAME_MASTER,
  CHARACTER_CLASS_TYPES,
  CHARACTER_CLASSES,
  CHARACTER_RACE_TYPES,
  CHARACTER_RACES,
  CHARACTER_ORDER_TYPES,
  CHARACTER_ORDERS,
  CHARACTER_MORALITY_TYPES,
  CHARACTER_MORALITY,
  CHARACTER_SKIN_COLORS,
  CHARACTER_HAIR_COLORS
} = require('./constants/characters');
const { UPDATE_GAME } = require('./constants/sync');


module.exports = {
  characters: {
    AUTH_USER,
    GAME_MASTER,
    classTypes: CHARACTER_CLASS_TYPES,
    classes: CHARACTER_CLASSES,
    raceTypes: CHARACTER_RACE_TYPES,
    races: CHARACTER_RACES,
    alignments: {
      orderTypes: CHARACTER_ORDER_TYPES,
      orders: CHARACTER_ORDERS,
      moralityTypes: CHARACTER_MORALITY_TYPES,
      morality: CHARACTER_MORALITY
    },
    skinColors: CHARACTER_SKIN_COLORS,
    hairColors: CHARACTER_HAIR_COLORS
  },
  syncing: {
    UPDATE_GAME
  }
};
