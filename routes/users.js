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
      },
      {
        description: "1 Description",
        zoom: 8,
        pitch: 40,
        bearing: 10,
        center: [-83.49609375,41.73852846935917],
        toggleLayer: {
          toggle: false,
          toggleState: null,
          layer: null
        },
        showLayer: {
          show: true,
          layer: "toledoPoint"
        },
        hideLayer: {
          hide: false,
          layer: null
        }
      },
      {
        description: "Description 2",
        zoom: 7,
        pitch: 50,
        bearing: -10,
        center: [-85.27587890625,46.042735653846506],
        toggleLayer: {
          toggle: true,
          toggleState: "on",
          layer: "upperPen"
        },
        showLayer: {
          show: true,
          layer: "upperPen"
        },
        hideLayer: {
          hide: true,
          layer: "toledoPoint"
        }
      },
      {
        description: "3rd Description",
        zoom: 9,
        pitch: 60,
        bearing: 20,
        center: [-83.84765625,46.01222384063236],
        toggleLayer: {
          toggle: true,
          toggleState: "off",
          layer: "upperPen"
        },
        showLayer: {
          show: false,
          layer: null
        },
        hideLayer: {
          hide: true,
          layer: "upperPen"
        }
      }
    ]
);
});

module.exports = router;
