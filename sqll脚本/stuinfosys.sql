/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50560
Source Host           : localhost:3306
Source Database       : stuinfosys

Target Server Type    : MYSQL
Target Server Version : 50560
File Encoding         : 65001

Date: 2019-09-06 20:43:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `clazz`
-- ----------------------------
DROP TABLE IF EXISTS `clazz`;
CREATE TABLE `clazz` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  `major_id` varchar(32) NOT NULL,
  `institute_id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clazz
-- ----------------------------
INSERT INTO `clazz` VALUES ('clgc1', '车辆工程1班', '6', '003');
INSERT INTO `clazz` VALUES ('clgc2', '车辆工程2班', '6', '003');
INSERT INTO `clazz` VALUES ('clgc3', '车辆工程3班', '6', '003');
INSERT INTO `clazz` VALUES ('dab9d515fc7b434c8870dfc8f4a5e5b2', '测试', '1', '001');
INSERT INTO `clazz` VALUES ('dqzdh1', '电气自动化1班', '4', '002');
INSERT INTO `clazz` VALUES ('dqzdh2', '电气自动化2班', '4', '002');
INSERT INTO `clazz` VALUES ('jsj1', '计算机1班', '1', '001');
INSERT INTO `clazz` VALUES ('jsj2', '计算机2班', '1', '001');
INSERT INTO `clazz` VALUES ('jtgc1', '交通工程1班', '8', '003');
INSERT INTO `clazz` VALUES ('jtgc2', '交通工程1班', '8', '003');
INSERT INTO `clazz` VALUES ('jxzzjqzdh1', '机械制造及其自动化1班', '3', '002');
INSERT INTO `clazz` VALUES ('jxzzjqzdh2', '机械制造及其自动化2班', '3', '002');
INSERT INTO `clazz` VALUES ('jz1', '建筑1班', '5', '002');
INSERT INTO `clazz` VALUES ('qcfwgc1', '汽车服务工程1班', '7', '003');
INSERT INTO `clazz` VALUES ('qcfwgc2', '汽车服务工程2班', '7', '003');
INSERT INTO `clazz` VALUES ('rjgc1', '软件工程1班', '2', '001');
INSERT INTO `clazz` VALUES ('rjgc2', '软件工程2班', '2', '001');

-- ----------------------------
-- Table structure for `course`
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('b414d36e954041e8ab27e6e38de62be0', '创业');
INSERT INTO `course` VALUES ('c1', '计算机组成原理');
INSERT INTO `course` VALUES ('c2', '操作系统');
INSERT INTO `course` VALUES ('c3', '数据结构');
INSERT INTO `course` VALUES ('c4', '计算机网络');
INSERT INTO `course` VALUES ('c5', '汽车构造');

-- ----------------------------
-- Table structure for `course_teacher`
-- ----------------------------
DROP TABLE IF EXISTS `course_teacher`;
CREATE TABLE `course_teacher` (
  `id` varchar(32) NOT NULL,
  `course_id` varchar(32) NOT NULL,
  `teacher_id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course_teacher
-- ----------------------------
INSERT INTO `course_teacher` VALUES ('001', 'c1', 't1');
INSERT INTO `course_teacher` VALUES ('002', 'c3', 't2');
INSERT INTO `course_teacher` VALUES ('003', 'c5', 't3');
INSERT INTO `course_teacher` VALUES ('41f8c32e9c3d43a2846ada48048d3e3e', 'c4', 't5');
INSERT INTO `course_teacher` VALUES ('44ab8d66941743e2bda7bc91c9b032c5', 'c3', 't1');
INSERT INTO `course_teacher` VALUES ('59a38e0a89ab46eea2b9d1d2ee57a374', 'c3', 't4');
INSERT INTO `course_teacher` VALUES ('9637b1fec9f34cf19081fde0d4e655fe', 'c4', 't4');

