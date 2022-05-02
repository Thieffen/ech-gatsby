import React from 'react'
import { createContext, useContext, useState } from 'react'

const updateGender = (gender) => {

}

const defaultState = {
    gender: "M",
    questionnaire: []
}
const SurveyContext = createContext(defaultState)

export const SurveyContextProvider = ({ children }) => {
  const [data, setData] = useState(defaultState)

  const updateState = (_data) => setData(_data)

  const updateGender = (gender) => {
    const newState = {...data, gender};
    updateState(newState)
  }

  const questionnaireHandler = (questionId, answer) => {
    const questionnaire = {...data.questionnaire, [questionId]: answer}
    const newState = {...data, questionnaire};
    console.log(newState)
    updateState(newState)
  };

  const contextValues = {
    data,
    updateGender,
    questionnaireHandler
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


