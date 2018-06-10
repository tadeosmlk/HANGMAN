function addTextToPage(event)
{   
	var key = event.key;
	if(event.keyCode >= 48 && event.keyCode <= 90)
	{   
		if(guessedLetters.indexOf(key) < 0 && wordToGuess.indexOf(key) < 0  ){
		 		TotalNumberofTriesAllowed--;  //decriment for every try
		 		document.querySelector('#singerPicColumn').innerText = '';
		 		document.querySelector('#videoHeaderRow').innerText = ''
			}

	  if (TotalNumberofTriesAllowed > 0)
	  {
			document.querySelector('#NumberOfTriesRemainingId').innerText = TotalNumberofTriesAllowed

			var letters = document.querySelector('#currentword')
			var alreadyguessedletters = document.querySelector('#AlreadyGuessed');			
			if(wordToGuess.includes(key))
			{    
				goodGuesses=goodGuesses+key
        
				for (i = 0; i <= wordToGuess.length; i++)
			    {   console.log('i is : ' + i)
			    	if(wordToGuess[i] == key)
			    	{//Replace the '-' by the found letter to dynamically update ui
			    		defaultword = defaultword.substr(0, i) + key + defaultword.substr(i+1);
			    	}
			    }
				
				//letters.innerText = defaultword;
				if(defaultword == wordToGuess)
				{//if Successfully found word, increment word count and reset all other variables
					win++;
				 	document.querySelector('#wins').innerText = win;
				 	document.querySelector('#singerPicColumn').innerHTML = singerVideoComb[wordToGuess][0];
				 	winnercomment = 'You Guessed Correct. Here is '+ singerVideoComb[wordToGuess][1] + ' by ' + wordToGuess;
				 	document.querySelector('#videoHeaderRow').innerText = winnercomment
				 	resetVars();
				 	document.querySelector('#NumberOfTriesRemainingId').innerText = TotalNumberofTriesAllowed
				}
		 		letters.innerText = defaultword;
			}
			
			
			if(guessedLetters.includes(key))
			{     //if the newly Typed key exists, do nothing to the ui.
				console.log('gussedLetters = ' + guessedLetters + '\n and Key is : '+ key)
				console.log('Letter found.');
			
			}
			else //else push to an array and print to screen
			{
				//console.log(guessedLetters)
				AlreadyGuessed.innerText = AlreadyGuessed.innerText + key;
				guessedLetters.push(key);
			}
		}
		else{  //if run out of tries, 
			if(TotalNumberofTriesAllowed == 0){
				defaultword = 'Word to Guess was:' + wordToGuess;
				document.querySelector('#currentword').innerText = defaultword;
				document.querySelector('#NumberOfTriesRemainingId').innerText = '0. You exceeded Max number of tries.';
			}
			else{
				resetVars(); 
		    	document.querySelector('#currentword').innerText = defaultword;
		    	document.querySelector('#NumberOfTriesRemainingId').innerText = TotalNumberofTriesAllowed;
		}
	}

	}// else
	// 	alert('Invalid key! Try again')
}
//------Start resetVars-------------- 

function resetVars(){
	goodGuesses = ''
	TotalNumberofTriesAllowed = 10;
	NumberOfTriesCounter = 0;
	guessedLetters = [];
	wordToGuess = getRandWord(wordToGuessOrg);
	defaultword='';
	for (i = 0; i < wordToGuess.length ; i++)
	{
		defaultword = defaultword+'-'
	}

}

//------Start getRandWord-------------- 
function getRandWord(wordToGuessOrg)
{
	randIndex = Math.floor(Math.random()*wordToGuessOrg.length);
	return wordToGuessOrg[randIndex];
}


//------Start-------------- 
var win = 0;
var j = 0;
var goodGuesses =''
var TotalNumberofTriesAllowed = 10;
var NumberOfTriesCounter = 0;
var guessedLetters = [];
//var wordToGuessOrg = ['Katy','Madona', 'Rihanna',  'Beyonce', 'Britney', 'Katy']
var wordToGuessOrg = ['Drake', 'PostMalone', 'Gambino', 'Zedd', 'LilBaby', 'CardiB', 'Ella', 'Rexha', 'Ariana', 'Shawn']
var singerVideoComb = {
'Drake':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/U9BwWKXjVaI?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' Nice For What']
, 
'PostMalone':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/au2n7VVGv_c?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' Psycho']
, 
'Gambino':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/VYOjWnS4cMY?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' This Is America']
, 
'Zedd':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/M3mJkSqZbX4?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' The Middle']
, 
'LilBaby':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/Z8IhZMJ3epU?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' Yes Indeed']
, 
'CardiB':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/xTlNMmZKwpA?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' I like It']
, 
'Ella':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/6YNZlXfW6Ho?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' Boo\'d Up']
, 
'Rexha':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/zDo0H8Fm7d0?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' Meant to Be']
, 
'Ariana':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/ffxKSjUwKdU?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' No Tears Left To Cry']
, 
'Shawn':['<div style="position:relative;height:0;padding-bottom:37.06%"><iframe src="https://www.youtube.com/embed/IlkBLwl4aBM?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="971" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', ' In My Blood']
 };
var defaultword = ''
var wordToGuess = wordToGuessOrg[0]
for (i = 0; i < wordToGuess.length ; i++)
    	{
    		defaultword = defaultword+'-'
    	} 

document.onkeyup = addTextToPage;
