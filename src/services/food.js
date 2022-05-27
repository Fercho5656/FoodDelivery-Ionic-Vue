const { fetch } = window
const URL = 'https://localhost:5001/api/Food'

export const getAllFood = async () => {
  try {
    const response = await fetch(URL)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const addFood = async food => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(food)
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
