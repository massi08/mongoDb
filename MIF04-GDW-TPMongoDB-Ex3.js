
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

/* TODO ici le tableau des temps d'exécution pour X exécution pour l'aggrégation pipeline */

var exo3q2timeMapReduceMean = 0.0; /*TODO : la valeur moyenne pour map/reduce */
var exo3q2timeAggregationMean = 0.0; /*TODO : la valeur moyenne pour l'aggrégation pipeline */

/*** EXO 3 : Q3 **************************************************************/

var exo3q3stages = [ /* TODO */ ];
//cette question est assez difficile

//REPONSES

//{ "_id" : "Missing", "max" : { "score" : 47, "id" : "Kfc" } }
//{ "_id" : "Staten Island", "max" : { "score" : 68, "id" : "Oaxaca Deli And Taqueria" } }
//{ "_id" : "Manhattan", "max" : { "score" : 131, "id" : "Murals On 54/Randolphs'S" } }
//{ "_id" : "Queens", "max" : { "score" : 84, "id" : "Spicy Shallot" } }
//{ "_id" : "Bronx", "max" : { "score" : 82, "id" : "La Potencia Restaurant" } }
//{ "_id" : "Brooklyn", "max" : { "score" : 86, "id" : "D & Y Restaurant" } }

