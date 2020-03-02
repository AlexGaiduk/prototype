import Character from "../app";

const creat1 = {
  health: 100,
  attack: 10,
  defence: 40,
  name: "Billy",
  type: "Swordman",
};

const creat2 = {
  health: 0,
  attack: 10,
  defence: 40,
  name: "Billy",
  type: "Swordman",
};

describe("Character", () => {
  test("- 13 hp", () => {
    const hero = new Character("Billy", "Swordman");
    hero.damage(13);
    expect(hero).toEqual(creat1);
  });

  test("- 110 hp and die", () => {
    const hero = new Character("Billy", "Swordman");
    hero.damage(13);
    hero.damage(97);
    expect(hero).toEqual(creat2);
  });
});