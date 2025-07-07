
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, BookOpen, Feather, Users, Globe, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredStories = [
    {
      title: "Hidden Gems of Patagonia",
      author: "Sarah Chen",
      excerpt: "Discovering untouched landscapes and local communities in the heart of South America...",
      tags: ["Adventure", "Nature", "South America"],
      likes: 127
    },
    {
      title: "Street Food Adventures in Bangkok",
      author: "Marcus Rodriguez",
      excerpt: "A culinary journey through the vibrant markets and hidden food stalls of Thailand's capital...",
      tags: ["Food", "Culture", "Asia"],
      likes: 89
    },
    {
      title: "Northern Lights in Iceland",
      author: "Elena Johansson",
      excerpt: "Chasing the aurora borealis across Iceland's dramatic winter landscape...",
      tags: ["Photography", "Nature", "Europe"],
      likes: 156
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">TravelTales</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link to="/stories">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Stories
              </Button>
            </Link>
            <Link to="/write">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Feather className="mr-2 h-4 w-4" />
                Share Story
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Share Your Travel Adventures
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with fellow travelers, discover amazing destinations, and share your most memorable journeys with a passionate community.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/stories">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Stories
                </Button>
              </Link>
              <Link to="/write">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Feather className="mr-2 h-5 w-5" />
                  Share Your Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h3>
            <p className="text-gray-600">Discover inspiring travel experiences from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-900">{story.title}</CardTitle>
                  <CardDescription className="text-gray-600">by {story.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{story.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{story.likes} likes</span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Share Your Journey</h4>
              <p className="text-gray-600">Document your travels with photos, stories, and tips for fellow adventurers.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Travel Community</h4>
              <p className="text-gray-600">Connect with like-minded travelers and discover new perspectives on destinations.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Discover Places</h4>
              <p className="text-gray-600">Find hidden gems and popular destinations through authentic traveler experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 TravelTales. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
