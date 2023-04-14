import { useState } from 'react';
import { Container } from '@mantine/core';

import EligibilityStep from './EligibilityStep';
import FormSubmit from './FormSubmit';

import { QUESTIONS, QUESTION_ID } from '@/data/questions';

import styles from './styles.module.scss';

const questionIds = Object.values(QUESTION_ID);

const QuestionsComponent = () => {
  const [questions, setQuestions] = useState(QUESTIONS);

  const [step, setStep] = useState({ questionId: QUESTION_ID.RELATIONSHIP, index: 0 });

  const [isComplete, setIsComplete] = useState(false);

  const handleBackClick = () => {
    console.log('Back');
    setStep((prev) => {
      const index = prev.index - 1;
      if (index < 0) return prev;
      return {
        questionId: questionIds[index],
        index,
      };
    });
  };

  const handleNextClick = () => {
    const prevStep = { ...step };
    const index = prevStep.index + 1;

    if (questionIds[index])
      setStep({
        questionId: questionIds[index],
        index,
      });
    else setIsComplete(true);
  };

  const props = { questions, setQuestions, onBackClick: handleBackClick, onNextClick: handleNextClick };

  return (
    <div className={styles.mainContainer}>
      <Container h='100vh' className={'flexCenter'}>
        {!isComplete && <EligibilityStep {...props} question={questions[step.questionId]} />}
        {isComplete && <FormSubmit />}
      </Container>
    </div>
  );
};

export default QuestionsComponent;
