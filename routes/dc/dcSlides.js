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
        description: `In 1790, Congress authorized President George Washington to locate a district comprised of a square with 10-mile sides anywhere along the Potomac River between Alexandria, Virginia and Conocheague Creek`,
        zoom: 7.7,
        pitch: 20,
        bearing: -10,
        center: [-77.40721061407905, 39.0716961923188],
        showLayer: {
          show: true,
          layers: ["dcPossible"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: `The reason for these parameters was that just beyond Conigogee Creek were the Appalachian Mountains, presenting a formidable barrier to diplomatic travel.`,
        zoom: 10.5,
        pitch: 70,
        bearing: -5,
        center: [-77.63788944020847, 39.023674766697644],
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
        description: `Below Alexandria, pros- perous plantations (including George Washington’s) lined the Potomac. Neither Maryland nor Virginia was likely to donate riverfront property owned by such wealthy people.`,
        zoom: 9.5,
        pitch: 40,
        bearing: 25,
        center: [-77.07020848879577, 38.701768193445076],
        showLayer: {
          show: true,
          layers: ["mountVernonPoint"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: `Given these limits, George Washington found a spot with excellent potential, located between the Maryland community of Georgetown and Alexandria.`,
        zoom: 10,
        pitch: 10,
        bearing: 0,
        center: [-77.03264036955694, 38.88299696625296],
        showLayer: {
          show: true,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["mountVernonPoint", "dcPossible"]
        }
      },

      {
        description: `From Georgetown on up, the river was not navigable. Unfortunately, below Georgetown, the river encountered the ocean’s tidal flux. The daily high tides traveled up the Chesapeake and, in turn, up the Potomac, meeting the river’s current and resulting in a backwater of swamps just below the rapids of the Potomac.`,
        zoom: 12,
        pitch: 30,
        bearing: -20,
        center: [-77.04445610163857, 38.87624373954256],
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
        description: `This bug-ridden backwater became the nation’s capital.`,
        zoom: 10,
        pitch: 10,
        bearing: 0,
        center: [-77.03264036955694, 38.88299696625296],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["dcSquare"]
        }
      },
      {
        description: `Given the population centers of Georgetown and Alexandria, Washington then oriented the 10-square-mile boundary in a way that maximized the potential to generate commerce.`,
        zoom: 10,
        pitch: 10,
        bearing: 0,
        center: [-77.03264036955694, 38.88299696625296],
        showLayer: {
          show: true,
          layers: ["dcSquare"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: `Washington located the northeast borderline as near as possible to the point where the Anacostia ceases to be navigable.`,
        zoom: 14,
        pitch: 30,
        bearing: 0,
        center: [-76.94225597212963, 38.918049957485636],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["dcBadSquare"]
        }
      },
      {
        description: `The reason President Washington did not similarly locate the city’s northwestern border at Georgetown, the farthest navigable point on the Potomac, had to do with the fact that he was working with a square.`,
        zoom: 12,
        pitch: 30,
        bearing: -20,
        center: [-77.08453609982543, 38.90422563447123],
        showLayer: {
          show: true,
          layers: ["dcBadSquare"]
        },
        hideLayer: {
          hide: false,
          layers: []
        }
      },
      {
        description: `Had he fixed the northwest border at Georgetown, instead of 3 miles farther upstream, the southeast border would have been 3 miles below the Anacostia, which would have exceeded the available segment of the Potomac.`,
        zoom: 10,
        pitch: 30,
        bearing: 0,
        center: [-77.02685652552259, 38.879007930517986],
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
        description: `In addition, fixing the northwest border of the District at Georgetown would have resulted in the city being almost entirely on the Maryland side of the Potomac.`,
        zoom: 9.5,
        pitch: 40,
        bearing: -20,
        center: [-77.02685652552259, 38.879007930517986],
        showLayer: {
          show: false,
          layers: []
        },
        hideLayer: {
          hide: true,
          layers: ["alexandriaPoint"]
        }
      },
      {
        description: `In the mid 1800's, Congress was considering a prohibition in the District of Columbia of one of Alexandria’s traditional industries, the slave trade.  The Alexandria city square was one of the largest slave trade centers in the country`,
        zoom: 16.6,
        pitch: 40,
        bearing: -5,
        center: [-77.04298632690985, 38.80506981659417],
        showLayer: {
          show: true,
          layers: ["alexandriaPoint"]
        },
        hideLayer: {
          hide: true,
          layers: ["dcBadSquare"]
        }
      },
      {
        description: `In 1846, the residents of the District south of the Potomac petitioned Congress for retrocession to Virginia. Congress, with bigger fish to fry (Mexico), casually granted their request.`,
        zoom: 10,
        pitch: 20,
        bearing: 0,
        center: [-77.02685652552259, 38.879007930517986],
        showLayer: {
          show: true,
          layers: ["fullDC"]
        },
        hideLayer: {
          hide: true,
          layers: ["dcSquare","alexandriaPoint"]
        }
      },
    ]
  )
})


module.exports = router;
