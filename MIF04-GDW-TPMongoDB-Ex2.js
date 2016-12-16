/*** EXO 2 : Q1 **************************************************************/

var exo2q1map = function () {
    emit(this.cuisine, 0)
}

var exo2q1red = function (key, values) {
    return 0;
}

// 85 réponses
//{
//	"results" : [
//		{
//			"_id" : "American ",
//			"value" : 0
//		},
//		{
//			"_id" : "Bakery",
//			"value" : 0
//		},
//		...

/*** EXO 2 : Q2 **************************************************************/

var exo2q2map = function () {
    if (this.cuisine === "Bakery")
        emit(this.borough, {"restaurants": [this.name]});
}

var exo2q2red = function (key, values) {
    var returnObject = {};
    var restoNames = [];
    var valuesLength = values.length;
    for (var i = 0; i < valuesLength; i++) {
        restoNames.push(values[i].restaurants[0]);
    }
    returnObject["restaurants"] = restoNames;
    return returnObject;
}

//réponses
//{
//	"results" : [
//		{
//			"_id" : "Bronx",
//			"value" : {
//				"restaurants" : [
//					"Morris Park Bake Shop",
//					"E & L Bakery & Coffee Shop",
//					...
//				]
//			}
//		},
//		{
//			"_id" : "Brooklyn",
//			"value" : {
//				"restaurants" : [
//					"Tropical House Baking Co.",
//					"Cousin John'S Cafe And Bakery",
//					...
//				]
//			}
//		},
//    ...


/*** EXO 2 : Q3 **************************************************************/

var exo2q3map = function () {
    var returnObject = {};
    returnObject[this.cuisine] = 0;
    emit(this.borough, returnObject);
}

var exo2q3red = function (key, values) {
    var returnObject = {};
    var valuesLength = values.length;
    for (var i = 0; i < valuesLength; i++) {
        for (var prop in values[i]) {
            returnObject[prop] = 0;
        }
    }
    return returnObject;
}

//réponses
//{
//	"results" : [
//		{
//			"_id" : "Bronx",
//			"value" : {
//				"Bakery" : 0,
//				"American " : 0,
//				"Ice Cream, Gelato, Yogurt, Ices" : 0,
//				"Chinese" : 0,
//				...
//			}
//		},
//		{
//			"_id" : "Brooklyn",
//			"value" : {
//				"Hamburgers" : 0,
//				...

/*** EXO 2 : Q4 **************************************************************/


exo2q4map = function () {
    var numberOfVotes = 0;
    var scores = 0;
    this.grades.forEach(function (value) {
        scores += value.score;
        numberOfVotes += 1;
    });
    emit(this.borough, {"w": numberOfVotes, "s": scores, "avg": 0});
}

exo2q4red = function (key, values) {
    var returnObject = {};
    var sumOfVotes = 0;
    var sumOfGrades = 0;
    var valuesLength = values.length;
    for (var i = 0; i < valuesLength; i++) {
        sumOfVotes += values[i].w;
        sumOfGrades += values[i].s;
    }
    returnObject["w"] = sumOfVotes;
    returnObject["s"] = sumOfGrades;
    returnObject["avg"] = 0;
    return returnObject;
}

exo2q4fin = function (key, val) {
    var returnObject = {};
    var avg = (val.s / val.w);
    returnObject["w"] = val.s;
    returnObject["s"] = val.w;
    returnObject["avg"] = avg;
    return returnObject;
};

//{
//	"results" : [
//		{
//			"_id" : "Bronx",
//			"value" : {
//				"w" : 8706,
//				"s" : 96070,
//				"avg" : 11.034918447048012
//			}
//		},
//		{
//			"_id" : "Brooklyn",
//			"value" : {
//				"w" : 21963,
//				"s" : 251409,
//				"avg" : 11.44693347903292
//			}
//		},
//    ...


// var exo2q4 = db.restaurants.mapReduce(exo2q4map, exo2q4red, {out : {inline : 1}, finalize : exo2q4fin});
//db.restaurants.mapReduce(function(){emit(this.borough,0);}, function(k,v){return 0;}, {out : {inline : 1}});

/*** EXO 2 : Q5 **************************************************************/

var exo2q5map = function () {
    /*TODO*/
}

var exo2q5red = function (key, values) {
    /*TODO*/
}

//{
//	"results" : [
//		{
//			"_id" : "Bronx",
//			"value" : {
//				"min" : {
//					"score" : 0,
//					"id" : "African Terrace"
//				},
//				"max" : {
//					"score" : 82,
//					"id" : "La Potencia Restaurant"
//				}
//			}
//		},
//		 ...


/*** EXO 2 : Q6 **************************************************************/

exo2q6map = function () {
    /*TODO*/
}


exo2q6red = function (key, values) {
    /*TODO*/
}

exo2q6fin = function (key, val) {
    /*TODO*/
};


//{
//	"results" : [
//		{
//			"_id" : "Bronx",
//			"value" : {
//				"weight" : 2273,
//				"value" : 24705.066666666677,
//				"square" : 328788.94833616813,
//				"avg" : 10.868925062325859,
//				"std" : 5.150526008810278
//			}
//		},
//		{
//			"_id" : "Brooklyn",
//			"value" : {
//				"weight" : 5894,
//				"value" : 65394.81706349205,
//				"square" : 884031.1779332033,
//				"avg" : 11.09515050279811,
//				"std" : 5.185607104645353
//			}
//		},
//		{
//			"_id" : "Manhattan",
//			"value" : {
//				"weight" : 9987,
//				"value" : 110489.30079365098,
//				"square" : 1487019.4909753744,
//				"avg" : 11.063312385466205,
//				"std" : 5.14793996707556
//			}
//		},
//		{
//			"_id" : "Missing",
//			"value" : {
//				"weight" : 50,
//				"value" : 469,
//				"square" : 5414,
//				"avg" : 9.38,
//				"std" : 4.550801678646008
//			}
//		},
//		{
//			"_id" : "Queens",
//			"value" : {
//				"weight" : 5482,
//				"value" : 62099.9357142857,
//				"square" : 846345.8819501137,
//				"avg" : 11.327970761453065,
//				"std" : 5.1056995081692245
//			}
//		},
//		{
//			"_id" : "Staten Island",
//			"value" : {
//				"weight" : 935,
//				"value" : 10457.34642857143,
//				"square" : 139852.4814753401,
//				"avg" : 11.18432773109244,
//				"std" : 4.950946940833734
//			}
//		}
//	],
//	"timeMillis" : 1233,
//	"counts" : {
//		"input" : 25359,
//		"emit" : 24621,
//		"reduce" : 1265,
//		"output" : 6
//	},
//	"ok" : 1
//}


