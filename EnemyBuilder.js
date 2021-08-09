/*This class is a template to create child classes, it receives parameters and has two functions: scream that prints the object catchPhrase 
and attack that randomly choose and logs   a attack from a set of attacks of the object*/

class buildEnemy{
    constructor(name, home, age, hates, loves, enemy, catchPhrase, attacks, weapon){
    this._name = name;
    this._home = home;
    this._age = age;
    this._hates = hates;
    this._loves = loves;
    this._enemy = enemy;
    this._catchPrase = catchPhrase;
    this._attacks = attacks;
    this._weapon = weapon;
    };
  
    get name(){
      return this._name
    };
  
    get home(){
      return this._home;
    };
  
    get age(){
      return this._age;
    };
  
    get hates(){
      return this._hates;
    };
  
    get loves(){
      return this._loves;
    };
  
    get enemy(){
      return this._enemy;
    };
  
    get catchPhrase(){
      return this._catchPrase;
    };

    get attacks(){
      return this._attacks;
    }

    get weapon(){
      return this._weapon;
    }
  
    scream() {
      console.log(this._catchPrase);
    }

    attack() {
      const randomPos = Math.floor(Math.random()*4);
      console.log(this._attacks[randomPos]);
    }

  
  }

  /*This class inherits from the parent class buildEnemy{} to create a template to a type of object called "Bruiser"*/
  class bruiser extends buildEnemy {
    constructor(name, home, age, hates, loves, enemy, catchPhrase, attacks, weapon) {
      super(name, home, age, hates, loves, enemy, catchPhrase, attacks, weapon);
    }
  }

  /*This class inherits from the parent class buildEnemy{} to create a template to a type of object called "distance"*/
  class distance extends buildEnemy {
    constructor(name, home, age, hates, loves, enemy, catchPhrase, attacks, weapon) {
      super(name, home, age, hates, loves, enemy, catchPhrase, attacks, weapon);
    }
  }


  /*This section creates and fill new objects from both child classes bruiser and distance,
   finally in logs the object*/
  const gnomes = new bruiser('Gnome', ['Woods', 'Swamps', 'Caves'], 12, ['Humans', 'Mans', 'Dogs'], ['Womans', 'Eat', 'Kill'], 'Ice Gnomes',
   'Kill humans is life, Kill humans is love', ['Pick axe swing', 'Kick', 'Bite'], 'Pick axe');
  console.log(gnomes);
  gnomes.attack();
  gnomes.scream();

  const gremlins = new bruiser('Gremnlin', ['Woods', 'Swamps'], 2, ['Humans', 'Christians', 'Dogs'], ['Cats', 'Eat', 'Kill'], 'Water',
   'Come on, is just a quarter pass 12:00 give me food kid.', ['Bite', 'Scratch', 'Eye.-picking'], 'None');
  console.log(gremlins);
  gremlins.scream();
  gremlins.attack();


  const boxer = new bruiser('Boxer', ['Boxing ring', 'Gym\'s'], 32, ['Fat people', 'Weak people', 'Losing'], ['Fighting', 'Excercise', 'Protein'], 'Swordmans', 'Let\'s fight!!!!!!',
   ['Kick', 'Punch', 'Launching', 'Elbow Swinging'], 'None');
   console.log(boxer);
   boxer.scream();
   boxer.attack();

   const archer = new distance('Archer', ['Woods', 'Valleys', 'Taberns'], 28, ['Robbers', 'Politicians'], ['Hunting', 'Dards game', 'Beer'], 'Fog', 'I always win the contest',
    ['Arrow shot', 'Multiple arrow shots', 'Dard shot', 'Dage shot'], ['Arc and arrow', 'Dards', 'Dages']);
    console.log(archer);
    archer.scream();
    archer.attack();