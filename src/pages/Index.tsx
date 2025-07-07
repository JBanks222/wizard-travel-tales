
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, BookOpen, Feather, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredStories = [
    {
      title: "The Dragon's Lost Treasure",
      author: "Gandalf the Wise",
      excerpt: "Deep in the Misty Mountains, I discovered an ancient dragon's hoard...",
      tags: ["Adventure", "Dragons", "Treasure"],
      likes: 127
    },
    {
      title: "Potion Brewing Gone Wrong",
      author: "Hermione Spellcaster",
      excerpt: "What started as a simple love potion turned into a comedy of magical errors...",
      tags: ["Comedy", "Potions", "Magic"],
      likes: 89
    },
    {
      title: "The Enchanted Forest's Secret",
      author: "Merlin Stormweaver",
      excerpt: "The ancient trees whispered secrets that changed my understanding of magic...",
      tags: ["Mystery", "Nature", "Ancient Magic"],
      likes: 156
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation Header */}
      <header className="border-b border-purple-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold text-white">Wizard Travel Tales</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link to="/stories">
              <Button variant="ghost" className="text-white hover:bg-purple-700/50">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Stories
              </Button>
            </Link>
            <Link to="/write">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Feather className="mr-2 h-4 w-4" />
                Write Tale
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            Share Your Magical Adventures
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            A mystical platform where wizards from all realms gather to share their most extraordinary tales of magic, wonder, and adventure.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/stories">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Tales
              </Button>
            </Link>
            <Link to="/write">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-700/50">
                <Feather className="mr-2 h-5 w-5" />
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Featured Tales</h3>
          <p className="text-purple-200">Discover the most enchanting stories from our community</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story, index) => (
            <Card key={index} className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm hover:bg-purple-700/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">{story.title}</CardTitle>
                <CardDescription className="text-purple-200">by {story.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 mb-4">{story.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-purple-600/50 text-purple-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200 text-sm">{story.likes} likes</span>
                  <Button size="sm" variant="ghost" className="text-purple-200 hover:bg-purple-600/50">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-600/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-purple-200" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Magical Stories</h4>
            <p className="text-purple-200">Share tales of your most extraordinary magical adventures and discoveries.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-200" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Wizard Community</h4>
            <p className="text-purple-200">Connect with fellow wizards and learn from their experiences across the realms.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-purple-200" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Enchanted Experience</h4>
            <p className="text-purple-200">Immerse yourself in a beautifully crafted magical storytelling platform.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-700/50 bg-black/20 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-purple-200">© 2024 Wizard Travel Tales. All magical rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
