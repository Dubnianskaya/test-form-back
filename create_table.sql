CREATE TABLE test.test (
	id INT(10) unsigned auto_increment NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp() NOT NULL,
	name varchar(100) NOT NULL,
	mail varchar(100) NOT NULL,
    message TEXT NOT NULL,
	CONSTRAINT test_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

