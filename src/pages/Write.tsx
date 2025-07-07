
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, Plus, X, Send } from "lucide-react";
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
        description: "Please fill in all required fields to share your story.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Story Shared Successfully! ✨",
      description: "Your travel story has been added to the collection.",
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Share Your Story</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-blue-600" />
                  Share Your Travel Experience
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Tell fellow travelers about your amazing journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="author" className="text-gray-700">
                        Your Name *
                      </Label>
                      <Input
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="e.g., Sarah Chen"
                        className="border-gray-300"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="title" className="text-gray-700">
                        Story Title *
                      </Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Hidden Gems of Patagonia"
                        className="border-gray-300"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="excerpt" className="text-gray-700">
                        Brief Excerpt
                      </Label>
                      <Textarea
                        id="excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="A short, intriguing summary of your travel story..."
                        className="border-gray-300 h-20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content" className="text-gray-700">
                        Your Story *
                      </Label>
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Share your travel experience in detail... What made this trip special? What challenges did you face? What would you recommend to other travelers?"
                        className="border-gray-300 h-64"
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-gray-700">Tags</Label>
                      <div className="flex space-x-2 mb-2">
                        <Input
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          placeholder="Add a tag..."
                          className="border-gray-300"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        />
                        <Button
                          type="button"
                          onClick={addTag}
                          variant="outline"
                          className="border-gray-300"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 flex items-center"
                          >
                            {tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTag(tag)}
                              className="h-auto p-0 ml-2 text-blue-600 hover:text-red-500"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Share Your Story
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Writing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600 text-sm">
                <div>
                  <h4 className="text-gray-900 font-medium">📍 Be Specific</h4>
                  <p>Include specific locations, dates, and details that help readers visualize your journey.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">🎯 Share Challenges</h4>
                  <p>Don't just share the highlights - include obstacles and how you overcame them.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">💡 Offer Tips</h4>
                  <p>Help other travelers by sharing practical advice and lessons learned.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">🏆 Be Authentic</h4>
                  <p>Share genuine emotions and personal insights from your travel experience.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Adventure", "Culture", "Food", "Nature", "Photography", "Backpacking", "Luxury", "Budget", "Solo Travel", "Family"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300 cursor-pointer"
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
