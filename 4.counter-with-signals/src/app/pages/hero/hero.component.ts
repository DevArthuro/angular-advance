import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface HeroSchema {
  name: string;
  age: number;
  description: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.components.html',
  styleUrl: './hero.component.scss',
  imports: [UpperCasePipe],
})
class HeroComponent {
  heroes: HeroSchema[] = [
    {
      name: 'Carlos',
      age: 20,
      description: 'Caliños el pillo',
    },
    {
      name: 'Juan',
      age: 18,
      description: 'Juan el pillote',
    },
    {
      name: 'Pedro',
      age: 20,
      description: 'Pedro pablo',
    },
  ];
  currentIndex: number = 0;

  hero = signal<HeroSchema>({
    name: this.heroes[this.currentIndex].name,
    age: this.heroes[this.currentIndex].age,
    description: this.heroes[this.currentIndex].description,
  });

  name = signal(this.heroes[this.currentIndex].name);
  age = signal(this.heroes[this.currentIndex].age);
  description = signal(this.heroes[this.currentIndex].description);

  changeHero() {
    const nextIndex = (this.currentIndex += 1);
    if (nextIndex > this.heroes.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = nextIndex;
    }

    this.hero.set({
      ...this.heroes[this.currentIndex],
    });

    return this.hero;
  }

  changeAge() {
    const newHeroes = this.heroes.map((hero) => {
      if (
        hero.name === this.hero().name &&
        hero.age === this.hero().age &&
        hero.description === this.hero().description
      ) {
        return {
          ...hero,
          age: (hero.age += 1),
        };
      }
      return hero;
    });

    this.hero.update((value) => ({ ...value, age: (value.age += 1) }));

    this.heroes = newHeroes;

    return this.hero;
  }

  getHeroDescription = computed(() => {
    return `${this.hero().description} - ${this.hero().name} - ${
      this.hero().age
    }`;
  });

  capitalizeName = computed(() => {
    return this.hero().name.toUpperCase();
  });

  resetForm() {
    this.hero.set({
      ...this.heroes[0],
    });

    this.currentIndex = 0;
  }
}

export default HeroComponent;
