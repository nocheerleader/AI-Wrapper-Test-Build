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
    // Here you would typically send the data to a server or perform further actions
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>X Ghost Writer</CardTitle>
        <CardDescription>Fill in the details for your X post</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="theme">What is the theme or topic of this post?</Label>
              <Input id="theme" name="theme" value={formData.theme} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">What is this post about?</Label>
              <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tone">What should the tone be?</Label>
              <Select onValueChange={handleToneChange}>
                <SelectTrigger id="tone">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="serious">Serious</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="audience">Who is the target audience?</Label>
              <Input id="audience" name="audience" value={formData.audience} onChange={handleInputChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="emojis" checked={formData.includeEmojis} onCheckedChange={handleEmojiToggle} />
              <Label htmlFor="emojis">Include emojis?</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit}>Generate Post</Button>
      </CardFooter>
    </Card>
  );
};

export default XGhostWriterForm;