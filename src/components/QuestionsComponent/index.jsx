import { useState } from 'react';
import { Container } from '@mantine/core';

import EligibilityStep from './EligibilityStep';
import FormSubmit from './FormSubmit';
import WaitingListForm from './WaitingListForm';
import RegistrationForm from './RegistrationForm';
import ServiceDetails from './ServiceDetails';
import Unsuitable from './Unsuitable';

import { QUESTIONS, QUESTION_ID } from '@/data/questions';

const questionIds = Object.values(QUESTION_ID);

const COMPONENT = {
  ELIGIBILITY_STEP: 'ELIGIBILITY_STEP',
  FORM_COMPLETE: 'FORM_COMPLETE',
  WAITING_LIST: 'WAITING_LIST',
  SERVICE_DETAILS: 'SERVICE_DETAILS',
  REGISTRATION_FORM: 'REGISTRATION_FORM',
  UNSUITABLE: 'UNSUITABLE',
};

const QuestionsComponent = () => {
  const [questions, setQuestions] = useState(QUESTIONS);

  const [step, setStep] = useState({ questionId: QUESTION_ID.RELATIONSHIP, index: 0 });

  const [view, setView] = useState(COMPONENT.ELIGIBILITY_STEP);

  const handleBackClick = () => {
    setStep((prev) => {
      const index = prev.index - 1;
      if (index < 0) return prev;
      return {
        questionId: questionIds[index],
        index,
      };
    });
  };

  const handleNextClick = (question) => {
    const prevStep = { ...step };
    const selectedOption = question.options[question.checkedIndex];
    if (selectedOption.action) {
      setView(COMPONENT[selectedOption.action]);
      return;
    }

    const index = prevStep.index + 1;

    if (questionIds[index])
      setStep({
        questionId: questionIds[index],
        index,
      });
    else setView(COMPONENT.REGISTRATION_FORM);
  };

  const handleOptionClick = async (question) => {
    await setQuestions((prev) => ({ ...prev, [step.questionId]: question }));
    handleNextClick(question);
  };

  const props = {
    questions,
    setQuestions,
    onBackClick: handleBackClick,
    onNextClick: handleNextClick,
    onOptionClick: handleOptionClick,
  };

  const componentMap = {
    ELIGIBILITY_STEP: <EligibilityStep {...props} question={questions[step.questionId]} />,
    FORM_COMPLETE: <FormSubmit />,
    WAITING_LIST: <WaitingListForm onBackClick={() => setView(COMPONENT.ELIGIBILITY_STEP)} />,
    SERVICE_DETAILS: (
      <ServiceDetails
        onBackClick={() => setView(COMPONENT.ELIGIBILITY_STEP)}
        onConfirm={() => setView(COMPONENT.REGISTRATION_FORM)}
      />
    ),
    REGISTRATION_FORM: <RegistrationForm />,
    UNSUITABLE: <Unsuitable />
  };

  return (
    <div className={'mainContainer'}>
      <Container mih='80vh' className={'flexCenter'}>
        {componentMap[view]}
      </Container>
    </div>
  );
};

export default QuestionsComponent;
