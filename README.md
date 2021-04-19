# WhatIsOnYourMind
A React app connected to a Google Cloud database, to share whatever is on your mind.

Website link: https://what-is-on-your-mind.vercel.app/

Add /thoughts or /database to URL to see the thoughts or to see the whole database entries respectively.

Description: This is a toy project I'm using to learn about databases, and web development using React.js. Work in progress right here.

The project is like an anonymous twitter, where you can share a joke / a quote / an idea up to 100 characters, which is sent to a backend database where other people put their own ideas too. Then you're shown a randomized bunch of ideas, with which you will be able to somehow interact in the future (upvote/downvote, reply...?).

The whole project works under the premise that the user types a text that is worthy of being read, and causes surprise or makes somebody else think. Therefore if an user type jibberish it will need to be filtered out, and there has to be some system in place to show to the user something fun and relatable(probably a ternary voting system with upvote/downvote/jibberish buttons). The fun lays in the surprise of not knowing what will be shown to you, and the hopefully good quality of what other users are inputting.

Example:

User 1: "Tabletop that has no legs. A floating board. Strong magnets hold creation" -> Some users may find this poorly made Haiku funny, surprising or insightful. This will be upvoted/downvoted.
User 2: "anjksdfn fnafnlkajnv" -> This is jibberish, and users will click the jibberish mark. After a certain threshold, this will be removed from the database.

There is a JsonDatabase branch, where I've done a test database simulation using a db.json file. In the Firebase branch (which is merged to main as well) there's a real time database integration, using Google Cloud, through their Firebase service.
