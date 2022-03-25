import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichField = ({
  label = 'product description',
  placeholder = 'describe this event and state event requirements',
}) => {
  const [v, sV] = useState ('');
  const modules = {
    toolbar: [
      [{header: [1, 2, 3, false]}],
      ['bold', 'italic', 'blockquote'],
      [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
      ['link'],
    ],
  };
  return (
    <div className="form_group">
      <label htmlFor="" className="form_label col-bl cap weit-2">{label}</label>
      <ReactQuill
        value={v}
        id={'quill'}
        modules={modules}
        className={'col-bl br'}
        onChange={v => sV (v)}
        theme="snow"
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichField;
