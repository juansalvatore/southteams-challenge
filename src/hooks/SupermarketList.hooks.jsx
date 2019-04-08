import { useState, useEffect } from 'react'
import { addItem, getAllItems, removeItem } from '../api'

export const useSupermarketListState = () => {
  const [items, setItems] = useState([])
  const [isListLoading, setIsListLoading] = useState(true)

  useEffect(() => {
    setIsListLoading(true)
    getAllItems()
      .then(list => {
        if (list !== null) setItems([...list])
        setIsListLoading(false)
      })
      .catch(() => {
        setIsListLoading(false)
      })
  }, [])

  const addItemHook = newItem => {
    addItem(newItem)
    const newItemList = items !== null ? [...items, newItem] : [newItem]
    setItems(newItemList)
  }

  const removeItemHook = itemToRemove => {
    removeItem(itemToRemove)
    const newItemList = items.filter(item => item !== itemToRemove)
    setItems(newItemList)
  }

  return [items, addItemHook, removeItemHook, isListLoading]
}
