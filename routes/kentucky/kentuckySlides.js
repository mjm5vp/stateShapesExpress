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
        description: `The far western end of Kentucky is a small “island” that is separated from the rest of the state by the Mississippi River.`,
        zoom: 7.5,
        pitch: 50,
        bearing: -10,
        center: [-88.96677197787332, 36.62066842734636],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["kentuckyBorder", "mississippiRiver"]
        }
      },
      {
        description: "This 11-square-mile area resulted from the fact that 36°30' crosses the meandering Mississippi several times, creating a pocket of land within its bend.",
        zoom: 9,
        pitch: 70,
        bearing: -90,
        center: [-88.7652794133741, 36.502940595507965],
        showLayer: {
          show: true,
          layers: ["kentuckyBorder", "mississippiRiver"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: "Unlike Illinois, Utah, Mississippi, and Massachusetts, where state boundaries were adjusted to eliminate pockets of land with difficult access, this area was not similarly adjusted by making it part of Tennessee.",
        zoom: 4,
        pitch: 40,
        bearing: 0,
        center: [-89.45432461440069, 37.25297564108352],
        showLayer: {
          show: true,
          layers: ["fullIllinois", "fullUtah", "fullMississippi", "fullMassachusetts"]
        },
        hideLayer: {
          hide: true,
          layers: ["kentuckyBorder", "mississippiRiver"]
        }
      },
      {
        description: "Neither Kentucky nor Tennessee, having finally acquired a way to settle their longstanding border dispute, was anxious to spark a new one.",
        zoom: 7,
        pitch: 30,
        bearing: -20,
        center: [-87.2054549712439, 36.32158078147829],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["fullIllinois", "fullUtah", "fullMississippi", "fullMassachusetts"]
        }
      }

    ]
);
});

module.exports = router;
