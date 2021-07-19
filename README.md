# techdegree_project4
 Wheel of Fortune type word guessing game.

 Goal: User will guess phrase using either the on screen keyboard or their keyboard, revealing letters on the page.
 If letter is not present in the included phrase, a life marker is removed. 
 Game is over if user guesses phrase, or misses a guess five times.

 app.js stores the variables for the game and handles interaction via two classes
 Phrase.js and Game.js
 
  ** Personalized Stylings **
  - Project CSS files updated to prevent user from highlighting phrase div and discovering hidden phrase
  - HTML updated to reference new life tokens
  - additional images added to the /images folder to use throughout game
  - Background images changed on start screen overlay
  - Different Win/Loss backgrounds added to overlay and change based on result.
  - Color pallete updated with new colors to better align with Bloodborne theme


 Phrase.js methods:
 # addPhraseToDisplay()  
 takes the provided active phrase, spits into an array and displays it hidden on the page
 # checkLetter() 
 verifies if letter is included in active phrase
 # showMatchedLetter() 
 reveals the letter on the page if correct user selection is made

 Game.js methods
 # makePhrase()
 instantiates Phrase class and returns a new array of phrase objects
 # getRandomPhrase()
 Chooses a random phrase from the array of phrases
 # startGame()
 Puts the game into the start state with no letters matched and all lives available
 # handleInteraction 
 Manages the actions which take place after a user selects a letter
 # removeLife()
 Removes a life token if letter not matched
 # checkForWin()
 Checks that the entire phrase is matched
 # gameOver()
 Places the game in an end state and resets all aspects of the game to default state/
 Displays a win or lose message dependant on results of game
