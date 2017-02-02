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
