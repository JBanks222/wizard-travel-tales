
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, MapPin, Users, Clock, Star, Heart, Bookmark, Globe } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const TripDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data for the trip - in a real app this would come from an API based on the ID
  const trip = {
    id: 1,
    title: "Adventure Photography Tour in Iceland",
    location: "Reykjavik, Iceland",
    duration: "7 days",
    maxParticipants: 8,
    currentParticipants: 3,
    price: "$2,850",
    startDate: "March 15, 2025",
    endDate: "March 22, 2025",
    description: "Join us for an unforgettable photography adventure through Iceland's most stunning landscapes. This small-group tour focuses on capturing the Northern Lights, dramatic waterfalls, black sand beaches, and ice caves. Perfect for photographers of all skill levels who want to improve their craft while experiencing Iceland's natural wonders.",
    itinerary: [
      "Day 1-2: Arrival in Reykjavik, Golden Circle tour with photography workshops",
      "Day 3-4: South Coast adventure - Seljalandsfoss, Skógafoss, Diamond Beach",
      "Day 5-6: Northern Lights hunting and ice cave exploration",
      "Day 7: Blue Lagoon relaxation and departure preparation"
    ],
    includes: [
      "Professional photography guide",
      "All accommodation (4-star hotels)",
      "Daily breakfast and 4 dinners",
      "Transportation in comfortable minibus",
      "Photography equipment rental available"
    ],
    difficulty: "Moderate",
    tags: ["Photography", "Adventure", "Northern Lights", "Nature"],
    images: ["/lovable-uploads/d662d6b2-0c62-4770-b682-2d9e07700089.png"],
    likes: 89,
    bookmarks: 34
  };

  const guide = {
    name: "Erik Larsson",
    avatar: "/lovable-uploads/d662d6b2-0c62-4770-b682-2d9e07700089.png",
    bio: "Professional photographer and Iceland native with 8 years of experience leading photo tours. Specializing in landscape and Northern Lights photography.",
    joinDate: "Guide since 2018",
    followers: 342,
    rating: 4.9,
    totalTrips: 156,
    completedTrips: 148,
    specialties: ["Landscape Photography", "Northern Lights", "Ice Caves"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/stories">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Trip Details</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current text-blue-600' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className="text-gray-600 hover:text-red-500"
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-red-500' : ''}`} />
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
                <Badge className="bg-blue-600 text-white">
                  {trip.difficulty}
                </Badge>
              </div>
            </div>

            {/* Trip Title and Basic Info */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{trip.title}</CardTitle>
                <div className="flex flex-wrap gap-4 text-gray-600">
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
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">About This Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{trip.description}</p>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trip.itinerary.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trip.includes.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Guide Info */}
          <div className="space-y-6">
            {/* Guide Profile */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={guide.avatar} alt={guide.name} />
                  <AvatarFallback>{guide.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-gray-900">{guide.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  Professional Guide
                </CardDescription>
                <div className="flex items-center justify-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-gray-900">{guide.rating}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm text-center mb-4">{guide.bio}</p>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Experience:</span>
                    <span className="text-gray-900">{guide.joinDate}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Followers:</span>
                    <span className="text-gray-900">{guide.followers}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Total trips:</span>
                    <span className="text-gray-900">{guide.totalTrips}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Completed:</span>
                    <span className="text-gray-900">{guide.completedTrips}</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div>
                  <h4 className="text-gray-900 font-medium mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {guide.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Card */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-center">Join This Trip</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">{trip.price}</span>
                  <span className="text-gray-600 text-sm block">per person</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-gray-600">
                  <span className="text-orange-600">{trip.maxParticipants - trip.currentParticipants} spots remaining</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Request to Join
                </Button>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  Message Guide
                </Button>
                <div className="text-center text-gray-500 text-xs">
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
