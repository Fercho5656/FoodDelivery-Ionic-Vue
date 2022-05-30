const { fetch, sessionStorage } = window

export const registerUser = async user => {
  try {
    const response = await fetch('https://localhost:5001/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (response.status === 201) {
      return await response.json()
    } else {
      throw new Error('Error registering user')
    }
  } catch (error) {
    console.error(error)
  }
}

export const login = async user => {
  try {
    const { email, password } = user
    const body = JSON.stringify({ email, password })
    const response = await fetch('https://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const json = await response.json()
    console.log(json)
    if (response.status === 200) {
      sessionStorage.setItem('token', json.token)
      return json
    } else {
      throw new Error(`Error logging in ${json}`)
    }
  } catch (err) {
    console.error(err)
  }
}

export const isAuthorized = async () => {
  try {
    const response = await fetch('https://localhost:5001/api/auth/check', {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    return response.status === 200
  } catch (err) {
    console.error(err)
  }
}
