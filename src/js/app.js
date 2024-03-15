class Character {
	constructor(name, type) {
		if (name.length < 2 || name.length > 10) {
			throw new Error("Имя должно быть больше 2 знаков и меньше 10");
		}
		const validTypes = ['Bowman', 'Swordman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (!validTypes.includes(type)) {
			throw new Error('Неверный тип');
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;

		switch (type) {
			case 'Bowman':
				this.attack = 25;
				this.defence = 25;
				break;
			case 'Swordman':
				this.attack = 40;
				this.defence = 10;
				break;
			case 'Magician':
				this.attack = 10;
				this.defence = 40;
				break;
			case 'Daemon':
				this.attack = 10;
				this.defence = 40;
				break;
			case 'Undead':
				this.attack = 25;
				this.defence = 25;
				break;
			case 'Zombie':
				this.attack = 40;
				this.defence = 10;
				break;
		}
	}

	levelUp() {
		if (this.health === 0) {
			throw new Error('Нельзя повысить уровень умершего персонажа');
		};
		this.level++;
		this.attack += Math.round(this.attack * 0.2);
		this.defence += Math.round(this.defence * 0.2);
		this.health = 100;
	};

	damage(points) {
		const damageTaken = points * (1 - this.defence / 100);
		this.health = Math.max(this.health - damageTaken, 0);
	};
};

class Bowman extends Character {
	constructor(name) {
		super(name, 'Bowman');
	}
}

class Swordman extends Character {
	constructor(name) {
		super(name, 'Swordman');
	}
}

class Magician extends Character {
	constructor(name) {
		super(name, 'Magician');
	}
}

class Daemon extends Character {
	constructor(name) {
		super(name, 'Daemon');
	}
}

class Undead extends Character {
	constructor(name) {
		super(name, 'Undead');
	}
}

class Zombie extends Character {
	constructor(name) {
		super(name, 'Zombie');
	}
}

module.exports = { Character, Bowman, Swordman, Magician, Daemon, Undead, Zombie };