# Dr. Appointment



## Background

Making appointments with one's primary care physician can be difficult and time-consuming. Instead of patients trying to find time during their busy lives to place phone calls and make appointments with doctors, this mobile app allows the users to quickly find their doctor, view their availabilities, and make an appointment for them or their family members anytime, anywhere.

[View Development README][readme]

[readme]: docs/README.md

## Functionality & MVP

- Twillio API
  - Two factor authentication to verify users and their phone numbers.
  - Confirmation text when appointments are made.
  - Reminder text is sent one hour before the appointment time.

- AsyncStorage
  - Stores user's phone number and authentication code to local storage for convenience
  - The user no longer has to go through the login process once the phone is authenticated.

- Search
  - Search bias based on users' favorite status, location (distance to geolocation of the phone), and doctors' names.
  - User can swipe to toggle favorite or call the doctor.

## Architecture and Technologies

This project will be implemented with the following technologies:

- React Native (iOS / Android)
- Rails (Heroku with SSL)
- API Authy / Twillio (text messaging)


## Future Implementations

- Create website for doctors to input their schedule.
