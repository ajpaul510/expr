--
--  TODO
--		Normalize tables
--


DROP DATABASE if exists `expr`;

CREATE DATABASE `expr`;

USE `expr`;


CREATE TABLE `contact`(
	id INT AUTO_INCREMENT,
	name VARCHAR(250) NOT NULL,
	email VARCHAR(250) NOT NULL,
	message TEXT,
	PRIMARY KEY(id)
) ENGINE=InnoDB;
