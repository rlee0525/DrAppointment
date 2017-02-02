export const registerUser = user => (
  fetch('http://localhost:3000api/users', {
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
  fetch(`http://localhost:3000/api/doctor/${id}`, {
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
