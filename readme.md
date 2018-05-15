# The Present Mind

The Present Mind offers users the ability to create a mindfulness journal and access mindfulness resources.

## Screenshots
![Landing page screen shot](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/tpm-landing.png?raw=true)

![Account setup screen shot](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/tpm-create-account.png?raw=true)

![User homepage screen shot](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/tpm-dashboard.png?raw=true)

![Journal entry screen shot](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/tpm-journal-entry.png?raw=true)

![Update entry screen shot](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/tpm-dashboard.png?raw=true)

![More info screen shot](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/tpm-info.png?raw=true)

## Use Case
The Present Mind is for anyone interested in learning about mindfulness and tracking their mindfulness practice. The Present Mind offers mindfulness resources and an all-in-one mindfulness journal that allows users to:
* set an intention for their practice
* track their meditation
* reflect upon their experience with mindfulness and
* maintain a gratitude journal.

## Initial UX

### User Flow Diagram

![User Flow Diagram Handwritten draft](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/IMG_20180425_165402.jpg?raw=true)

### User Stories

#### As a visitor, not logged in:

* As an initial visitor, I want to land on the web page and see what it is about so I can decide whether I want to use it. I should be able to read about mindfulness so that I can learn about it, access meditation resources so that I can begin or maintain a meditation practice and create an account, so that I can track my mindfulness and meditation practice.

* As a user who is not logged, I should be able to access mindfulness and meditation resources without logging in, so that I can meditate or learn more about mindfullness, or log in to my account for my personal journal, so that I can track my mindfulness and meditation practice.

![Wireframe design handwritten draft](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/IMG_20180425_163423.jpg?raw=true)

![Wireframe design handwritten draft](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/IMG_20180425_163427.jpg?raw=true)

#### As a logged in user:

* As a logged in user, I should be able to create a new journal entry, access existing entries, and edit or delete an entry, so that I can
track and reflect upon my mindfulness and meditation practice.

* As a user, I can use the minduflness journal for goal/intention setting, a mood log, a meditation log, reflections and gratitudes, so that I can track multiple facets of my mindfulness practice.

* As a logged in user, I should be able to log out.
![Wireframe design handwritten draft](https://github.com/jgmil/mindfulness-journal-node-capstone/blob/master/public/img/IMG_20180425_163445.jpg?raw=true)


## Working Prototype
Find a working prototype with Node at http://mindfulness-journal.herokuapp.com/ .

## Functionality
* Users are able to access information and resources about mindfulness whether they are logged in or not.
* When they first set up their account, users will also be prompted to fill our their first journal entry.
* Once they have set up an account, users will be able to edit or submit entries to their mindfulness journal. This will allow them to track and reflect on their practice.

## Technical
The Present Mind was built as two separate parts.

### Front End
* HTML5
* CSS3
* JavaScript
* jQuery

### Back End
* Node.js
* Express.js
* MongoDB
* Mongoose
* mLab database
* [Mocha](https://mochajs.org) and [Chai](http://chaijs.com/) for testing


### Responsive
The app is responsive and optimized for both desktop and mobile viewing and use.

### Security
User passwords are encrypted using [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

## API Documentation
API endpoints for the back end include:
* POST to '/users/create' for creating a new user
* POST to '/users/login' to log in an existing user
* POST to '/entry/create' to add a new journal entry
* PUT to '/entry/:id' to update an existing journal entry
* GET to '/entries/:user' to access all of a user's existing journal entries
* GET to '/entry/:id' to access a single achievement by ID
* DELETE to '/entry/:id' to delete a single achievement by ID

## Development Roadmap
Planned additional features and improvements will allow users to:
* Be presented with mindfulness quotes and stories
* Access to guided meditations
* Set up email reminders to meditate or journal
* Change password
* Update email address
