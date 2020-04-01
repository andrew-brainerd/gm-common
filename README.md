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

### Character Alignments

Provides an array of order and morality types as well as an object with types as values and a display name for the order or morality

#### Character Orders

```js
import { characters } from 'gm-common';

console.log(characters.alignments.orderTypes);
// ['lawful', 'neutral', 'chaotic']

console.log(characters.alignments.orders);
// [{ name: 'Lawful', value: 'lawful' }, { name: 'Neutral', value: 'neutral' }, etc]
```

#### Character Morality

```js
import { characters } from 'gm-common';

console.log(characters.alignments.moralityTypes);
// ['good', 'neutral', 'evil']

console.log(characters.alignments.morality);
// [{ name: 'Good', value: 'good' }, { name: 'Neutral', value: 'neutral' }, etc]
```

### Character Skin Color

Provides an object with HEX values and a display name for the color

```js
import { characters } from 'gm-common';

console.log(characters.skinColors);
// [{ name: 'Pale', value: '#fff5ee' }, { name: 'Fair', value: '#ffebcd' }, etc]
```

### Character Hair Color

Provides an object with HEX values and a display name for the color

```js
import { characters } from 'gm-common';

console.log(characters.hairColors);
// [{ name: 'Black', value: '#000000' }, { name: 'Gray', value: '#808080' }, etc]
```
