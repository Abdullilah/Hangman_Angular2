import {Component, OnInit} from 'angular2/core';

@Component({
 selector: 'gameComp',
 template: `
     <div class="game-section">
       <div class="container">
         <div class="row">
           <div class="col-xs-12"> 
             <div *ngIf="playIt && !congrate">
               <div class="box">
                 <img alt="part1" class="head" *ngIf="counter<12"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/head.png">
                 <img alt="part1" class="neck" *ngIf="counter<11"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/neck.png">
                 <img alt="part2" class="corpus" *ngIf="counter<10"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/corpus.png">
                 <img alt="part3" class="right-arm" *ngIf="counter<9"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-arm.png">
                 <img alt="part4" class="left-arm" *ngIf="counter<8"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/left-arm.png">
                 <img alt="part5" class="right-hand" *ngIf="counter<7"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-hand.png">
                 <img alt="part6" class="left-hand" *ngIf="counter<6"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-hand.png">
                 <img alt="part7" class="right-leg" *ngIf="counter<5"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-leg.png">
                 <img alt="part8" class="left-leg" *ngIf="counter<4"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-leg.png">
                 <img alt="part9" class="right-foot" *ngIf="counter<3"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-foot.png">
                 <img alt="part10" class="left-foot" *ngIf="counter<2"
                      src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/imgs/right-foot.png">
               </div>
               <div class="word-section">
                 <ul>
                   <li *ngFor="#letter of wordArrDashes"><span>{{letter}}</span></li>
                 </ul>
               </div>
               <div>Number of Remaining Attempts: <span class="counter">{{counter}}</span></div>
               <span>Write One Letter And Check It ... </span>
               <input type="text" maxlength="1" #inputLetter (keyup)="0">
               <button (click)="checkLetter(inputLetter.value)" [disabled]="inputLetter.value.length=='0'">Check</button>
               <span class="uwaga" *ngIf="inputLetter.value.length=='0'">Enter One Letter Please!</span>
             </div>
             <div class="game-over" *ngIf="!playIt">
               <img src="https://raw.githubusercontent.com/netguru/frontend-recruitment-task/master/sources/hangman-game-over.png" alt="game over">
             </div>
             <div class="congrate" *ngIf="congrate">
               <img src="http://i45.tinypic.com/adont0.gif[" alt="Congrate">
             </div>                        
           </div>
         </div>
       </div>
     </div>
 `
})


export class GameComponent implements OnInit{
  public playIt = true;       // Play is avaliable
  public congrate = false;    // The player win
  public counter = 12;        // How many wrong times player can do
  public randomWord: string;  // The random word
  public word: string;        // The random word with lowercase 
  public wordArr = [];        // Convert the word to array of letters
  public wordArrDashes: [];   // Array of dashes with same size of the missing word
  public num1: number;        // random number represents which words category from the dataset
  public num2: number;        // random number represents which word from the words category

  ngOnInit():any {
    this.declearDate();
    // Just for tester, to know what is the missing word
    console.log(this.randomWord);
  }

  // Give values for variables
  declearDate(){
    this.num1 = this.getRandomInt(0, this.info.length);
    this.num2 = this.getRandomInt(0, this.info[this.num1].words.length);
    this.randomWord = this.info[this.num1].words[this.num2];
    this.word = this.randomWord.toLowerCase();
    this.wordArr = this.word.split("");
    this.wordArrDashes = this.fillArray("_", this.wordArr.length);
    this.fillSpaces();
  }

  // Called when the user press 'Check' button
  checkLetter(letter: string){
    this.letterInArray(this.wordArr, this.wordArrDashes, letter.toLowerCase(), this.wordArr.length);
  } 

  // Make array of dashes with same length of the word
  fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(value);
    }
    return arr;
  }

  //Fill down all spaces
  fillSpaces(){
    for(var i = 0; i < this.wordArr.length; i++){
      if(this.wordArr[i] == ' '){
        this.wordArrDashes[i] = ' ';
      }
    }
  }

  //Check if the letter is in the array and check Number of Remaining Attempts and (Congrate or Game over)
  letterInArray(oldArr, newArr, letter, len){
    var inIt = 0;
    var correctCounter = 0;
    for(var i = 0; i < len; i++){
      if(oldArr[i] == letter){
        newArr[i] = letter;
        ++inIt;
        }
    }
    if(inIt <= 0){
      this.counter -= 1;
      if(this.counter <= 0){
        this.playIt = false;
      }
    }
    this.congrate = this.arraysEqual(oldArr,newArr);
  }

  // Check Two Arrays if they are same
  arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
      return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
        return false;
    }
    return true;
  }

  // Get random number between two numbers
  getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max-1) - min + 1)) + min;
  }
 /*
   Real data from wordnik from this link: 
   http://api.wordnik.com:80/v4/word.json/forest/relatedWords?useCanonical=false&limitPerRelationshipType=1000&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
  */
  public info = [
      {
        "relationshipType":"antonym",
        "words":["prairie"]
      },
      {
        "relationshipType":"verb-form",
        "words":["fored","forested","foresting","forests"]
      },
      {
        "relationshipType":"cross-reference",
        "words":["crown forest","composite forest","national forest","right of forest","town forest","rain forest","sprout forest","savanna forest","forest liberties","forest law","federal forest reserve","drift of the forest","fringing forest","protection forest","soil","forest army-worm","pure forest","park forest","submarine forest","normal forest","keeper of the forest","ordinance of the forest","forest service","forest influences","forest-bed group","national forest reserve","charter of the forest","absolute forest land","communal forest","monsoon forest","forest court","cromer forest-bed","index forest","forest floor","light forest","thorn forest","holt","wood","jungle","deforest","weald","bush","woodland","woods"]
      },
      {
        "relationshipType":"etymologically-related-term",
        "words":["afforest"]
      },
      {
        "relationshipType":"synonym",
        "words":["sylvan","woodland","wildwood"]
      },
      {
        "relationshipType":"rhyme",
        "words":["Forrest","deforest","florist","reforest"]
      },
      {
        "relationshipType":"same-context",
        "words":["wood","mountain","jungle","desert","garden","land","grove","sea","grass","field","sky","ocean","region","meadow","landscape"]
      }
  ];

}