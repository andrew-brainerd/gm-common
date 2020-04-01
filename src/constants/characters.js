const AUTH_USER = {
  characterName: 'Auth User',
  color: 'orange'
};

const GAME_MASTER = {
  characterName: 'Game Master',
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

const GOOD = 'good';
const EVIL = 'evil';
const NEUTRAL = 'neutral';
const LAWFUL = 'lawful';
const CHAOTIC = 'caotic';

const CHARACTER_ORDER_TYPES = [
  LAWFUL,
  NEUTRAL,
  CHAOTIC
];

const CHARACTER_MORALITY_TYPES = [
  GOOD,
  NEUTRAL,
  EVIL
];

const CHARACTER_ORDERS = [
  {
    name: 'Lawful',
    value: LAWFUL
  },
  {
    name: 'Neutral',
    value: NEUTRAL
  },
  {
    name: 'Chaotic',
    value: CHAOTIC
  }
];

const CHARACTER_MORALITY = [
  {
    name: 'Good',
    value: GOOD
  },
  {
    name: 'Neutral',
    value: NEUTRAL
  },
  {
    name: 'Evil',
    value: EVIL
  }
];

const CHARACTER_SKIN_COLORS = [
  {
    name: 'Pale',
    value: '#fff5ee'
  },
  {
    name: 'Fair',
    value: '#ffebcd'
  },
  {
    name: 'Light',
    value: '#ffe4b5'
  },
  {
    name: 'Light Tan',
    value: '#f5deb3'
  },
  {
    name: 'Tan',
    value: '#d2b48c'
  },
  {
    name: 'Dark Tan',
    value: '#cd853f'
  },
  {
    name: 'Brown',
    value: '#a0522d'
  },
  {
    name: 'Dark Brown',
    value: '#8b4513'
  },
  {
    name: 'Black',
    value: '#000000'
  },
  {
    name: 'Gray',
    value: '#808080'
  },
  {
    name: 'White',
    value: '#ffffff'
  },
  {
    name: 'Green',
    value: '#228b22'
  },
  {
    name: 'Blue',
    value: '#6495ed'
  },
  {
    name: 'Purple',
    value: '#800080'
  }
];

const CHARACTER_HAIR_COLORS = [
  {
    name: 'Black',
    value: '#000000'
  },
  {
    name: 'Gray',
    value: '#808080'
  },
  {
    name: 'Platinum',
    value: '#d3d3d3'
  },
  {
    name: 'White',
    value: '#ffffff'
  },
  {
    name: 'Dark Blonde',
    value: '#b8860b'
  },
  {
    name: 'Blonde',
    value: '#daa520'
  },
  {
    name: 'Bleach Blonde',
    value: '#f0e68c'
  },
  {
    name: 'Dark Redhead',
    value: '#800000'
  },
  {
    name: 'Redhead',
    value: '#ff8c00'
  },
  {
    name: 'Light Redhead',
    value: '#f4a460'
  },
  {
    name: 'Brunette',
    value: '#8b4513'
  },
  {
    name: 'Auburn',
    value: '#a0522d'
  },
  {
    name: 'Yellow',
    value: '#ffd700'
  },
  {
    name: 'Amber',
    value: '#daa520'
  },
  {
    name: 'Brown',
    value: '#8b4513'
  },
  {
    name: 'Hazel',
    value: '#808000'
  },
  {
    name: 'Green',
    value: '#228b22'
  },
  {
    name: 'Blue',
    value: '#6495ed'
  },
  {
    name: 'Aqua',
    value: '#00ced1'
  },
  {
    name: 'Red',
    value: '#dc143c'
  },
  {
    name: 'Purple',
    value: '#800080'
  }
];

module.exports = {
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
};
