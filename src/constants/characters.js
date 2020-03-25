const AUTH_USER = {
  character: 'Auth User',
  color: 'orange'
};

const GAME_MASTER = {
  character: 'Game Master',
  color: '#7383BF'
};

/* Character Classes */
const BARBARIAN = 'barbarian';
const BARD = 'bard';
const CLERIC = 'cleric';
const DRUID = 'druid';
const FIGHTER = 'fighter';
const MONK = 'monk';
const PALADIN = 'paladin';
const RANGER = 'ranger';
const ROGUE = 'rogue';
const SORCERER = 'sorcerer';
const WARLOCK = 'warlock';
const WIZARD = 'wizard';

const CHARACTER_CLASS_TYPES = [
  BARBARIAN,
  BARD,
  CLERIC,
  DRUID,
  FIGHTER,
  MONK,
  PALADIN,
  RANGER,
  ROGUE,
  SORCERER,
  WARLOCK,
  WIZARD
];

const CHARACTER_CLASSES = [
  {
    name: 'Barbarian',
    value: BARBARIAN
  },
  {
    name: 'Bard',
    value: BARD
  },
  {
    name: 'Cleric',
    value: CLERIC
  },
  {
    name: 'Druid',
    value: DRUID
  },
  {
    name: 'Fighter',
    value: FIGHTER
  },
  {
    name: 'Monk',
    value: MONK
  },
  {
    name: 'Paladin',
    value: PALADIN
  },
  {
    name: 'Ranger',
    value: RANGER
  },
  {
    name: 'Rogue',
    value: ROGUE
  },
  {
    name: 'Sorcerer',
    value: SORCERER
  },
  {
    name: 'Warlock',
    value: WARLOCK
  },
  {
    name: 'Wizard',
    value: WIZARD
  }
];

/* Character Races */
const DWARF = 'dwarf';
const ELF = 'elf';
const HALFLING = 'halfling';
const HUMAN = 'human';
const DRAGONBORN = 'dragonborn';
const GNOME = 'gnome';
const HALF_ELF = 'halfElf';
const HALF_ORC = 'halfOrc';
const TIEFLING = 'tiefling';

const CHARACTER_RACE_TYPES = [
  DWARF,
  ELF,
  HALFLING,
  HUMAN,
  DRAGONBORN,
  GNOME,
  HALF_ELF,
  HALF_ORC,
  TIEFLING
];

const CHARACTER_RACES = [
  {
    name: 'Dwarf',
    value: DWARF
  },
  {
    name: 'Elf',
    value: ELF
  },
  {
    name: 'Halfling',
    value: HALFLING
  },
  {
    name: 'Human',
    value: HUMAN
  },
  {
    name: 'Dragonborn',
    value: DRAGONBORN
  },
  {
    name: 'Gnome',
    value: GNOME
  },
  {
    name: 'Half-Elf',
    value: HALF_ELF
  },
  {
    name: 'Half-Orc',
    value: HALF_ORC
  },
  {
    name: 'Tiefling',
    value: TIEFLING
  }
];

const CHARACTER_ALIGNMENTS = [
  'lawfulGood',
  'neutralGood',
  'chaoticGood',
  'lawfulNeutral',
  'neutral',
  'chaoticNeutral',
  'lawfulEvil',
  'neutralEvil',
  'chaoticEvil'
];

const CHARACTER_SKIN_COLORS = [
  'Pale',
  'Fair',
  'Light',
  'Light Tan',
  'Tan',
  'Dark Tan',
  'Brown',
  'Dark Brown',
  'Black',
  'Gray',
  'White',
  'Green',
  'Blue',
  'Purple'
];

const CHARACTER_HAIR_COLORS = [
  'Black',
  'Gray',
  'Platinum',
  'White',
  'Dark Blonde',
  'Blonde',
  'Bleach Blonde',
  'Dark Redhead',
  'Redhead',
  'Light Redhead',
  'Brunette',
  'Auburn',
  'Yellow',
  'Amber',
  'Brown',
  'Hazel',
  'Green',
  'Blue',
  'Aqua',
  'Red',
  'Purple'
];

module.exports = {
  AUTH_USER,
  GAME_MASTER,
  CHARACTER_CLASS_TYPES,
  CHARACTER_CLASSES,
  CHARACTER_RACE_TYPES,
  CHARACTER_RACES,
  CHARACTER_ALIGNMENTS,
  CHARACTER_SKIN_COLORS,
  CHARACTER_HAIR_COLORS
};
