import * as React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {useSurveyContext} from "../context/SurveyContext";
import Steps from "../components/layout/Steps";
import ButtonPrimary from "../components/layout/ButtonPrimary";

const IndexPage = () => {
  // get the data
  const {data} = useSurveyContext()
  console.log(data)

  return (
    <Layout>
      <Seo title="Home"/>
      <div >
        <Steps
          className="mb-6"
          step1="current"
          step2="upcoming"
          step3="upcoming"
        />
        <section className="prose mb-3">
          <h2>Welcome to the Personal Values Self-Assessment</h2>
          <p className="font-bold">
            The Personal Values Questionnaire is based on the theory of personal
            values developed by the social psychologist Shalom Schwartz and
            colleagues and which has been empirically tested in more than 80
            countries.
          </p>
          <p>
            At the end of the questionnaire you will receive an automatically
            generated personal values assessment. This can help you understand:
            which personal values are most important to you, and how your values
            differ from an average EU citizen.
          </p>
          <p>
            This self-assessment tool is part of an initiative by the European
            Commission's Joint Research Centre to help policymakers in the
            European Institutions and EU Member States deliver better policies by
            knowing their own values priorities and potential blind spots.
          </p>
          <p>
            No policymaker? You can of course take the self-test just the same.
          </p>
          <p className="border-t pt-2 text-sm text-gray-500">
            <span className="font-semibold">Confidentiality:</span>
            <br/> This questionnaire includes questions that could be considered
            sensitive. Your participation is completely voluntary. All of your
            answers are confidential and all computations are made by your
            computer. No data will be sent.. If you agree to these terms, please
            click on "Start questionnaire".
          </p>
        </section>
        <div className="flex space-x-2 border-t pt-5">
          <ButtonPrimary
            label="Start questionnaire"
            onClick={() => navigate("/questionnaire")}
            className=""/>
        </div>
        {/*<Debug questionnaire={questionnaire} gender={gender} />*/}
      </div>
    </Layout>
  )
}

export default IndexPage
