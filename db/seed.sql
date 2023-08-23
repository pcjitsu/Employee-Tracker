USE employee_db;

INSERT INTO department(name)
VALUES("POTIONS"),
("HERBOLOGY"),
("CHARM"),
("DARK ARTS");

INSERT INTO role(title,salary,department_id)
VALUES("PROFFESOR",10000.00,1),
("GROUNDSKEEPER",20000.00,2),
("QUIDDITCH COACH",30000.00,1),
("HEADMASTER", 1000000.00,3);

INSERT INTO employee(first_name, last_name,role_id, manager_id)
VALUES ("Harry","Potter",3,NULL),
("HERMOINE","GRAINGER",1,NULL),
("RON","WEASLEY",2,2);




