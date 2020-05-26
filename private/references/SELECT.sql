
/*THIS IS HOW TO SELECT followed classrooms FROM USER ID*/
SELECT classroomfollowedandfollowers.userID, classroomfollowedandfollowers.classroomID, classrooms.title, classrooms.description
FROM classroomfollowedandfollowers
INNER JOIN classrooms ON classroomfollowedandfollowers.classroomID=classrooms.id
WHERE classroomfollowedandfollowers.userID = 2

/*THIS IS HOW TO SELECT owned classrooms FROM USER ID*/
SELECT classroomownedandowners.userID, classroomownedandowners.classroomID, classrooms.title, classrooms.description
FROM classroomownedandowners
INNER JOIN classrooms ON classroomownedandowners.classroomID=classrooms.id
WHERE classroomownedandowners.userID = 2

/*SEE ALL LECTURES FROM classromID 2*/
SELECT * FROM lectures WHERE classroomID = 2

/*SEE ALL STEPS FROM lectureID 1 in order from stepOrder*/
SELECT * FROM steps WHERE lectureID = 1 ORDER BY stepOrder

/*SEE ALL ANSWERS FROM step 2*/
SELECT * FROM answers WHERE stepID = 2

/*SELECT user WITH email @A*/
SELECT * FROM users WHERE email = "@A"


/* JOINS */

/* GET CLASSROOM */
SELECT
    c.id AS classroomID,
    c.description,
    c.title,
    c.isPrivate,
    c.image,
    o.userID AS ownerID,
    u.userName
FROM
    classrooms AS c
INNER JOIN classroomownedandowners AS o
ON
    o.classroomID = c.id
INNER JOIN users AS u
ON
    u.id = o.userID

/* VIEWS */
/* get_classrooms*/
CREATE VIEW get_classrooms AS SELECT
    c.id AS classroomID,
    c.description,
    c.title,
    c.isPrivate,
    c.image,
    o.userID AS ownerID,
    u.userName AS ownerName
FROM
    classrooms AS c
INNER JOIN classroomownedandowners AS o
ON
    o.classroomID = c.id
INNER JOIN users AS u
ON
    u.id = o.userID

/* SELECT VIEW */
/* ALL ROOMS */
SELECT * FROM `get_classrooms`
/* SINGLE BY CLASSROOM ID */
SELECT * FROM `get_classrooms` WHERE classromID = 1
