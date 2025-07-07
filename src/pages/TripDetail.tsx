
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, MapPin, Users, Clock, Star, Heart, Bookmark } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const TripDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data for the trip - in a real app this would come from an API based on the ID
  const trip = {
    id: 1,
    title: "Magical Journey to the Crystal Caves",
    location: "Mystic Mountains, Ethereal Realm",
    duration: "7 days",
    maxParticipants: 12,
    currentParticipants: 4,
    price: "2,500 gold coins",
    startDate: "March 15, 2025",
    endDate: "March 22, 2025",
    description: "Embark on an enchanting adventure through the legendary Crystal Caves, where ancient magic still flows through crystalline formations. This journey will take you deep into the heart of the Mystic Mountains, guided by experienced travel wizards who know every secret passage and magical phenomenon.",
    itinerary: [
      "Day 1-2: Journey to Mystic Mountains base camp",
      "Day 3-4: Explore the outer Crystal Chambers",
      "Day 5-6: Deep cave expedition to the Heart Crystal",
      "Day 7: Return journey with magical artifact crafting"
    ],
    includes: [
      "Magical transportation",
      "Enchanted camping gear",
      "All meals prepared by kitchen wizards",
      "Professional guide services",
      "Crystal harvesting permits"
    ],
    difficulty: "Intermediate",
    tags: ["Adventure", "Crystals", "Mountains", "Magic"],
    images: ["/lovable-uploads/d662d6b2-0c62-4770-b682-2d9e07700089.png"],
    likes: 89,
    bookmarks: 34
  };

  const agent = {
    name: "Xanxan",
    avatar: "/lovable-uploads/d662d6b2-0c62-4770-b682-2d9e07700089.png",
    bio: "I like capoeira, going to the gym, eating and I'm passionate about laying in the sun like a cat.",
    joinDate: "Created about a year ago",
    followers: 4,
    rating: 4.8,
    totalTrips: 23,
    completedTrips: 19,
    specialties: ["Crystal Magic", "Mountain Expeditions", "Ancient Ruins"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation Header */}
      <header className="border-b border-purple-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/stories">
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700/50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-white hover:bg-purple-700/50"
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className="text-white hover:bg-purple-700/50"
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-red-400' : ''}`} />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Trip Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={trip.images[0]}
                alt={trip.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-purple-600/90 text-white">
                  {trip.difficulty}
                </Badge>
              </div>
            </div>

            {/* Trip Title and Basic Info */}
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{trip.title}</CardTitle>
                <div className="flex flex-wrap gap-4 text-purple-200">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {trip.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {trip.currentParticipants}/{trip.maxParticipants} travelers
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {trip.startDate} - {trip.endDate}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trip.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-600/50 text-purple-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 leading-relaxed">{trip.description}</p>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trip.itinerary.map((item, index) => (
                    <li key={index} className="text-purple-100 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trip.includes.map((item, index) => (
                    <li key={index} className="text-purple-100 flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Agent Info */}
          <div className="space-y-6">
            {/* Agent Profile */}
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={agent.avatar} alt={agent.name} />
                  <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-white">{agent.name}</CardTitle>
                <CardDescription className="text-purple-200">
                  Travel Agent
                </CardDescription>
                <div className="flex items-center justify-center text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-white">{agent.rating}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 text-sm text-center mb-4">{agent.bio}</p>
                <Separator className="my-4 bg-purple-700/50" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-purple-200">
                    <span>Member since:</span>
                    <span className="text-white">{agent.joinDate}</span>
                  </div>
                  <div className="flex justify-between text-purple-200">
                    <span>Followers:</span>
                    <span className="text-white">{agent.followers}</span>
                  </div>
                  <div className="flex justify-between text-purple-200">
                    <span>Total trips:</span>
                    <span className="text-white">{agent.totalTrips}</span>
                  </div>
                  <div className="flex justify-between text-purple-200">
                    <span>Completed:</span>
                    <span className="text-white">{agent.completedTrips}</span>
                  </div>
                </div>
                <Separator className="my-4 bg-purple-700/50" />
                <div>
                  <h4 className="text-white font-medium mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-600/50 text-purple-100 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Card */}
            <Card className="bg-purple-800/30 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center">Join This Adventure</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-yellow-400">{trip.price}</span>
                  <span className="text-purple-200 text-sm block">per traveler</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-purple-200">
                  <span className="text-orange-400">{trip.maxParticipants - trip.currentParticipants} spots left</span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Request to Join
                </Button>
                <Button variant="outline" className="w-full border-purple-400 text-purple-200 hover:bg-purple-700/50">
                  Message Agent
                </Button>
                <div className="text-center text-purple-300 text-xs">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {trip.likes}
                    </span>
                    <span className="flex items-center">
                      <Bookmark className="h-3 w-3 mr-1" />
                      {trip.bookmarks}
                    </span>
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

export default TripDetail;
