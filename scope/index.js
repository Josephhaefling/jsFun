const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB

        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [{
      A: "Ben"
    }, {
      B: "CardiB"
    }, {
      C: "CardiB"
    }, {
      D: "Paul"
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: 75

      function newNumber() {
        number = 64;

        // Log B: 64
      }

      newNumber();

      // Log C: 75
    }

    numberFunction();

    // Log D: 30

    const result = [{
      A: 75
    }, {
      B: 64
    }, {
      C: 64
    }, {
      D: 30
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: Yo

      function newPhrase() {
        greeting = 'Hey';

        // Log B: Hey
      }

      newPhrase();

      // Log C: 'Yo'
    }

    greetingFunction();

    // Log D: 'Hey'

    const result = [{
      A: "Yo"
    }, {
      B: "Hey"
    }, {
      C: "Hey"
    }, {
      D: "Hello"
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: 'hi'

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: 'welcome'
      };

      newGreeting();

      // Log C: 'welcome'
    };

    greetingGenerator();

    // Log D: 'howdy'

    const result = [{
      A: "hi"
    }, {
      B: "welcome"
    }, {
      C: "welcome"
    }, {
      D: "howdy"
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: 'Nathaniel'
      }

      // Log B: 'Nathaniel'
    }

    // Log C: 'Brittany'

    sayName();

    // Log D: 'Brittany'

    const result = [{
      C: "Brittany"
    }, {
      A: "Nathaniel"
    }, {
      B: "Nathaniel"
    }, {
      D: "Brittany"
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: 'Spot'

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: 'Spot'

        dog = 'Biscuit';

        // Log C: 'Biscuit'

      }

      rollOver();

      // Log D: 'Biscuit'
    }

    petDog();

    // Log E: 'Spot'

    const result = [{
      A: "Spot"
    }, {
      B: "Spot"
    }, {
      C: "Biscuit"
    }, {
      D: "Biscuit"
    }, {
      E: "Biscuit"
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: 'reference error'
          const fruit = 'strawberry';
        }

        // Log B: 'mango'
      }

      // Log C: 'mango'
    }

    eatFruit();

    // Log D: 'apple'

    const result = [{
      A: "reference error"
    }, {
      B: "mango"
    }, {
      C: "mango"
    }, {
      D: "apple"
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: 9
      }

      newNum = num;

      // Log C: 4
    };

    const fn2 = function(num){
      // Log D: 9

      num = num + 1;

      // Log E: 10
    };

    fn1();

    const result = [{
      A: 4
    }, {
      D: 9
    }, {
      E: 10
    }, {
      B: 9
    }, {
      C: 4
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: 75, 55
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: 0, 0
      }

      // Log C: 75, 55
    }

    eatSnack();

    hunger += 5;
    // Log D: 80

    eatSnack();
    // Log E: 55

    const result = [{
      A: 75
    }, {
      B: 0
    }, {
      C: 75
    }, {
      D: 80
    }, {
      A: 55
    }, {
      B: 0
    }, {
      C: 55
    }, {
      E: 55
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: 'ketchup sandwich'

    const addChipotle = () => {
      // Log B: 'chipotle sauce'
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: 'not a mediocre sandwich'
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: 'gouda'

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: 'not a mediocre sandwich'
    // Log F: 'National Treasure'

    const result = [{
      A: 'ketchup sandwich'
    }, {
      D: 'gouda'
    }, {
      B: undefined
    }, {
      C: 'not a mediocre sandwich'
    }, {
      E: 'not a mediocre sandwich'
    }, {
      F: 'National Treasure'
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: 7
    }

    foo();

    // Log B: 7

    const result = [{
      A: 7
    }, {
      B: 7
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: 95
      }

      addPoints();

      // Log B: 90
    }

    losePoints();

    // Log C: 90

    const result = [{
      A: 95
    }, {
      B: 90
    }, {
      C: 90
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: 5
      num = 6;
      // Log B: 6
    }

    function second() {
      // Log C: reference error
      let num = 7;
    }

    first();
    second();

    // Log D: 6

    const result = [{
      A: 5
    }, {
      B: 6
    }, {
      C: 'reference error'
    }, {
      D: 6
    }]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla';
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;
