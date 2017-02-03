export const registerUser = user => (
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user
    })
  })
);

export const authenticateUser = user => (
  fetch('http://localhost:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user
    })
  })
);

export const fetchDoctor = id => (
  fetch(`http://localhost:3000/api/doctors/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const fetchDoctorSearchResults = input => (
  fetch('http://localhost:3000/api/doctor_search', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input
    })
  })
);

export const createAppointment = data => (
  fetch('http://localhost:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data
    })
  })
);

export const fetchPatients = () => (
  fetch('http://localhost:3000/api/patients', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const createPatient = patient => (
  fetch('http://localhost:3000/api/patients', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      patient
    })
  })
);

export const makeAppointment = appointment => (
  fetch('http://localhost:3000/api/appointments', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      appointment
    })
  })
);
