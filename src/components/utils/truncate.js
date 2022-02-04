export const truncate = (str = "", len = 30) => {
  return str.length <= len ? str : str.slice(0, len) + "..."
}
