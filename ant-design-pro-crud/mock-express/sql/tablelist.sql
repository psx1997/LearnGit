/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1_3306
Source Server Version : 50724
Source Host           : 127.0.0.1:3306
Source Database       : nodemysql

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2021-05-28 16:54:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tablelist
-- ----------------------------
DROP TABLE IF EXISTS `tablelist`;
CREATE TABLE `tablelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `project` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tablelist
-- ----------------------------
INSERT INTO `tablelist` VALUES ('1', '违规操作1', '人民医院1', '口腔科1', '温度', '2019-03-21 12:56:12');
INSERT INTO `tablelist` VALUES ('2', '违规操作2', '人民医院2', '口腔科2', '温度', '2019-03-21 12:56:12');
INSERT INTO `tablelist` VALUES ('3', '违规操作3', '人民医院3', '口腔科3', '压力', '2019-03-21 12:56:12');
INSERT INTO `tablelist` VALUES ('4', '违规操作4', '人民医院4', '口腔科4', '压力', '2019-03-21 12:56:12');
INSERT INTO `tablelist` VALUES ('5', '违规操作5', '人民医院5', '口腔科5', '压力', '2019-03-21 12:56:12');
INSERT INTO `tablelist` VALUES ('6', '违规操作6', '人民医院6', '口腔科6', '温度', '2019-03-21 12:56:12');
