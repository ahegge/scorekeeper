import { writable } from 'svelte/store';

export const upper = writable({aces: null, twos: null, threes: null, fours: null, fives: null, sixes: null, total: 0 });
export const lower = writable({three: null, four: null, full: null, smStraight: null, lgStraight: null, yatzee: null, chance: null });