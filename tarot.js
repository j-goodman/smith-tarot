var majorArcana = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"];
var minorArcana = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];
var suits = ['Coins', 'Cups', 'Swords', 'Wands'];

onload = function () {
  var i; var j;
  for (i=0 ; i<majorArcana.length ; i++) {
    new Card (majorArcana[i], 'images/major/' + properToFilename(majorArcana[i]));
  }
  for (i=0 ; i<suits.length ; i++) {
    for (j=0 ; j<minorArcana.length ; j++) {
      new Card (arabicToRoman(minorArcana[j]) + " of " + suits[i], 'images/' + suits[i].toLowerCase() + '/' + minorArcana[j].toLowerCase());
    }
  }
};

var properToFilename = function (string) {
  var str = string;
  if (str.slice(0, 4) == "The ") {
    str = str.slice(4, str.length);
  }
  str = str.toLowerCase().replace(/ /g, "-");
  return str;
};

var arabicToRoman = function (int) {
  // Good for the relevant numbers for tarot: 0 to 21;
  num = parseInt(int);
  result = "";
  while (num > 9) {
    result += "X";
    num -= 10;
  }
  while (num > 0) {
    if (num < 4) {
      while (num > 0) {
        result += "I";
        num -= 1;
      }
    } else {
      if (num === 4) {
        result += "IV";
        num -= 4;
      } else if (num === 9) {
        result += "IX";
        num -= 9;
      } else {
        result += "V";
        num -= 5;
      }
    }
  }
  return result;
};

var Card = function (name, src) {
  this.table = document.getElementsByTagName("tabletop")[0];
  this.name = name;
  this.image = src + '.jpg';
  this.initializeElement();
};

Card.prototype.initializeElement = function () {
  var el = document.createElement('IMG');
  el.src = this.image;
  el.style.width = 180;
  el.style.height = 318;
  el.className = 'card';
  this.table.appendChild(el);
};
