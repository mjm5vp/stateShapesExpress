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
        description: `The charter creating Georgia stated that from the headwaters of the Chattooga River, the colony’s northern boundary was to be a direct line west to the Pacific Ocean.`,
        zoom: 6.5,
        pitch: 20,
        bearing: -5,
        center: [-83.78328225915367, 34.67131197177274],
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
        description: "But the headwaters of the Chattooga River are farther north than the 35th parallel, which was the boundary that North and South Carolina had established when the Carolina Colony divided in 1710.",
        zoom: 8.5,
        pitch: 70,
        bearing: -60,
        center: [-83.78328225915367, 34.67131197177274],
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
        description: "A line due west from the juncture of the Chattooga River and the 35th parallel became the northern border of Georgia.",
        zoom: 7,
        pitch: 70,
        bearing: -90,
        center: [-83.13847867009369, 34.98674868868606],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: false,
          layers: ["georgia35"]
        }
      },
      {
        description: "But the line was incorrectly drawn, and the false 35th parallel left out an important piece of land.",
        zoom: 11,
        pitch: 30,
        bearing: -20,
        center: [-85.60373892941197, 34.993402394258354],
        showLayer: {
          show: true,
          layers: ["georgia35"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: "With the incorrect line, Georgia would not have access to the Tennessee River.",
        zoom: 13.3,
        pitch: 30,
        bearing: -20,
        center: [-85.60373892941197, 34.993402394258354],
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
        description: "Atlanta is one of the few major cities not built on a river, so this boundry deprives Atlanta of a major water source.",
        zoom: 7.5,
        pitch: 60,
        bearing: -30,
        center: [-84.47782354891535, 33.73438044921012],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      }

    ]
);
});

module.exports = router;
