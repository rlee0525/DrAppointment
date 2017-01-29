# Dr. Appointment

Live Site

## Background

...

## Design Docs
* [View Wireframes][wireframes]

[wireframes]: docs/wireframes

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

...


## Architecture and Technologies

This project will be implemented with the following technologies:

- React Native (iOS / Android)
- Rails (Heroku with SSL)
- Authy / Twillio (text messaging)

## Implementation Timeline

**Day 1**

- Setup Rails Backend (Authentication)
<<<<<<< HEAD
  - Seed data
  - Model
  - Auth with Authy

- React Native: Initial Setup iOS / Android App
  - Hello world
  - Authy: Create User (SMS)
  - Get location working (Phone API / IP Location)
  - Search function
  -
=======
>>>>>>>

RJ:

RL:


**Day 2**

...

**Day 3**

...

**Day 4**

...

**Day 5**

...

## Bonus features

...
