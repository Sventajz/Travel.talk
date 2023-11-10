# TravelTalk (in progress...)
Travel blog project for my masters degree
#Tech stack used to build the project:
<ol>
<li>NodeJS</li>
<li>VueJS</li>
<li>MongoDB</li>
<li>ExpressJS</li>
<li>Bcrypt</li>
<li>Axios</li>
</ol>

## API-s used:
<ol>
  <li>Google maps api</li>
  <li>Google geocode api</li>
</ol>

The idea of the app is for users to share their travels with other users. Sort of like a traveling social media app. They can share their travels with posts and visualy.
Every user has their own map with map markers signifying where they've been. All the posts and locations are stored in a database and the Google geocode api converts the
location strings to coordinates so that it can be added to the map.
#Safety
All the users and passwords are saved in a database. THe passwords are stored with an encrypted values so there is no security risk of leaking passwords.

## Planned features:
- Complete UI redesign (currently in progress)
-New features such as: comments, uploading images etc.
- further rendering and fetching optimizations
