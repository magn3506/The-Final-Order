# The-Final-Order

This is an exam project at KEA's Web development education.
An active installation requires node.js

🚀 Database installation

1. Install Xampp to your computer.
   Provided is a link to a download page:
   https://www.apachefriends.org/index.html

2. Open Xampp and start apache server as well as MySQL server.

3. Go to phpmyadmin page either through:
   http://localhost/phpmyadmin
   http://127.0.0.1/phpmyadmin

4. Then import the provided database from zipped code file.
   The database name is called classrooms.sql located in db_file.

🚀 Application installation

1. Make sure you clone the git repository inside your xampp/htdocs folder.

2. When you have cloned the repo, navigate to the production folder by typing in the terminal
   cd production

3. From the production folder run npm install
   This might take a while...

4. To connect to the db you must configure the user path. You must configure to files.
   4.1 The first file is located inside private/local_server_path.php. Change the path to your local host path.
   4.2 The second file is located inside production/global_variables.js. Again change the path to your local server path.

5. In the terminal run gatsby develop.
   If you experience any trouble. Try running in the terminal npm install -g gatsby-cli

6. Open your chrome browser on localhost/8000 and you are ready. Enjoy.

Github repo: https://github.com/magn3506/The-Final-Order.git
