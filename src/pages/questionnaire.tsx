import React from "react"
// @ts-ignore
import {useSurveyContext} from "../../src/context/SurveyContext";
import {navigate} from "gatsby";
import Steps from "../components/layout/Steps";
import ButtonSecondary from "../components/layout/ButtonSecondary";
import GenderSelector from "../components/questionnaire/GenderSelector";
import GenericQuestionSelector from "../components/questionnaire/GenericQuestionSelector";
import {questions} from "../utils/questions";
import ButtonPrimary from "../components/layout/ButtonPrimary";

const QuestionnairePage = () => {

    const {data} = useSurveyContext()
    const gender = data.gender
    const questionnaire = data.questionnaire
    const totalQuestionsCounter = questions(gender).length;
    const completedQuestionsCounter = Object.keys(questionnaire).length;
    const remainingQuestionsCounter =
        totalQuestionsCounter - completedQuestionsCounter;
    const isQuestionnaireCompleted = remainingQuestionsCounter <= 0;

    return (
        <>
            <Steps
                className="mb-6"
                step1="complete"
                step2="current"
                step3="upcoming"
            />
            <section className="prose mb-12">
                <h3>
                    Which pronouns do you prefer to be used when people speak about you?
                </h3>
                <GenderSelector/>
            </section>

            {gender && (
                <section>
                    <div className="prose mb-6">
                        <h3>
                            Now, we will briefly describe some people. Please read each
                            description and tell us how much each person is or is not like
                            you.
                        </h3>
                    </div>

                    {questions(gender).map((question, index) => (
                        <GenericQuestionSelector
                            key={question.id}
                            id={question.id}
                            index={index + 1}
                            title={question.title}
                        />
                    ))}
                </section>
            )}

            <div className="flex items-center space-x-2 border-t pt-5">
                <ButtonSecondary label="Back" onClick={() => navigate("/")}/>
                {gender &&
                    (isQuestionnaireCompleted ? (
                        <ButtonPrimary
                            label="View results"
                            onClick={() => navigate("/results")}
                        />
                    ) : (
                        <p className="px-2 font-medium text-gray-400">
                            Please complete the {remainingQuestionsCounter} remaining
                            questions to show your results
                        </p>
                    ))}
            </div>
            {/*<Debug questionnaire={questionnaire} gender={gender} />*/}
        </>
    )
}

export default QuestionnairePage