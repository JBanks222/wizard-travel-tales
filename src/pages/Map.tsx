import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Flame, 
  Star, 
  Globe, 
  Filter,
  Search,
  Layers,
  ZoomIn,
  ZoomOut,
  Navigation,
  Calendar,
  Clock,
  DollarSign,
  Heart,
  BookOpen,
  Camera,
  Utensils,
  Mountain,
  Beach,
  Building,
  TreePine
} from "lucide-react";
import { Link } from "react-router-dom";
import TravelMap from "@/components/ui/travel-map";

const Map = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = [
    { value: "all", label: "All Destinations", icon: Globe },
    { value: "trending", label: "Trending", icon: TrendingUp },
    { value: "popular", label: "Most Popular", icon: Flame },
    { value: "budget", label: "Budget Friendly", icon: DollarSign },
    { value: "luxury", label: "Luxury", icon: Star },
    { value: "adventure", label: "Adventure", icon: Mountain },
    { value: "culture", label: "Cultural", icon: Building },
    { value: "nature", label: "Nature", icon: TreePine },
    { value: "beach", label: "Beach", icon: Beach },
    { value: "food", label: "Food & Dining", icon: Utensils },
    { value: "photography", label: "Photography", icon: Camera }
  ];

  const topDestinations = [
    {
      name: "Bali, Indonesia",
      category: "hot",
      posts: 1103,
      recentActivity: 156,
      trending: "up",
      tags: ["Beach", "Spiritual", "Nature"],
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=200&h=150&fit=crop"
    },
    {
      name: "Paris, France",
      category: "hot",
      posts: 1247,
      recentActivity: 89,
      trending: "up",
      tags: ["Culture", "Food", "Romance"],
      image: "https://images.unsplash.com/photo-1502602898534-47d1c0c0b0e3?w=200&h=150&fit=crop"
    },
    {
      name: "Tokyo, Japan",
      category: "hot",
      posts: 892,
      recentActivity: 67,
      trending: "up",
      tags: ["Technology", "Food", "Culture"],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=150&fit=crop"
    },
    {
      name: "Thailand",
      category: "hot",
      posts: 1023,
      recentActivity: 134,
      trending: "up",
      tags: ["Food", "Beach", "Culture"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=150&fit=crop"
    }
  ];

  const trendingDestinations = [
    {
      name: "Iceland",
      category: "warm",
      posts: 445,
      recentActivity: 34,
      trending: "up",
      tags: ["Nature", "Adventure", "Photography"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=150&fit=crop"
    },
    {
      name: "Vietnam",
      category: "warm",
      posts: 678,
      recentActivity: 45,
      trending: "up",
      tags: ["Food", "Culture", "Budget"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=150&fit=crop"
    },
    {
      name: "Greece",
      category: "warm",
      posts: 756,
      recentActivity: 78,
      trending: "up",
      tags: ["Islands", "History", "Beach"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=150&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hot': return 'bg-red-500';
      case 'warm': return 'bg-orange-500';
      case 'cool': return 'bg-blue-500';
      case 'cold': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getTrendingIcon = (trending: string) => {
    switch (trending) {
      case 'up': return <TrendingUp className="h-3 w-3 text-green-600" />;
      case 'down': return <TrendingDown className="h-3 w-3 text-red-600" />;
      default: return <div className="w-3 h-0.5 bg-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">TravelTales</span>
              </Link>
              
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-gold" />
                <h1 className="text-lg font-semibold text-gray-900">Global Travel Map</h1>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Navigation className="h-4 w-4 mr-2" />
                My Trips
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Link to="/">
                <Button size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Back to Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search and Filters */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-display text-black">Discover Destinations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="culture">Culture</SelectItem>
                      <SelectItem value="beach">Beach</SelectItem>
                      <SelectItem value="city">City</SelectItem>
                      <SelectItem value="nature">Nature</SelectItem>
                      <SelectItem value="food">Food & Dining</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="budget">Budget</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quick Filters */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quick Filters</label>
                  <div className="grid grid-cols-2 gap-2">
                    {filterOptions.slice(0, 8).map((filter) => {
                      const Icon = filter.icon;
                      return (
                        <Button
                          key={filter.value}
                          variant={selectedFilter === filter.value ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedFilter(filter.value)}
                          className={selectedFilter === filter.value ? "bg-gold hover:bg-gold/90 text-black" : ""}
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {filter.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Map Controls */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Map Controls</h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Layers className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Destinations */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-display text-black flex items-center">
                  <Flame className="h-5 w-5 mr-2 text-red-500" />
                  Hot Destinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topDestinations.map((destination, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{destination.name}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{destination.posts} posts</span>
                          {getTrendingIcon(destination.trending)}
                        </div>
                      </div>
                      <div className={`${getCategoryColor(destination.category)} w-3 h-3 rounded-full`}></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Destinations */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-display text-black flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingDestinations.map((destination, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{destination.name}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{destination.recentActivity} recent</span>
                          {getTrendingIcon(destination.trending)}
                        </div>
                      </div>
                      <div className={`${getCategoryColor(destination.category)} w-3 h-3 rounded-full`}></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-display text-black">Interactive Travel Map</CardTitle>
                  <Tabs defaultValue="heat" className="w-auto">
                    <TabsList>
                      <TabsTrigger value="heat" className="flex items-center space-x-1">
                        <Flame className="h-4 w-4" />
                        <span>Popularity</span>
                      </TabsTrigger>
                      <TabsTrigger value="trending" className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>Trending</span>
                      </TabsTrigger>
                      <TabsTrigger value="activity" className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Activity</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[600px]">
                  <TravelMap />
                </div>
              </CardContent>
            </Card>

            {/* Map Legend */}
            <Card className="bg-white border border-gray-200 mt-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Hot (90+ posts)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Warm (50-89 posts)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Cool (20-49 posts)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Cold (<20 posts)</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Click on markers to see destination details
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map; 