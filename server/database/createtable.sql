CREATE TABLE `phonebook`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `age` INT(3) NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `phone` VARCHAR(12) NOT NULL,
  `position` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));
