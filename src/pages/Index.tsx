import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, MessageCircle, Share, Bookmark, TrendingUp, Clock, User, Search, Plus, Home, Flame, Calendar, Users, MapPin, Star, BookOpen, Feather, Globe, Camera, ArrowRight, Mail, Shield, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "@/components/ui/booking-modal";
import TravelMap from "@/components/ui/travel-map";

const Index = () => {
  const [votes, setVotes] = useState<{[key: number]: number}>({
    1: 127,
    2: 89,
    3: 156,
    4: 203,
    5: 78
  });

  const [userVotes, setUserVotes] = useState<{[key: number]: 'up' | 'down' | null}>({});
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleVote = (storyId: number, voteType: 'up' | 'down') => {
    const currentVote = userVotes[storyId];
    let newVoteCount = votes[storyId];
    
    if (currentVote === voteType) {
      // Remove vote
      setUserVotes(prev => ({ ...prev, [storyId]: null }));
      newVoteCount += voteType === 'up' ? -1 : 1;
    } else {
      // Change or add vote
      if (currentVote) {
        newVoteCount += voteType === 'up' ? 2 : -2;
      } else {
        newVoteCount += voteType === 'up' ? 1 : -1;
      }
      setUserVotes(prev => ({ ...prev, [storyId]: voteType }));
    }
    
    setVotes(prev => ({ ...prev, [storyId]: newVoteCount }));
  };

  const handleBookNow = (trip) => {
    setSelectedTrip(trip);
    setIsBookingModalOpen(true);
  };

  const posts = [
    {
      id: 1,
      title: "Hidden Gems of Patagonia - 3 weeks of incredible landscapes and wildlife",
      author: "u/SarahChen",
      subreddit: "r/travel",
      excerpt: "Just got back from Patagonia and wanted to share some incredible spots most tourists miss. The glacier hikes were life-changing and meeting local communities was the highlight...",
      tags: ["Adventure", "Nature", "South America"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      timeAgo: "6h",
      comments: 89,
      type: "post"
    },
    {
      id: 2,
      title: "🏔️ GUIDED TOUR: Iceland Northern Lights Photography Expedition - March 2025",
      author: "u/ArcticAdventures_Pro",
      subreddit: "r/travel • r/photography",
      excerpt: "Join our expert-led 7-day Northern Lights photography tour in Iceland! Small groups (max 8 people), professional guide, all equipment included. March 15-22, 2025.",
      tags: ["Photography", "Guided Tour", "Northern Lights", "Iceland"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      timeAgo: "2h",
      comments: 156,
      type: "travel_agent",
      price: "$2,850",
      duration: "7 days",
      spotsLeft: 5,
      totalSpots: 8,
      startDate: "March 15, 2025",
      userType: "Travel Agent"
    },
    {
      id: 3,
      title: "Bangkok Street Food Guide - Best hidden stalls from a local perspective",
      author: "u/MarcusRodriguez",
      subreddit: "r/food",
      excerpt: "Living in Bangkok for 5 years taught me where locals actually eat. Here's my complete guide to the best street food that tourists never find...",
      tags: ["Food", "Culture", "Asia"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      timeAgo: "12h",
      comments: 156,
      type: "post"
    },
    {
      id: 4,
      title: "🌍 GROUP TRIP: Kenya Safari & Cultural Experience - June 2025",
      author: "u/SafariExperts_Kenya",
      subreddit: "r/travel • r/NatureIsFuckingLit",
      excerpt: "Experience the Great Migration in Maasai Mara with our local Kenyan guides. 10-day adventure including game drives, Maasai village visits, and conservation projects.",
      tags: ["Safari", "Wildlife", "Cultural", "Africa", "Group Trip"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
      timeAgo: "4h",
      comments: 67,
      type: "travel_agent",
      price: "$3,200",
      duration: "10 days", 
      spotsLeft: 3,
      totalSpots: 12,
      startDate: "June 10, 2025",
      userType: "Travel Agent"
    },
    {
      id: 5,
      title: "Solo backpacking Vietnam - 1 month budget breakdown and safety tips",
      author: "u/DavidBackpacker",
      subreddit: "r/solotravel",
      excerpt: "Just finished an amazing month in Vietnam spending only $800 total. Here's my complete budget breakdown and safety tips for solo female/male travelers...",
      tags: ["Backpacking", "Budget", "Asia"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      timeAgo: "2d",
      comments: 67,
      type: "post"
    },
    {
      id: 6,
      title: "🏝️ ISLAND HOPPING: Greek Islands Small Group Adventure - September 2025",
      author: "u/MediterraneanVoyages",
      subreddit: "r/travel • r/europe",
      excerpt: "Discover hidden Greek islands beyond Santorini! 14-day small group tour visiting 6 islands with local guides, traditional cooking classes, and private beach access.",
      tags: ["Islands", "Greece", "Small Group", "Cultural"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      timeAgo: "1d",
      comments: 234,
      type: "travel_agent",
      price: "$2,450",
      duration: "14 days",
      spotsLeft: 8,
      totalSpots: 14,
      startDate: "September 5, 2025",
      userType: "Travel Agent"
    }
  ];

  const featuredDestinations = [
    {
      name: "PARIS · FRANCE",
      type: "Luxury Vacation",
      airport: "CDG",
      image: "https://images.unsplash.com/photo-1502602898534-47d1c0c0b0e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "TOKYO · JAPAN",
      type: "Luxury Vacation",
      airport: "NRT",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "BALI · INDONESIA",
      type: "Luxury Vacation",
      airport: "DPS",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "TUSCANY · ITALY",
      type: "Luxury Vacation",
      airport: "FLR",
      image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Brianna Woodson",
      location: "Bahamas & More",
      hotel: "Jewel Grande Montego Bay",
      date: "04-18-2024",
      rating: 4.8,
      text: "Where to start - it's been such an awesome experience working with The Wizard Travel Club. They are honest, fun, and knowledgeable. My trip to Jamaica was a dream and I appreciated the constant contact I had with them while I was there!"
    },
    {
      name: "Samantha Kahner",
      location: "Italy",
      hotel: "La Perscia Resort",
      date: "01-20-2022",
      rating: 5.0,
      text: "Wizard Travel Club takes its name to a complete new level. Imagine never spending a birthday alone again! You are GUARANTEED carefree, & PROMISED THE BEST services and activities anywhere your choose your destination to be."
    },
    {
      name: "Martha Haynes",
      location: "Italy",
      hotel: "Various (Multi City Trip)",
      date: "05-11-2023",
      rating: 5.0,
      text: "Wizard Travel Club - is always there when I needed them. From finding a great hotel room with all my special requests to assurances that she is available when traveling far from home!"
    }
  ];

  const renderPostCard = (post) => {
    if (post.type === "travel_agent") {
      return (
        <Card key={post.id} className="bg-white border border-gray-300 hover:border-gray-400 transition-colors">
          <CardContent className="p-0">
            <div className="flex">
              {/* Voting Section */}
              <div className="w-12 p-2 bg-gray-50 flex flex-col items-center justify-start space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1 h-6 w-6 ${userVotes[post.id] === 'up' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}
                  onClick={() => handleVote(post.id, 'up')}
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <span className={`text-xs font-bold ${userVotes[post.id] === 'up' ? 'text-orange-500' : userVotes[post.id] === 'down' ? 'text-blue-500' : 'text-gray-700'}`}>
                  {votes[post.id]}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1 h-6 w-6 ${userVotes[post.id] === 'down' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
                  onClick={() => handleVote(post.id, 'down')}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              {/* Post Content */}
              <div className="flex-1 p-3">
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                  <span className="font-semibold">{post.subreddit}</span>
                  <span>•</span>
                  <span>Posted by {post.author}</span>
                  <span>•</span>
                  <span>{post.timeAgo} ago</span>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-green-100 text-green-800 font-medium text-xs">Travel Agent</Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Star className="h-3 w-3 fill-gold text-gold mr-1" />
                    4.9 (127 reviews)
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex gap-3 mb-3">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Trip Details Card */}
                    <Card className="bg-blue-50 border-blue-200 mb-3">
                      <CardContent className="p-3">
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="flex items-center text-gray-700">
                            <Clock className="h-3 w-3 mr-1 text-blue-600" />
                            {post.duration}
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Calendar className="h-3 w-3 mr-1 text-blue-600" />
                            {post.startDate}
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Users className="h-3 w-3 mr-1 text-blue-600" />
                            {post.spotsLeft} spots left
                          </div>
                          <div className="flex items-center text-gray-700">
                            <span className="text-blue-600 font-bold">{post.price}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1">
                      <MessageCircle className="mr-1 h-4 w-4" />
                      <span className="text-xs">{post.comments} Comments</span>
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
                  <Button 
                    onClick={() => handleBookNow(post)}
                    className="bg-gold hover:bg-gold/90 text-black font-medium px-4 py-2 rounded-full text-xs"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    // Regular post card
    return (
      <Card key={post.id} className="bg-white border border-gray-300 hover:border-gray-400 transition-colors">
        <CardContent className="p-0">
          <div className="flex">
            {/* Voting Section */}
            <div className="w-12 p-2 bg-gray-50 flex flex-col items-center justify-start space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className={`p-1 h-6 w-6 ${userVotes[post.id] === 'up' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}
                onClick={() => handleVote(post.id, 'up')}
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <span className={`text-xs font-bold ${userVotes[post.id] === 'up' ? 'text-orange-500' : userVotes[post.id] === 'down' ? 'text-blue-500' : 'text-gray-700'}`}>
                {votes[post.id]}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className={`p-1 h-6 w-6 ${userVotes[post.id] === 'down' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
                onClick={() => handleVote(post.id, 'down')}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Post Content */}
            <div className="flex-1 p-3">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                <span className="font-semibold">{post.subreddit}</span>
                <span>•</span>
                <span>Posted by {post.author}</span>
                <span>•</span>
                <span>{post.timeAgo} ago</span>
              </div>

              <Link to={`/trip/${post.id}`} className="block group">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2">
                  {post.title}
                </h3>
              </Link>

              <div className="flex gap-3 mb-3">
                <div className="flex-1">
                  <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                />
              </div>

              {/* Post Actions */}
              <div className="flex items-center space-x-4 text-gray-500">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1">
                  <MessageCircle className="mr-1 h-4 w-4" />
                  <span className="text-xs">{post.comments} Comments</span>
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
    );
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
              <Button variant="ghost" size="sm" className="flex items-center space-x-1 bg-gray-100">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Flame className="h-4 w-4" />
                <span>Popular</span>
              </Button>
              <Link to="/map">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>Map</span>
                </Button>
              </Link>
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

          {/* Travel Map Section */}
          <Card className="bg-white border border-gray-300 mb-4">
            <CardHeader>
              <CardTitle className="text-black font-display flex items-center">
                <Globe className="h-5 w-5 mr-2 text-gold" />
                Global Travel Heat Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TravelMap />
            </CardContent>
          </Card>

          {/* Posts */}
          <div className="space-y-2">
            {posts.map(renderPostCard)}
          </div>
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

export default Index;