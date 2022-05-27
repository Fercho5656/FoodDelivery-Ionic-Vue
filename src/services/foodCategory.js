const { fetch } = window

const URL = 'https://localhost:5001/api/CategoryFood'

export const getFoodCategories = async () => {
  try {
    const res = await fetch(URL)
    const json = res.json()
    return json
  } catch (error) {
    console.error(error)
  }
}
