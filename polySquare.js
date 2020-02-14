// Polybius Square, Bifid Cipher
// The basic Polybius Square is a 5x5 square grid with the letters A-Z written into the grid. "I" and "J" typically share a slot (as there are 26 letters and only 25 slots).

// 1	2	3	4	5
// 1	A	B	C	D	E
// 2	F	G	H	I/J	K
// 3	L	M	N	O	P
// 4	Q	R	S	T	U
// 5	V	W	X	Y	Z
// The Bifid cipher uses the Polybius square but adds a layer of complexity.

// Start with a secret message. Remove spaces and punctuation.

// plaintext = "ikilledmufasa"
// Encipher the message using the basic Polybius cipher (see my previous challenge — right click and select "open in new tab"), but write the numbers in two rows under the message, like so:

// i	k	i	l	l	e	d	m	u	f	a	s	a
// 2	2	2	3	3	1	1	3	4	2	1	4	1
// 4	5	4	1	1	5	4	2	5	1	1	3	1
// Read off the numbers horizontally, in pairs:

// 22 23 31 13 42 14 14 54 11 54 25 11 31
// Generate the ciphertext by converting these new pairs of numbers into new letters using the Polybius square.

// ciphertext = "ghlcrddyaykal"
// Create a function that takes a plaintext or ciphertext, and returns the corresponding ciphertext or plaintext.

// Examples
// bifid("I killed Mufasa!") ➞ "ghlcrddyaykal"

// bifid("ghlcrddyaykal") ➞ "ikilledmufasa"

// bifid("hi") ➞ "go"

var a = 'hello';

function bifid(text) {
	modelSquare ={
        'a': [1, 1],
        'b': [1, 2],
        'c': [1, 3],
        'd': [1, 4],
        'e': [1, 5],
        'f': [2, 1],
        'g': [2, 2],
        'h': [2, 3],
        'i': [2, 4],
        'k': [2, 5],
        'l': [3, 1],
        'm': [3, 2],
        'n': [3, 3],
        'o': [3, 4],
        'p': [3, 5],
        'q': [4, 1],
        'r': [4, 2],
        's': [4, 3],
        't': [4, 4],
        'u': [4, 5],
        'v': [5, 1],
        'w': [5, 2],
        'x': [5, 3],
        'y': [5, 4],
        'z': [5, 5]
    }
    var phrase = text.toLocaleLowerCase();
    var arrPhrase = phrase.split('')
    var letters = Object.keys(modelSquare); 
    var values = Object.values(modelSquare)

    var num1 = [];
    var num2 = [];
   
    var res1 = [];
    var res2 = [];

    var result = [];

    var trad = [];
    var trad1 = [];

    var final = [];

    for(let i=0; i<letters.length; i++){
        //separate values
        num1.push(values[i][0]);
        num2.push(values[i][1]);
    }

    for(let i=0; i<arrPhrase.length; i++){
        var regEx = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]/;
        if(arrPhrase[i].match(regEx)){
            arrPhrase.splice(i, 1)
        }
    }
    //console.log(arrPhrase)

    function conversionToNum(letter){
        for (let i=0; i<letters.length; i++){
            //connect letters & values
            if(letter === letters[i]){
                res1.push(num1[i])
                res2.push(num2[i]) 
                // res2.push([num2[i], num2[i+1]])                
            }
        }
 
    }

    
    arrPhrase.map(item => conversionToNum(item))
    result.push(res1.concat(res2))
    var arrIz = result[0]
    for( let h=0; h<arrIz.length; h++){
        trad.push([arrIz[h], arrIz[h+1]])
    }

    for(let k=0; k<(trad.length-1) ; k++){
        if(k%2 === 0){
            trad1.push(trad[k])
        }

    }
    

    // function remove(array, element) {
    //     const index = array.indexOf(element);
    //     array.splice(index, 1);
    //   }



    //console.log(trad1)
    function convesionToLetter(arr){
        for(let j=0; j<values.length; j++){
            if(JSON.stringify(arr) === JSON.stringify(values[j])){
                final.push(letters[j])
            }
        }
    }

    trad1.map(arr => convesionToLetter(arr))
    
    var strFrinale = final.join('')
    console.log(strFrinale)
    return strFrinale
    
}

bifid('I will look for you, I will find you, and I will kill you.')