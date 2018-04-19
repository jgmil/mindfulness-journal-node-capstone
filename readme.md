# The Present Mind

The Present Mind offers users the ability to learn about mindfulness, access meditation resources, and journal about their mindfulness experience and meditation practice.

## Screenshots
![Landing page screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl01.png)
![Account setup screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl02.png)
![User homepage screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl03.png)
![Achievement timeline screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl04.png)
![Skills word cloud screen shot](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/njl05.png)

## Use Case
Not Just Luck is for anyone who struggles with impostor syndrome and would like a centralized place to record and reflect upon their accomplishments and what it took to achieve them. Not Just Luck is like a good friend who reminds you of your strengths when you forget.

## Initial UX
User Stories
AS A VISITOR, NOT LOGGED IN

* As an initial visitor, I wnat to land on the web page and see what it is about so I can decide whether I want to use it. I should be able to read about mindfulness so that I can learn about it, access meditation resources so that I can begin or maintain a meditation practice and create an account, so that I can track my mindfulness and meditation practice.
![UI Flow handwritten draft](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/wf00.jpg)

* As a user who is not logged, I should be able to access mindfulness and meditation resources without logging in, so that I can meditate or learn more about mindfullness, or log in to my account for my personal journal, so that I can track my mindfulness and meditation practice.![UI Flow handwritten draft](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/wf00.jpg)

(LANDING PAGE--wireframe will have title, logo, a few details about logging in and what the app is about)
![UI Flow handwritten draft](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/wf00.jpg)

AS A LOGGED-IN USER

* As a logged in user, I should be able to access and update my goal for my mindfulness practice,
so that I can reflect on the purpose of my mindfulness practice.

* As a logged in user, I should be able to create a new journal entry, access existing entries, and edit or delete an entry, so that I can
track and reflect upon my mindfulness and meditation practice.

* As a user, I can use the minduflness journal for goal/intention setting, a mood log, a meditation log, and reflections, so that I can track multiple facets of my mindfulness practice.

* As a logged in user, I should be able to log out.

![UI Flow handwritten draft](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/wf01.jpg)
![UI Flow handwritten draft](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/wf02.jpg)
![UI Flow handwritten draft](https://github.com/Marjona6/not-just-luck-thinkful-full-stack-capstone/blob/master/public/img/wf03.jpg)

## Working Prototype
Find a working prototype with Node at https://mindfulness-journal.herokuapp.com/ .

## Functionality
* Users are able to access information and resources about mindfulness whether they are logged in or not.
* When they first set up their account, users will be asked to frame their mindfulness practice by setting a goal. They may come back to change their goal at any time. Users will also be prompted to fill our their first journal entry.
* Once they have set up an account, users will be able to change their goal and submit entries to their mindfulness journal. This will allow them to track and reflect on their practice.

## Technical
The Present Mind was built as two separate parts.

### Front End

* HTML5
* CSS3
* JavaScript
* jQuery

### Back End

*Node.js
*Express.js
*MongoDB
*Mongoose
*mLab database
*[Mocha](https://mochajs.org) and [Chai](http://chaijs.com/) for testing


###Responsive
The app is responsive and optimized for both desktop and mobile viewing and use.

###Security

User passwords are encrypted using [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

## API Documentation
API endpoints for the back end include:
* POST to '/users/create' for creating a new user
* POST to '/login' to log in an existing user
* POST to '/goal' to create a new goal
* PUT to '/goal/:id' to update an existing goal
* GET to '/goal/:user' to access all of a user's existing goals
* GET to '/goal/:id' to access a goal by ID
* DELETE to '/goal/:id' to delete a single goal by ID
* POST to '/journal' to add an achievement to a user's list of accomplishments
* PUT to '/journal/:id' to update an existing journal entry
* GET to '/journal/:user' to access all of a user's existing achievements
* GET to '/journal/:id' to access a single achievement by ID
* DELETE to '/journal/:id' to delete a single achievement by ID

## Development Roadmap
Planned additional features and improvements will allow users to:
* Be presented with inspirational quotes
* Set up email reminders
* Change password
* Update email address
