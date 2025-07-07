
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, Plus, X, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Write = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const { toast } = useToast();

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !author.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to share your tale.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    toast({
      title: "Tale Shared Successfully! ✨",
      description: "Your magical story has been added to the collection.",
    });

    // Reset form
    setTitle("");
    setExcerpt("");
    setContent("");
    setAuthor("");
    setTags([]);
    setCurrentTag("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation Header */}
      <header className="border-b border-purple-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700/50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-yellow-400" />
              <h1 className="text-xl font-bold text-white">Write Your Tale</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                  Share Your Magical Adventure
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Tell fellow wizards about your extraordinary journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="author" className="text-purple-200">
                        Your Wizard Name *
                      </Label>
                      <Input
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="e.g., Gandalf the Wise"
                        className="bg-purple-700/30 border-purple-600/50 text-white placeholder:text-purple-300"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="title" className="text-purple-200">
                        Tale Title *
                      </Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., The Dragon's Lost Treasure"
                        className="bg-purple-700/30 border-purple-600/50 text-white placeholder:text-purple-300"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="excerpt" className="text-purple-200">
                        Brief Excerpt
                      </Label>
                      <Textarea
                        id="excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="A short, intriguing summary of your tale..."
                        className="bg-purple-700/30 border-purple-600/50 text-white placeholder:text-purple-300 h-20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content" className="text-purple-200">
                        Your Tale *
                      </Label>
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Begin your magical story here... What wonders did you encounter? What challenges did you face? Share every enchanting detail!"
                        className="bg-purple-700/30 border-purple-600/50 text-white placeholder:text-purple-300 h-64"
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-purple-200">Tags</Label>
                      <div className="flex space-x-2 mb-2">
                        <Input
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          placeholder="Add a tag..."
                          className="bg-purple-700/30 border-purple-600/50 text-white placeholder:text-purple-300"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        />
                        <Button
                          type="button"
                          onClick={addTag}
                          variant="outline"
                          className="border-purple-600/50 text-purple-200 hover:bg-purple-700/50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-purple-600/50 text-purple-100 flex items-center"
                          >
                            {tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTag(tag)}
                              className="h-auto p-0 ml-2 text-purple-200 hover:text-red-400"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Share Your Tale
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Writing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-purple-200 text-sm">
                <div>
                  <h4 className="text-purple-100 font-medium">✨ Be Descriptive</h4>
                  <p>Paint vivid pictures with your words. What did the magic look like, sound like, feel like?</p>
                </div>
                <div>
                  <h4 className="text-purple-100 font-medium">🐉 Include Challenges</h4>
                  <p>Great tales have obstacles. What went wrong? How did you overcome it?</p>
                </div>
                <div>
                  <h4 className="text-purple-100 font-medium">🎭 Show Emotion</h4>
                  <p>How did your adventure make you feel? Fear, wonder, joy, surprise?</p>
                </div>
                <div>
                  <h4 className="text-purple-100 font-medium">📚 Add Details</h4>
                  <p>Include specific spells, creatures, locations, or magical items.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Adventure", "Dragons", "Magic", "Comedy", "Mystery", "Potions", "Time Travel", "Crystals", "Familiars", "Ancient Magic"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-purple-600/50 text-purple-200 hover:bg-purple-700/50 cursor-pointer"
                      onClick={() => {
                        if (!tags.includes(tag)) {
                          setTags([...tags, tag]);
                        }
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
