var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(
    [
      {

        "type": "geojson",
        "data": {

          "geometry": {
            "coordinates": [
              [
                [-83.4796142578125,41.71187978193456]
              ]
            ],
            "type": "Point"
          },
          "type": "Feature",
          "properties": {
            "id": "toledoPoint",
          }
        }

      }
    ]
);
});

module.exports = router;
