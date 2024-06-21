import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`w-full max-w-md mx-auto bg-white p-8 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-8">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h1 className="text-3xl font-bold text-center mb-5 mt-5 p-5">{children}</h1>
);

export const CardDescription = ({ children }) => (
  <p className="font-bold text-center mb-8 mt-5 p-5">{children}</p>
);

export const CardContent = ({ children }) => <div>{children}</div>;

export const CardFooter = ({ children }) => (
  <div className="flex justify-center mt-6">{children}</div>
);