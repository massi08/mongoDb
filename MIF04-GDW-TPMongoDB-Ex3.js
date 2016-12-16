/*** EXO 3 : Q1 **************************************************************/

var exo3q1stages = [
    {
        $unwind: "$grades"
    },
    {
        $group: {
            _id: "$borough",
            avg: {
                $avg: "$grades.score"
            }
        }
    }
];

//> db.restaurants.aggregate( exo3q1stages );

//REPONSES

//{ "_id" : "Missing", "avg" : 9.632911392405063 }
//{ "_id" : "Staten Island", "avg" : 11.370957711442786 }
//{ "_id" : "Manhattan", "avg" : 11.418151216986018 }
//{ "_id" : "Queens", "avg" : 11.634865110930088 }
//{ "_id" : "Bronx", "avg" : 11.036186099942562 }
//{ "_id" : "Brooklyn", "avg" : 11.44797595737899 }


/*** EXO 3 : Q2 **************************************************************/

/* TODO ici le tableau des temps d'exécution pour X exécution de map/reduce */
var mapReduceTab = function () {
    var perfTab = [];
    var initialTime = 0;
    var finishTime = 0;
    for (var i = 0; i < 20; i++) {
        initialTime = Date.now();
        db.restaurants.mapReduce(exo2q4map, exo2q4red, {out: {inline: 1}, finalize: exo2q4fin});
        finishTime = Date.now() - initialTime;
        perfTab.push(finishTime);
    }
    return perfTab;
}

/* TODO ici le tableau des temps d'exécution pour X exécution pour l'aggrégation pipeline */
var aggregationTab = function () {
    var perfTab = [];
    var initialTime = 0;
    var finishTime = 0;
    for (var i = 0; i < 10; i++) {
        initialTime = Date.now();
        db.restaurants.aggregate(exo3q1stages);
        finishTime = Date.now() - initialTime;
        perfTab.push(finishTime);
    }
    return perfTab;
}

/* La valeur moyenne pour map/reduce */
var exo3q2timeMapReduceMean = function () {
    var perfTab = mapReduceTab();
    var totalTime = 0;
    perfTab.forEach(function (time) {
        totalTime += time;
    });
    return totalTime / 10;
};

/* La valeur moyenne pour l'aggrégation pipeline */
var exo3q2timeAggregationMean = function () {
    var perfTab = aggregationTab();
    var totalTime = 0;
    perfTab.forEach(function (time) {
        totalTime += time;
    });
    return totalTime / 10;
};

/*  Debug
 print("La valeur moyenne Map Reduce: " + exo3q2timeMapReduceMean()); // 20 itérations:  432.2ms ; 10 itérations;  864.4ms
 print("La valeur moyenne Aggregation: " + exo3q2timeAggregationMean()); // 20 itérations:  132.052ms ; 10 itérations;  131.7ms
 */
/*** EXO 3 : Q3 **************************************************************/

var exo3q3stages = [/* TODO */];
//cette question est assez difficile

//REPONSES

//{ "_id" : "Missing", "max" : { "score" : 47, "id" : "Kfc" } }
//{ "_id" : "Staten Island", "max" : { "score" : 68, "id" : "Oaxaca Deli And Taqueria" } }
//{ "_id" : "Manhattan", "max" : { "score" : 131, "id" : "Murals On 54/Randolphs'S" } }
//{ "_id" : "Queens", "max" : { "score" : 84, "id" : "Spicy Shallot" } }
//{ "_id" : "Bronx", "max" : { "score" : 82, "id" : "La Potencia Restaurant" } }
//{ "_id" : "Brooklyn", "max" : { "score" : 86, "id" : "D & Y Restaurant" } }

