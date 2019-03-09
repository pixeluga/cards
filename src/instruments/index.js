export const sortByRating = (tt, cards) => {
    if (tt === 0) {
        return cards.sort((card1, card2) => {
            if (card1.rating < card2.rating) {
                return 1;
            } else if (
                card1.rating > card2.rating
            ) {
                return -1;
            }

            return 0;
        });
    }

    return cards.sort((card1, card2) => {
        if (card1.rating > card2.rating) {
            return 1;
        } else if (
            card1.rating < card2.rating
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortByPrice = (tt, cards) => {
    if (tt === 0) {
        return cards.sort((card1, card2) => {
            if (card1.price < card2.price) {
                return 1;
            } else if (
                card1.price > card2.price
            ) {
                return -1;
            }

            return 0;
        });
    }

    return cards.sort((card1, card2) => {
        if (card1.price > card2.price) {
            return 1;
        } else if (
            card1.price < card2.price
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortByGroup = (type, cards) => {
    if (type === 'rating') {
        return sortByRating(0, cards);
    } else if (type === 'gnitar') {
        return sortByRating(1, cards);
    } else if (type === 'price') {
        return sortByPrice(0, cards);
    } else if (type === 'ecirp') {
        return sortByPrice(1, cards);
    }

    return cards;
};
