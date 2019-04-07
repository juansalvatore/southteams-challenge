import delay from 'delay'

export const setItem = (key, value) => new Promise(resolve => resolve(localStorage.setItem(key, JSON.stringify(value))))
