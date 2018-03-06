
#### Author: Alexander Vikenfalk
#### Course: Advanced Web App Development 2
#### Program: Frontend Development (YHJUST16)
#### School: Lernia YH

#### About this project: 
This project was made as a school project. It had to fullfill the following requirements:
* Handle post/resource. Ability to vote/comment on the posted resource.
* Update should be realtime with Firebase event listeners.
* App should use React as frontend.
* App should use Redux handle state.
* Only the admin and user who posted/commented should be able to edit/delete.
* Firebase auth should be used, social login (Google, Facebook, etc) for extra credit.
* There should be one or several admin-users, the rest should be regular users.
* Admin should be able to edit/delete content and handle users.
* Logic and application-state should be as high up as possible.
* Components without logic should be stateless/functional components.
* Should be deployed live and production ready.
* App should be on GitHub and have a wellformated README.
* Use composition and have atleast two HOCs that's not part of external library.
* Should not leak info from development and be production ready.
* Extended error handling. Errors should be shown in the UI.
* Code layout and UI should have clear structure.

#### Technologies used: 
* **React.js** for overall functionality. 
* **Redux** for state handling.
* **Firebase** for backend and database.
* **CSS 3** for design.


#### How to use this service ####
1.  Go to: https://messageboard-3ec9f.firebaseapp.com/
2.  Click Login. 
3. If you already have an account then you can log right in, otherwise press 'create account'.
3. When you create an account or login with an existing one, the messageboard should load (if you don't see any posts, please update the page)
4. Create an message with the fields on the bottom or comment on an existing one. 

[LinkedIn](https://de.linkedin.com/in/alexander-vikenfalk-6b993b42)

#### Screenshots ####
![Create Account](https://user-images.githubusercontent.com/16190870/34210397-ffaee5ca-e595-11e7-9ea9-5b2962d6539a.png)
![Posts](https://user-images.githubusercontent.com/16190870/34210274-9a2d525e-e595-11e7-9e4c-a58aab9441fa.png)

#### Other remarks ####
If the application doesn't show any messages on login, please update the page and they should show up.
As of right now it misses some functions like editing and an user interface. 
The pictures that are used on account creation are uploaded to firebase and stored but as of right now not mapped out anywhere within the application itself.
