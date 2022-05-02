import React from 'react'
import { createContext, useContext, useState } from 'react'

const defaultState = {
  data: {
    gender: "M"
  },
}
const SurveyContext = createContext(defaultState)

export const SurveyContextProvider = ({ children }) => {
  const [data, setData] = useState(defaultState)
  const updateState = (_data) => setData(_data)

  const contextValues = {
    data,
    updateState,
  }

  return <SurveyContext.Provider value={contextValues}>{children}</SurveyContext.Provider>
}

export const useSurveyContext = () => {
  const context = useContext(SurveyContext)
  if (context === undefined || context === null) {
    throw new Error(`useSurveyContext must be called within SurveyContextProvider`)
  }
  return context
}