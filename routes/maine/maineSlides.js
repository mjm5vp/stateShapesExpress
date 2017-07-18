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
    description: "Maine description 0",
    zoom: 9,
    pitch: 60,
    bearing: 0,
    center: [-77.03369140625,46.13417004624326],
    showLayer: {
      show: false,
      layers: []
    },
    hideLayer: {
      hide: false,
      layers: []
    }
  },
  {
    description: "1 Maine",
    zoom: 8,
    pitch: 40,
    bearing: 10,
    center: [-73.49609375,41.73852846935917],
    showLayer: {
      show: true,
      layers: ["toledoPoint"]
    },
    hideLayer: {
      hide: false,
      layers: []
    }
  },
  {
    description: "Maine 2",
    zoom: 7,
    pitch: 50,
    bearing: -10,
    center: [-75.27587890625,46.042735653846506],
    showLayer: {
      show: true,
      layers: ["upperPen"]
    },
    hideLayer: {
      hide: true,
      layers: ["toledoPoint"]
    }
  },
  {
    description: "3rd Maine",
    zoom: 9,
    pitch: 60,
    bearing: 20,
    center: [-73.84765625,46.01222384063236],
    showLayer: {
      show: false,
      layers: []
    },
    hideLayer: {
      hide: true,
      layers: ["upperPen"]
    }
  }
    ]
);
});

module.exports = router;
