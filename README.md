# Dr. Appointment

Live Site

## Background

Making appointments with one's primary care physician can be difficult and extremely time-consuming. Instead of trying to find time during work to place phone calls and make appointments with doctors, this mobile app will allow the users to quickly search for their doctors, view their availabilities, and make an appointment for users and their family members at the time of users' convenience.

## Functionality & MVP

The project implementation should allow the user to:

- allow users to search doctors by name (using location search bias, phone geolocation or ip geolocation)
- authenticate users with text (auth codes) message
  - auto save doctors with whom appointments were made
  - allow users to save favorite doctors (swipe to delete fav, order by recent appointment)
- show page of doctors (swipe for other doctors in same practice)
  - availability calendar (3 days swipe for +/- 3 days)
  - name
  - picture
  - address (including distance from current location if available)
  - fav button
- booking appointments
  - you or someone else?
  - optional note
  - text confirmation of booking
- reminders
  - text message day before appointment (twilio)

## UX Flow
# 2-way authentication
1. Invite user to authenticate with phone number -> user enters phone number
2. Backend will send auth code to user
3. User will enter auth code to authenticate

# When authenticated
1. Let user search doctor by name (location biased) -> user selects doctor from drop down menu
2. User browses time slots -> user selects time slots
3. User selects whether the appointment is for him/her or someone else
4. User gets appointment confirmation by text message
5. User gets reminder for doctor appointment

## Wireframes

* [View Wireframes][wireframes]

[wireframes]: docs/wireframes

## Architecture and Technologies

This project will be implemented with the following technologies:

- React Native (iOS / Android)
- Rails (Heroku with SSL)
- Authy / Twillio (text messaging)

## Implementation Timeline

**Day 1**

- Setup Rails Backend (Authentication)
  - Seed data
  - Model
  - Auth with Authy

- React Native: Initial Setup iOS / Android App
  - Hello world
  - Authy: Create User (SMS)
  - Get location working (Phone API / IP Location)
  - Search function


### Group Members & Work Breakdown

Our group consists of two members, Randy Jap and Raymond Lee.  

Randy's primary responsibilities will be:

- Researching & implementing the ability to locate and alter DOM elements
- Creating the functionality to identify all colors based on the CSS file
- Writing the algorithm to correctly identify high-contrast alternatives
- Creating the Chrome store page & marketing the app

Raymond's primary responsibilities will be:

- Researching and setting up the Chrome extension infrastructure
- Producing the new HTML file with new colors
- Creating the algorithm to correctly identify gray-scale alternatives
- Creating the Settings page
- Writing the repo's README, complete with screenshots and code snippets  

### Implementation Timeline

**Day 1**: Get started on the rails backend using postgreSQL and learn about React Native. By the end of the day, we will have:



Get started on the infrastructure of the extension, following [this guide](https://developer.chrome.com/extensions/getstarted) from Chrome.  By the end of the day, we will have:

- A completed `package.json` (Ryan)
- A completed `manifest.json` (Ryan)
- The ability to locate and alter a DOM element by class (Munyo)

**Day 2**: Work on identifying the colors used in the DOM by class and other attributes, and create and render a new DOM with different colors.  By the end of the day, we will have:

- The ability to identify all colors (Munyo)
- A new HTML file that gets rendered in place of the current DOM, using different colors (Ryan)

**Day 3**: Dedicate this day to correctly replacing colors with their grey scale or high-contrast equivalents.  By the end of the day:

- Implement an algorithm for replacing colors with grey scale tones (Ryan)
- At least understand (and hopefully implement) and algorithm for replacing colors with high-contrast equivalents (Munyo)
- Render a new DOM that contains each of these color equivalents (Ryan)

**Day 4**: Create the settings page and connect the settings to the color change logic.  If time, create high-contrast grey scale and low-contrast algorithms as well.  By the end of the day:

- Fully implemented settings changes that re-render a differently colored DOM (Ryan)
- A detailed README (Ryan)
- A polished Chrome store page, sent to our networks to begin marketing/downloads (Munyo)
- If time, implement the final two features: normal color to low contrast and normal to high-contrast grey scale (Both)

**Day 5**: Create demo page for chrome extension. By the end of the day:
- Set up github pages (Ryan)
- Mock up wireframes for how the demo page will look (Both)
- Grab nice looking screenshots from the chrome extension (Munyo)
- Make a few gifs that shows off the key features of the chrome extension (Munyo)

### Plan for getting users and reviews
- Both Munyo and Ryan will each share with at least 20 friends and family and ask for good reviews
- Munyo will find an appropriate subreddit and make a post there to show off the chrome extension
- Ryan will reach out to http://www.colourblindawareness.org/ to share the chrome extension
