import { drawHand } from './render/renderCards';
console.clear();

drawHand([
    { suit: 'Clubs', rank: '10', hidden: true},
    { suit: 'Clubs', rank: '10', hidden: false},
    { suit: 'Spades', rank: 'J', hidden: false},
    { suit: 'Diamonds', rank: 'K', hidden: false},
    { suit: 'Hearts', rank: '3', hidden: false}
]);





