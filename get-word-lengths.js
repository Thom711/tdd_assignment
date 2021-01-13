const getWordLengths = function(someWords) {
    return someWords.map((item) => {
        return item.length;
    });
};

module.exports = getWordLengths;