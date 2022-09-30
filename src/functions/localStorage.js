export function getFromLocalStorage(key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
}

export function setToLocalStorage(key, value) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value)
  }  
}