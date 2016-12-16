// Print only dublicate characters 
function duplicates(str) {
	var dupObj = {}
	for(var i=0; i < str.length; i++) {
		var character = str.charAt(i);
		var doubles = {};
		if (dupObj[character]) {
			dupObj[character]++;
		} else {
			dupObj[character] = 1;
		}
	}
	return dupObj;
}

duplicates('javascripts') 


// check if two Strings are anagrams

function anagrams(str1, str2) {
	if (str1.length != str2.length) {
			return false;
	}
	var sortedStr1 = str1.toLowerCase().split('').sort().join().trim();
	var sortedStr2 = str2.toLowerCase().split('').sort().join().trim();
	return (sortedStr1 == sortedStr2);
}

anagrams('pot', 'top'); 
anagrams('hotel', 'given'); 
anagrams('Army', 'Mary'); 
anagrams('Eleven plus two', 'Twelve plus one'); 

// print first non repeated character from String - AKA unique char
function firstNonRepeatChar(str) {
	var charCount ={};
	var atLeastOne = false;
	var size = str.length;

	for (var i=0; i<size; i++) {
		var character = str[i]
		if (charCount[character]) {
			charCount[character]++;
			atLeastOne = true;
		} else {
			charCount[character] = 0;
		}
	}
	if(atLeastOne) {
		for(var j in charCount) {
			if(charCount[j] == 0) {
				return j;
			}
		}
	}
	return 'no unique characters present'
}

firstNonRepeatChar('asdfkas')
firstNonRepeatChar('boot')
firstNonRepeatChar('boottb')

var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return s[i];
      } 
   }
   return -1;
};

//reverse String using Iteration
// with new string
function reverseStrIterate(str) {
	var size = str.length;
	if (size < 2) {
		return str;
	}
	var revrs = '';
	for (var i=size-1; i>=0; i--) {
		 revrs = revrs += str[i];
	}
	console.log(revrs)
}
reverseStrIterate('sally') // yllas
reverseStrIterate("Bake Bread") //daerB ekaB

// with new array
function reverseStr(str) {
	var size = str.length - 1;
	var revs = [];
	for(var i=0; i<size; i++) {
		revs.push(revs.charAt(size-1));
	}
	return revs.join('');
}

// reverse String using Recursion
function recursiveReverseStr(str) {
	return (str === '') ? '' : reverse(str.substr[1] + str[0])
}

// half-index switch for-loop 

function reverse(str) {
	var size = str.length;
	var halfIndex = Math.floor(size/2) -1;
	var tmp;
	for (var i =0; i <= halfIndex; i++) {
	    tmp = str[size - i - 1]; // local storing char from -1 index left to 0 idx
	    str[size - i - 1] = str[i]; // sets new right index as the left index
	    str[i] = tmp; // sets left idx as the old right idx
	}
	return str.join('');
}

reverse('these');
reverse('them');







































