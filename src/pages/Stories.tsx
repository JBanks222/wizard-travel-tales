import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
import { ChevronUp, ChevronDown, MessageCircle, Share, Bookmark, Search, Plus, Home, Flame, TrendingUp, Clock } from "lucide-react";
=======
import { Globe, Search, Heart, BookOpen, ArrowLeft, MapPin, Calendar, Users, Star, Clock } from "lucide-react";
>>>>>>> 7e30d1b (Your submodule changes)
import { Link } from "react-router-dom";
import BookingModal from "@/components/ui/booking-modal";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
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
=======
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
>>>>>>> 7e30d1b (Your submodule changes)

  const stories = [
    {
      id: 1,
      title: "Hidden Gems of Patagonia - Complete 3-week backpacking guide",
      author: "u/SarahChen",
      subreddit: "r/travel",
      excerpt: "Just returned from an incredible 3-week solo backpacking trip through Patagonia. Sharing my complete itinerary, budget breakdown, and hidden spots most tourists miss...",
      tags: ["Adventure", "Nature", "South America"],
<<<<<<< HEAD
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
=======
      likes: 127,
      readTime: "8 min read",
      date: "2 days ago",
      type: "story"
    },
    {
      id: 2,
      title: "Luxury Bali Adventure - Limited Spots!",
      author: "Wizard Travel Club",
      excerpt: "Join our exclusive 7-day luxury tour of Bali's most stunning locations. All-inclusive package with 5-star accommodations.",
      location: "Bali, Indonesia",
      duration: "7 days",
      startDate: "2024-06-15",
      endDate: "2024-06-22",
      price: "$1,299",
      maxParticipants: 12,
      currentParticipants: 8,
      spotsLeft: 4,
      agentName: "Elena Rodriguez",
      agentRating: 4.9,
      agentReviews: 127,
      communities: ["r/travel", "r/luxurytravel"],
      tags: ["Luxury", "Bali", "All-Inclusive"],
      likes: 89,
      date: "1 week ago",
      type: "travel-agent"
>>>>>>> 7e30d1b (Your submodule changes)
    },
    {
      id: 3,
      title: "Finally captured the Northern Lights after 8 attempts [OC] [4032x3024]",
      author: "u/ElenaPhoto",
      subreddit: "r/EarthPorn",
      excerpt: "This shot was taken at Jökulsárlón glacier lagoon in Iceland. Sharing all my camera settings and tips for aurora photography...",
      tags: ["Photography", "Nature", "Europe"],
<<<<<<< HEAD
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
=======
      likes: 156,
      readTime: "12 min read",
      date: "3 days ago",
      type: "story"
    },
    {
      id: 4,
      title: "Tuscany Wine & Culture Experience",
      author: "Wizard Travel Club",
      excerpt: "Experience the best of Tuscany with wine tastings, cooking classes, and cultural tours. Perfect for food and wine lovers.",
      location: "Tuscany, Italy",
      duration: "5 days",
      startDate: "2024-07-10",
      endDate: "2024-07-15",
      price: "$899",
      maxParticipants: 8,
      currentParticipants: 5,
      spotsLeft: 3,
      agentName: "Marco Bianchi",
      agentRating: 4.8,
      agentReviews: 89,
      communities: ["r/travel", "r/food", "r/wine"],
      tags: ["Wine", "Culture", "Italy"],
      likes: 203,
      date: "5 days ago",
      type: "travel-agent"
>>>>>>> 7e30d1b (Your submodule changes)
    },
    {
      id: 5,
      title: "Kenya Safari Photography - Great Migration timing and gear guide",
      author: "u/MariaWildlife",
      subreddit: "r/NatureIsFuckingLit",
      excerpt: "Just returned from Maasai Mara during the Great Migration. Sharing the best timing, photography gear recommendations, and ethical safari tips...",
      tags: ["Wildlife", "Photography", "Africa"],
<<<<<<< HEAD
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
=======
      likes: 178,
      readTime: "9 min read",
      date: "1 day ago",
      type: "story"
    },
    {
      id: 6,
      title: "Paris Fashion Week Experience",
      author: "Wizard Travel Club",
      excerpt: "Exclusive access to Paris Fashion Week with VIP seating, designer meet-and-greets, and luxury accommodations.",
      location: "Paris, France",
      duration: "4 days",
      startDate: "2024-09-25",
      endDate: "2024-09-29",
      price: "$2,499",
      maxParticipants: 6,
      currentParticipants: 4,
      spotsLeft: 2,
      agentName: "Sophie Dubois",
      agentRating: 5.0,
      agentReviews: 156,
      communities: ["r/travel", "r/fashion", "r/luxury"],
      tags: ["Fashion", "Luxury", "Paris"],
      likes: 312,
      date: "4 days ago",
      type: "travel-agent"
>>>>>>> 7e30d1b (Your submodule changes)
    }
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.subreddit.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBookNow = (trip) => {
    setSelectedTrip(trip);
    setIsBookingModalOpen(true);
  };

  const renderStoryCard = (story) => {
    if (story.type === "travel-agent") {
      return (
        <Card key={story.id} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-green-100 text-green-800 font-medium">Travel Agent</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-3 w-3 fill-gold text-gold mr-1" />
                    {story.agentRating} ({story.agentReviews} reviews)
                  </div>
                </div>
                <CardTitle className="text-gray-900 group-hover:text-gold transition-colors">
                  {story.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  by {story.author} • {story.agentName}
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-red-500 hover:bg-transparent p-1"
                onClick={(e) => e.preventDefault()}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-700 mb-4 line-clamp-2">{story.excerpt}</p>
            
            {/* Trip Details Card */}
            <Card className="bg-blue-50 border-blue-200 mb-4">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    {story.location}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    {story.duration}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    {story.startDate}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    {story.spotsLeft} spots left
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-200">
                  <span className="text-2xl font-bold text-blue-600">{story.price}</span>
                  <span className="text-sm text-gray-600">per person</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {story.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  {story.likes}
                </span>
                <span className="text-xs text-gray-400">
                  {story.communities.join(" • ")}
                </span>
              </div>
              <Button 
                onClick={() => handleBookNow(story)}
                className="bg-gold hover:bg-gold/90 text-black font-medium px-4 py-2 rounded-full"
              >
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    // Regular story card
    return (
      <Link key={story.id} to={`/trip/${story.id}`}>
        <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-gray-900 group-hover:text-gold transition-colors">
                  {story.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  by {story.author}
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-red-500 hover:bg-transparent p-1"
                onClick={(e) => e.preventDefault()}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4 line-clamp-3">{story.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {story.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  {story.likes}
                </span>
                <span className="flex items-center">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {story.readTime}
                </span>
              </div>
              <span>{story.date}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
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
              <h1 className="text-2xl font-display font-bold text-black">Travel Stories & Trips</h1>
            </div>
          </div>
          <Link to="/write">
            <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-2 rounded-full">
              Share Your Story
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search stories, trips, or destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 rounded-full"
            />
>>>>>>> 7e30d1b (Your submodule changes)
          </div>

<<<<<<< HEAD
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
=======
        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map(renderStoryCard)}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-black mb-2">No stories or trips found</h3>
            <p className="text-gray-600">Try adjusting your search or explore different tags.</p>
>>>>>>> 7e30d1b (Your submodule changes)
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

      {/* Booking Modal */}
      {selectedTrip && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedTrip(null);
          }}
          trip={selectedTrip}
        />
      )}
    </div>
  );
};

export default Stories;