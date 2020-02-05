USE burgers_db;
Create table burgers (
id int not null auto_increment,
burger_name VARCHAR(50),
devoured boolean,
Primary Key (id)
);