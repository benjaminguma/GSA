import {DELETE, SET_INITIAL_ERRORS, UPDATE, RESET, ADD} from './FormActions';

const getFieldsReport = (schema, values) => {
  const errors = {};
  try {
    const fields = schema.validateSync (
      {...values.fields},
      {
        abortEarly: false,
      }
    );
    return {formIsValid: true, fields, errors: {}};
  } catch (err) {
    for (let errItem of err.inner) {
      errors[errItem.path] = errItem.errors[0];
    }
    return {
      formIsValid: false,
      errors,
      fields: values.fields,
    };
  }
};
const formReducer = (state, action) => {
  const {payload, name, index, schema} = action;
  let newState = clone (state);
  switch (action.type) {
    case UPDATE: {
      const {path, dest} = getPath (newState, name);
      if (Array.isArray (path[dest])) {
        console.log ({index});
        if (index > -1) path[dest][index] = payload;
        else if (Array.isArray (payload))
          path[dest] = path[dest].concat (payload);
        else path[dest].push (payload);
      } else path[dest] = payload;
      const {errors, formIsValid, fields} = getFieldsReport (schema, newState);
      return {
        ...newState,
        fields: {
          ...newState.fields,
          ...fields,
        },
        formIsValid,
        errors,
      };
    }
    case DELETE: {
      if (index < 0) return newState;
      const {path, dest} = getPath (newState, name);
      path[dest].splice (index, 1);
      return newState;
    }
    case SET_INITIAL_ERRORS: {
      const {errors, formIsValid, fields} = getFieldsReport (schema, newState);
      return {
        ...newState,
        fields: {
          ...newState.fields,
          ...fields,
        },
        formIsValid,
        errors,
      };
    }
    case ADD: {
      const temp = {
        ...newState,
        fields: {
          ...newState.fields,
          ...payload,
        },
      };
      console.log ({temp});
      const {errors, formIsValid, fields} = getFieldsReport (schema, temp);

      return {
        ...temp,
        fields: {
          ...temp.fields,
          ...fields,
        },
        formIsValid,
        errors,
      };
    }

    case RESET: {
      const {errors, formIsValid, fields} = getFieldsReport (schema, payload);

      return {
        fields: {
          ...fields,
        },
        formIsValid,
        errors,
      };
    }

    default:
      return state;
  }
};

function clone (obj) {
  return JSON.parse (JSON.stringify (obj));
}
function getPath (state, str) {
  let path = null;
  const route = ('fields.' + str).split ('.');
  for (let i = 0; i < route.length - 1; i++) {
    if (i === 0) path = state[route[i]];
    else path = path[route[i]];
  }
  return {path, dest: route[route.length - 1]};
}

export default formReducer;
