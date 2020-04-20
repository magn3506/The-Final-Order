
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