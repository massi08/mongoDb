/*** EXO 1 : Q1 **************************************************************/

var nom_etu1 = "Bouneffa Massinissa";
var num_etu1 = "p1310939";

var nom_etu2 = "Abebe Fanuel";
var num_etu2 = "p1311388";


/*** EXO 1 : Q2 **************************************************************/

var exo1q2map = function () {
    emit("restaurants", 1);
}

var exo1q2red = function (key, values) {
    var sum = 0;
    var valuesLength = values.length;
    for (var i = 0; i < valuesLength; i++) {
        sum += values[i];
    }
    return sum;
}

// db.restaurants.mapReduce(exo1q2map, exo1q2red, {out : {inline:1}});
// reponse : 25359

/*** EXO 1 : Q3 **************************************************************/

var exo1q3map = function () {
    emit("grades", this.grades.length)
}

var exo1q3red = function (key, values) {
    var sum = 0;
    var valuesLength = values.length;
    for (var i = 0; i < valuesLength; i++) {
        sum += values[i];
    }
    return sum;
}

// reponse : 93463


/*** EXO 1 : Q4 **************************************************************/

var exo1q4map = function () {
    if (this.borough === "Brooklyn")
        emit("Brooklyn", 1);
}

var exo1q4red = function (key, values) {
    var sum = 0;
    var valuesLength = values.length;
    for (var i = 0; i < valuesLength; i++) {
        sum += values[i];
    }
    return sum;
}

// reponse : 6086

/*** EXO 1 : Q5 **************************************************************/
var exo1q5 = function () {
    return db.restaurants.find({borough:"Brooklyn"}).count();
}
// exo1q5();
// reponse : 6086

/*** EXO 1 : Q6 **************************************************************/
var hasNameDaniel = function (key) {
    if(key.match(/daniel/ig) != null) {
        return true;
    }
    return false;
}

var exo1q6map = function () {
    if(hasNameDaniel(this.name))
        emit("nb_daniel", 1);
}

var exo1q6red = exo1q2red;
// reponse : 6


