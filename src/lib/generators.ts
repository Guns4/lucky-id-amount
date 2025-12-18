// ID Generation Patterns
export type IDPattern = 
  | 'repeating' 
  | 'ascending' 
  | 'descending' 
  | 'mirror' 
  | 'double-pairs' 
  | 'lucky-combo'
  | 'custom-prefix';

export interface IDGeneratorOptions {
  length: number;
  pattern: IDPattern;
  favoriteNumbers: number[];
  excludeNumbers: number[];
  includeLetters: boolean;
  prefix?: string;
  numberSuffixLength?: number;
  useUppercase?: boolean;
  birthYear?: string;
}

export interface GeneratedID {
  value: string;
  beautyScore: number;
  pattern: string;
}

export interface AmountCategory {
  type: 'lucky' | 'unique-odd' | 'psychological' | 'round-beautiful' | 'balanced';
  label: string;
}

export interface AmountGeneratorOptions {
  minAmount: number;
  maxAmount: number;
  category: AmountCategory['type'];
  includeDecimals: boolean;
}

export interface GeneratedAmount {
  value: number;
  formatted: string;
  beautyScore: number;
  category: string;
}

// Lucky numbers commonly used
const LUCKY_NUMBERS = [7, 8, 9];

// Comprehensive name collection for professional ID generation
const ID_NAMES = {
  // Animals - Powerful & Cool
  animals: [
    'Wolf', 'Tiger', 'Lion', 'Eagle', 'Shark', 'Hawk', 'Falcon', 'Panther',
    'Cobra', 'Viper', 'Dragon', 'Phoenix', 'Bear', 'Jaguar', 'Leopard', 'Raven',
    'Fox', 'Lynx', 'Puma', 'Raptor', 'Grizzly', 'Mustang', 'Stallion', 'Rhino',
    'Scorpion', 'Mantis', 'Spider', 'Kraken', 'Griffin', 'Hydra', 'Cerberus',
  ],
  
  // Mythical & Fantasy
  mythical: [
    'Titan', 'Zeus', 'Thor', 'Odin', 'Atlas', 'Ares', 'Apollo', 'Hades',
    'Phoenix', 'Sphinx', 'Minotaur', 'Pegasus', 'Valkyrie', 'Fenrir', 'Loki',
    'Naga', 'Garuda', 'Dewa', 'Raja', 'Satria', 'Arjuna', 'Bima', 'Kresna',
    'Merlin', 'Draco', 'Osiris', 'Anubis', 'Ra', 'Poseidon', 'Hercules',
  ],
  
  // Gaming & Esports
  gaming: [
    'Ninja', 'Sniper', 'Hunter', 'Raider', 'Viking', 'Samurai', 'Ronin', 'Shadow',
    'Phantom', 'Ghost', 'Reaper', 'Striker', 'Blader', 'Gunner', 'Tank', 'Healer',
    'Mage', 'Rogue', 'Paladin', 'Warlord', 'Assassin', 'Berserker', 'Ranger',
    'Crusader', 'Knight', 'Sentinel', 'Guardian', 'Seeker', 'Slayer', 'Breaker',
  ],
  
  // Tech & Modern
  tech: [
    'Pixel', 'Cyber', 'Neo', 'Matrix', 'Vector', 'Quantum', 'Binary', 'Crypto',
    'Nexus', 'Byte', 'Code', 'Data', 'Node', 'Cloud', 'Nano', 'Turbo',
    'Sonic', 'Nitro', 'Hyper', 'Ultra', 'Mega', 'Giga', 'Tera', 'Omega',
    'Alpha', 'Beta', 'Delta', 'Sigma', 'Zero', 'Core', 'Pulse', 'Flux',
  ],
  
  // Power & Status
  power: [
    'King', 'Queen', 'Sultan', 'Boss', 'Chief', 'Master', 'Legend', 'Hero',
    'Champion', 'Victor', 'Conqueror', 'Emperor', 'Prince', 'Duke', 'Lord', 'Baron',
    'Captain', 'General', 'Admiral', 'Commander', 'Major', 'Colonel', 'Elite', 'Prime',
    'Ace', 'Pro', 'VIP', 'MVP', 'Star', 'Icon', 'Mogul', 'Tycoon',
  ],
  
  // Nature & Elements
  nature: [
    'Storm', 'Thunder', 'Blaze', 'Frost', 'Shadow', 'Dawn', 'Dusk', 'Eclipse',
    'Aurora', 'Nova', 'Comet', 'Meteor', 'Astro', 'Cosmic', 'Solar', 'Lunar',
    'Ocean', 'River', 'Mountain', 'Forest', 'Desert', 'Arctic', 'Tropic', 'Volcano',
    'Crystal', 'Diamond', 'Ruby', 'Jade', 'Onyx', 'Obsidian', 'Emerald', 'Sapphire',
  ],
  
  // Cool Words & Abstract
  cool: [
    'Blitz', 'Bolt', 'Flash', 'Spark', 'Flare', 'Blaze', 'Fury', 'Rage',
    'Havoc', 'Chaos', 'Vortex', 'Apex', 'Zenith', 'Summit', 'Peak', 'Crest',
    'Edge', 'Blade', 'Steel', 'Iron', 'Titanium', 'Chrome', 'Silver', 'Gold',
    'Jet', 'Rocket', 'Missile', 'Bullet', 'Arrow', 'Spear', 'Sword', 'Shield',
  ],
  
  // Indonesian Cultural
  indonesian: [
    'Sakti', 'Jaya', 'Wijaya', 'Kusuma', 'Putra', 'Surya', 'Bayu', 'Agung',
    'Berlian', 'Emas', 'Mutiara', 'Permata', 'Intan', 'Megah', 'Cahaya', 'Mentari',
    'Elang', 'Harimau', 'Singa', 'Rajawali', 'Banteng', 'Badak', 'Komodo', 'Macan',
    'Pangeran', 'Ratu', 'Prabu', 'Ksatria', 'Pahlawan', 'Perkasa', 'Gagah', 'Berani',
  ],
  
  // Usernames & Internet
  internet: [
    'Gamer', 'Player', 'User', 'Guest', 'Member', 'Admin', 'Mod', 'Dev',
    'Hacker', 'Coder', 'Geek', 'Nerd', 'Noob', 'Newbie', 'Veteran', 'Legend',
    'Stream', 'Live', 'Online', 'Digital', 'Virtual', 'Web', 'Net', 'Link',
    'Click', 'Tap', 'Swipe', 'Scroll', 'Like', 'Share', 'Post', 'Chat',
  ],
};

