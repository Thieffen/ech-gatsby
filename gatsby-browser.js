/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react'
import { SurveyContextProvider } from './src/context/SurveyContext'

export const wrapRootElement = ({ element }) => (
  <SurveyContextProvider>{element}</SurveyContextProvider>
)
