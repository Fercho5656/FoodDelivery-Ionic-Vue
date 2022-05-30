const { fetch } = window

const URL = 'https://food-frank.azurewebsites.net/api/CategoryFood'

export const getFoodCategories = async () => {
  try {
    const res = await fetch(URL)
    const json = res.json()
    return json
  } catch (error) {
    console.error(error)
  }
}

export const addFoodCategory = async foodCategory => {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodCategory)
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export const editFoodCategory = async (id, foodCategory) => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodCategory)
    })
    return res
  } catch (error) {
    console.error(error)
  }
}
