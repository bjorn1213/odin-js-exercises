const getTheTitles = function(array) {

    return array.reduce((titles, book) => {
        titles.push(book.title);
        return titles;
    }, []);

};

// Do not edit below this line
module.exports = getTheTitles;
