import React, { createContext, useContext, useState } from "react"

const ResultContext = createContext()
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const getResults = async url => {
    setLoading(true)

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "94bd455a8fmsh439991dc211631fp168a93jsn26b64cf2c62f",
      },
    })

    const data = await res.json()

    setResults(data)
    setLoading(false)
  }

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
