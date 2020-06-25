import { CardSuit as Suit } from '@karuta/sanguosha-core';

import ArmorCard from '../../../base/ArmorCard';

class EightDiagram extends ArmorCard {
	constructor(suit: Suit, number: number) {
		super('eight-diagram', suit, number);
	}
}

export default EightDiagram;
