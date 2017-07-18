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
        description: "Test description 0",
        zoom: 9,
        pitch: 60,
        bearing: 0,
        center: [-87.03369140625,46.13417004624326],
        toggleLayer: {
          toggle: false,
          toggleState: null,
          layer: null
        },
        showLayer: {
          show: false,
          layer: null
        },
        hideLayer: {
          hide: false,
          layer: null
        }
      }
    ]
)});

module.exports = router;
