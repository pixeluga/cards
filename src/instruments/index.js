export const getUniqueID = (length = 15) => {
    if (typeof length !== 'number') {
        throw new Error('The function argument should be a number!');
    }

    let text = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const sortCasesByDate = (flag, cases) => {
    if (flag === 0) {
        return cases.sort((onecase1, onecase2) => {
            if (onecase1.date_start < onecase2.date_start) {
                return 1;
            } else if (
                onecase1.date_start > onecase2.date_start
            ) {
                return -1;
            }

            return 0;
        });
    }

    return cases.sort((onecase1, onecase2) => {
        if (onecase1.date_start > onecase2.date_start) {
            return 1;
        } else if (
            onecase1.date_start < onecase2.date_start
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortCasesByName = (flag, type, cases) => {
    if (flag === 0) {
        return cases.sort((onecase1, onecase2) => {
            if (onecase1[type] > onecase2[type]) {
                return 1;
            } else if (
                onecase1[type] < onecase2[type]
            ) {
                return -1;
            }

            return 0;
        });
    }

    return cases.sort((onecase1, onecase2) => {
        if (onecase1[type] < onecase2[type]) {
            return 1;
        } else if (
            onecase1[type] > onecase2[type]
        ) {
            return -1;
        }

        return 0;
    });

};

export const sortCasesByUser = (flag, cases) => {
    if (flag === 0) {
        return cases.sort((onecase1, onecase2) => {
            if (onecase1.user.name > onecase2.user.name) {
                return 1;
            } else if (
                onecase1.user.name < onecase2.user.name
            ) {
                return -1;
            }

            return 0;
        });
    }

    return cases.sort((onecase1, onecase2) => {
        if (onecase1.user.name < onecase2.user.name) {
            return 1;
        } else if (
            onecase1.user.name > onecase2.user.name
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortCasesByGroup = (type, cases) => {
    const control = cases.filter((onecase) => onecase.control);
    const usual = cases.filter((onecase) => !onecase.control);

    if (type === 'controlRev') {
        return [
            ...sortCasesByDate(0, usual),
            ...sortCasesByDate(0, control)
        ];
    } else if (type === 'label') {
        return sortCasesByName(0, 'label', cases);
    } else if (type === 'labelRev') {
        return sortCasesByName(1, 'label', cases);
    } else if (type === 'name') {
        return sortCasesByName(0, 'name', cases);
    } else if (type === 'nameRev') {
        return sortCasesByName(1, 'name', cases);
    } else if (type === 'date') {
        return sortCasesByDate(0, cases);
    } else if (type === 'dateRev') {
        return sortCasesByDate(1, cases);
    } else if (type === 'jurist') {
        return sortCasesByUser(0, cases);
    } else if (type === 'juristRev') {
        return sortCasesByUser(1, cases);
    }

    return [
        ...sortCasesByDate(0, control),
        ...sortCasesByDate(0, usual)
    ];

};

export const searchFilter = (cases, filterInput, type) => {
    const property = type ? type : 'name';

    // Polyfill 4 IE
    if (!String.prototype.includes) {
        // eslint-disable-next-line no-extend-native
        Object.defineProperty(String.prototype, 'includes', {
            value (search, start) {
                if (typeof start !== 'number') {
                    // eslint-disable-next-line no-param-reassign
                    start = 0;
                }
                if (start + search.length > this.length) {
                    return false;
                }

                return this.indexOf(search, start) !== -1;
            },
        });
    }
    // End of Polyfill 4 IE
    const filteredCases = cases.filter(
        (onecase) => onecase[property].toLowerCase().includes(filterInput.toLowerCase())
    );

    return filteredCases;
};
