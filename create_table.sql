CREATE TABLE ijd3l1f1cuhrpy7f.test (
	id int(10) unsigned auto_increment NOT NULL,
	createdAt timestamp DEFAULT current_timestamp() NOT NULL,
	updatedAt timestamp DEFAULT current_timestamp() on update current_timestamp() NOT NULL,
	name varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	mail varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	message text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	CONSTRAINT `PRIMARY` PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci
COMMENT='';

