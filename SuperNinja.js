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
    console.log(`${this.name} Drank some sake.`)
    return this.health -= 10;
  }
}

class Sensei extends Ninja {
  constructor(name, health, speed, strength, wisdom) {
    super(name, health || 120, speed || 8, strength || 8, wisdom);
    this.wisdom = wisdom || 10;
  }

  speakWisdom = () => {
    console.log(`What one programmer can do in one month, 2 programmers can do in 2 months.`);
  }
}

const SuperSensei = new Sensei("Bob");
SuperSensei.showStats();
SuperSensei.drinkSake();
SuperSensei.showStats();
SuperSensei.speakWisdom();