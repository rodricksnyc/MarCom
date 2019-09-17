import * as JsSearch from 'js-search';

var theGreatGatsby = {
  isbn: '9781597226769',
  title: 'The Great Gatsby',
  author: {
    name: 'F. Scott Fitzgerald'
  },
  tags: ['book', 'inspirational']
};
var theDaVinciCode = {
  isbn: '0307474275',
  title: 'The DaVinci Code',
  author: {
    name: 'Dan Brown'
  },
  tags: ['book', 'mystery']
};
var angelsAndDemons = {
  isbn: '074349346X',
  title: 'Angels & Demons',
  author: {
    name: 'Dan Brown',
  },
  tags: ['book', 'mystery']
};

var search = new JsSearch.Search('isbn');
search.addIndex('title');
search.addIndex(['author', 'name']);
search.addIndex('tags')

search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

search.search('The');    // [theGreatGatsby, theDaVinciCode]
search.search('scott');  // [theGreatGatsby]
search.search('dan');    // [angelsAndDemons, theDaVinciCode]
search.search('mystery') // [angelsAndDemons, theDaVinciCode]




search.tokenizer = {
  tokenize( text /* string */ ) {
    // Convert text to an Array of strings and return the Array
  }
};


var stemmer = require('porter-stemmer').stemmer;

search.tokenizer =
	new JsSearch.StemmingTokenizer(
        stemmer, // Function should accept a string param and return a string
	    new JsSearch.SimpleTokenizer());

      search.tokenizer =
      	new JsSearch.StopWordsTokenizer(
          	new JsSearch.SimpleTokenizer());

            JsSearch.StopWordsMap.the = false; // Do not treat "the" as a stop word
            JsSearch.StopWordsMap.bob = true;  // Treat "bob" as a stop word

            // default
            search.indexStrategy = new JsSearch.PrefixIndexStrategy();

            // this index strategy is built for all substrings matches.
            search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();

            // this index strategy is built for exact word matches.
            search.indexStrategy = new JsSearch.ExactWordIndexStrategy();
