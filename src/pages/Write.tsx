import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
import { Search, Plus, Home, Flame, X, Upload, Link as LinkIcon } from "lucide-react";
=======
import { Globe, ArrowLeft, Plus, X, Send, MapPin, Calendar, Users, DollarSign, Star, BookOpen } from "lucide-react";
>>>>>>> 7e30d1b (Your submodule changes)
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Write = () => {
  const [postType, setPostType] = useState("story"); // "story" or "travel-agent"
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subreddit, setSubreddit] = useState("r/travel");
  const [postType, setPostType] = useState<"text" | "link" | "image">("text");
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  
  // Travel agent specific fields
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentRating, setAgentRating] = useState("");
  const [agentReviews, setAgentReviews] = useState("");
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);
  
  const { toast } = useToast();

  const availableCommunities = [
    "r/travel", "r/luxurytravel", "r/backpacking", "r/food", "r/wine", 
    "r/photography", "r/fashion", "r/adventure", "r/culture", "r/nature"
  ];

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const toggleCommunity = (community: string) => {
    if (selectedCommunities.includes(community)) {
      setSelectedCommunities(selectedCommunities.filter(c => c !== community));
    } else {
      setSelectedCommunities([...selectedCommunities, community]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
<<<<<<< HEAD
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to create your post.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Post Created Successfully! 🎉",
      description: "Your post has been shared with the community.",
=======
    if (postType === "story") {
      if (!title.trim() || !content.trim() || !author.trim()) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields to share your story.",
          variant: "destructive",
        });
        return;
      }
    } else {
      if (!title.trim() || !content.trim() || !author.trim() || !location.trim() || 
          !duration.trim() || !startDate.trim() || !endDate.trim() || !price.trim() || 
          !maxParticipants.trim() || !agentName.trim()) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields for your travel agent post.",
          variant: "destructive",
        });
        return;
      }
    }

    toast({
      title: postType === "story" ? "Story Shared Successfully! ✨" : "Trip Posted Successfully! ✨",
      description: postType === "story" 
        ? "Your travel story has been added to the collection."
        : "Your travel agent post has been published.",
>>>>>>> 7e30d1b (Your submodule changes)
    });

    setTitle("");
    setContent("");
    setTags([]);
    setCurrentTag("");
    setLocation("");
    setDuration("");
    setStartDate("");
    setEndDate("");
    setPrice("");
    setMaxParticipants("");
    setAgentName("");
    setAgentRating("");
    setAgentReviews("");
    setSelectedCommunities([]);
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      {/* Reddit-like Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TravelTales</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Flame className="h-4 w-4" />
                <span>Popular</span>
              </Button>
            </nav>
          </div>

          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search TravelTales"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
=======
    <div className="min-h-screen bg-offwhite">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-black hover:text-gold">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-gold rounded-full p-1">
                <Globe className="h-5 w-5 text-black" />
              </div>
              <h1 className="text-2xl font-display font-bold text-black">Share Your Story</h1>
>>>>>>> 7e30d1b (Your submodule changes)
            </div>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create a post</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Choose a community</span>
          </div>
        </div>

        <Card className="bg-white border border-gray-300 mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <Button
                variant={postType === "text" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPostType("text")}
                className="flex items-center space-x-2"
              >
                <span>📝</span>
                <span>Text</span>
              </Button>
              <Button
                variant={postType === "image" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPostType("image")}
                className="flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Image</span>
              </Button>
              <Button
                variant={postType === "link" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPostType("link")}
                className="flex items-center space-x-2"
              >
                <LinkIcon className="h-4 w-4" />
                <span>Link</span>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <select
                  value={subreddit}
                  onChange={(e) => setSubreddit(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="r/travel">r/travel</option>
                  <option value="r/solotravel">r/solotravel</option>
                  <option value="r/backpacking">r/backpacking</option>
                  <option value="r/food">r/food</option>
                  <option value="r/EarthPorn">r/EarthPorn</option>
                </select>
              </div>

              <div>
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg font-medium border-gray-300"
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder="Text (optional)"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-32 border-gray-300 resize-none"
                  required
                />
              </div>

              <div>
                <Label className="text-gray-700 text-sm">Tags</Label>
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
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 flex items-center">
                      {tag}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTag(tag)}
                        className="h-auto p-0 ml-2 text-gray-600 hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" type="button">
                  Save Draft
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Post
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
=======
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white border border-gray-200 sticky top-8">
              <CardHeader>
                <CardTitle className="text-black font-display">Post Type</CardTitle>
                <CardDescription className="text-gray-600">
                  Choose what you want to share
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant={postType === "story" ? "default" : "outline"}
                  onClick={() => setPostType("story")}
                  className={`w-full justify-start ${
                    postType === "story" 
                      ? "bg-gold hover:bg-gold/90 text-black" 
                      : "border-gray-300"
                  }`}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Travel Story
                </Button>
                <Button
                  variant={postType === "travel-agent" ? "default" : "outline"}
                  onClick={() => setPostType("travel-agent")}
                  className={`w-full justify-start ${
                    postType === "travel-agent" 
                      ? "bg-gold hover:bg-gold/90 text-black" 
                      : "border-gray-300"
                  }`}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Travel Agent Post
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-black font-display flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gold" />
                  {postType === "story" ? "Share Your Travel Experience" : "Create Travel Agent Post"}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {postType === "story" 
                    ? "Tell fellow travelers about your amazing journey"
                    : "Promote your travel services and group trips"
                  }
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

                    {postType === "travel-agent" && (
                      <div>
                        <Label htmlFor="agentName" className="text-gray-700">
                          Travel Agent Name *
                        </Label>
                        <Input
                          id="agentName"
                          value={agentName}
                          onChange={(e) => setAgentName(e.target.value)}
                          placeholder="e.g., Elena Rodriguez"
                          className="border-gray-300"
                          required
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="title" className="text-gray-700">
                        {postType === "story" ? "Story Title *" : "Trip Title *"}
                      </Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={postType === "story" 
                          ? "e.g., Hidden Gems of Patagonia"
                          : "e.g., Luxury Bali Adventure - Limited Spots!"
                        }
                        className="border-gray-300"
                        required
                      />
                    </div>

                    {postType === "travel-agent" && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="location" className="text-gray-700">
                              Destination *
                            </Label>
                            <Input
                              id="location"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder="e.g., Bali, Indonesia"
                              className="border-gray-300"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="duration" className="text-gray-700">
                              Duration *
                            </Label>
                            <Input
                              id="duration"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                              placeholder="e.g., 7 days"
                              className="border-gray-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="startDate" className="text-gray-700">
                              Start Date *
                            </Label>
                            <Input
                              id="startDate"
                              type="date"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              className="border-gray-300"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="endDate" className="text-gray-700">
                              End Date *
                            </Label>
                            <Input
                              id="endDate"
                              type="date"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                              className="border-gray-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="price" className="text-gray-700">
                              Price per Person *
                            </Label>
                            <Input
                              id="price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              placeholder="e.g., $1,299"
                              className="border-gray-300"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="maxParticipants" className="text-gray-700">
                              Max Participants *
                            </Label>
                            <Input
                              id="maxParticipants"
                              type="number"
                              value={maxParticipants}
                              onChange={(e) => setMaxParticipants(e.target.value)}
                              placeholder="e.g., 12"
                              className="border-gray-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="agentRating" className="text-gray-700">
                              Agent Rating
                            </Label>
                            <Input
                              id="agentRating"
                              type="number"
                              step="0.1"
                              min="0"
                              max="5"
                              value={agentRating}
                              onChange={(e) => setAgentRating(e.target.value)}
                              placeholder="e.g., 4.9"
                              className="border-gray-300"
                            />
                          </div>
                          <div>
                            <Label htmlFor="agentReviews" className="text-gray-700">
                              Number of Reviews
                            </Label>
                            <Input
                              id="agentReviews"
                              type="number"
                              value={agentReviews}
                              onChange={(e) => setAgentReviews(e.target.value)}
                              placeholder="e.g., 127"
                              className="border-gray-300"
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-gray-700">Target Communities</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {availableCommunities.map((community) => (
                              <Button
                                key={community}
                                type="button"
                                variant={selectedCommunities.includes(community) ? "default" : "outline"}
                                size="sm"
                                onClick={() => toggleCommunity(community)}
                                className={`text-xs ${
                                  selectedCommunities.includes(community)
                                    ? "bg-gold hover:bg-gold/90 text-black"
                                    : "border-gray-300"
                                }`}
                              >
                                {community}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <Label htmlFor="excerpt" className="text-gray-700">
                        Brief Excerpt
                      </Label>
                      <Textarea
                        id="excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder={postType === "story" 
                          ? "A short, intriguing summary of your travel story..."
                          : "A compelling description of your trip offering..."
                        }
                        className="border-gray-300 h-20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content" className="text-gray-700">
                        {postType === "story" ? "Your Story *" : "Trip Description *"}
                      </Label>
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={postType === "story" 
                          ? "Share your travel experience in detail... What made this trip special? What challenges did you face? What would you recommend to other travelers?"
                          : "Describe your trip in detail... What's included? What makes this experience special? What can travelers expect?"
                        }
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
                      className="w-full bg-gold hover:bg-gold/90 text-black font-medium"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {postType === "story" ? "Share Your Story" : "Post Trip"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
>>>>>>> 7e30d1b (Your submodule changes)
      </div>
    </div>
  );
};

export default Write;