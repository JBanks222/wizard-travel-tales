
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Search, Heart, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stories = [
    {
      id: 1,
      title: "The Dragon's Lost Treasure",
      author: "Gandalf the Wise",
      excerpt: "Deep in the Misty Mountains, I discovered an ancient dragon's hoard that held more than just gold and jewels. Among the treasures was a mysterious orb that pulsed with an otherworldly light...",
      content: "The journey to the dragon's lair was treacherous. I had to navigate through enchanted forests where the trees themselves seemed to whisper warnings. But nothing could have prepared me for what I found in that ancient cave...",
      tags: ["Adventure", "Dragons", "Treasure"],
      likes: 127,
      readTime: "8 min read",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Potion Brewing Gone Wrong",
      author: "Hermione Spellcaster",
      excerpt: "What started as a simple love potion turned into a comedy of magical errors that nearly destroyed my entire laboratory...",
      content: "I had been following the recipe perfectly, or so I thought. Three drops of phoenix tears, a pinch of stardust, and the whisper of a summer breeze. But when I added the final ingredient, everything went wonderfully wrong...",
      tags: ["Comedy", "Potions", "Magic"],
      likes: 89,
      readTime: "5 min read",
      date: "1 week ago"
    },
    {
      id: 3,
      title: "The Enchanted Forest's Secret",
      author: "Merlin Stormweaver",
      excerpt: "The ancient trees whispered secrets that changed my understanding of magic forever...",
      content: "For centuries, wizards have passed through the Whispering Woods without truly listening. But on that fateful autumn evening, I finally heard what the forest was trying to tell us...",
      tags: ["Mystery", "Nature", "Ancient Magic"],
      likes: 156,
      readTime: "12 min read",
      date: "3 days ago"
    },
    {
      id: 4,
      title: "Time Travel Mishap",
      author: "Chronos Timekeeper",
      excerpt: "My attempt to visit the Great Wizard War of 1247 went horribly wrong when I accidentally landed in the middle of a medieval cooking competition...",
      content: "The temporal displacement spell should have been straightforward. Set the coordinates, channel the energy, and step through the portal. What could go wrong? Well, as it turns out, quite a lot...",
      tags: ["Time Travel", "Comedy", "History"],
      likes: 203,
      readTime: "7 min read",
      date: "5 days ago"
    },
    {
      id: 5,
      title: "The Crystal Cave Discovery",
      author: "Luna Crystalmend",
      excerpt: "Hidden beneath Mount Ethereal, I found a cave filled with crystals that sang the most beautiful melodies...",
      content: "The entrance was so well hidden that I almost missed it entirely. A small crack in the mountainside, barely wide enough for a person to squeeze through. But the faint humming sound drew me in...",
      tags: ["Discovery", "Crystals", "Music"],
      likes: 178,
      readTime: "9 min read",
      date: "1 day ago"
    },
    {
      id: 6,
      title: "Familiar Familiar Problems",
      author: "Tabitha Whiskers",
      excerpt: "When my cat familiar decided to go on strike, I had to learn magic the hard way...",
      content: "Professor Mittens had been my faithful familiar for seven years. We were a perfect team until the day he decided he deserved better working conditions. Who knew cats could unionize?",
      tags: ["Familiars", "Comedy", "Cats"],
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation Header */}
      <header className="border-b border-purple-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700/50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-yellow-400" />
              <h1 className="text-xl font-bold text-white">Wizard Tales</h1>
            </div>
          </div>
          <Link to="/write">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Share Your Tale
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 h-4 w-4" />
            <Input
              placeholder="Search tales by title, author, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-purple-800/30 border-purple-700/50 text-white placeholder:text-purple-300"
            />
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Card key={story.id} className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm hover:bg-purple-700/40 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white group-hover:text-purple-200 transition-colors">
                      {story.title}
                    </CardTitle>
                    <CardDescription className="text-purple-200">
                      by {story.author}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-300 hover:text-red-400 hover:bg-transparent p-1"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 mb-4 line-clamp-3">{story.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-purple-600/50 text-purple-100 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-purple-300">
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
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No tales found</h3>
            <p className="text-purple-200">Try adjusting your search or explore different tags.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
