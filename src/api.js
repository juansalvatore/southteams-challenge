export const getAllItems = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem('items')))
    }, 1500) // To test async functions
  })

export const addItem = newItem =>
  new Promise(resolve => {
    getAllItems().then(items => {
      const newItemList = items !== null ? [...items, newItem] : [newItem]
      resolve(localStorage.setItem('items', JSON.stringify(newItemList)))
    })
  })

export const removeItem = itemToRemove =>
  new Promise(resolve => {
    getAllItems().then(items => {
      const newItemList = items.filter(item => item !== itemToRemove)
      resolve(localStorage.setItem('items', JSON.stringify(newItemList)))
    })
  })
