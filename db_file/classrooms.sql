-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2020 at 01:59 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `classrooms`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `createClassrooms` (IN `title` VARCHAR(60), IN `description` TEXT, IN `image` MEDIUMBLOB, IN `is_private` TINYINT, IN `userID` INT, OUT `classroomID` INT)  BEGIN
START TRANSACTION;

INSERT INTO classrooms
VALUES(null, title, description, image, is_private);
SET @last_id_classroom = LAST_INSERT_ID();

INSERT INTO classroomownedandowners(userID, classroomID) 
VALUES (userID, @last_id_classroom);

SELECT @last_id_classroom INTO classroomID;

COMMIT;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createUser` (IN `email` VARCHAR(255), IN `password` VARCHAR(60), IN `userName` VARCHAR(20), OUT `userID` INT)  BEGIN
INSERT INTO users 
VALUES(null, email, password, userName);
SET @last_id_user = LAST_INSERT_ID();

SELECT @last_id_user INTO userID;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `isCorrect` tinyint(1) NOT NULL DEFAULT 0,
  `answerValue` text NOT NULL,
  `stepID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `isCorrect`, `answerValue`, `stepID`) VALUES
(242, 1, 'To produce a logical and physical design model of a proposed database system', 110),
(243, 0, 'To make a sketch of a database', 110),
(244, 0, 'To be a base for my data without any logical structure', 110),
(245, 0, 'To structure data in a random order', 110),
(246, 0, 'Adding physical implementations through column types etc.', 111),
(247, 1, 'Arranging data into a series of logical relationships. No physical implementation yet.', 111),
(248, 0, 'Adding physical implementations & logical relationships', 111),
(249, 0, 'Arranging data into a series of physical relationships.', 111),
(250, 0, 'Arranging data into a series of logical relationships. No physical implementation yet.', 112),
(251, 0, 'Adding physical implementations & logical relationships', 112),
(252, 1, 'Transform entities into tables & provide primary keys, constraints etc.', 112),
(253, 0, 'Arranging data into entities from tables.', 112),
(254, 1, 'Normalization helps reduce redundancy and ensure data is stored logically.', 113),
(255, 0, 'Creating relationships to other databases for data ensuring.', 113),
(256, 0, 'Normalization means to normalize your data.', 113),
(257, 0, 'The purpose is to make data easy to find in a database.', 113),
(258, 0, 'No, but it may if one of the values contains NULL.', 114),
(259, 0, 'Yes, values can both be atomic as well as multiple values.', 114),
(260, 1, 'No, a column must only contain atomic values.', 114),
(261, 0, 'I haven’t read the theory, so maybe?', 114),
(262, 0, 'For a table to be in 2NF, it must contain partial dependencies.', 115),
(263, 0, 'For a table to be in 2NF, it must not contain transitive dependencies.', 115),
(264, 0, 'For a table to be in 2NF, it must not have atomic values.', 115),
(265, 1, 'For a table to be in 2NF, it must not contain any partial dependencies. ', 115),
(266, 0, 'For a table to be in 3NF, it must contain partial & transitive dependencies.', 116),
(267, 0, 'For a table to be in 3NF, it must contain transitive dependencies.', 116),
(268, 1, 'For a table to be in 3NF, it must not contain any transitive dependencies. ', 116),
(269, 0, 'For a table to be in 3NF, it must not have atomic values.', 116),
(270, 0, 'When we want to find which RDBMS to use.', 117),
(271, 0, 'When we want to incorporate business logic.', 117),
(272, 1, 'When we want to structure the internal relationships between entities.', 117),
(273, 0, 'When we want to structure unique primary keys.', 117),
(274, 1, 'It is special because it makes it easy to establish relationships among our data.', 118),
(275, 0, 'It is special because it stores files.', 118),
(276, 0, 'It is special because it does not establish relationships among our data.', 118),
(277, 0, 'It is special because it does store data in tabular form.', 118),
(278, 0, 'It is the best at storing files in data format.', 119),
(279, 1, 'It is the best at maintaining data consistency in your database.', 119),
(280, 0, 'It is the best at handling errors in your database.', 119),
(281, 0, 'It is the best at converting data formats.', 119),
(282, 1, 'Structured Query Language.', 120),
(283, 0, 'Structured Quarantine Language.', 120),
(284, 0, 'Standard Query Language.', 120),
(285, 0, 'Standard Quantity Language.', 120),
(286, 1, 'We use the SELECT statement, which is a DQL statement.', 121),
(287, 0, 'We use the INSERT statement, which is a DQL statement.', 121),
(288, 0, 'We use the FIND statement, which is a DML statement.', 121),
(289, 0, 'We use the GET statement, which is a DQL statement.', 121),
(290, 0, 'They define and modify only objects of your database.', 122),
(291, 0, 'They manipulate your data in your database.', 122),
(292, 1, 'They define and modify the structure of your database schema.', 122),
(293, 0, 'They deal with rights and permissions in your database.', 122),
(294, 1, 'Choosing the database that suits your needs in terms of structure and size.', 123),
(295, 0, 'Choosing the database system that is the newest.', 123),
(296, 0, 'Choosing the database that suits your needs in terms of community.', 123),
(297, 0, 'Choosing the database that is free.', 123),
(298, 1, 'Yes, i have. I am ready for the next step on usage of Xampp.', 124),
(299, 0, 'No, i have not.', 124),
(300, 0, 'No, I definitely have not.', 124),
(301, 0, 'No, i won\'t do it.', 124),
(302, 0, 'No, i have not.', 125),
(303, 1, 'Yes, I have. I am ready for the next step on basic usage of phpmyadmin.', 125),
(304, 0, 'No, I definitely have not.', 125),
(305, 0, 'No, i won\'t do it.', 125),
(306, 0, 'No, i have not.', 126),
(307, 0, 'No, i won\'t do it.', 126),
(308, 1, 'Yes, I have. I am ready for the next step on basic usage of phpmyadmin 2.0.', 126),
(309, 0, 'No, I definitely have not.', 126),
(310, 1, 'Yes, I have. I now know the basics of creating a database.', 127),
(311, 0, 'No, i have not.', 127),
(312, 0, 'No, I definitely have not.', 127),
(313, 0, 'No, i won\'t do it.', 127),
(314, 0, 'No, i won\'t do it.', 128),
(315, 0, 'No, I definitely have not.', 128),
(316, 0, 'No, i have not.', 128),
(317, 1, 'Yes, I have. I am ready to see a simple query in PDO.', 128),
(318, 1, 'Yes, I have. I now know how to use PDO to connect to a database.', 129),
(319, 0, 'No, i have not.', 129),
(320, 0, 'No, I definitely have not.', 129),
(321, 0, 'No, i won\'t do it.', 129),
(326, 1, 'A search engine.', 131),
(327, 0, 'A social media platform.', 131),
(328, 0, 'I dont know.', 131),
(329, 0, 'A cook book.', 131),
(330, 0, 'sadfasdf', 132),
(331, 1, 'asdfasdf', 132),
(332, 0, 'asdfasdf', 132),
(333, 0, 'asdfsdf', 132),
(334, 0, 'question 1', 133),
(335, 0, 'asdasda', 133),
(336, 1, 'dasd', 133),
(337, 0, 'sdasdasd', 133),
(338, 0, 'sadasdasdasd', 134),
(339, 0, 'asdasd', 134),
(340, 0, 'dasdasd', 134),
(341, 1, 'asddad', 134),
(342, 1, 'asddasd', 135),
(343, 0, 'asdasdasd', 135),
(344, 0, 'asdasdasd', 135),
(345, 0, 'asdasdad', 135),
(346, 0, 'rwhrthh', 136),
(347, 0, 'hrthrth', 136),
(348, 1, 'rthrthrth', 136),
(349, 0, 'rthrthrth', 136),
(350, 0, 'sdafasdf', 137),
(351, 0, 'asdfasdfsadfasdfsfaqwe', 137),
(352, 1, 'qweqweqwe', 137),
(353, 0, 'qweqweqweq', 137);

