const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,

  getStatus: function () {
    let meal_count = this.meal;
    let energy_count = this.energy;
    let mood_count = this.mood;
    if (this.meal < 3) {
      this.meal = `Я голоден (${meal_count})`;
    } else this.meal = `Я не голоден (${meal_count})`;
    if (this.energy < 3) {
      this.energy = `Я хочу спать (${energy_count})`;
    } else this.energy = `Я не хочу спать (${energy_count})`;
    if (this.mood < 3) {
      this.mood = `Мне скучно (${mood_count})`;
    } else this.mood = `Мне весело (${mood_count})`;
    if (meal_count <= 0 || mood_count <= 0 || energy_count <= 0) {
      console.log(`${this.name} умер :(`);
      return;
    }
    if (meal_count <= 6 || mood_count <= 6 || energy_count <= 6) {
        console.log(`Шестерки никогда не видят всей картины.`);
      }
    
    console.log(
        `Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}`
      );
  },
  setName: function (name) {
    this.name = name;
  },
  eating: function () {
    if (this.meal <= 5) {
      this.meal++;
      this.mood--;
    }
  },
  sleaping: function () {
    if (this.energy <= 5) {
      this.energy++;
      this.meal--;
    }
  },
  play: function () {
    if (this.mood <= 5) {
      this.mood++;
      this.energy--;
    }
  },
};
tamogotchi.eating();
tamogotchi.eating();
tamogotchi.eating();
tamogotchi.getStatus();
