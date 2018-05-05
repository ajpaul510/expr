DROP DATABASE if exists `expr`;

CREATE DATABASE `expr`;

USE `expr`;


CREATE TABLE `contact`(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(250) NOT NULL,
	email VARCHAR(250) NOT NULL,
	PRIMARY KEY(id)
) ENGINE=InnoDB;



CREATE TABLE `message`(
	m_id INT NOT NULL,
	message TEXT NOT NULL,
 	FOREIGN KEY(m_id) REFERENCES contact(id)
)ENGINE=InnoDB;
