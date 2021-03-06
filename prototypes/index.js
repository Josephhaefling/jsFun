/* eslint-disable */
const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(cat => cat.color === 'orange').map(cat => cat.name)
    return result;

    // Annotation:
    //
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = () => {
    return kitties.sort((a, b) => {
      return b.age - a.age
    })
   };
    return result();

    // Annotation: itereate over kitties and add 2 to their age then sort by age
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = () => {
     let cats = kitties.filter(cat => cat.age += 2)
     return cats.sort((a, b) => {
      return b.age - a.age
    })
   };
    return result();
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = () => {
      return clubs.reduce((acc, club) => {
        club.members.forEach(member => {
          if (!acc[member]) {
             acc[member] = []
          }
          acc[member].push(club.club)
        })
        return acc
      }, {})
    };
    return result();

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = () => {
      return mods.map(mod => {
      mod.studentsPerInstructor = mod.students / mod.instructors
      delete mod.students
      delete mod.instructors
      return mod
  })
}

return result()

    // Annotation:
    // create an empty array of objects
    // set keys to the value of the mod and numStudents
    // value to mod# and numStudents

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = () => {
      return cakes.reduce((acc, cake) => {
        let specificCake = {}
        specificCake.flavor = cake.cakeFlavor
        specificCake.inStock = cake.inStock
        acc.push(specificCake)
        return acc
      }, [])
    }
    return result();

    // Annotation:
    // Delete filling key
    // Delete frosting key
    // Delete toppings key
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = () => {
      return cakes.filter(cake => cake.inStock > 0)
    }
    return result();

    // Annotation:
    // for each cake.inStock return cake
    // disgard all other cakes
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = () => {
      return cakes.reduce((acc, cake) => {
        acc += cake.inStock
        return acc
      }, 0)
    }
    return result();

    // Annotation:
    // Iterate over the cake array
    // Add together the value of inStock for each cake
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = () => {
      return cakes.reduce((acc, cake) => {
        cake.toppings.forEach(topping => {
          if(!acc.includes(topping)) {
            acc.push(topping)
          }
        })
        return acc
      }, [])
    }
        return result();

    // Annotation:
    // Iterate over the cake array to get a list of call allToppings
    // iterate over each topping in the toppings array
    // create an if statement to weed out the toppings that already exist
    // Return list
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = () => {
      return cakes.reduce((acc, cake) => {
        cake.toppings.forEach(topping => {
          if(!acc[topping]) {
            acc[topping] = 1
          } else {
            acc[topping] += 1
          }
        })
        return acc
      }, {})
    }
      return result();

    // Annotation:
    // iterate over the cakes array
    // iterate over the the ingredients arrays
    // if an ingredient doesn't exist create a key for it
    // if it does exist up the counter by one
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = () => {
      return classrooms.filter(classRoom => classRoom.program === 'FE')
    }
    return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = () => {
      return classrooms.reduce((acc, room) => {
        room.program === 'FE' ? acc.feCapacity += room.capacity : acc.beCapacity += room.capacity
        return acc
      }, {
        feCapacity: 0,
        beCapacity: 0
      })
    }
    return result();

    // Annotation:
    // create an object with key names of feCapacity & beCapacity
    // forEach room if program equals fe/be add the result to the key
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = () => {
      return classrooms.sort((a, b) => a.capacity - b.capacity)
    }
    return result();

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = () => {
      let notViolent = books.filter(book => book.genre !== 'True Crime' && book.genre !== 'Horror')
      return notViolent.map(book => book.title)
    }
    return result();

    // Annotation:
    // filter through books array if book is not horror or true crime return book
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = () => {
      let newBooks = books.filter(book => book.published >= 1990)
      return newBooks.map(book => {
        let newObject = {}
        newObject.title = book.title
        newObject.year = book.published
        return newObject
      })
    }
        return result();

    // Annotation:
    // Iterate over array get books.published after 1990
    // return an array of objects with title and publish
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = () => {
      return weather.map(elem => (elem.temperature.high + elem.temperature.low) / 2)
    }
    return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = () => {
      let sunnyLocations = weather.filter(elem => elem.type === 'sunny')
      let mostlySunnyLocations = weather.filter(elem => elem.type === 'mostly sunny')
      return   sunnyLocations.concat(mostlySunnyLocations).map(location => `${location.location} is ${location.type}.`)
    }
    return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

  let result = () => {
    let mostHumid = weather.sort((a, b) => b.humidity - a.humidity)
    return mostHumid[0]
  }

  return result()


    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    let result = () => {
      return nationalParks.reduce((acc, park) => {
        park.visited ? acc.parksVisited.push(park.name) : acc.parksToVisit.push(park.name)
        return acc
      }, {parksToVisit: [], parksVisited: []})
    }
     return result()
   },


    // Annotation:
    // Iterate over the parks array
    // if the park has been visited add it to the visted key
    // else add it to the notVisited key
    // return an object

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    let result = () => {
      let newState = {}
      return nationalParks.reduce((acc, park) => {
        if(!acc[park.location]) {
           newState[park.location] = park.name
        }
        acc.push(newState)
        newState = {}
        return acc
      }, [])
    }
     return result();

    // Annotation:
    // iterate through the parks arrays get park state
    // if state isn't an object make it an object with the property of state and value of [park.names]
    // if it is an object push park.name into the key

  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]
    let result = () => {
      return nationalParks.reduce((acc, park) => {
        park.activities.forEach(activity => {
          if(!acc.includes(activity)) {
            acc.push(activity)
          }
        })
        return acc
      },[])
    }
    return result()

    // Annotation:
    //
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    let result = () => {
      let numBeers = breweries.map(brewery => brewery.beers.length)
      return numBeers.reduce((acc, num) => acc += num, 0)
    }
    return result()

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    let result = () => {
      return breweries.reduce((acc, brewery) => {
        const specificBrewery = {}
        specificBrewery.name = brewery.name
        specificBrewery.beerCount = brewery.beers.length
        acc.push(specificBrewery)
        return acc
      }, [])
    }
    return result()

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let result = () => {
      let allBeers = breweries.map(brewery => brewery.beers).flat()
      return allBeers.sort((a, b) => b.abv - a.abv)[0]
    }
    return result();

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    let result = () => {
     return instructors.map(instructor => {
        let instructorObject = {}
        instructorObject.name = instructor.name
        instructorObject.studentCount = null
            cohorts.forEach(cohort => {
              if(cohort.module === instructor.module)  {
                instructorObject.studentCount = cohort.studentCount
          }
        })
        return instructorObject
      })
    }
    return result()

    // Annotation:
    //For each instructor set a key of name set it equal to instructor.name
    //for each instructor set a key of studentCount
    // for each cohort find the corosponding istructor module and set the value of that module to the studentCount for the instructor
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    let result = () => {
      const newObj = instructors.reduce((acc, instructor) => {
        if(!acc[instructor.module]) {
          acc[instructor.module] = 0
        }
        acc[instructor.module]++
        return acc
      }, {})
        return cohorts.reduce((acc, cohort)=> {
          acc[`cohort${cohort.cohort}`] = cohort.studentCount / newObj[cohort.module]
          return acc
        }, {})
      }
      return result();

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = () => {
  return instructors.reduce((acc, instructor) => {
    acc[instructor.name] = []
    instructor.teaches.forEach(skill => {
    cohorts.forEach(cohort => {
      if(cohort.curriculum.includes(skill)) {
        if(!acc[instructor.name].includes(cohort.module))
        acc[instructor.name].push(cohort.module)
        }
      })
    })
    acc[instructor.name].sort((a, b) => a - b)
    return acc
  }, {})
}
    return result()

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = () => {
      return instructors.reduce((acc, instructor) => {
        instructor.teaches.forEach(subject => {
          if(!acc[subject]) {
            acc[subject] = []
          }
        acc[subject].push(instructor.name)
        })
        return acc
      }, {})
    }
    return result()

    //iterate over the instructors array
    //for each instructor iterate of the teaches array
    // if teaches is not a thing make it a thing
    //push instrucotrs name into the thing
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = () => {
      let bossKeys = Object.keys(bosses)
      return bossKeys.map(boss => {
        let acc = {}
        acc.bossName = bosses[boss].name
        acc.sidekickLoyalty = 0
        sidekicks.forEach(sidekick => {
          if (sidekick.boss === bosses[boss].name) {
            acc.sidekickLoyalty += sidekick.loyaltyToBoss
          }
        })
        return acc
      })
    }
    return result()

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = () => {
  const constellationKeys = Object.keys(constellations)
  return constellationKeys.reduce((acc, constellation) => {
    constellations[constellation].stars.forEach(star => {
    stars.forEach(thing => {
      if (thing.name === star) {
        acc.push(thing)
       }
      })
    })
    acc.sort((a, b) => b.lightYearsFromEarth - a.lightYearsFromEarth)
    return acc
  }, [])
}
    return result()

},

    // Annotation:
        //get object.keys for constellations
        // iterate over each constellation.stars array
        //iterate over the stars array
        //if  star matches star.name && the star isn't alread in the array push it into the array.  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = () => {
      return stars.reduce((acc, star) => {
        if(!acc[star.color]){
          acc[star.color] = []
        }
        acc[star.color].push(star)
        return acc
      }, {})
    }

    return result()

    // Annotation:
    // iterate over the stars arrays (reduce)
    // if star.color isn't a key make it a key with a value of []
    // push the star into the array
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    result = () => {
      const filteredAndSortedStars = stars.filter(star => star.constellation !== '').sort((a, b) => a.visualMagnitude - b.visualMagnitude)
      return filteredAndSortedStars.map(star => star.constellation)
    }
      return result()

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    result = () => {
      return characters.reduce((attackTotal, character ) => {
        character.weapons.forEach(weapon => attackTotal += weapons[weapon].damage)
        return attackTotal
      }, 0)
    }
    return result()

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    result = () => {
      return characters.map(character => {
        let characterObjects = {}
        characterObjects[`${character.name}`] = {damage: 0, range: 0}
          character.weapons.forEach(weapon => {
            characterObjects[`${character.name}`].damage += weapons[weapon].damage
            characterObjects[`${character.name}`].range += weapons[weapon].range

          })
        return characterObjects
      })
    }
    return result()

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    result = () => {
      return movies.reduce((movieList, movie) => {
        movieList[movie.title] = 0
        movie.dinos.forEach(dino => {
          if (dinosaurs[dino].isAwesome) {
            movieList[movie.title]++
          }
        })
        return movieList
      }, {})
    }
    return result()

    // Annotation:
    // iterate over the movies array
    // for each movie iterate over the elements of the dinos key array
    // for each element in the array check the dinosaurs object dinosaurs[dinos.element].isAwesome
    // if dinosaur is awesome movie[name] ++

  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    result = () => {
      return movies.reduce((acc, movie) => {
        if(!acc[movie.director]) {
          acc[movie.director] = {}
        }
        acc[movie.director][movie.title] = 0
        movie.cast.forEach(actor => {
          acc[movie.director][movie.title] += movie.yearReleased - humans[actor].yearBorn
        })
        acc[movie.director][movie.title] = Math.floor(acc[movie.director][movie.title] / movie.cast.length)
        return acc
      }, {})
    }
    return result()

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    result = () => {
       movies.forEach(movie => {
        movie.cast.forEach(castMember => {
          if(humans[castMember]) {
            delete(humans[castMember])
          }
        })
      })
      const humanKeys = Object.keys(humans)
      const things = humanKeys.reduce((acc, humanKey) => {
        let humanObject = {}
        humanObject.name = humanKey
        humanObject.nationality = humans[humanKey].nationality
        humanObject.imdbStarMeterRating = humans[humanKey].imdbStarMeterRating
        acc.push(humanObject)
        return acc
        }, [])
      return things.sort((a, b) => {
        return ((a.nationality < b.nationality) ? -1 : ((a.nationality > b.nationality) ? 1 : 0));
      })
    }
    return result()
  },

    // Annotation:
    // Iterate over the movies array
    // iterate over the movie get the movie.cast array
    // for each cast member
    // if cast member is an element remove them from the object.

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    result = () => {
      const peopleObj = movies.reduce((acc, movie) => {
        movie.cast.forEach(castMember => {
          if(!acc[castMember]) {
            acc[castMember] = []
          }
          acc[castMember].push(movie.yearReleased - humans[castMember].yearBorn)
        })
        return acc
      }, {})
      const peopleKeys = Object.keys(peopleObj)
      return peopleKeys.map(person => {
        return {name: person, ages: peopleObj[person]}
      })
    }

    return result()

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