-- --------------------------------------------------------

--
-- Table structure for table `classroomfollowedandfollowers`
--

CREATE TABLE `classroomfollowedandfollowers` (
  `classroomID` bigint(20) UNSIGNED NOT NULL,
  `userID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classroomfollowedandfollowers`
--

INSERT INTO `classroomfollowedandfollowers` (`classroomID`, `userID`) VALUES
(120, 79);

-- --------------------------------------------------------

--
-- Table structure for table `classroomownedandowners`
--

CREATE TABLE `classroomownedandowners` (
  `userID` bigint(20) UNSIGNED NOT NULL,
  `classroomID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classroomownedandowners`
--

INSERT INTO `classroomownedandowners` (`userID`, `classroomID`) VALUES
(78, 120),
(79, 122);

-- --------------------------------------------------------

--
-- Table structure for table `classrooms`
--

CREATE TABLE `classrooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `image` mediumblob DEFAULT NULL,
  `isPrivate` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classrooms`
--

INSERT INTO `classrooms` (`id`, `title`, `description`, `image`, `isPrivate`) VALUES
(120, 'Databases - Beginner', 'In this classroom we will cover the basics of database design as well as implementation. This classroom is intended for beginners and will give the student a basic knowledge of topics: Why Database Design is important? Normalization and RDBMS. Using SQL and how to connect to a Database.', '', 0),
(122, 'Our test classroom', 'This is for exam purposes.', '', 0);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_classrooms`
-- (See below for the actual view)
--
CREATE TABLE `get_classrooms` (
`id` bigint(20) unsigned
,`classroomID` bigint(20) unsigned
,`description` text
,`title` varchar(60)
,`isPrivate` tinyint(1)
,`image` mediumblob
,`ownerID` bigint(20) unsigned
,`ownerName` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `lectures`
--

CREATE TABLE `lectures` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `classroomID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lectures`
--

INSERT INTO `lectures` (`id`, `title`, `description`, `classroomID`) VALUES
(97, 'What is Database Design?', 'Here you will learn about the different design processes you have to go through in order to create a database.', 120),
(98, 'Normalization', 'Here you will learn about the normalization and why it is important.', 120),
(99, 'What is a RDBMS?', 'Here you will learn about Relational database management systems.', 120),
(100, 'What is SQL?', 'Here you will learn about SQL (Structured Query Language) and how to use it.', 120),
(101, 'Choosing and installing your database', 'Here you will learn about choosing and installing your relational databases.', 120),
(102, 'Connecting to a database through PHP', 'Here you will learn how to connect to a database with PHP.', 120),
(104, 'Interface design', 'This is for interface design', 122);

-- --------------------------------------------------------

--
-- Table structure for table `sources`
--

CREATE TABLE `sources` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(80) NOT NULL,
  `url` text NOT NULL,
  `stepID` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sources`
--

INSERT INTO `sources` (`id`, `title`, `url`, `stepID`) VALUES
(78, 'Database Design - Guru99', 'https://www.guru99.com/database-design.html', 110),
(79, 'LucidChart diagrams', 'https://www.lucidchart.com/pages/templates/er-diagram/database-er-diagram-template', 111),
(80, 'Physical data model design', 'https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/intro/src/tpc/db2z_physicaldatabasedesign.html', 112),
(81, 'Normalization - Guru99', 'https://www.guru99.com/database-normalization.html', 113),
(82, 'Normalization - StudyTonight', 'https://www.studytonight.com/dbms/database-normalization.php', 114),
(83, 'Partial dependency in - StudyTonight', 'https://www.youtube.com/watch?time_continue=336&v=R7UblSu4744&feature=emb_title', 115),
(84, 'Transitive dependency in - StudyTonight', 'https://www.youtube.com/watch?v=aAx_JoEDXQA&t=90s', 116),
(85, 'ERD - Visual Paradigm', 'https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/', 117),
(86, 'RDBMS - Oracle', 'https://www.oracle.com/database/what-is-a-relational-database/', 118),
(87, 'RDBMS - Oracle', 'https://www.oracle.com/database/what-is-a-relational-database/', 119),
(88, 'SQL - Guru99', 'https://www.guru99.com/introduction-to-database-sql.html', 120),
(89, 'SQL - W3schools', 'https://www.w3schools.com/sql/default.asp', 121),
(90, 'SQL - GeeksforGeeks', 'https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/', 122),
(91, 'SQL - Guru99', 'https://www.guru99.com/introduction-to-database-sql.html', 123),
(92, 'Xampp install - Apachefriends', 'https://www.apachefriends.org/download.html', 124),
(93, 'Guide to install - Wikihow', 'https://www.wikihow.com/Install-XAMPP-for-Windows', 124),
(94, 'Phpmyadmin guide - Skillforge', 'https://skillforge.com/how-to-create-a-database-using-phpmyadmin-xampp/', 125),
(95, 'Phpmyadmin guide - Skillforge', 'https://skillforge.com/how-to-create-a-database-using-phpmyadmin-xampp/', 126),
(96, 'Phpmyadmin guide - Skillforge', 'https://skillforge.com/how-to-create-a-database-using-phpmyadmin-xampp/', 127),
(97, 'PHP Tutorial - W3schools', 'https://www.w3schools.com/php/', 128),
(98, 'Visual representation of code', 'https://docs.google.com/drawings/d/1aToPipgYQhvhFWZIBYOfx7RJIK8aa0HZkW0Q11WSUE8/edit?usp=sharing', 128),
(99, 'PHP Tutorial - W3schools', 'https://www.w3schools.com/php/', 129),
(101, 'Google', 'www.google.com', 131),
(102, 'asdasd', 'asdasddd', 133),
(103, 'asdasd', 'adsasdasd', 134);

-- --------------------------------------------------------

--
-- Table structure for table `steps`
--

CREATE TABLE `steps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(60) NOT NULL,
  `theoryText` text NOT NULL,
  `question` varchar(255) NOT NULL,
  `lectureID` bigint(20) UNSIGNED NOT NULL,
  `stepOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `steps`
--

INSERT INTO `steps` (`id`, `title`, `theoryText`, `question`, `lectureID`, `stepOrder`) VALUES
(110, 'What is Database Design?', 'Database Design is a collection of processes that facilitate the designing, development, implementation and maintenance of enterprise data management systems. Properly designed database are easy to maintain, improves data consistency and are cost effective in terms of disk storage space. The database designer decides how the data elements correlate and what data must be stored.\r\n\r\nThe main objectives of database designing are to produce logical and physical designs models of the proposed database system.\r\n\r\nThe logical model concentrates on the data requirements and the data to be stored independent of physical considerations. It does not concern itself with how the data will be stored or where it will be stored physically.\r\n\r\nThe physical data design model involves translating the logical design of the database onto physical media using hardware resources and software systems such as database management systems (DBMS).', 'What are the main objectives of database designing?', 97, 1),
(111, 'The logical design model', 'A logical design is a conceptual, abstract design. You do not deal with the physical implementation details yet; you deal only with defining the types of information that you need.\r\n\r\nThe process of logical design involves arranging data into a series of logical relationships called entities and attributes. An entity represents a chunk of information. In relational databases, an entity often maps to a table. An attribute is a component of an entity and helps define the uniqueness of the entity. In relational databases, an attribute maps to a column.\r\n\r\nYou can create the logical design using a pen and paper, or you can use a design tool such as Lucid chart.', 'What is the process of a logical design model?', 97, 2),
(112, 'The physical data design model', 'Physical database modeling deals with designing the actual database based on the requirements gathered during logical database modeling. During physical design, you transform the entities into tables, the instances into rows, and the attributes into columns.\r\n\r\nTables and columns are made according to the information provided during logical modeling. Primary keys, unique keys, and foreign keys are defined in order to provide constraints. Indexes and snapshots are defined. Data can be summarized, and users are provided with an alternative perspective once the tables have been created.', 'What is the process of a physical data design model?', 97, 3),
(113, 'What is normalization?', 'Normalization is a database design technique that organizes tables in a manner that reduces redundancy and dependency of data. Normalization divides larger tables into smaller tables and links them using relationships. The purpose of Normalization is to eliminate redundant (useless) data and ensure data is stored logically.\r\n\r\nNormalization rules are divided into the following normal forms:\r\n\r\nFirst Normal Form, Second Normal Form, Third Normal Form, BCNF and Fourth Normal Form.\r\n\r\nRelationships are structured through keys. A key is a value used to identify a record in a table uniquely. A key could be a single column or combination of multiple columns. There are both primary keys as well as foreign keys. A primary key is a single column value used to identify a database record uniquely. Foreign keys ensure rows in one table have corresponding rows in another.', 'What is the purpose of normalization?', 98, 1),
(114, '1NF (First Normal Form)', 'For a table in your database to be in first normal form (1NF), it should follow the following 4 rules. 1) It should only have single also called atomic valued columns. 2) Values stored in a column should be of the same domain. 3) All the columns in a table should have unique names and 4) the order in which data is stored, does not matter.', 'Can there be multiple values in a column?', 98, 2),
(115, '2NF (Second Normal Form)', 'For a table to become normalized into second normal form (2NF), it first must follow the rules of first normal form as well as not having any partial dependencies. Partial dependency is when a nonprime attribute is functionally dependent on part of a candidate key. (A nonprime attribute is an attribute that\'s not part of any candidate key.) To get a better understanding use the following source video, which explains partial dependency.  ', 'What is required for a table to be in 2NF?', 98, 3),
(116, '3NF (Third Normal Form)', 'For a table to become normalized into third normal form (3NF), it first must follow the rules of second normal form as well as not having any transitive dependencies. Transitive dependency is when changing a non-key column, might cause any of the other non-key columns to change.', 'What is required for a table to be in 3NF?', 98, 4),
(117, 'What is an ERD?', 'Entity Relationship Diagram, also known as ERD, ER Diagram or ER model, is a type of structural diagram for use in database design. An ERD contains different symbols and connectors that visualize two important information: The major entities within the system scope, and the inter-relationships among these entities.\r\n\r\nAnd that\'s why it\'s called \"Entity\" \"Relationship\" diagram (ERD)!\r\n\r\nWhen we talk about entities in ERD, very often we are referring to business objects such as products or in our application lectures, steps etc. So, when do we draw ERDs? ERDs are mostly developed for designing relational databases. We mainly use them to design the internal structure of our database. Our relationships, which attributes should an entity hold fx. address or email. You can find a detailed guide in the link below.', 'When do we use an ERD?', 98, 5),
(118, 'What is a RDBMS?', 'A relational database management system refers to a database that stores data in a structured format, using rows and columns. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. This makes it easy to locate and access specific values within the database. It is \"relational\" because the values within each table are related to each other. Tables may also be related to other tables. The relational structure makes it possible to run queries across multiple tables at once. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.\r\n\r\nThe key difference is that RDBMS applications store data in a tabular form, while DBMS applications store data as files.', 'What makes a RDBMS special?', 99, 1),
(119, 'The structure of a relational database.', 'In the early years of databases, every application stored data in its own unique structure. When developers wanted to build applications to use that data, they had to know a lot about the particular data structure to find the data they needed. These data structures were inefficient, hard to maintain, and hard to optimize for delivering good application performance. The relational database model was designed to solve the problem of multiple arbitrary data structures.\r\n\r\nThe relational model provided a standard way of representing and querying data that could be used by any application. From the beginning, developers recognized that the chief strength of the relational database model was in its use of tables, which were an intuitive, efficient, and flexible way to store and access structured information. The relational model is the best at maintaining data consistency across applications', 'What is the relational model good at?', 99, 2),
(120, 'What is a SQL?', 'SQL stands for Structured Query Language. SQL is a standard programming language specifically designed for storing, retrieving, managing or manipulating the data inside a relational database management system (RDBMS).\r\n\r\nSQL is the most widely-implemented database language and supported by the popular relational database systems, like MySQL or MariaDB, SQL Server, and Oracle. However, some features of the SQL standard are implemented differently in different database systems. The SQL statements are mainly categorized into four categories: 1) DDL (Data Definition Language), 2) DQL (Data Query Language), 3) DML (Data Manipulation Language) and 4) DCL (Data Control Language).', 'What does SQL stand for?', 100, 1),
(121, 'DQL & DML', 'The purpose of DQL statements is to retrieve data from your database based on the query passed to it. We use the SELECT statement to query for data. An example could be “SELECT name FROM database”. \r\n\r\nDML statements deal with manipulating the data present in our database.  Here we can use either INSERT, which inserts data into a table, UPDATE, which updates data in a table or DELETE, which deletes data in a table. Below in our link you can try and create your own queries.', 'How do we select data from a database and what category does it belong to?', 100, 2),
(122, 'Data Definition Language (DDL)', 'DDL or Data Definition Language actually consists of the SQL statements that can be used to define the database schema or structure. It simply deals with descriptions of the database and is used to create and modify the structure of database objects in the database. \r\n\r\nWe have the CREATE statement, which creates either tables, indexes, functions, views, stored procedures or triggers. All of these you will get to know if you work with databases. We also have a DROP statement, which deletes a database object from your database. Another common one is the ALTER statement, which alters the structure of your database or database objects. You can find a more detailed description of DDL below in the sources link.', 'What is the purpose of DDL statements?', 100, 3),
(123, 'How to choose?', 'The most important factor when choosing a database is we need to select the database that supports the right structure, size, and/or speed to meet the needs of our application. Our applications deal with data in a variety of formats, so selecting the right database includes picking the right data structures for storing and retrieving data. \r\n\r\nRelational – stores data into classifications (‘tables’), with each table consisting of one or more records (‘rows’) identified by a primary key. Tables may be related through their keys, allowing queries to join data from multiple tables together to access any/all required data. Relational databases require fixed schemas on a per-table basis that are enforced for each row in a table. Relational databases help in the long run with ensuring data consentisy, but can take a long time setting up, because of its complex design. \r\n\r\nDocument-oriented – stores structured information with any number of fields that may contain simple or complex values. Each document stored may have different fields, unlike SQL tables that require fixed schemas. Some document stores support complex hierarchies of data through the use of embedded documents. Additionally, document stores offer extreme flexibility to developers, as fixed schemas do not need to be developed ahead of time. Can become an unstructured mess, when your database becomes too big.', 'What is the most important factor when choosing a database?', 101, 1),
(124, 'How to install a database?', 'We will teach you how to set up a local environment with Xampp, which comes with the RDBMS MariaDB and a usable GUI called PhpMyadmin. This setup can easily be applied to a hosting service, so you can take your application online. There are many ways to set up your database management system and this is just one way of doing it. XAMPP software package contains Apache distributions for Apache server, MariaDB, PHP, and Perl. This local server works on your own desktop or laptop computer. MariaDB is the most famous database server and it is developed by the MYSQL team. PHP usually provides a space for web development. PHP is a server-side scripting language.\r\n\r\nTo install follow the source link “xampp install” and download the version for your computer. When downloaded you should follow the install instructions and choose which attributes you want. Things you should check is that you have MySQL, PHP, PhpMyadmin and Apache. If you’re in doubt, you can follow the source link “Guide to install” if you’re experiencing problems.', 'Have you installed Xampp on your computer?', 101, 2),
(125, 'How to use Xampp and phpmyadmin?', 'When you’re up and running with Xampp you will need to start an apache server as well as MySQL. You can do this by pressing start on the respected fields. When they turn green, they are ready to be used. If you type in your browser “localhost/phpmyadmin/” or “127.0.0.1/phpmyadmin/” you will be directed to phpmyadmin and their graphical user interface. There will be a lot of information and we will be going through the most basic options. The first time you access it, you will need to login using “root” as the username and there will be no password. The first thing to notice is on your right of the screen you will be able to see your database server (MariaDB), your web server (Apache) as well as your php version and phpmyadmin version.\r\n\r\nIf you need additional help, we’ve provided a source link to a more detailed guide.', 'Have you opened phpmyadmin and ready to continue?', 101, 3),
(126, 'Basic usage of phpmyadmin', 'Now we’re ready to use our database. We will create a simple database with a single table. The first thing you will need to do is press in the top left corner, there should be a button called “Databases”. When you have pressed the button you will be taken to a screen with databases (there probably won\'t be a lot) and here you can create your very first database. First we need to type a name for our database. We will call ours “test”, but you can call yours whatever you want. The input field with “utf8mb4_general_ci” is nothing you need to worry about at first. It just means we have unicode (UCA 4.0.0) case-insensitive. When you press “Create” you will be prompted to a page, where we will need to add our first table. \r\n\r\nWe will call ours “users”. You should always call it in a plural form, because we will always have more rows of data in a table. We will change ours to have 2 columns. When you press “Go”, you will see a page with a lot of information. These two rows of input fields are our two columns. To begin with we will just give our columns a name and a type. The first column will of course be named “id” and will be of data type SERIAL. The next column will have a name of “email” and the data type will be VARCHAR(255). When you have chosen VARCHAR, you will need to add a length. That length will be 255. When you’re ready, just press save. This will bring you to our “structure” page, where you will see an overview of our columns in our “users” table. In the next step we will show you how to insert a user and type SQL statements.', 'Have you created a database with a table?', 101, 4),
(127, 'Basic usage of phpmyadmin 2.0', 'Now we’re ready to add a user to our “users” table. To do this is very simple. We just press the “Insert” button in the top navigation, which should be 3 buttons beside “structure”, that you’re on. Here you will be prompted to a page again with a lot of input fields. If you look at the structure of the page, you will see that they are divided in sections and there should be a “Go” button for each if you scroll up and down. We will just create a single row. We will leave the input field of “id” empty, because we have chosen SERIAL as our data type and therefore our database will increment the value itself. The email will be “john@john.dk”. Now we’re ready to press “Go”. You will now see that you have inserted your first user. Phpmyadmin even shows us the SQL query to insert a row into our “users” table. If you press on the browse button in the top navigation, you will see our user created. Now we can try and select this user through a SQL statement. So if we go to the SQL page by pressing “SQL” in the top navigation we will be able to write our own SQL statement. Try writing “SELECT * from users WHERE id = 1” and pressing “Go” in the bottom right corner. You will now see that you have found your user with id of 1. ', 'Have you created a user and selected that user in SQL?', 101, 5),
(128, 'Writing your connection with PDO', 'In this lecture we will teach to connect your backend to your database using PHP’s extension PDO (PHP Data Objects). To starters you’ll need to open your text editor. Any text editor would do the job. We’re using Visual Studio Code. At first you will need to create a file that we can import to other files as our connection file, so you do not need to write it every time. We expect you to have some knowledge of PHP, if not we have added a source link to a guide for PHP. First we will create a try, throw and catch method. Inside the try function we will begin our connection. \r\n\r\nFirstly we will need some variables that will hold our information for connecting. First you’ll need to create a variable called “$db_user_name” with the value of “root”. This can be changed depending on which user you use from your database, but this will be sufficient at first. The next variable will be called “$db_password” with an empty string value. For hosting we will create a variable called “$db_host” with the value of “127.0.0.1”. The next will be called “$db_name” with the value of “test”, which was the database we created in the last lecture. This can be any database you have. Lastly we will create a variable “$db_connection”, which will contain a combined string with some of our created variables. It will look something like this. “mysql:host=$db_host; dbname=$db_name; charset=utf8mb4”. We can see that we use the two variables we created “$db_host” and “$db_name”.\r\n\r\nNow it is time to add our database options and this needs to be the exact same. First we create a variable called “$db_options” with the value of an array with some code. We will attach a source link to an image of the code so it is more clear. But the “$db_options” variable array will look like this “[PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ]”. Phew, now that this variable is out of the way, we need to combine all these variables for our connection, that we will call in other files. The variable will be called “$db” and will use the method “new PDO()”. Inside the parentheses we will have in this order our “$db_connection”, “$db_user_name”, “$db_password” and “$db_options”. Now we’re ready to import this file anyway to connect to our database.', 'Have you connected to your database?', 102, 1),
(129, 'Writing a simple query with PDO', 'Now that you have created a connection we can include in a file, we’re ready to make our first query. Let\'s start by creating a file called “get-user.php”. This will fetch our users in our database. Firstly we need to prepare our statement by writing “$db->prepare()”. This should be added to a variable called fx. “$q”. Inside our prepare method, we write our SELECT statement like this “SELECT * FROM users”. Now we need to execute the query. We do this by writing “$q->execute()”. Before we can see our selected users, we need to fetch the data. We create a variable called “$Data” with the value of “$q->fetch()”. This variable is now ready to be echoed to our browser. You have now successfully connected and fetch data from your database using PHP.', 'Have you fetched your users with PDO?', 102, 2),
(131, 'Jas', 'The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever happened to placeholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.', 'What is google?', 104, 1),
(132, 'asdfasdf', 'The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever happened to placeholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.', 'SFDSADF', 104, 2),
(133, 'sadfasdf', 'The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever happened to placeholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.dsad', 'adsasd', 104, 3),
(134, 'asdasd', 'The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever happened to placeholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.sadsd', 'asdasd', 104, 4),
(135, 'asdasdqwe', 'asdasdasdasdThe concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever happened to placeholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.adsad', 'asdasdasd', 104, 5),
(136, 'redgshrth', 'The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever happened to plertwertewrtaceholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.egtwretywertert', 'rthrwthrth', 104, 6),
(137, 'rthrthrthaef', 'The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I’m the best thing that ever sasdffda to placeholder text. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.', 'sadfasdfasdf', 104, 7);

-- --------------------------------------------------------

--
-- Table structure for table `usercreated`
--

CREATE TABLE `usercreated` (
  `id` bigint(11) NOT NULL,
  `userID` bigint(11) UNSIGNED NOT NULL,
  `createdDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usercreated`
--

INSERT INTO `usercreated` (`id`, `userID`, `createdDate`) VALUES
(11, 78, '2020-06-02 10:18:35'),
(12, 79, '2020-06-03 12:38:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `userName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `userName`) VALUES
(78, 'jakobfalkenberg22@gmail.com', '1234', 'jakobfalken'),
(79, 'john@doe.com', '1234', 'JohnDoe');

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `userCreatedTrigger` AFTER INSERT ON `users` FOR EACH ROW INSERT INTO usercreated
 SET userID = NEW.id,
     createdDate = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure for view `get_classrooms`
--
DROP TABLE IF EXISTS `get_classrooms`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_classrooms`  AS  select `c`.`id` AS `id`,`c`.`id` AS `classroomID`,`c`.`description` AS `description`,`c`.`title` AS `title`,`c`.`isPrivate` AS `isPrivate`,`c`.`image` AS `image`,`o`.`userID` AS `ownerID`,`u`.`userName` AS `ownerName` from ((`classrooms` `c` join `classroomownedandowners` `o` on(`o`.`classroomID` = `c`.`id`)) join `users` `u` on(`u`.`id` = `o`.`userID`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `stepID` (`stepID`);

--
-- Indexes for table `classroomfollowedandfollowers`
--
ALTER TABLE `classroomfollowedandfollowers`
  ADD PRIMARY KEY (`classroomID`,`userID`),
  ADD KEY `classroomfollowedandfollowers_ibfk_2` (`userID`);

--
-- Indexes for table `classroomownedandowners`
--
ALTER TABLE `classroomownedandowners`
  ADD PRIMARY KEY (`userID`,`classroomID`),
  ADD UNIQUE KEY `classroomID_2` (`classroomID`),
  ADD KEY `classroomID` (`classroomID`);

--
-- Indexes for table `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `title` (`title`);

--
-- Indexes for table `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `classroomID` (`classroomID`);

--
-- Indexes for table `sources`
--
ALTER TABLE `sources`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `stepID` (`stepID`);

--
-- Indexes for table `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `unique_order` (`lectureID`,`stepOrder`);

--
-- Indexes for table `usercreated`
--
ALTER TABLE `usercreated`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=354;

--
-- AUTO_INCREMENT for table `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `lectures`
--
ALTER TABLE `lectures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `sources`
--
ALTER TABLE `sources`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `steps`
--
ALTER TABLE `steps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `usercreated`
--
ALTER TABLE `usercreated`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`stepID`) REFERENCES `steps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `classroomfollowedandfollowers`
--
ALTER TABLE `classroomfollowedandfollowers`
  ADD CONSTRAINT `classroomfollowedandfollowers_ibfk_1` FOREIGN KEY (`classroomID`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `classroomfollowedandfollowers_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `classroomownedandowners`
--
ALTER TABLE `classroomownedandowners`
  ADD CONSTRAINT `classroomownedandowners_ibfk_1` FOREIGN KEY (`classroomID`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `classroomownedandowners_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `lectures`
--
ALTER TABLE `lectures`
  ADD CONSTRAINT `lectures_ibfk_1` FOREIGN KEY (`classroomID`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sources`
--
ALTER TABLE `sources`
  ADD CONSTRAINT `sources_ibfk_1` FOREIGN KEY (`stepID`) REFERENCES `steps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `steps`
--
ALTER TABLE `steps`
  ADD CONSTRAINT `steps_ibfk_2` FOREIGN KEY (`lectureID`) REFERENCES `lectures` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `usercreated`
--
ALTER TABLE `usercreated`
  ADD CONSTRAINT `usercreated_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
