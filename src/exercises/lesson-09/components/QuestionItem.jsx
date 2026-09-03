import { useContext, useEffect, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
function OptionItem({ option, index, questionId, totalOptions, dispatch }) {
  const [optionText, setOptionText] = useState(option);

  useEffect(() => {
    setOptionText(option);
  }, [option]);

  const handleSaveOption = () => {
    if (!optionText.trim()) return;
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId,
        optionIndex: index,
        newText: optionText.trim(),
      },
    });
  };

  const handleDeleteOption = () => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId,
        optionIndex: index,
      },
    });
  };

  return (
    <li className={styles['option-item']}>
      <input
        type="text"
        className={styles['option-input']}
        value={optionText}
        onChange={(e) => setOptionText(e.target.value)}
      />
      <button
        type="button"
        className={styles['save-btn']}
        onClick={handleSaveOption}
      >
        Save
      </button>
      <button
        type="button"
        className={styles['delete-btn']}
        disabled={totalOptions <= 2}
        onClick={handleDeleteOption}
      >
        Delete
      </button>
    </li>
  );
}
export function QuestionItem({ question }) {
  const { state, dispatch } = useContext(SurveyContext);

  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  // const { dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  useEffect(() => {
    setWorkingText(question.question);
  }, [question.question]);

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    // console.log('TODO: Implement edit functionality');
    // Hint: Use SET_EDITING_QUESTION action
    if (isEditing) {
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    } else {
      setWorkingText(question.question);
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: question.id },
      });
    }
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    // console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    if (!workingText.trim()) return;
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText.trim(),
      },
    });
  };

  // cancel question edit
  const handleCancel = () => {
    setWorkingText(question.question);
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    // console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (confirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  // Add a new option using window.prompt
  const handleAddOption = () => {
    const newOptionText = window.prompt(
      'Enter text for the new option:',
      `option ${question.options.length + 1}`
    );

    if (newOptionText && newOptionText.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: {
          questionId: question.id,
          optionText: newOptionText.trim(),
        },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {/* Edit (TODO) */}
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            {/* Delete (TODO) */}
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <div className={styles['edit-question-form']}>
            <input
              type="text"
              className={styles['question-input']}
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <div className={styles['edit-actions']}>
              <button
                type="button"
                className={styles['save-btn']}
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className={styles['cancel-btn']}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          {isEditing ? (
            <div>
              <ul>
                {question.options.map((option, index) => (
                  <OptionItem
                    key={index}
                    option={option}
                    index={index}
                    questionId={question.id}
                    totalOptions={question.options.length}
                    dispatch={dispatch}
                  />
                ))}
              </ul>
              <button
                type="button"
                className={styles['add-option-btn']}
                onClick={handleAddOption}
              >
                + Add Option
              </button>
            </div>
          ) : (
            <ul>
              {question.options.map((option, index) => (
                <li key={index} className={styles['option-item']}>
                  <span className={styles['option-text']}>{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
