var zodiac = [
  {
    sign:"Aquarius",
    dates:"January 20 - February 18",
    traits:"deep,imaginative,original and uncompromising",
    image:""
  },
  {
    sign:"Pisces",
    dates:"February 19 - March 20",
    traits:"affectionative, empathetic, wise and artistic",
    image:""
  },
  {
    sign:"Aries",
    dates:"March 21 - April 19",
    traits:"eager, dynamic, quick and competitive",
    image:""
  },
  {
    sign:"Taurus",
    dates:"April 20 - May 18",
    traits:"strong, dependable, sensual and creative",
    image:""
  },
  {
    sign:"Gemini",
    dates:"May 21 - June 20",
    traits:"versatile, expressive, curious and kind ",
    image:""
  },
  {
    sign:"Cancer",
    dates:"June 21 - July 22",
    traits:"intuitive, sentimental, compassionate and protective",
    image:""
  },
  {
    sign:"Leo",
    dates:"July 23 - August 22",
    traits:"dramatic, outgoing, fiery and self-assured",
    image:""
  },
  {
    sign:"Virgo",
    dates:"August 23 - September 22",
    traits:"deep,imaginative,original and uncompromising",
    image:""
  },
  {
    sign:"Libra",
    dates: "September 23 - October 22",
    traits:"social, fair-minded, diplomatic and gracious",
    image:""
  },
  {
    sign:"Scorpio",
    dates:"October 23 - November 21",
    traits:"passionate, stubborn, resourceful and brave",
    image:""
  },
  {
    sign:"Sagittarius",
    dates:"November 22 - December 21",
    traits:"extroverted, optimistic, funny and generous",
    image:""
  },
  {
    sign:"Capricorn",
    dates:"December 22 - January 19",
    traits:"serious, independent, disciplined, and tenacious",
    image:""
  }
];

var input = document.getElementById("zodiacName");
var myH1 = document.getElementById("getZodiac");
var myH3 = document.getElementById("date");
var myP = document.getElementById("trait");
var myImg = document.getElementById("zodiacImg");


function getZodiac() {
  for(var i = 0; i < zodiac.length; i ++){
    if(input.value == zodiac[i].name) {
      myH1.innerText = zodiac[i].name;
      myH3.innerText = zodiac[i].dates;
      myP.innerText = Zodiac[i].traits;

      return;
    }
  }

}