// Flatten all names into a single array for random selection
const ALL_NAMES = Object.values(ID_NAMES).flat();

function getRandomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomUniqueName(usedNames: Set<string>): string {
  const shuffled = shuffleArray([...ALL_NAMES]);
  for (const name of shuffled) {
    if (!usedNames.has(name)) {
      usedNames.add(name);
      return name;
    }
  }
  // Fallback: return random name if all used
  return getRandomFromArray(ALL_NAMES);
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateRepeatingPattern(length: number, favorites: number[], exclude: number[], includeLetters: boolean = true, usedNames?: Set<string>): string {
  const available = favorites.length > 0 
    ? favorites.filter(n => !exclude.includes(n))
    : LUCKY_NUMBERS.filter(n => !exclude.includes(n));
  
  if (available.length === 0) return '8'.repeat(length);
  
  const digit = getRandomFromArray(available);
  const numberPart = digit.toString().repeat(Math.min(3, length));
  
  if (includeLetters) {
    const name = usedNames ? getRandomUniqueName(usedNames) : getRandomFromArray(ALL_NAMES);
    return name + numberPart;
  }
  return numberPart;
}

function generateAscendingPattern(length: number, exclude: number[], includeLetters: boolean = true, usedNames?: Set<string>): string {
  const start = Math.floor(Math.random() * 7) + 1; // Start from 1-7
  let result = '';
  const numLength = Math.min(3, length);
  for (let i = 0; i < numLength; i++) {
    const digit = (start + i) % 10;
    if (exclude.includes(digit)) {
      result += ((digit + 1) % 10).toString();
    } else {
      result += digit.toString();
    }
  }
  
  if (includeLetters) {
    const name = usedNames ? getRandomUniqueName(usedNames) : getRandomFromArray(ALL_NAMES);
    return name + result;
  }
  return result;
}

function generateDescendingPattern(length: number, exclude: number[], includeLetters: boolean = true, usedNames?: Set<string>): string {
  const start = Math.floor(Math.random() * 3) + 7; // Start from 7-9
  let result = '';
  const numLength = Math.min(3, length);
  for (let i = 0; i < numLength; i++) {
    const digit = Math.abs((start - i) % 10);
    if (exclude.includes(digit)) {
      result += ((digit + 1) % 10).toString();
    } else {
      result += digit.toString();
    }
  }
  
  if (includeLetters) {
    const name = usedNames ? getRandomUniqueName(usedNames) : getRandomFromArray(ALL_NAMES);
    return name + result;
  }
  return result;
}

function generateMirrorPattern(length: number, favorites: number[], exclude: number[], includeLetters: boolean = true, usedNames?: Set<string>): string {
  const available = favorites.length > 0 
    ? favorites.filter(n => !exclude.includes(n))
    : [1, 2, 3, 5, 6, 7, 8, 9].filter(n => !exclude.includes(n));
  
  // Generate mirror pattern like 696, 787, 818
  const outer = getRandomFromArray(available);
  const inner = getRandomFromArray(available.filter(n => n !== outer));
  const mirrorPart = `${outer}${inner}${outer}`;
  
  if (includeLetters) {
    const name = usedNames ? getRandomUniqueName(usedNames) : getRandomFromArray(ALL_NAMES);
    return name + mirrorPart;
  }
  return mirrorPart;
}

function generateDoublePairsPattern(length: number, favorites: number[], exclude: number[], includeLetters: boolean = true, usedNames?: Set<string>): string {
  const available = favorites.length > 0 
    ? favorites.filter(n => !exclude.includes(n))
    : [1, 2, 3, 5, 6, 7, 8, 9].filter(n => !exclude.includes(n));
  
  // Generate pairs like 1122, 7788
  const shuffled = shuffleArray(available);
  let result = '';
  const pairs = 2; // Always 2 pairs for cleaner look
  
  for (let i = 0; i < pairs; i++) {
    const digit = shuffled[i % shuffled.length];
    result += digit.toString().repeat(2);
  }
  
  if (includeLetters) {
    const name = usedNames ? getRandomUniqueName(usedNames) : getRandomFromArray(ALL_NAMES);
    return name + result;
  }
  return result;
}

function generateLuckyNumbers(count: number, favorites: number[], exclude: number[]): string {
  const available = favorites.length > 0 
    ? favorites.filter(n => !exclude.includes(n))
    : LUCKY_NUMBERS.filter(n => !exclude.includes(n));
  
  let numbers = '';
  for (let i = 0; i < count; i++) {
    if (available.length > 0) {
      numbers += getRandomFromArray(available).toString();
    } else {
      numbers += getRandomFromArray(LUCKY_NUMBERS).toString();
    }
  }
  return numbers;
}

function generateNameBasedID(options: IDGeneratorOptions, usedNames?: Set<string>): string {
  const name = usedNames ? getRandomUniqueName(usedNames) : getRandomFromArray(ALL_NAMES);
  const numCount = options.numberSuffixLength || (Math.random() > 0.5 ? 2 : 3);
  
  // If birth year is specified, use it
  if (options.birthYear) {
    const yearSuffix = options.birthYear.slice(-2); // Last 2 digits
    return name + yearSuffix;
  }
  
  const numbers = generateLuckyNumbers(numCount, options.favoriteNumbers, options.excludeNumbers);
  return name + numbers;
}

function generateLuckyCombo(options: IDGeneratorOptions, usedNames?: Set<string>): string {
  return generateNameBasedID(options, usedNames);
}

function calculateIDBeautyScore(id: string): number {
  let score = 0;
  
  // Check for repeating characters
  const chars = id.split('');
  const uniqueChars = new Set(chars);
  if (uniqueChars.size === 1) score += 5; // All same
  else if (uniqueChars.size <= 2) score += 3;
  else if (uniqueChars.size <= 3) score += 2;
  
  // Check for patterns
  const numericPart = id.replace(/\D/g, '');
  if (numericPart) {
    // Check for ascending/descending
    let isAsc = true, isDesc = true;
    for (let i = 1; i < numericPart.length; i++) {
      if (parseInt(numericPart[i]) !== parseInt(numericPart[i-1]) + 1) isAsc = false;
      if (parseInt(numericPart[i]) !== parseInt(numericPart[i-1]) - 1) isDesc = false;
    }
    if (isAsc || isDesc) score += 3;
    
    // Check for mirror
    if (numericPart === numericPart.split('').reverse().join('')) score += 4;
    
    // Lucky numbers bonus
    const luckyCount = numericPart.split('').filter(c => ['7', '8', '9'].includes(c)).length;
    score += Math.floor(luckyCount / 2);
  }
  
  // Letters bonus
  if (/[A-Z]/.test(id)) score += 1;
  
  return Math.min(5, Math.max(1, Math.round(score)));
}

export function generateID(options: IDGeneratorOptions, usedNames?: Set<string>): GeneratedID {
  let value: string;
  let pattern: string;
  const includeLetters = options.includeLetters !== false;
  
  switch (options.pattern) {
    case 'repeating':
      value = generateRepeatingPattern(options.length, options.favoriteNumbers, options.excludeNumbers, includeLetters, usedNames);
      pattern = 'Repeating';
      break;
    case 'ascending':
      value = generateAscendingPattern(options.length, options.excludeNumbers, includeLetters, usedNames);
      pattern = 'Ascending';
      break;
    case 'descending':
      value = generateDescendingPattern(options.length, options.excludeNumbers, includeLetters, usedNames);
      pattern = 'Descending';
      break;
    case 'mirror':
      value = generateMirrorPattern(options.length, options.favoriteNumbers, options.excludeNumbers, includeLetters, usedNames);
      pattern = 'Mirror';
      break;
    case 'double-pairs':
      value = generateDoublePairsPattern(options.length, options.favoriteNumbers, options.excludeNumbers, includeLetters, usedNames);
      pattern = 'Double Pairs';
      break;
    case 'lucky-combo':
      value = generateLuckyCombo(options, usedNames);
      pattern = 'Lucky Name';
      break;
    case 'custom-prefix': {
      // Use custom prefix with lucky numbers
      const customPrefix = options.prefix || 'Lucky';
      const numCount = options.numberSuffixLength || (Math.random() > 0.5 ? 2 : 3);
      
      // If birth year is specified, use it
      if (options.birthYear) {
        const yearSuffix = options.birthYear.slice(-2);
        value = customPrefix + yearSuffix;
      } else {
        const customNumbers = generateLuckyNumbers(numCount, options.favoriteNumbers, options.excludeNumbers);
        value = customPrefix + customNumbers;
      }
      pattern = 'Custom Name';
      break;
    }
    default:
      value = generateRepeatingPattern(options.length, options.favoriteNumbers, options.excludeNumbers, includeLetters, usedNames);
      pattern = 'Random';
  }
  
  // Apply uppercase option
  const finalValue = options.useUppercase !== false ? value.toUpperCase() : value;
  
  return {
    value: finalValue,
    beautyScore: calculateIDBeautyScore(value),
    pattern,
  };
}

export function generateMultipleIDs(options: IDGeneratorOptions, count: number = 3): GeneratedID[] {
  const usedNames = new Set<string>();
  const results: GeneratedID[] = [];
  
  // Quality tiers: Perfect (5), Medium (3), Low (1-2)
  const qualityTiers = [
    { tier: 'Perfect', targetScore: 5, patterns: ['lucky-combo', 'repeating', 'mirror'] as IDPattern[] },
    { tier: 'Medium', targetScore: 3, patterns: ['ascending', 'descending', 'double-pairs'] as IDPattern[] },
    { tier: 'Low', targetScore: 2, patterns: ['lucky-combo', 'ascending', 'descending'] as IDPattern[] },
  ];
  
  for (let i = 0; i < Math.min(count, 3); i++) {
    const tier = qualityTiers[i];
    const patternToUse = options.pattern === 'custom-prefix' 
      ? 'custom-prefix' 
      : getRandomFromArray(tier.patterns);
    
    const id = generateID({ ...options, pattern: patternToUse }, usedNames);
    
    // Adjust beauty score based on tier
    results.push({
      ...id,
      beautyScore: tier.targetScore,
    });
  }
  
  return results;
}

// Amount Generation
const LUCKY_AMOUNTS = [
  88888, 188888, 288888, 388888, 588888, 688888, 888888,
  77777, 177777, 277777, 377777, 577777, 777777,
  99999, 199999, 299999, 399999, 599999, 999999,
  88000, 88800, 88880, 888000,
  77000, 77700, 77770, 777000,
];

const PSYCHOLOGICAL_AMOUNTS = [
  49900, 99900, 149900, 199900, 249900, 299900, 399900, 499900,
  49000, 99000, 149000, 199000, 249000, 299000,
  47500, 97500, 147500, 197500,
];

const ROUND_BEAUTIFUL = [
  500500, 1001000, 2002000, 500000, 1000000, 1500000,
  100100, 200200, 300300, 500500,
  111000, 222000, 333000, 555000,
];

function generateUniqueOdd(min: number, max: number): number {
  // Generate patterns like 123456, 234567, etc.
  const patterns = [];
  for (let start = 1; start <= 4; start++) {
    let num = '';
    for (let i = 0; i < 6; i++) {
      num += ((start + i) % 10).toString();
    }
    patterns.push(parseInt(num));
  }
  
  const valid = patterns.filter(n => n >= min && n <= max);
  if (valid.length > 0) return getRandomFromArray(valid);
  
  // Fallback to random unique pattern
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateBalanced(min: number, max: number): number {
  // Generate amounts that look natural/inconspicuous
  const bases = [50000, 75000, 100000, 125000, 150000, 200000, 250000, 300000];
  const valid = bases.filter(n => n >= min && n <= max);
  
  if (valid.length > 0) {
    const base = getRandomFromArray(valid);
    // Add small random variation
    const variation = Math.floor(Math.random() * 5) * 1000;
    return base + variation;
  }
  
  return Math.floor((min + max) / 2);
}

function calculateAmountBeautyScore(amount: number, category: AmountCategory['type']): number {
  let score = 0;
  const str = amount.toString();
  
  // Check for repeating digits
  const uniqueDigits = new Set(str.split(''));
  if (uniqueDigits.size <= 2) score += 3;
  else if (uniqueDigits.size <= 3) score += 2;
  
  // Lucky numbers
  const luckyCount = str.split('').filter(c => ['7', '8', '9'].includes(c)).length;
  score += Math.floor(luckyCount / 2);
  
  // Round numbers bonus
  if (amount % 100000 === 0) score += 2;
  else if (amount % 10000 === 0) score += 1;
  
  // Category bonuses
  if (category === 'lucky') score += 2;
  if (category === 'psychological') score += 1;
  
  return Math.min(5, Math.max(1, Math.round(score)));
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateAmount(options: AmountGeneratorOptions): GeneratedAmount {
  let value: number;
  let categoryLabel: string;
  
  switch (options.category) {
    case 'lucky': {
      const validLucky = LUCKY_AMOUNTS.filter(a => a >= options.minAmount && a <= options.maxAmount);
      value = validLucky.length > 0 ? getRandomFromArray(validLucky) : options.minAmount;
      categoryLabel = 'Lucky Amount';
      break;
    }
    case 'unique-odd':
      value = generateUniqueOdd(options.minAmount, options.maxAmount);
      categoryLabel = 'Unique Pattern';
      break;
    case 'psychological': {
      const validPsych = PSYCHOLOGICAL_AMOUNTS.filter(a => a >= options.minAmount && a <= options.maxAmount);
      value = validPsych.length > 0 ? getRandomFromArray(validPsych) : options.minAmount;
      categoryLabel = 'Psychological';
      break;
    }
    case 'round-beautiful': {
      const validRound = ROUND_BEAUTIFUL.filter(a => a >= options.minAmount && a <= options.maxAmount);
      value = validRound.length > 0 ? getRandomFromArray(validRound) : options.minAmount;
      categoryLabel = 'Round & Beautiful';
      break;
    }
    case 'balanced':
      value = generateBalanced(options.minAmount, options.maxAmount);
      categoryLabel = 'Balanced';
      break;
    default:
      value = options.minAmount;
      categoryLabel = 'Standard';
  }
  
  if (options.includeDecimals) {
    value = Math.round(value * 100) / 100;
  }
  
  return {
    value,
    formatted: formatRupiah(value),
    beautyScore: calculateAmountBeautyScore(value, options.category),
    category: categoryLabel,
  };
}

export function generateMultipleAmounts(options: AmountGeneratorOptions, count: number = 3): GeneratedAmount[] {
  const results: GeneratedAmount[] = [];
  
  // Quality tiers: Perfect (5), Medium (3), Low (2)
  const qualityTiers = [
    { tier: 'Perfect', targetScore: 5, categories: ['lucky', 'round-beautiful'] as AmountCategory['type'][] },
    { tier: 'Medium', targetScore: 3, categories: ['psychological', 'unique-odd'] as AmountCategory['type'][] },
    { tier: 'Low', targetScore: 2, categories: ['balanced', 'unique-odd'] as AmountCategory['type'][] },
  ];
  
  for (let i = 0; i < Math.min(count, 3); i++) {
    const tier = qualityTiers[i];
    const categoryToUse = getRandomFromArray(tier.categories);
    const amount = generateAmount({ ...options, category: categoryToUse });
    
    // Adjust beauty score and label based on tier
    results.push({
      ...amount,
      beautyScore: tier.targetScore,
      category: `${amount.category} (${tier.tier})`,
    });
  }
  
  return results;
}

// Presets
export const ID_PRESETS = [
  { id: 'new-account', label: 'New Account ID', description: 'Fresh, memorable IDs for new registrations', pattern: 'lucky-combo' as IDPattern },
  { id: 'vip', label: 'VIP / Sultan ID', description: 'Premium-looking exclusive IDs', pattern: 'repeating' as IDPattern },
  { id: 'safe', label: 'Safe & Subtle', description: 'Natural-looking, inconspicuous IDs', pattern: 'ascending' as IDPattern },
  { id: 'mirror', label: 'Mirror Magic', description: 'Symmetrical, easy to remember', pattern: 'mirror' as IDPattern },
];

export const AMOUNT_PRESETS = [
  { id: 'lucky', label: 'Lucky Deposit', description: 'Amounts with lucky number combinations', category: 'lucky' as AmountCategory['type'] },
  { id: 'psychological', label: 'Psychological', description: 'Amounts that feel like a deal', category: 'psychological' as AmountCategory['type'] },
  { id: 'subtle', label: 'Subtle & Safe', description: 'Natural-looking balanced amounts', category: 'balanced' as AmountCategory['type'] },
  { id: 'premium', label: 'Premium Round', description: 'Clean, round beautiful numbers', category: 'round-beautiful' as AmountCategory['type'] },
];
