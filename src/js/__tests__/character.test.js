const { Character, Bowman, Swordman, Magician, Daemon, Undead, Zombie } = require('../app');

//Bowman
describe('Character class', () => {
	test('Character создание', () => {
		const character = new Character('Player', 'Bowman');
		expect(character.name).toBe('Player');
		expect(character.type).toBe('Bowman');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(25);
		expect(character.defence).toBe(25);
	});
});

describe('Character валидация имени', () => {
	test('Имя должно быть больше 2 знаков и меньше 10', () => {
		expect(() => {
			new Character('P', 'Bowman');
		}).toThrow('Имя должно быть больше 2 знаков и меньше 10');
	});
});

test('Character валидация типа', () => {
	expect(() => {
		new Character('Player', 'Manbow');
	}).toThrow('Неверный тип');
});

describe('Bowman class', () => {
	test('Bowman создание', () => {
		const bowman = new Bowman('Player');
		expect(bowman.name).toBe('Player');
		expect(bowman.type).toBe('Bowman');
		expect(bowman.health).toBe(100);
		expect(bowman.level).toBe(1);
		expect(bowman.attack).toBe(25);
		expect(bowman.defence).toBe(25);
	});
});

//Swordman
describe('Character class', () => {
	test('Character создание', () => {
		const character = new Character('Player', 'Swordman');
		expect(character.name).toBe('Player');
		expect(character.type).toBe('Swordman');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(40);
		expect(character.defence).toBe(10);
	});
});

describe('Swordman class', () => {
	test('Swordman создание', () => {
		const swordman = new Swordman('Player');
		expect(swordman.name).toBe('Player');
		expect(swordman.type).toBe('Swordman');
		expect(swordman.health).toBe(100);
		expect(swordman.level).toBe(1);
		expect(swordman.attack).toBe(40);
		expect(swordman.defence).toBe(10);
	});
});

//Magician
describe('Character class', () => {
	test('Character создание', () => {
		const character = new Character('Player', 'Magician');
		expect(character.name).toBe('Player');
		expect(character.type).toBe('Magician');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(10);
		expect(character.defence).toBe(40);
	});
});

describe('Magician class', () => {
	test('Magician создание', () => {
		const magician = new Magician('Player');
		expect(magician.name).toBe('Player');
		expect(magician.type).toBe('Magician');
		expect(magician.health).toBe(100);
		expect(magician.level).toBe(1);
		expect(magician.attack).toBe(10);
		expect(magician.defence).toBe(40);
	});
});

//Daemon
describe('Character class', () => {
	test('Character создание', () => {
		const character = new Character('Player', 'Daemon');
		expect(character.name).toBe('Player');
		expect(character.type).toBe('Daemon');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(10);
		expect(character.defence).toBe(40);
	});
});


describe('Daemon class', () => {
	test('Daemon создание', () => {
		const daemon = new Daemon('Player');
		expect(daemon.name).toBe('Player');
		expect(daemon.type).toBe('Daemon');
		expect(daemon.health).toBe(100);
		expect(daemon.level).toBe(1);
		expect(daemon.attack).toBe(10);
		expect(daemon.defence).toBe(40);
	});
});

//Undead
describe('Character class', () => {
	test('Character создание', () => {
		const character = new Character('Player', 'Undead');
		expect(character.name).toBe('Player');
		expect(character.type).toBe('Undead');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(25);
		expect(character.defence).toBe(25);
	});
});

describe('Undead class', () => {
	test('Undead создание', () => {
		const undead = new Undead('Player');
		expect(undead.name).toBe('Player');
		expect(undead.type).toBe('Undead');
		expect(undead.health).toBe(100);
		expect(undead.level).toBe(1);
		expect(undead.attack).toBe(25);
		expect(undead.defence).toBe(25);
	});
});

//Undead
describe('Character class', () => {
	test('Character создание', () => {
		const character = new Character('Player', 'Zombie');
		expect(character.name).toBe('Player');
		expect(character.type).toBe('Zombie');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(40);
		expect(character.defence).toBe(10);
	});
});

describe('Zombie class', () => {
	test('Zombie создание', () => {
		const zombie = new Zombie('Player');
		expect(zombie.name).toBe('Player');
		expect(zombie.type).toBe('Zombie');
		expect(zombie.health).toBe(100);
		expect(zombie.level).toBe(1);
		expect(zombie.attack).toBe(40);
		expect(zombie.defence).toBe(10);
	});
});



//Тесты для урона и поднятия уровня

describe('Character class', () => {
	let character;

	beforeEach(() => {
		character = new Character('Player', 'Bowman');
	});

	test('Character levelUp метод', () => {
		character.levelUp();
		expect(character.level).toBe(2);
		expect(character.attack).toBe(30);
		expect(character.defence).toBe(30);
		expect(character.health).toBe(100);
	});

	test('Character damage метод', () => {
		character.damage(20);
		expect(character.health).toBe(85);
	});

	test('Character damage метод с высокой защитой', () => {
		character.defence = 50;
		character.damage(20);
		expect(character.health).toBe(90);
	});

	test('Character levelUp method для мертвого персонажа', () => {
		character.health = 0;
		expect(() => {
			character.levelUp();
		}).toThrow('Нельзя повысить уровень умершего персонажа');
	});
});