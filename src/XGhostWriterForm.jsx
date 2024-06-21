import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Switch } from './components/ui/switch';
import { Button } from './components/ui/button';

const XGhostWriterForm = () => {
  const [formData, setFormData] = useState({
    theme: '',
    description: '',
    tone: '',
    audience: '',
    includeEmojis: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleToneChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      tone: value
    }));
  };

  const handleEmojiToggle = () => {
    setFormData(prevState => ({
      ...prevState,
      includeEmojis: !prevState.includeEmojis
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputStyle = "shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <Card className="w-full max-w-md mx-auto bg-white p-8">
      <CardHeader>
        <h1 className="text-3xl font-bold text-center mt-3">X Ghost Writer</h1>
        <CardDescription className="font-bold text-center">Fill in the details for your X post</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="theme">What is the theme or topic of this post?</Label>
              <Input
                className={inputStyle}
                id="theme"
                name="theme"
                value={formData.theme}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">What is this post about?</Label>
              <Textarea
                className={inputStyle}
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tone">What should the tone be?</Label>
              <SelectTrigger className={inputStyle}>
                <Select id="tone" onValueChange={handleToneChange} defaultValue="">
                  <SelectValue placeholder="Select tone" />
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                    <SelectItem value="serious">Serious</SelectItem>
                  </SelectContent>
                </Select>
              </SelectTrigger>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="audience">Who is the target audience?</Label>
              <Input
                className={inputStyle}
                id="audience"
                name="audience"
                value={formData.audience}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center space-x-2 p-5">
              <Switch id="emojis" checked={formData.includeEmojis} onCheckedChange={handleEmojiToggle} />
              <Label htmlFor="emojis">Include emojis?</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center mt-2">
        <Button 
          type="submit" 
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Post
        </Button>
      </CardFooter>
    </Card>
  );
};

export default XGhostWriterForm;