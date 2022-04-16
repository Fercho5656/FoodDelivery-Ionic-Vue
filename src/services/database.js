const { fetch } = window
export const registerUser = async user => {
  try {
    const response = await fetch('https://localhost:5001/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (response.status === 200) {
      return await response.json()
    } else {
      throw new Error('Error registering user')
    }
  } catch (error) {
    console.error(error)
  }
}
