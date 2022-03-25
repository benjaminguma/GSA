import React from 'react';

export default function RenderIfTrue({condition = true, children}) {
  if (condition) return children;

  return null;
}
