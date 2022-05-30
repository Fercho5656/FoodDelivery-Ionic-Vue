const { fetch } = window
const URL = 'https://food-frank.azurewebsites.net/api/CategoryRestaurant'

export const getRestaurantCategories = async () => {
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

export const addRestaurantCategory = async category => {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const updateRestaurantCategory = async (id, newCategory) => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newCategory })
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res
  } catch (error) {
    console.error(error)
  }
}

export const deleteRestaurantCategory = async id => {
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
