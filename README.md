# gm-common

Common utilities and constants for Game Master

## Available Constants

### Character Classes

Provides an array of class types as well as an object with types as values and a display name for the class

```js
import { characters } from 'gm-common';

console.log(characters.classTypes);
// ['barbarian', 'bard', 'cleric', etc]

console.log(characters.classes);
// [{ name: 'Barbarian', value: 'barbarian' }, { name: 'Bard', value: 'bard' }, etc]
```

### Character Races

Provides an array of race types as well as an object with types as values and a display name for the race

```js
import { characters } from 'gm-common';

console.log(characters.raceTypes);
// ['dwarf', 'elf', 'halfling', etc]

console.log(characters.races);
// [{ name: 'Dwarf', value: 'dwarf' }, { name: 'Elf', value: 'elf' }, etc]
```
