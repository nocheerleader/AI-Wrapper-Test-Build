import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card';
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';

const TestOutput = () => {
  const [output, setOutput] = useState('');

  const handleRun = () => {
    // Perform the necessary actions to generate the output
    setOutput('This is the generated output from the test run.');
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white p-8">
      <CardHeader>
        <CardTitle>Test Output</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          value={output}
          rows={5}
          readOnly
        />
      </CardContent>
      <CardFooter className="flex justify-center mt-6">
        <Button
          type="button"
          onClick={handleRun}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          RUN
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TestOutput;