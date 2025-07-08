import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Home, Flame, X, Upload, Link as LinkIcon, Globe, ArrowLeft, Send, MapPin, Calendar, Users, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Write = () => {
  const [postType, setPostType] = useState<"story" | "travel-agent">("story");
  const [contentType, setContentType] = useState<"text" | "link" | "image">("text");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subreddit, setSubreddit] = useState("r/travel");
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
    
    if (postType === "story") {
      if (!title.trim() || !content.trim()) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields to create your post.",
          variant: "destructive",
        });
        return;
      }
    } else {
      if (!title.trim() || !content.trim() || !location.trim() || 
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
      title: postType === "story" ? "Post Created Successfully! 🎉" : "Trip Posted Successfully! ✨",
      description: postType === "story" 
        ? "Your post has been shared with the community."
        : "Your travel agent post has been published.",
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
            </div>
          </div>
        </div>
      </header>

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
                variant={postType === "story" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPostType("story")}
                className="flex items-center space-x-2"
              >
                <BookOpen className="h-4 w-4" />
                <span>Travel Story</span>
              </Button>
              <Button
                variant={postType === "travel-agent" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPostType("travel-agent")}
                className="flex items-center space-x-2"
              >
                <Star className="h-4 w-4" />
                <span>Travel Agent Post</span>
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
                  <option value="r/luxurytravel">r/luxurytravel</option>
                </select>
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
                              ? "bg-orange-500 hover:bg-orange-600 text-white"
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
                  placeholder={postType === "story" ? "Text (optional)" : "Trip Description *"}
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
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                  {postType === "story" ? "Post" : "Post Trip"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Write;