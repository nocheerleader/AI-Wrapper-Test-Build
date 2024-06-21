import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';

const CraftPrompt = () => {
  const [prompt, setPrompt] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const navigate = useNavigate();

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSystemPromptChange = (e) => {
    setSystemPrompt(e.target.value);
  };

  const handleSubmit = () => {
    // Perform any necessary actions with the prompt and system prompt
    console.log('Prompt:', prompt);
    console.log('System Prompt:', systemPrompt);
    navigate('/generate'); // Navigate to the 'Generate' page
  };

  const inputStyle = "shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <Card className="w-full max-w-md mx-auto bg-white p-8">
      <CardHeader>
        <CardTitle>Craft a Prompt</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="prompt">Write prompt here</Label>
            <Textarea
              className={inputStyle}
              id="prompt"
              name="prompt"
              value={prompt}
              onChange={handlePromptChange}
              placeholder="Enter your prompt here. Available variables: {theme}, {tone}, {target}"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="systemPrompt">System Prompt</Label>
            <Input
              className={inputStyle}
              id="systemPrompt"
              name="systemPrompt"
              value={systemPrompt}
              onChange={handleSystemPromptChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center mt-6">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CraftPrompt;