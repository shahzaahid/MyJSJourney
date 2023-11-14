// protot type
const myHeros = ["Gulnawaz sir, Nayeem sir"];
const name = "shah zaid kirmani";
const heros = {
  laptop: "programming",
  mobile: "turorial",

  getLaptop: function () {
    console.log(`power of laptop ${this.laptop}`);
  },
};

Object.prototype.zahid = function () {
  console.log("shah zahid is avaliable in every object");
};

//objet
heros.zahid();
//aray
myHeros.zahid();
//string
name.zahid();

//now one test

Array.prototype.say = function () {
  console.log("Zahid keep going");
};
myHeros.say();
//the above one should  be permissible and it is giving the correct results

// heros.say(); it should now work and the same is happening
