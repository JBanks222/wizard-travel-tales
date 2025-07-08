import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Flame, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import TravelMap from "@/components/ui/travel-map";

const Map = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

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

            <Link to="/">
              <Button size="sm">
                Back to Feed
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-display text-black">Map Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant={selectedFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter("all")}
                    className="w-full justify-start"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    All Destinations
                  </Button>
                  <Button
                    variant={selectedFilter === "popular" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter("popular")}
                    className="w-full justify-start"
                  >
                    <Flame className="h-4 w-4 mr-2" />
                    Most Popular
                  </Button>
                  <Button
                    variant={selectedFilter === "trending" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter("trending")}
                    className="w-full justify-start"
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trending
                  </Button>
                  <Button
                    variant={selectedFilter === "activity" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter("activity")}
                    className="w-full justify-start"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Recent Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-display text-black">Interactive Travel Map</CardTitle>
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