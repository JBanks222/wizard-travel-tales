import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
import { ChevronUp, ChevronDown, MessageCircle, Share, Bookmark, TrendingUp, Clock, User, Search, Plus, Home, Flame, Calendar, Users, MapPin, Star } from "lucide-react";
=======
import { MapPin, BookOpen, Feather, Users, Globe, Camera, Star, ArrowRight, Mail, Shield, Award, Heart } from "lucide-react";
>>>>>>> 7e30d1b (Your submodule changes)
import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";

const Index = () => {
<<<<<<< HEAD
  const [votes, setVotes] = useState<{[key: number]: number}>({
    1: 127,
    2: 89,
    3: 156,
    4: 203,
    5: 78
  });

  const [userVotes, setUserVotes] = useState<{[key: number]: 'up' | 'down' | null}>({});

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
=======
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
>>>>>>> 7e30d1b (Your submodule changes)
    }
  ];

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
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/write">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Plus className="mr-1 h-4 w-4" />
                Create Post
=======
    <div className="min-h-screen bg-offwhite">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gold rounded-full p-2">
              <Globe className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-3xl font-display font-bold text-black">WIZARD TRAVEL CLUB</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/stories">
              <Button variant="ghost" className="text-black hover:text-gold hover:bg-gold/10 font-medium">
                Explore Stories
              </Button>
            </Link>
            <Link to="/write">
              <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-2 rounded-full">
                <Feather className="mr-2 h-4 w-4" />
                Share Story
>>>>>>> 7e30d1b (Your submodule changes)
              </Button>
            </Link>
          </div>
        </div>
      </header>

<<<<<<< HEAD
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
=======
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl font-display font-bold text-white mb-8 leading-tight">
              A LUXURY TRAVEL NETWORK
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience worry-free travel planning with our team of seasoned travel experts. 
              Craft luxurious, unforgettable trips that allow you to live like a superstar throughout your journey.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/stories">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-4 rounded-full text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Destinations
                </Button>
              </Link>
              <Link to="/write">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-medium px-8 py-4 rounded-full text-lg">
                  <Feather className="mr-2 h-5 w-5" />
                  Plan Your Trip
                </Button>
              </Link>
>>>>>>> 7e30d1b (Your submodule changes)
            </div>
          </div>

