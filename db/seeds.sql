
USE c4tnx2q1ydskjzho;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Black Bean');
INSERT INTO burgers (burger_name) VALUES ('Cheese');
INSERT INTO burgers (burger_name) VALUES ('Vegetarian');
