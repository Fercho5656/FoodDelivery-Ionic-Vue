const { fetch } = window
const URL = 'https://localhost:5001/api/Restaurant'

export const getAllRestaurants = async () => {
  try {
    const res = await fetch(URL)
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const addRestaurant = async restaurant => {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(restaurant)
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const deleteRestaurant = async id => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res
  } catch (error) {
    console.error(error)
  }
}

export const editRestaurant = async (id, restaurant) => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(restaurant)
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res
  } catch (error) {
    console.error(error)
  }
}
