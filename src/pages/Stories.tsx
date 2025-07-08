import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, MessageCircle, Share, Bookmark, Search, Plus, Home, Flame, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [votes, setVotes] = useState<{[key: number]: number}>({
    1: 127,
    2: 89,
    3: 156,
    4: 203,
    5: 78,
    6: 145
  });
  const [userVotes, setUserVotes] = useState<{[key: number]: 'up' | 'down' | null}>({});

  const handleVote = (storyId: number, voteType: 'up' | 'down') => {
    const currentVote = userVotes[storyId];
    let newVoteCount = votes[storyId];
    
    if (currentVote === voteType) {
      setUserVotes(prev => ({ ...prev, [storyId]: null }));
      newVoteCount += voteType === 'up' ? -1 : 1;
    } else {
      if (currentVote) {
        newVoteCount += voteType === 'up' ? 2 : -2;
      } else {
        newVoteCount += voteType === 'up' ? 1 : -1;
      }
      setUserVotes(prev => ({ ...prev, [storyId]: voteType }));
    }
    
    setVotes(prev => ({ ...prev, [storyId]: newVoteCount }));
  };

  const stories = [
    {
      id: 1,
      title: "Hidden Gems of Patagonia - Complete 3-week backpacking guide",
      author: "u/SarahChen",
      subreddit: "r/travel",
      excerpt: "Just returned from an incredible 3-week solo backpacking trip through Patagonia. Sharing my complete itinerary, budget breakdown, and hidden spots most tourists miss...",
      tags: ["Adventure", "Nature", "South America"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop",
      timeAgo: "6h",
      comments: 89
    },
    {
      id: 2,
      title: "Local's Guide to Bangkok Street Food - 25 best hidden stalls",
      author: "u/MarcusRodriguez",
      subreddit: "r/food",
      excerpt: "After 5 years living in Bangkok, here's my comprehensive guide to the best street food spots that locals actually eat at. With photos and exact locations...",
      tags: ["Food", "Culture", "Asia"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      timeAgo: "12h",
      comments: 156
    },
    {
      id: 3,
      title: "Finally captured the Northern Lights after 8 attempts [OC] [4032x3024]",
      author: "u/ElenaPhoto",
      subreddit: "r/EarthPorn",
      excerpt: "This shot was taken at Jökulsárlón glacier lagoon in Iceland. Sharing all my camera settings and tips for aurora photography...",
      tags: ["Photography", "Nature", "Europe"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop",
      timeAgo: "1d",
      comments: 234
    },
    {
      id: 4,
      title: "Solo Vietnam backpacking - 1 month for $800 total budget breakdown",
      author: "u/DavidBackpacker",
      subreddit: "r/solotravel",
      excerpt: "Complete budget breakdown of my month in Vietnam. Including accommodation, food, transport, and activities. Perfect for budget travelers...",
      tags: ["Backpacking", "Budget", "Asia"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      timeAgo: "2d",
      comments: 67
    },
    {
      id: 5,
      title: "Kenya Safari Photography - Great Migration timing and gear guide",
      author: "u/MariaWildlife",
      subreddit: "r/NatureIsFuckingLit",
      excerpt: "Just returned from Maasai Mara during the Great Migration. Sharing the best timing, photography gear recommendations, and ethical safari tips...",
      tags: ["Wildlife", "Photography", "Africa"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=300&h=200&fit=crop",
      timeAgo: "3d",
      comments: 445
    },
    {
      id: 6,
      title: "Greek Island Hopping - Ultimate 2-week itinerary beyond Santorini",
      author: "u/AlexThompson",
      subreddit: "r/travel",
      excerpt: "Discovered amazing Greek islands that most tourists miss. Complete ferry schedules, accommodation tips, and hidden beaches...",
      tags: ["Islands", "History", "Europe"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      timeAgo: "4d",
      comments: 78
    }
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.subreddit.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              <Button variant="ghost" size="sm" className="flex items-center space-x-1 bg-gray-100">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/write">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Plus className="mr-1 h-4 w-4" />
                Create Post
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex gap-6 p-4">
        {/* Main Content */}
        <main className="flex-1">
          {/* Sort Options */}
          <div className="bg-white rounded-lg mb-4 p-3 border border-gray-300">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-blue-600 bg-blue-50">
                <Flame className="mr-1 h-4 w-4" />
                Hot
              </Button>
              <Button variant="ghost" size="sm">
                <TrendingUp className="mr-1 h-4 w-4" />
                Top
              </Button>
              <Button variant="ghost" size="sm">
                <Clock className="mr-1 h-4 w-4" />
                New
              </Button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-2">
            {filteredStories.map((story) => (
              <Card key={story.id} className="bg-white border border-gray-300 hover:border-gray-400 transition-colors">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Voting Section */}
                    <div className="w-12 p-2 bg-gray-50 flex flex-col items-center justify-start space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-1 h-6 w-6 ${userVotes[story.id] === 'up' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}
                        onClick={() => handleVote(story.id, 'up')}
                      >
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                      <span className={`text-xs font-bold ${userVotes[story.id] === 'up' ? 'text-orange-500' : userVotes[story.id] === 'down' ? 'text-blue-500' : 'text-gray-700'}`}>
                        {votes[story.id]}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-1 h-6 w-6 ${userVotes[story.id] === 'down' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
                        onClick={() => handleVote(story.id, 'down')}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 p-3">
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                        <span className="font-semibold">{story.subreddit}</span>
                        <span>•</span>
                        <span>Posted by {story.author}</span>
                        <span>•</span>
                        <span>{story.timeAgo} ago</span>
                      </div>

                      <Link to={`/trip/${story.id}`} className="block group">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2">
                          {story.title}
                        </h3>
                      </Link>

                      <div className="flex gap-3 mb-3">
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                            {story.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {story.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center space-x-4 text-gray-500">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1">
                          <MessageCircle className="mr-1 h-4 w-4" />
                          <span className="text-xs">{story.comments} Comments</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1">
                          <Share className="mr-1 h-4 w-4" />
                          <span className="text-xs">Share</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1">
                          <Bookmark className="mr-1 h-4 w-4" />
                          <span className="text-xs">Save</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-300">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try adjusting your search or check out different communities.</p>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="w-80 space-y-4">
          <Card className="bg-white border border-gray-300">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Popular Communities</h3>
              <div className="space-y-3">
                {[
                  { name: "r/travel", members: "2.8M", description: "General travel discussions" },
                  { name: "r/solotravel", members: "1.2M", description: "Solo travel community" },
                  { name: "r/backpacking", members: "890k", description: "Backpacking adventures" },
                  { name: "r/food", members: "22.1M", description: "Food and culinary experiences" },
                  { name: "r/EarthPorn", members: "22.1M", description: "Amazing landscape photography" }
                ].map((community) => (
                  <div key={community.name} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{community.name}</div>
                      <div className="text-xs text-gray-500">{community.members} members</div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      Join
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-300">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Trending Destinations</h3>
              <div className="space-y-2">
                {["Iceland", "Japan", "Patagonia", "Thailand", "Kenya", "Vietnam", "Greece"].map((destination) => (
                  <div key={destination} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{destination}</span>
                    <Badge variant="outline" className="text-xs">Hot</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Stories;