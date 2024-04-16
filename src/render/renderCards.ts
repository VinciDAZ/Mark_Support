export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export type suit = 'Hearts' | 'Diamonds' | 'Spades' | 'Clubs';
export type Card = {
    suit: suit,
    rank: Rank,
    hidden: boolean
}

export const cardValues: { [key: string]: number } = {
    'A': 11,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10
};

export const suitImageMap: { [key: string]: string } = {
    'Hearts': '♥',
    'Diamonds': '♦',
    'Spades': '♠',
    'Clubs': '♣'
};

export const drawHand = (cards: Array<Card>) : void => {

    // create base to start lines
    const lines: string[] = new Array(9).fill('');

    cards.forEach(({ rank, suit, hidden}) => {
        const suitImage = suitImageMap[suit];
        if(!hidden) {
            lines[0] += '┌─────────┐';
            lines[1] += `│${rank}${' '.repeat(Math.max(0, 9 - rank.length))}│`;
            lines[2] += '│         │';
            lines[3] += '│         │';
            lines[4] += `│    ${suitImage}    │`;
            lines[5] += '│         │';
            lines[6] += '│         │';
            lines[7] += `│${' '.repeat(Math.max(0, 9 - rank.length))}${rank}│`;
            lines[8] += '└─────────┘';
        } else {
            lines[0] += '┌─────────┐';
            lines[1] += '│░░░░░░░░░│';
            lines[2] += '│░░░░░░░░░│';
            lines[3] += '│░░░░░░░░░│';
            lines[4] += '│░░░░░░░░░│';
            lines[5] += '│░░░░░░░░░│';
            lines[6] += '│░░░░░░░░░│';
            lines[7] += '│░░░░░░░░░│';
            lines[8] += '└─────────┘';
        }
         
    })

    console.log(lines.join('\n'));
};
