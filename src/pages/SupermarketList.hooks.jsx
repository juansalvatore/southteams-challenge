import { useState, useEffect } from 'react'
import { setItem } from '../api'

export const useStateWithLocalStorage = key => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(key))
    console.log(list)
    if (list !== null) setItems([...list])
  }, [])

  const AddItem = item => {
    setItem(key, [...items, item])
    setItems([...items, item])
  }

  return [items, AddItem]
}
