import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, TrendingDown, Users, Flame, Star, Globe } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [lat, lng]
  popularity: number; // 0-100
  posts: number;
  trending: 'up' | 'down' | 'stable';
  category: 'hot' | 'warm' | 'cool' | 'cold';
  recentActivity: number; // posts in last 30 days
  topTags: string[];
}

const TravelMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [mapView, setMapView] = useState<'heat' | 'trending' | 'activity'>('heat');
  const [hoveredDestination, setHoveredDestination] = useState<Destination | null>(null);

  // Sample destination data
  const destinations: Destination[] = [
    {
      id: "paris",
      name: "Paris",
      country: "France",
      coordinates: [48.8566, 2.3522],
      popularity: 95,
      posts: 1247,
      trending: 'up',
      category: 'hot',
      recentActivity: 89,
      topTags: ["Culture", "Food", "Romance"]
    },
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      coordinates: [35.6762, 139.6503],
      popularity: 88,
      posts: 892,
      trending: 'up',
      category: 'hot',
      recentActivity: 67,
      topTags: ["Technology", "Food", "Culture"]
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      coordinates: [-8.3405, 115.0920],
      popularity: 92,
      posts: 1103,
      trending: 'up',
      category: 'hot',
      recentActivity: 156,
      topTags: ["Beach", "Spiritual", "Nature"]
    },
    {
      id: "iceland",
      name: "Iceland",
      country: "Iceland",
      coordinates: [64.9631, -19.0208],
      popularity: 78,
      posts: 445,
      trending: 'up',
      category: 'warm',
      recentActivity: 34,
      topTags: ["Nature", "Adventure", "Photography"]
    },
    {
      id: "patagonia",
      name: "Patagonia",
      country: "Argentina/Chile",
      coordinates: [-50.9423, -73.4068],
      popularity: 65,
      posts: 234,
      trending: 'stable',
      category: 'cool',
      recentActivity: 12,
      topTags: ["Adventure", "Nature", "Hiking"]
    },
    {
      id: "vietnam",
      name: "Vietnam",
      country: "Vietnam",
      coordinates: [16.0544, 108.2022],
      popularity: 82,
      posts: 678,
      trending: 'up',
      category: 'warm',
      recentActivity: 45,
      topTags: ["Food", "Culture", "Budget"]
    },
    {
      id: "kenya",
      name: "Kenya",
      country: "Kenya",
      coordinates: [-1.2921, 36.8219],
      popularity: 58,
      posts: 189,
      trending: 'down',
      category: 'cool',
      recentActivity: 8,
      topTags: ["Safari", "Wildlife", "Adventure"]
    },
    {
      id: "greece",
      name: "Greece",
      country: "Greece",
      coordinates: [39.0742, 21.8243],
      popularity: 85,
      posts: 756,
      trending: 'up',
      category: 'warm',
      recentActivity: 78,
      topTags: ["Islands", "History", "Beach"]
    },
    {
      id: "thailand",
      name: "Thailand",
      country: "Thailand",
      coordinates: [13.7563, 100.5018],
      popularity: 90,
      posts: 1023,
      trending: 'up',
      category: 'hot',
      recentActivity: 134,
      topTags: ["Food", "Beach", "Culture"]
    },
    {
      id: "peru",
      name: "Peru",
      country: "Peru",
      coordinates: [-13.1631, -72.5450],
      popularity: 72,
      posts: 334,
      trending: 'stable',
      category: 'warm',
      recentActivity: 23,
      topTags: ["History", "Adventure", "Culture"]
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

  const getCategorySize = (category: string) => {
    switch (category) {
      case 'hot': return 'w-6 h-6';
      case 'warm': return 'w-5 h-5';
      case 'cool': return 'w-4 h-4';
      case 'cold': return 'w-3 h-3';
      default: return 'w-4 h-4';
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
    <div className="w-full">
      {/* Map Controls */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-display font-bold text-black">Travel Heat Map</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant={mapView === 'heat' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('heat')}
              className={mapView === 'heat' ? 'bg-gold hover:bg-gold/90 text-black' : ''}
            >
              <Flame className="h-4 w-4 mr-1" />
              Popularity
            </Button>
            <Button
              variant={mapView === 'trending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('trending')}
              className={mapView === 'trending' ? 'bg-gold hover:bg-gold/90 text-black' : ''}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              Trending
            </Button>
            <Button
              variant={mapView === 'activity' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('activity')}
              className={mapView === 'activity' ? 'bg-gold hover:bg-gold/90 text-black' : ''}
            >
              <Users className="h-4 w-4 mr-1" />
              Recent Activity
            </Button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>Hot</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span>Warm</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span>Cool</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <span>Cold</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <Card className="bg-white border border-gray-200 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50">
            {/* World Map Background (simplified) */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* Simplified continents */}
                <path d="M150,200 Q200,150 250,200 Q300,250 350,200 Q400,150 450,200 L450,300 Q400,350 350,300 Q300,250 250,300 Q200,350 150,300 Z" fill="#4B5563"/>
                <path d="M500,150 Q550,100 600,150 Q650,200 700,150 Q750,100 800,150 L800,250 Q750,300 700,250 Q650,200 600,250 Q550,300 500,250 Z" fill="#4B5563"/>
                <path d="M200,350 Q250,300 300,350 Q350,400 400,350 Q450,300 500,350 L500,450 Q450,500 400,450 Q350,400 300,450 Q250,500 200,450 Z" fill="#4B5563"/>
              </svg>
            </div>

            {/* Destination Markers */}
            {destinations.map((destination) => {
              // Convert coordinates to pixel positions (simplified)
              const x = ((destination.coordinates[1] + 180) / 360) * 1000;
              const y = ((90 - destination.coordinates[0]) / 180) * 500;
              
              return (
                <div
                  key={destination.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${x}px`, top: `${y}px` }}
                  onClick={() => setSelectedDestination(destination)}
                  onMouseEnter={() => setHoveredDestination(destination)}
                  onMouseLeave={() => setHoveredDestination(null)}
                >
                  {/* Marker */}
                  <div className={`${getCategoryColor(destination.category)} ${getCategorySize(destination.category)} rounded-full shadow-lg border-2 border-white transition-all duration-200 group-hover:scale-125`}>
                    <MapPin className="w-full h-full text-white p-0.5" />
                  </div>

                  {/* Pulse effect for hot destinations */}
                  {destination.category === 'hot' && (
                    <div className="absolute inset-0 animate-ping">
                      <div className={`${getCategoryColor(destination.category)} w-full h-full rounded-full opacity-75`}></div>
                    </div>
                  )}

                  {/* Hover Tooltip */}
                  {hoveredDestination?.id === destination.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                      <Card className="bg-white border border-gray-200 shadow-lg min-w-48">
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{destination.name}</h4>
                            {getTrendingIcon(destination.trending)}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{destination.country}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{destination.posts} posts</span>
                            <span>{destination.recentActivity} recent</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {destination.topTags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Destination Details */}
      {selectedDestination && (
        <Card className="mt-4 bg-white border border-gray-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`${getCategoryColor(selectedDestination.category)} w-8 h-8 rounded-full flex items-center justify-center`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-black font-display">{selectedDestination.name}</CardTitle>
                  <p className="text-sm text-gray-600">{selectedDestination.country}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDestination(null)}
                className="text-gray-500 hover:text-black"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{selectedDestination.popularity}</div>
                <div className="text-sm text-gray-600">Popularity Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{selectedDestination.posts}</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{selectedDestination.recentActivity}</div>
                <div className="text-sm text-gray-600">Recent Activity</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  {getTrendingIcon(selectedDestination.trending)}
                  <span className="text-sm font-medium capitalize">{selectedDestination.trending}</span>
                </div>
                <div className="text-sm text-gray-600">Trend</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedDestination.topTags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <Button className="bg-gold hover:bg-gold/90 text-black">
                <Globe className="h-4 w-4 mr-2" />
                Explore Posts
              </Button>
              <Button variant="outline">
                <Star className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TravelMap; 