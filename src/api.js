export const getAllItems = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem('items')))
    }, 4000)
  })

export const addItem = newItem =>
  new Promise(resolve => {
    getAllItems().then(items => {
      let newItemList = []
      if (items !== null) {
        newItemList = [...items, newItem]
      } else {
        newItemList = [newItem]
      }
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
