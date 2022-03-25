import React, {Fragment} from 'react';
import UseToggle from '../hooks/UseToogle';

const Field = ({
  type,
  placeholder,
  supportingText,
  label,
  disabled,
  error,
  name,
  typeOfField,
  rows,
  handleChange,
  badge,
  supportingContent,
  classes,
  value,
}) => {
  const {isOpen: isTouched, open: setIsTouched} = UseToggle (false);

  const errorText = () =>
    isTouched && error
      ? <small
          style={{marginTop: '7px'}}
          className={`error smaller weit-1 col-r weit-2`}
        >
          {error}
        </small>
      : null;

  const handleUpdate = e => {
    const {value} = e.target;
    handleChange ({name, index: undefined, payload: value});
  };
  const element = !typeOfField
    ? <Fragment>
        <div
          className={`grid_1_max ${!!badge || !!supportingContent ? 'form_input_pack br' : ''}`}
        >
          <input
            className={`form_input br ${type === 'tel' ? 'tel' : ''} `}
            type={type}
            placeholder={placeholder}
            label={label}
            value={value}
            disabled={disabled}
            onBlur={() => setIsTouched ()}
            onChange={handleUpdate}
            name={name}
          />
          {!!badge &&
            <div
              className={`form_input_badge_txt center-flex upp weit-2 ${error && isTouched ? 'error' : ''}`}
            >
              {badge}
            </div>}
          {!!supportingContent &&
            React.cloneElement (supportingContent, {
              ...supportingContent.props,
              isTouched,
              error,
            })}

        </div>
        {errorText ()}
      </Fragment>
    : <Fragment>

        <textarea
          className="form_input br"
          type={type}
          value={value}
          placeholder={placeholder}
          label={label}
          disabled={disabled}
          onBlur={setIsTouched}
          onChange={handleUpdate}
          name={name}
          cols="30"
          rows={rows ? rows : 17}
        />
      </Fragment>;

  return (
    <React.Fragment>
      <div className={`form_group ${error && isTouched ? ' error' : ''}`}>
        <label htmlFor={name} className="form_label open  cap weit-2 col-bl">
          {label}
        </label>
        {typeOfField ? errorText : null}
        {!!supportingText &&
          <small
            className="small col-gra-l"
            style={{display: 'inline-block', marginBottom: '.5rem'}}
          >
            {supportingText}
          </small>}
        {element}

      </div>
    </React.Fragment>
  );
};

export default Field;
