import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ChevronUp, ChevronDown, MessageCircle, Share, Bookmark, ArrowLeft, Reply, Award, MoreHorizontal, Search, Plus, Home, Flame } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const TripDetail = () => {
  const { id } = useParams();
  const [postVotes, setPostVotes] = useState(234);
  const [userPostVote, setUserPostVote] = useState<'up' | 'down' | null>(null);
  const [commentVotes, setCommentVotes] = useState<{[key: number]: number}>({
    1: 45,
    2: 23,
    3: 12,
    4: 8,
    5: 34
  });
  const [userCommentVotes, setUserCommentVotes] = useState<{[key: number]: 'up' | 'down' | null}>({});
  const [newComment, setNewComment] = useState("");

  const handlePostVote = (voteType: 'up' | 'down') => {
    if (userPostVote === voteType) {
      setUserPostVote(null);
      setPostVotes(prev => prev + (voteType === 'up' ? -1 : 1));
    } else {
      if (userPostVote) {
        setPostVotes(prev => prev + (voteType === 'up' ? 2 : -2));
      } else {
        setPostVotes(prev => prev + (voteType === 'up' ? 1 : -1));
      }
      setUserPostVote(voteType);
    }
  };

  const handleCommentVote = (commentId: number, voteType: 'up' | 'down') => {
    const currentVote = userCommentVotes[commentId];
    let newVoteCount = commentVotes[commentId];
    
    if (currentVote === voteType) {
      setUserCommentVotes(prev => ({ ...prev, [commentId]: null }));
      newVoteCount += voteType === 'up' ? -1 : 1;
    } else {
      if (currentVote) {
        newVoteCount += voteType === 'up' ? 2 : -2;
      } else {
        newVoteCount += voteType === 'up' ? 1 : -1;
      }
      setUserCommentVotes(prev => ({ ...prev, [commentId]: voteType }));
    }
    
    setCommentVotes(prev => ({ ...prev, [commentId]: newVoteCount }));
  };

  const post = {
    id: parseInt(id || "1"),
    title: "Captured the Northern Lights in Iceland after 8 failed attempts [OC]",
    author: "u/ElenaPhoto",
    subreddit: "r/EarthPorn",
    content: "Finally got the shot I've been dreaming of! This was taken during my third week in Iceland, after 8 failed attempts at capturing the Northern Lights. I learned so much about aurora photography during this trip.\n\nThe key was finding a location away from Reykjavik's light pollution and having patience. This shot was taken near Jökulsárlón glacier lagoon at around 11:30 PM. The aurora activity was forecasted at KP-index 4, which is pretty good for photography.\n\nCamera settings:\n- Canon 5D Mark IV\n- 24-70mm f/2.8 lens at 24mm\n- 15 second exposure\n- f/2.8\n- ISO 3200\n- Manual focus set to infinity\n\nFor anyone planning a Northern Lights trip to Iceland, I'd recommend:\n1. Download the Aurora app to track KP-index\n2. Stay at least 3-4 nights to increase your chances\n3. Rent a car to get away from city lights\n4. Bring a sturdy tripod and dress warmly\n5. Be patient - sometimes you wait hours for the right moment\n\nThe entire experience was magical and worth every cold, sleepless night. Iceland's winter landscape during aurora season is absolutely otherworldly.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    timeAgo: "1d",
    comments: 89,
    awards: 3
  };

  const comments = [
    {
      id: 1,
      author: "u/PhotoEnthusiast92",
      content: "Absolutely stunning shot! I've been trying to photograph the Northern Lights for years. Your camera settings are super helpful - definitely saving this post for my Iceland trip next month.",
      timeAgo: "23h",
      replies: 2
    },
    {
      id: 2,
      author: "u/IcelandTraveler",
      content: "Jökulsárlón is an incredible location! I was there last winter but unfortunately didn't see any aurora activity. Your photo makes me want to go back immediately. Thanks for sharing the detailed tips!",
      timeAgo: "20h",
      replies: 1
    },
    {
      id: 3,
      author: "u/AuroraChaser",
      content: "This is why I love this community. Not only sharing beautiful photos but also the technical details and practical advice. The 15-second exposure worked perfectly here - you captured the movement without too much blur.",
      timeAgo: "18h",
      replies: 0
    },
    {
      id: 4,
      author: "u/NightSkyFan",
      content: "Question about the Aurora app - is it accurate for Iceland specifically? I've heard mixed reviews but your success suggests otherwise!",
      timeAgo: "16h",
      replies: 3
    },
    {
      id: 5,
      author: "u/ColdWeatherPhotog",
      content: "The patience advice is so true! I spent 5 nights in northern Norway and only got one good aurora night. But that one night made the entire trip worth it. Your shot definitely captures that magical feeling.",
      timeAgo: "14h",
      replies: 1
    }
  ];

  return (
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
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex gap-6 p-4">
        {/* Main Content */}
        <main className="flex-1">
          {/* Back Navigation */}
          <div className="mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to posts
              </Button>
            </Link>
          </div>

          {/* Main Post */}
          <Card className="bg-white border border-gray-300 mb-6">
            <div className="flex">
              {/* Voting Section */}
              <div className="w-12 p-3 bg-gray-50 flex flex-col items-center space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1 h-6 w-6 ${userPostVote === 'up' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}
                  onClick={() => handlePostVote('up')}
                >
                  <ChevronUp className="h-5 w-5" />
                </Button>
                <span className={`text-sm font-bold ${userPostVote === 'up' ? 'text-orange-500' : userPostVote === 'down' ? 'text-blue-500' : 'text-gray-700'}`}>
                  {postVotes}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1 h-6 w-6 ${userPostVote === 'down' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
                  onClick={() => handlePostVote('down')}
                >
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </div>

              {/* Post Content */}
              <div className="flex-1 p-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span className="font-semibold">{post.subreddit}</span>
                  <span>•</span>
                  <span>Posted by {post.author}</span>
                  <span>•</span>
                  <span>{post.timeAgo} ago</span>
                  {post.awards > 0 && (
                    <>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span>{post.awards}</span>
                      </div>
                    </>
                  )}
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full max-w-2xl h-auto rounded-lg mb-4"
                />

                <div className="prose prose-gray max-w-none mb-4">
                  {post.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center space-x-4 text-gray-500 border-t border-gray-200 pt-3">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {post.comments} Comments
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100">
                    <Award className="mr-2 h-4 w-4" />
                    Give Award
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Comment Input */}
          <Card className="bg-white border border-gray-300 mb-6">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="What are your thoughts?"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-24 border-gray-300 resize-none"
                  />
                  <div className="flex justify-end mt-2">
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={!newComment.trim()}
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments */}
          <div className="space-y-1">
            {comments.map((comment) => (
              <Card key={comment.id} className="bg-white border-l-4 border-l-transparent hover:border-l-blue-500 transition-colors">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Comment Voting */}
                    <div className="w-10 p-2 flex flex-col items-center space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-0 h-4 w-4 ${userCommentVotes[comment.id] === 'up' ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}
                        onClick={() => handleCommentVote(comment.id, 'up')}
                      >
                        <ChevronUp className="h-3 w-3" />
                      </Button>
                      <span className={`text-xs font-bold ${userCommentVotes[comment.id] === 'up' ? 'text-orange-500' : userCommentVotes[comment.id] === 'down' ? 'text-blue-500' : 'text-gray-600'}`}>
                        {commentVotes[comment.id]}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-0 h-4 w-4 ${userCommentVotes[comment.id] === 'down' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
                        onClick={() => handleCommentVote(comment.id, 'down')}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Comment Content */}
                    <div className="flex-1 p-3">
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                        <span className="font-semibold text-gray-700">{comment.author}</span>
                        <span>•</span>
                        <span>{comment.timeAgo}</span>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                        {comment.content}
                      </p>
                      
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1 h-auto">
                          <Reply className="mr-1 h-3 w-3" />
                          Reply
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1 h-auto">
                          <Share className="mr-1 h-3 w-3" />
                          Share
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100 p-1 h-auto">
                          <Award className="mr-1 h-3 w-3" />
                          Award
                        </Button>
                        {comment.replies > 0 && (
                          <span className="text-blue-600 cursor-pointer hover:underline">
                            {comment.replies} more {comment.replies === 1 ? 'reply' : 'replies'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-80 space-y-4">
          <Card className="bg-white border border-gray-300">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">r/EarthPorn</h3>
              <p className="text-sm text-gray-600 mb-4">
                The internet's largest community of landscape photographers and nature lovers.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center text-sm mb-4">
                <div>
                  <div className="font-semibold text-gray-900">22.1M</div>
                  <div className="text-gray-500">Members</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">45.2k</div>
                  <div className="text-gray-500">Online</div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Join Community
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-300">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Community Rules</h3>
              <div className="space-y-2 text-sm">
                <div>1. Original content only [OC]</div>
                <div>2. Include resolution in title</div>
                <div>3. No man-made objects</div>
                <div>4. Landscapes and seascapes only</div>
                <div>5. No HDR or over-processing</div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default TripDetail;