describe("Word Analyzer", function() {
  var text;
  var words;

  beforeEach(function() {
	text = "Alice was beginning to get very tired of sitting \ by her sister on the bank, and of having nothing to do: once \ or twice she had peeped into the book her sister was reading, \ but it had no pictures or conversations in it, \ 'and what is the use of a book,' thought Alice \ 'without pictures or conversations?'\ \ So she was considering in her own mind (as well as she could, \ for the hot day made her feel very sleepy and stupid), whether \ the pleasure of making a daisy-chain would be worth the trouble \ of getting up and picking the daisies, when suddenly a White \ Rabbit with pink eyes ran close by her.";
	words = textWords(text)
  });

  it("calculates the word count", function() {
    expect(words.length).toEqual(112);
  });

  it("finds the top ten words", function() {
    expect(topTenWords(wordsFrequencies(words))).toEqual( [ [ 'the', 7 ], [ 'of', 5 ], [ 'her', 5 ], [ 'and', 4 ], [ 'a', 3 ], [ 'was', 3 ], [ 'she', 3 ], [ 'or', 3 ], [ 'conversations', 2 ], [ 'by', 2 ] ]);
  });
});
