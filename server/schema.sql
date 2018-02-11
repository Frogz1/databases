-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---


DROP TABLE IF EXISTS `Messages`;
		
CREATE TABLE `Messages` ( 
  objectId INTEGER NOT NULL AUTO_INCREMENT,
  userid TINYINT(20) NULL DEFAULT NULL,
  text VARCHAR(200) NULL DEFAULT NULL,
  createdOn DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (objectId)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  id TINYINT(20) NOT NULL AUTO_INCREMENT ,
  name VARCHAR(20) NULL DEFAULT NULL,
  createdOn DATETIME DEFAULT CURRENT_TIMESTAMP,  
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (userid) REFERENCES `users` (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `users` (name) VALUES in ('Trev-G', 'Sue-Wee');

INSERT INTO `Messages` (userid, text) VALUES (1, 'the goat');
INSERT INTO `Messages` (userid, text) VALUES (2, 'the boat');
INSERT INTO `Messages` (userid, text) VALUES (1, 'the yoat');
INSERT INTO `Messages` (userid, text) VALUES (2, 'the toat');
INSERT INTO `Messages` (userid, text) VALUES (1, 'the foat');
INSERT INTO `Messages` (userid, text) VALUES (2, 'the coat');

