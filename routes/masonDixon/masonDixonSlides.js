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
        description: `Maryland was created by a royal charter issued in 1632 by King Charles I. The king created Maryland to provide a place in the New World for England’s Catholics. But this act, while full of good inten- tions, was also full of bad geography. Those errors led to a long history of border disputes between Maryland and every one of its neighbors.`,
        zoom: 6.7,
        pitch: 10,
        bearing: -5,
        center: [-76.94009941775337, 39.27705257828697],
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
        description: "'And from thence,' the treaty said, 'on a due west course to the river Mississippi.''",
        zoom: 6,
        pitch: 50,
        bearing: -15,
        center: [-93.14005326419331, 45.54501620814125],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["lakeOfTheWoods"]
        }
      },
      {
        description: "But there was a problem. The Mississippi doesn’t extend as far north as Lake of the Woods",
        zoom: 6,
        pitch: 40,
        bearing: 0,
        center: [-93.14005326419331, 45.54501620814125],
        showLayer: {
          show: true,
          layers: ["lakeOfTheWoods"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: "The United States and England remedied this error in a later treaty that delineated the border between the Louisiana Purchase and what was then called British North America (Canada). ",
        zoom: 5.7,
        pitch: 30,
        bearing: -20,
        center: [-93.65361349613525, 46.85956066709696],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["lakeOfTheWoods"]
        }
      },
      {
        description: "This time, the boundary at the northwest point of Lake of the Woods was described as a line due north or south to the 49th parallel and then due west along that parallel to the Rocky Mountains.",
        zoom: 9,
        pitch: 20,
        bearing: 5,
        center: [-95.25046917172877, 49.01337250710094],
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
        description: "As it turned out, the 49th parallel was south of the northwestern corner of Lake of the Woods. This explains how Minnesota got that little blip on its top.",
        zoom: 8.5,
        pitch: 40,
        bearing: -25,
        center: [-94.89511729164789, 49.03888727485858],
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
