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
        description: `Under the 1783 Treaty of Paris the borders of the new United States included a line that threaded its way from the western end of Lake Superior through the network of lakes leading to the northwest corner of Lake of the Woods.`,
        zoom: 6.32,
        pitch: 20,
        bearing: -5,
        center: [-92.15926707057896, 48.33826951135774],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["mississippiRiver"]
        }
      },
      {
        description: "'And from thence,' the treaty said, 'on a due west course to the river Mississippi.''",
        zoom: 6,
        pitch: 50,
        bearing: -15,
        center: [-93.14005326419331, 45.54501620814125],
        showLayer: {
          show: true,
          layers: ["mississippiRiver"]
        },
        hideLayer: {
          hide: true,
          layers: ["lakeOfTheWoods", ]
        }
      },
      {
        description: "But there was a problem. The Mississippi doesn’t extend as far north as Lake of the Woods",
        zoom: 6,
        pitch: 80,
        bearing: 160,
        center: [-94.93857907968882, 49.0728843970945],
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
          layers: ["lakeOfTheWoods", "mississippiRiver"]
        }
      },
      {
        description: "This time, the boundary at the northwest point of Lake of the Woods was described as a line due north or south to the 49th parallel and then due west along that parallel to the Rocky Mountains.",
        zoom: 8.5,
        pitch: 20,
        bearing: 5,
        center: [-95.12570805343837, 49.33943468339112],
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