-- ----------------------------
-- Table structure for `grade`
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `id` varchar(32) NOT NULL,
  `student_id` varchar(32) NOT NULL,
  `course_id` varchar(32) NOT NULL,
  `exam_time` date DEFAULT NULL,
  `exam_type` int(11) DEFAULT NULL,
  `score` double NOT NULL,
  `teacher_id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of grade
-- ----------------------------
INSERT INTO `grade` VALUES ('103e3e5766e143bfba98aa326345377e', '2015020001', 'c3', '2019-07-27', '1', '77', 't1');
INSERT INTO `grade` VALUES ('13e27ca9e14744b0bc273ce5c6e25fd3', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('16959d0bbfbc435f8c975f0812ee44e6', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('23d208ffb5314b9b96b9aed181347dce', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('27c92bc34d6f4449a099f02cef292b0c', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('29bc5ba09893493996fdd7d0c735432a', '2015010003', 'c5', '2019-07-27', '2', '75', 't3');
INSERT INTO `grade` VALUES ('46bce3d8969842d698238be0a8362a27', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('477e178e24ec4bd7a824ef3a6155f36a', '2015020002', 'c5', '2019-07-27', '1', '89', 't3');
INSERT INTO `grade` VALUES ('4c5131a3f1ea4095aef7ad998b4a05d3', '123475869', 'c3', '2019-07-27', '2', '55', 't1');
INSERT INTO `grade` VALUES ('6517a9514fab4624be70c2b2513c2c7f', '2015020001', 'c2', '2019-07-27', '1', '86', 't4');
INSERT INTO `grade` VALUES ('750ee5e3ed9b47eaba7162708d49778e', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('7c9db8f0c37a4ebf98dea91f7b31616c', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('89091bf37aa640b086d6ab6a32ea5524', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('bd966812ac6b403383ed63401b81abdd', '2015010001', 'c4', '2019-07-27', '1', '88', 't4');
INSERT INTO `grade` VALUES ('f96a5b16f6af4be59878beca328a5250', '2015010001', 'c3', '2019-07-27', '2', '88', 't4');

-- ----------------------------
-- Table structure for `institute`
-- ----------------------------
DROP TABLE IF EXISTS `institute`;
CREATE TABLE `institute` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of institute
-- ----------------------------
INSERT INTO `institute` VALUES ('001', '计算机科学与技术学院');
INSERT INTO `institute` VALUES ('002', '自动化学院');
INSERT INTO `institute` VALUES ('003', '汽车学院');
INSERT INTO `institute` VALUES ('8309970cb6714ca3b4b779b481c0ddf5', '大数据');

-- ----------------------------
-- Table structure for `major`
-- ----------------------------
DROP TABLE IF EXISTS `major`;
CREATE TABLE `major` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  `institute_id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of major
-- ----------------------------
INSERT INTO `major` VALUES ('1', '计算机', '001');
INSERT INTO `major` VALUES ('2', '软件工程', '001');
INSERT INTO `major` VALUES ('3', '机械制造及其自动化', '002');
INSERT INTO `major` VALUES ('3cbd63fd5038452492886b62c51e825b', '测试', '001');
INSERT INTO `major` VALUES ('4', '电气自动化', '002');
INSERT INTO `major` VALUES ('5', '建筑', '002');
INSERT INTO `major` VALUES ('6', '车辆工程', '003');
INSERT INTO `major` VALUES ('7', '汽车服务工程', '003');
INSERT INTO `major` VALUES ('8', '交通工程', '003');
INSERT INTO `major` VALUES ('jsj3', '计算机3班', '001');
INSERT INTO `major` VALUES ('test', '测试', '001');

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sex` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `clazz_id` varchar(32) NOT NULL,
  `major_id` varchar(32) NOT NULL,
  `institute_id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('123475869', '测试2', '1', '23', '1456789', 'jz1', '5', '002');
INSERT INTO `student` VALUES ('2015010001', '张三', '1', '22', '1356123456', 'jsj1', '1', '001');
INSERT INTO `student` VALUES ('2015010002', '李四', '1', '23', '00011122', 'jsj2', '1', '001');
INSERT INTO `student` VALUES ('2015010003', '王五', '2', '22', '1356123456', 'jsj2', '1', '001');
INSERT INTO `student` VALUES ('2015020001', 'Tom', '1', '21', '1356123456', 'clgc1', '6', '003');
INSERT INTO `student` VALUES ('2015020002', 'Sam', '2', '22', '1237894560', 'clgc2', '6', '003');
INSERT INTO `student` VALUES ('2015114143009', '测试', '1', '23', '110022', 'clgc1', '6', '003');
INSERT INTO `student` VALUES ('76bc4a39893d4fc29ee39521d29f0deb', 'mary', '2', '23', '115533', 'clgc1', '6', '003');

-- ----------------------------
-- Table structure for `student_course`
-- ----------------------------
DROP TABLE IF EXISTS `student_course`;
CREATE TABLE `student_course` (
  `id` varchar(32) NOT NULL,
  `student_id` varchar(32) NOT NULL,
  `course_id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_course
-- ----------------------------
INSERT INTO `student_course` VALUES ('0001', '2015010001', 'c1');
INSERT INTO `student_course` VALUES ('0002', '2015010002', 'c3');
INSERT INTO `student_course` VALUES ('0003', '2015020002', 'c5');
INSERT INTO `student_course` VALUES ('474ee48762be46ce85a92a18c2ef9272', '2015010001', 'c4');
INSERT INTO `student_course` VALUES ('4a6e9cf924b14dcda2a6f3faca6a421e', '2015010003', 'c5');
INSERT INTO `student_course` VALUES ('75096a396fb24420847cf8d1bfd80fa0', '2015020001', 'c2');
INSERT INTO `student_course` VALUES ('8811b915d92f433ea73e5a4a69e08dbc', '2015010001', 'c3');
INSERT INTO `student_course` VALUES ('a8c2313511f44198bf72211ca40d96ce', '123475869', 'c3');
INSERT INTO `student_course` VALUES ('e65498f54dd9434a917a27150e588fc9', '2015020002', 'c4');
INSERT INTO `student_course` VALUES ('ff75b8b8153d4713b73603d0fb76e72a', '2015020001', 'c3');

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('2c85b8ac07a24ab4bf50b2bfcc4dbb7f', 'k', '教师');
INSERT INTO `teacher` VALUES ('t1', '张老师', '教授');
INSERT INTO `teacher` VALUES ('t2', '王老师', '副教授');
INSERT INTO `teacher` VALUES ('t3', '李老师', '讲师');
INSERT INTO `teacher` VALUES ('t4', '胡老师', '教授');
INSERT INTO `teacher` VALUES ('t5', '黄老师', '助教');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(32) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `user_type` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('001', 'admin', 'admin', '1');
INSERT INTO `user` VALUES ('425c8d9c407b4adf8231bb5dcb2818f2', 'zys', 'zys', '1');
INSERT INTO `user` VALUES ('4561fa27c234489fbc771989c3f75513', 'Tom', 'Tom', '3');
INSERT INTO `user` VALUES ('87b67546e14b4ca99a4ea7228e0c471b', 'Sam', 'Sam', '2');
INSERT INTO `user` VALUES ('9e93739ad17f4ab8883fdb4f114069b3', 'qiuxinfa', 'qiuxinfa', '3');
