//export const Textarea = (props) => <textarea {...props} />;

import React from 'react';

export const Textarea = ({ className, ...props }) => (
  <textarea className={`${className}`} {...props} />
);

export default Textarea;
