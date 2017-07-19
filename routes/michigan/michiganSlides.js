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
        description: `Michigan and Ohio were fighting for the city of <a href="https://en.wikipedia.org/wiki/Toledo_War" target="_blank">Toledo</a>.`,
        zoom: 10,
        pitch: 60,
        bearing: 20,
        center: [-83.49609375,41.73852846935917],
        showLayer: {
          show: true,
          layers: ["toledoPoint"]
        },
        hideLayer: {
          hide: true,
          layers: ["upperPen"]
        }
      },
      {
        description: "To end the violence, Congress offered Michigan this land as compensation for the taken land",
        zoom: 6,
        pitch: 40,
        bearing: 10,
        center: [-87.03369140625,46.13417004624326],
        showLayer: {
          show: true,
          layers: ["upperPen"]
        },
        hideLayer: {
          hide: true,
          layers: ["toledoPoint","isleRoyale"]
        }
      },
      {
        description: "Congress also offered Isle Royale. This island in Lake Superior is closer to Canada than the United States",
        zoom: 9,
        pitch: 50,
        bearing: -20,
        center: [-88.90432906362237, 47.95125916743743],
        showLayer: {
          show: true,
          layers: ["isleRoyale"]
        },
        hideLayer: {
          hide: true,
          layers: ["upperPen"]
        }
      },
      {
        description: "In the treaty ending the Revolution, Benjamin Franklin negotiated the inclusion of Isle Royale (known to be rich in copper) within the boundaries of the United States.",
        zoom: 8,
        pitch: 40,
        bearing: -5,
        center: [-88.90432906362237, 47.95125916743743],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["upperPen","isleRoyale"]
        }
      },
      {
        description: "Michigan took the deal.",
        zoom: 5,
        pitch: 30,
        bearing: -15,
        center: [-85.21811446437545, 44.2239073390445],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: false,
          layers: ["upperPen"]
        }
      }
    ]
);
});

module.exports = router;
