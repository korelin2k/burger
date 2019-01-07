CREATE DATABASE burgers_db;

CREATE TABLE burgers_db.burgers(
	`id` INT NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`description` VARCHAR(255) NOT NULL,
	`image` VARCHAR(25) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	PRIMARY KEY(id)
);
