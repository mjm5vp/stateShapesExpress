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
    description: "Maine’s northern border was redefined in the 1783 Treaty of Paris, which ended the Revolution. In the wake of American independence, the two sides had to stipulate what constituted the United States.",
    zoom: 6,
    pitch: 60,
    bearing: 20,
    center: [-68.78940604142737, 45.74638559529524],
    showLayer: {
      show: false,
      layers: []
    },
    hideLayer: {
      hide: true,
      layers: ["maineLine"]
    }
  },
  {
    description: "The northeast corner of the new nation, according to the treaty, was to be a line drawn due north from the source of the St. Croix River to the crest of the highlands that divide the rivers that flow to the St. Lawrence from those that flow to the Atlantic Ocean.",
    zoom: 8,
    pitch: 70,
    bearing: 0,
    center: [ -67.781338, 45.943390],
    showLayer: {
      show: true,
      layers: ["maineLine"]
    },
    hideLayer: {
      hide: false,
      layers: []
    }
  },
  {
    description: "This line was to continue westward until reaching the northwesternmost head of the Connecticut River. ",
    zoom: 6.7,
    pitch: 60,
    bearing: 20,
    center: [-71.49631375865667, 44.987780268131644],
    showLayer: {
      show: false,
      layers: []
    },
    hideLayer: {
      hide: true,
      layers: ["maineLine"]
    }
  },
  {
    description: "But this definition does not describe Maine’s current northern border. A long dispute ensued over which highlands divide the rivers flowing to the St. Lawrence from those flowing to the Atlantic.",
    zoom: 7,
    pitch: 20,
    bearing: 0,
    center: [-69.44052281753163, 46.627542923434504],
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
      description: "Fifty years passed until this dispute was finally settled under the Webster-Ashburton Treaty.  The border is a compromise between each of the British and American's wildly exaggerated claims",
      zoom: 6.5,
      pitch: 30,
      bearing: -10,
      center: [-69.44052281753163, 46.627542923434504],
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
