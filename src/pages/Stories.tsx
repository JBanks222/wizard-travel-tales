
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Search, Heart, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stories = [
    {
      id: 1,
      title: "Hidden Gems of Patagonia",
      author: "Sarah Chen",
      excerpt: "Discovering untouched landscapes and local communities in the heart of South America. From glacier hikes to gaucho encounters...",
      content: "The journey to Patagonia was life-changing. Starting in Buenos Aires, I made my way south through diverse landscapes...",
      tags: ["Adventure", "Nature", "South America"],
      likes: 127,
      readTime: "8 min read",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Street Food Adventures in Bangkok",
      author: "Marcus Rodriguez",
      excerpt: "A culinary journey through the vibrant markets and hidden food stalls of Thailand's capital...",
      content: "Bangkok's street food scene is unparalleled. Every corner offers a new flavor, a new experience...",
      tags: ["Food", "Culture", "Asia"],
      likes: 89,
      readTime: "5 min read",
      date: "1 week ago"
    },
    {
      id: 3,
      title: "Northern Lights in Iceland",
      author: "Elena Johansson",
      excerpt: "Chasing the aurora borealis across Iceland's dramatic winter landscape...",
      content: "Iceland in winter is otherworldly. The dance of the northern lights against the stark landscape...",
      tags: ["Photography", "Nature", "Europe"],
      likes: 156,
      readTime: "12 min read",
      date: "3 days ago"
    },
    {
      id: 4,
      title: "Backpacking Through Vietnam",
      author: "David Kim",
      excerpt: "A month-long journey from Ho Chi Minh City to Hanoi, experiencing local culture and breathtaking landscapes...",
      content: "Vietnam exceeded all my expectations. The warmth of the people, the incredible food, and the stunning scenery...",
      tags: ["Backpacking", "Culture", "Asia"],
      likes: 203,
      readTime: "7 min read",
      date: "5 days ago"
    },
    {
      id: 5,
      title: "Safari Adventure in Kenya",
      author: "Maria Santos",
      excerpt: "Witnessing the great migration and connecting with Maasai communities in the Serengeti...",
      content: "The Maasai Mara during migration season is pure magic. Millions of wildebeest crossing the plains...",
      tags: ["Wildlife", "Photography", "Africa"],
      likes: 178,
      readTime: "9 min read",
      date: "1 day ago"
    },
    {
      id: 6,
      title: "Island Hopping in Greece",
      author: "Alex Thompson",
      excerpt: "Exploring the lesser-known Greek islands and discovering ancient history mixed with modern charm...",
      content: "Beyond Santorini and Mykonos lies a Greece few tourists experience. Hidden coves, ancient ruins...",
      tags: ["Islands", "History", "Europe"],
      likes: 145,
      readTime: "6 min read",
      date: "4 days ago"
    }
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Travel Stories</h1>
            </div>
          </div>
          <Link to="/write">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
              placeholder="Search stories by title, author, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300"
            />
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Link key={story.id} to={`/trip/${story.id}`}>
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-gray-900 group-hover:text-blue-600 transition-colors">
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
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No stories found</h3>
            <p className="text-gray-600">Try adjusting your search or explore different tags.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
