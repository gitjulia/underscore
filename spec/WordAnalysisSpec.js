describe("Word Analyzer", function() {
    var text;
    var words;

    beforeEach(function() {
        text = "Alice was beginning to get very tired of sitting \ by her sister on the bank, and of having nothing to do: once \ or twice she had peeped into the book her sister was reading, \ but it had no pictures or conversations in it, \ 'and what is the use of a book,' thought Alice \ 'without pictures or conversations?'\ \ So she was considering in her own mind (as well as she could, \ for the hot day made her feel very sleepy and stupid), whether \ the pleasure of making a daisy-chain would be worth the trouble \ of getting up and picking the daisies, when suddenly a White \ Rabbit with pink eyes ran close by her.";
        words = getListOfUsedWords(text)
    });

    it("calculates the word count of text", function() {
        expect(words.length).toEqual(112);
    });

    it("finds the top ten words in text, stored as an array", function() {
        expect(getListOfTopTenFrequentWords(getFrequencyOfWords(words))).toEqual( [ [ 'the', 7 ], [ 'of', 5 ], [ 'her', 5 ], [ 'and', 4 ], [ 'a', 3 ], [ 'was', 3 ], [ 'she', 3 ], [ 'or', 3 ], [ 'conversations', 2 ], [ 'by', 2 ] ]);
    });

    it("sorts list of words in text, stored as an array", function() {
        expect(getSortedListOfWords(getFrequencyOfWords(words))).toEqual( [ 'a', 'alice', 'and', 'as', 'bank', 'be', 'beginning', 'book', 'but', 'by', 'close', 'considering', 'conversations', 'could', 'daisies', 'daisy-chain', 'day', 'do', 'eyes', 'feel', 'for', 'get', 'getting', 'had', 'having', 'her', 'hot', 'in', 'into', 'is', 'it', 'made', 'making', 'mind', 'no', 'nothing', 'of', 'on', 'once', 'or', 'own', 'peeped', 'picking', 'pictures', 'pink', 'pleasure', 'rabbit', 'ran', 'reading', 'she', 'sister', 'sitting', 'sleepy', 'so', 'stupid', 'suddenly', 'the', 'thought', 'tired', 'to', 'trouble', 'twice', 'up', 'use', 'very', 'was', 'well', 'what', 'when', 'whether', 'white', 'with', 'without', 'worth', 'would' ]);
    });

    it("finds the top ten words, stored as a map", function() {
        expect(getFrequencyOfWords(words)).toEqual( { alice : 2, was : 3, beginning : 1, to : 2, get : 1, very : 2, tired : 1, of : 5, sitting : 1, by : 2, her : 5, sister : 2, on : 1, the : 7, bank : 1, and : 4, having : 1, nothing : 1, do : 1, once : 1, or : 3, twice : 1, she : 3, had : 2, peeped : 1, into : 1, book : 2, reading : 1, but : 1, it : 2, no : 1, pictures : 2, conversations : 2, in : 2, what : 1, is : 1, use : 1, a : 3, thought : 1, without : 1, so : 1, considering : 1, own : 1, mind : 1, as : 2, well : 1, could : 1, for : 1, hot : 1, day : 1, made : 1, feel : 1, sleepy : 1, stupid : 1, whether : 1, pleasure : 1, making : 1, 'daisy-chain': 1, would : 1, be : 1, worth : 1, trouble : 1, getting : 1, up : 1, picking : 1, daisies : 1, when : 1, suddenly : 1, white : 1, rabbit : 1, with : 1, pink : 1, eyes : 1, ran : 1, close : 1 } );
    });
});
