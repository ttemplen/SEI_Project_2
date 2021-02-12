# SEI_Project_2
Full CRUD App project
cdelscode 
For SEI project 2 I chose to create a fishing report app.

Tools used include:
    - Visual Studio Code, used for code developement.
    - Postgres SQL server and PGMDatadbase admin
    - Heroku for deployment
    - Github for backup and Heroku is deployed automatically from Github when pushing to Github.
    - Node
    _Sequilize
    _Iterm

Model View Controller "MVC" design is used for creation of the app.

Controllers
Two Controllers where created, fishesController and usersController.
The controllers work in conjunction with the models created, which were:
-fish.js and user.js

PGadmin was used to create the Database fish_dev.
    The database was populated using Node via migration and seeding files from Iterm

    The tables created and populated within PGadmin were Fish and User to align with the models and controllers created.

Models
    The Fish model "belongs to User" through the foreign key "userid".
    The User model "has many" associations to items in the Fish model, also throught the foreign key "userid.

 Views
    View are established for Users and Fish using EJS files.
        Users have the following pages:
            - Index.ejs
            -login.ejs
            -profile.ejs
            -signup.ejs
    The index file provides a choice to either login or to sign up.

    Login and Signup provide the functionality as named.
    Profile shows the users profile and also allows the user to edit their profile.

        The fishing reports are manipulated throught 4 additional EJS files, they are:
        -edit.ejs
        -index.ejs
        -new.ejs
        -show.ejs
     The index file shows all the fishing reports and allows the user to go to any fishing report or submit a new fishing report.

     New allows the user to created a fishing report and post a picture of their fish.

     Edit allow the user to edit the report as named.

    The show page shows the fishing report as named.  


    Users use restful routes in the userController to :
    1) sign up
    2) log in
    3) edit their profile
    4) delet their profile
    In the fishescontroller users use the restful routes to:
    5)creat a new fishing report 
    6) edit a fishing report
    7) view a fishing report
    8) delete a fishing report


    User stories.

    1. As as user I would like to see all the existing fishing reports.

    2. As a user I would like to create an account to view fishing reports from my and my friends adventures.

    3. If I have a picture from my fishing trip I would like to be able to share my photo.

    4. As a user I would like to be able to write a short description of my fishing trip for my friends.

    5. As a user I would like to be able to share the general area I was fishing in.

    6. As a user I would like to be able for people to see who posted the fishing trip photo.

    7. As a user I would like the ability to edit my profile whenever I choose.

    8. As a user I would like the option to delete my profile whenever I choose if I no longer wish to participate.

    9. As a user I would like the ability to edit my fishing reports if I feel the desire to do so.

    10. As a user I would like the ability to delete fishing reports I have created if I choose to.




 


