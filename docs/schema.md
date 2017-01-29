# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
phone_number    | string    | not null, indexed
country_code    | integer   | not null, indexed
authy           | integer   | not null, indexed

## patients
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
user_id         | integer   | not null, foreign key (references user), indexed

## doctors
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
salutation        | string    | not null
first_name        | string    | not null
last_name         | string    | not null
street            | string    | not null
number            | string    | not null
city              | string    | not null
lat               | float     | not null, indexed
lng               | float     | not null, indexed

## favorites
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
doctor_id       | integer   | not null
user_id         | integer   | not null

## appointment_dates
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
appointment_dates | date      | not null

## time_slots
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
appointment_date_id | integer   | not null, foreign key (references date), indexed
time                | string    | not null

## blocked_times
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
doctor_id    | integer   | not null, foreign key (references doctors), indexed
time_slot_id | integer   | not null, foreign key (references time_slots), indexed

## appointments
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
doctor_id    | integer   | not null, foreign key (references doctors), indexed
time_slot_id | integer   | not null, foreign key (references time_slots), indexed
user_id      | string    | not null, foreign key (references users), indexed

## appointment_patients
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
appointment_id | integer   | not null, foreign key (references appointments), indexed
patient_id     | integer   | not null, foreign key (references patients), indexed
