export const registerUser = user => (
  fetch('https://www.drappointment.io/api/users', {
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
  fetch('https://www.drappointment.io/api/session', {
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
  fetch(`https://www.drappointment.io/api/doctors/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const fetchDoctorSearchResults = input => (
  fetch('https://www.drappointment.io/api/doctor_search', {
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
  fetch('https://www.drappointment.io/api/session', {
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
  fetch('https://www.drappointment.io/api/patients', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const createPatient = patient => (
  fetch('https://www.drappointment.io/api/patients', {
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
  fetch('https://www.drappointment.io/api/appointments', {
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

export const fetchAppointments = () => (
  fetch('https://www.drappointment.io/api/appointments', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
);

export const deleteAppointment = id => (
  fetch('https://www.drappointment.io/api/appointments', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })
);
