import React from 'react';

export const Card = ({ children, className }) => <div className={className}>{children}</div>;
export const CardHeader = ({ children }) => <div>{children}</div>;
export const CardTitle = ({ children }) => <h2>{children}</h2>;
export const CardDescription = ({ children }) => <p>{children}</p>;
export const CardContent = ({ children }) => <div>{children}</div>;
export const CardFooter = ({ children }) => <div>{children}</div>;