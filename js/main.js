var zodiac = [
  {
    sign:"Aquarius",
    dates:"January 20 - February 18",
    traits:"Deep,imaginative,original and uncompromising",
    image:"img/aquarius.jpeg"
  },
  {
    sign:"Pisces",
    dates:"February 19 - March 20",
    traits:"Affectionative, empathetic, wise and artistic",
    image:"img/pisces.jpg"
  },
  {
    sign:"Aries",
    dates:"March 21 - April 19",
    traits:"Eager, dynamic, quick and competitive",
    image:"img/aries.jpeg"
  },
  {
    sign:"Taurus",
    dates:"April 20 - May 18",
    traits:"Strong, dependable, sensual and creative",
    image:"img/taurus.jpg"
  },
  {
    sign:"Gemini",
    dates:"May 21 - June 20",
    traits:"Versatile, expressive, curious and kind ",
    image:"img/gemini.jpg"
  },
  {
    sign:"Cancer",
    dates:"June 21 - July 22",
    traits:"Intuitive, sentimental, compassionate and protective",
    image:"img/cancer.jpg"
  },
  {
    sign:"Leo",
    dates:"July 23 - August 22",
    traits:"Dramatic, outgoing, fiery and self-assured",
    image:"img/leo.jpg"
  },
  {
    sign:"Virgo",
    dates:"August 23 - September 22",
    traits:"Deep,imaginative,original and uncompromising",
    image:"img/virgo.jpeg"
  },
  {
    sign:"Libra",
    dates: "September 23 - October 22",
    traits:"Social, fair-minded, diplomatic and gracious",
    image:"img/libra.jpg"
  },
  {
    sign:"Scorpio",
    dates:"October 23 - November 21",
    traits:"Passionate, stubborn, resourceful and brave",
    image:"img/scorpio.jpg"
  },
  {
    sign:"Sagittarius",
    dates:"November 22 - December 21",
    traits:"Extroverted, optimistic, funny and generous",
    image:"img/saggitarious.jpg"
  },
  {
    sign:"Capricorn",
    dates:"December 22 - January 19",
    traits:"Serious, independent, disciplined, and tenacious",
    image:"img/capricorn.jpg"
  }
];

var input = document.getElementById("zodiacName");
var myH1 = document.getElementById("zodiac");
var myH3 = document.getElementById("date");
var myP = document.getElementById("traits");
var myImg = document.getElementById("zodiacImg");


function getZodiac() {
  for(var i = 0; i < zodiac.length; i ++){
    if(input.value.toLowerCase() == zodiac[i].sign.toLowerCase()) {
      myH1.innerText = zodiac[i].sign;
      myH3.innerText = zodiac[i].dates;
      myP.innerText = zodiac[i].traits;
      myImg.src = zodiac[i].image;

      return;
    }
  }
}
