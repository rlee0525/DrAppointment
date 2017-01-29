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
### 2-way authentication
1. Invite user to authenticate with phone number -> user enters phone number
2. Backend will send auth code to user
3. User will enter auth code to authenticate

### When authenticated
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
- API Authy / Twillio (text messaging)

### Group Members & Work Breakdown

Our group consists of two members: Randy Jap and Raymond Lee.

Randy's primary responsibilities will be:

- Research and implement the backend calendar functionality
- Research and implement web deployment and Apple Store requirements
- Write the documentation for Apple Store requirements
- Write the documentation for Play Store requirements

Raymond's primary responsibilities will be:

- Research and implement Native React to get the mobile app working (iOS & Android)
- Overall styling of the mobile app
- Research and implement 2-way auth with authy
- Research and implement the Google Geocoding API & IP geolocating

### Implementation Timeline


**Day 1**: Backend / Start Native React

- Setup backend, finish all models (associations), some seed data
- Learn enough about react native to get hello world.  Mobile (0) auth page.  Get location of user (phone api and/or ip lookup)

**Day 2**: Authy API / Web Deployment

- Set up two factor authentication using Authy and reminder text message
- Setup SSL, domain, ensure deploy on heroku

**Day 3**:

- Implement search function with new algorithm that filters and sorts by favorites doctors, radius of users' geolocation using Google API, and doctor's name
- Create component (1) home/search page and (2) doctor/show page

**Day 4**:

- Create component (3) appointment page
- Send confirmation SMS + Reminder (set to day before)

**Day 5**:

- Finalize styling, retest, (apply to app store)
- Finalize Production README

**Bonus**:
- Website admin page for receptionist to manage time slots and appointments.
- ActionCable for real time refresh
- Landscape mode

### Plan for getting users and reviews
- Survey/gauge interest in app at 5 doctor's practice
  - Make a questionnaire
  - Tabulate results and include in production README
- Both will each share with at least 5 friends and family and ask for good reviews