<<<<<<< HEAD
          {/* Posts */}
          <div className="space-y-2">
            {posts.map((post) => (
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
                        {post.type === "travel_agent" && (
                          <>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs px-1">
                              Travel Agent
                            </Badge>
                          </>
                        )}
                        <span>•</span>
                        <span>{post.timeAgo} ago</span>
                      </div>

                      <Link to={`/trip/${post.id}`} className="block group">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      {post.type === "travel_agent" && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4 text-blue-600" />
                              <span className="text-gray-700">{post.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-blue-600" />
                              <span className="text-gray-700">{post.spotsLeft}/{post.totalSpots} spots</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 text-blue-600" />
                              <span className="text-gray-700">{post.startDate}</span>
                            </div>
                            <div className="font-semibold text-blue-600">
                              {post.price}
                            </div>
                          </div>
                        </div>
                      )}

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

                      {/* Travel Agent Booking Section */}
                      {post.type === "travel_agent" && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-sm">
                                <span className="text-orange-600 font-semibold">
                                  {post.spotsLeft} spots remaining
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
                              </div>
                            </div>
                            {post.type === "travel_agent" && post.price && post.duration && post.spotsLeft !== undefined && post.totalSpots && post.startDate && (
                              <BookingModal trip={{
                                id: post.id,
                                title: post.title,
                                price: post.price,
                                duration: post.duration,
                                spotsLeft: post.spotsLeft,
                                totalSpots: post.totalSpots,
                                startDate: post.startDate,
                                author: post.author,
                                image: post.image
                              }}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                  Book Now
                                </Button>
                              </BookingModal>
                            )}
                          </div>
                        </div>
                      )}

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
=======
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-black mb-6">Learn More About Our Membership Benefits</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Shield className="h-10 w-10 text-gold" />
              </div>
              <h4 className="text-2xl font-display font-bold text-black mb-4">Worry-Free Travel Planning</h4>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to providing a stress-free journey means you can focus on enjoying every moment of your vacation. 
                Any questions about your itinerary or travel-related emergencies will be swiftly addressed.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Award className="h-10 w-10 text-gold" />
              </div>
              <h4 className="text-2xl font-display font-bold text-black mb-4">Luxury Tailored Experiences</h4>
              <p className="text-gray-600 leading-relaxed">
                Enjoy exclusive access to resort weeks, with prices as low as $300 for seven days in stunning hotels worldwide. 
                Perfect opportunity to gather your family or friends and enjoy exceptional accommodations.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Heart className="h-10 w-10 text-gold" />
              </div>
              <h4 className="text-2xl font-display font-bold text-black mb-4">Exclusive Travel Perks</h4>
              <p className="text-gray-600 leading-relaxed">
                All-inclusive packages feature everything from round-trip flights to idyllic hotel accommodations. 
                Plus, with our user-friendly app and specially curated monthly flight deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-black mb-6">Explore Destinations</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-gold text-black font-medium mb-2">{destination.type}</Badge>
                    <h4 className="text-white font-display font-bold text-lg mb-1">{destination.name}</h4>
                    <p className="text-gray-200 text-sm">{destination.airport}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium rounded-full">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-medium px-8 py-3 rounded-full">
              Explore All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-black mb-6">Our Members Say it Best</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <CardTitle className="text-black font-display">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-600">{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      <span className="text-sm font-medium text-black">{testimonial.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    <p>Hotel: {testimonial.hotel}</p>
                    <p>{testimonial.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
>>>>>>> 7e30d1b (Your submodule changes)
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

<<<<<<< HEAD
        {/* Sidebar */}
        <aside className="w-80 space-y-4">
          <Card className="bg-white border border-gray-300">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">About Community</h3>
              <p className="text-sm text-gray-600 mb-4">
                Welcome to TravelTales! A community for sharing travel experiences, tips, and adventures from around the world.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="font-semibold text-gray-900">2.1M</div>
                  <div className="text-gray-500">Members</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">8.4k</div>
                  <div className="text-gray-500">Online</div>
                </div>
              </div>
              <Link to="/write" className="block mt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Create Post
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-300">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Popular Destinations</h3>
              <div className="space-y-2">
                {["Iceland", "Japan", "Patagonia", "Thailand", "Kenya"].map((destination) => (
                  <div key={destination} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{destination}</span>
                    <Badge variant="outline" className="text-xs">Trending</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
=======
      {/* Newsletter Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-display font-bold mb-6">YOUR NEXT ADVENTURE IS JUST AROUND THE CORNER!</h3>
            <p className="text-xl text-gray-300 mb-8">
              Find Your Travel Tribe! With The Wizard Travel Club's exclusive travel network.
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-6 py-3 rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Subscribe to our newsletter to receive the latest travel updates.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gold rounded-full p-2">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <h4 className="text-xl font-display font-bold text-black">WIZARD TRAVEL CLUB</h4>
              </div>
              <p className="text-gray-600">Luxury Travel Network</p>
            </div>
            
            <div>
              <h5 className="font-display font-bold text-black mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                <li><Link to="/stories" className="hover:text-gold transition-colors">Explore Stories</Link></li>
                <li><Link to="/write" className="hover:text-gold transition-colors">Share Story</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-display font-bold text-black mb-4">Destinations</h5>
              <ul className="space-y-2 text-gray-600">
                <li>Paris, France</li>
                <li>Tokyo, Japan</li>
                <li>Bali, Indonesia</li>
                <li>Tuscany, Italy</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-display font-bold text-black mb-4">Contact</h5>
              <p className="text-gray-600 mb-2">Get exclusive updates</p>
              <p className="text-sm text-gray-500">© 2024 Wizard Travel Club. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
>>>>>>> 7e30d1b (Your submodule changes)
    </div>
  );
};

export default Index;