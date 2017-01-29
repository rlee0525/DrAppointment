# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Home

- `GET /api/doctor_search`
  - accepts JSON parameters: "doctor name"  
- `GET /api/favorite_doctors`

### Session

- `POST /api/session`

### Show

- `GET /api/doctor`
  - accepts JSON parameters: doctor_id, appointment_date_id

### Appointment

- `GET /api/appointments`
- `SHOW /api/appointments/:id`
- `DELETE /api/appointments/:id`
- `POST /api/appointments`
