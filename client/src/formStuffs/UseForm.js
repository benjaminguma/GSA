import {useReducer, useEffect} from 'react';
import UseToggle from '../shared/hooks/UseToogle';
import {DELETE, SET_INITIAL_ERRORS, UPDATE, RESET, ADD} from './FormActions';
import formReducer from './FormReducer';

export function UseForm (initialState, schema, initialIsValid = false) {
  const [state, dispatch] = useReducer (formReducer, {
    ...initialState,
    formIsValid: initialIsValid,
    errors: {},
  });

  const {isOpen, toogle} = UseToggle (false);

  const {formIsValid, fields, errors} = state;

  const update = ({name, index = undefined, payload}) => {
    dispatch ({
      type: UPDATE,
      payload,
      index,
      name,
      schema,
    });
  };
  const add = ({index = undefined, payload}) => {
    dispatch ({
      type: ADD,
      payload,
      index,
      schema,
    });
  };
  const deleteFieldArray = ({name, index = undefined, payload}) => {
    dispatch ({
      type: DELETE,
      name,
      index,
    });
  };
  // "success": true,
  // "otpStatus": "T",
  // "OTPStatus": "T",
  // "merchantId": 460,
  // "userExists": false

  const resetForm = () => {
    dispatch ({
      type: RESET,
      payload: {...initialState, formIsValid: initialIsValid},
    });
  };

  useEffect (
    () => {
      dispatch ({
        type: SET_INITIAL_ERRORS,
        schema,
      });
    },
    [schema]
  );

  return {
    values: fields,
    formIsValid,
    resetForm,
    deleteFieldArray,
    onChange: update,
    errors,
    add,
    isSubmitting: isOpen,
    toggleSubmit: toogle,
  };
}
export default UseForm;
