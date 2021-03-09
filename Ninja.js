class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = health || 100;
    this.speed = speed || 3;
    this.strength = strength || 3;
  }

  sayName = () => {
    // This should log that Ninja's name to the console
    console.log(`
      Ninja's Name: ${this.name}
    `);
  }

  showStats = () => {
    // This should show the Ninja's name, strength, speed, and health.
    console.log(`
      ==============================
      Name:       ${this.name}
      Health:     ${this.health}
      Speed:      ${this.speed}
      Strength:   ${this.strength}
    `);
  }

  drinkSake = () => {
    // This should add +10 Health to the Ninja
    return this.health += 10;
  }
}

//TESTS
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Ninja("Bob", 150, 8, 8);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();