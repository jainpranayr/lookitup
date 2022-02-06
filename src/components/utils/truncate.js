export const truncate = (str = "", len = 30) => {
  if (str && str.length >= 1)
    return str.length <= len ? str : str.slice(0, len) + "..."
}
