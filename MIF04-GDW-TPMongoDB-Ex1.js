
/*** EXO 1 : Q1 **************************************************************/

var nom_etu1 = "Bouneffa Massinissa";
var num_etu1 = "p1310939";

var nom_etu2 = "Abebe Fanuel";
var num_etu2 = "p1311388";


/*** EXO 1 : Q2 **************************************************************/

var exo1q2map = function () {
	  emit("restaurants", 1)

}

var exo1q2red = function (key, values) {
var sum = 0;
  for (var i = 0; i < values.length; i++) {
  	sum = sum + values[i]
  }
  return sum
}

// db.restaurants.mapReduce(exo1q2map, exo1q2red, {out : {inline:1}});
// reponse : 25359

/*** EXO 1 : Q3 **************************************************************/

var exo1q3map = function () {
  emit("grades", this.grades.length)
}

var exo1q3red = exo1q2red;

// reponse : 93463


/*** EXO 1 : Q4 **************************************************************/

var exo1q4map = function () {
  /*TODO*/
  if(this.borough === "Brooklyn")
  	emit("Brooklyn", 1)
  	
}

var exo1q4red = exo1q2red;

// reponse : 6086

/*** EXO 1 : Q5 **************************************************************/

var exo1q5map = db.restaurants.count();
var exo1q5red = exo1q2red;
// reponse : 6086

/*** EXO 1 : Q6 **************************************************************/

var exo1q6map = function () {
  /*TODO*/
}

var exo1q6red = exo1q2red;
// reponse : 6


