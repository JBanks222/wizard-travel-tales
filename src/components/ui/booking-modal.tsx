import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Clock, Star, ArrowRight, ArrowLeft, Check, X } from "lucide-react";

interface TripDetails {
  title: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  price: string;
  maxParticipants: number;
  currentParticipants: number;
  description: string;
  agentName: string;
  agentRating: number;
  agentReviews: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trip: TripDetails;
}

const BookingModal = ({ isOpen, onClose, trip }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [travelerCount, setTravelerCount] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically send the booking request to the backend
    console.log("Booking submitted:", {
      trip,
      selectedDate,
      travelerCount,
      contactInfo
    });
    onClose();
    setStep(1);
  };

  const totalPrice = parseInt(trip.price.replace(/[^0-9]/g, "")) * travelerCount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-display font-bold text-black">Book Your Trip</h2>
          <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-black">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center p-4 border-b">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? "bg-gold text-black" 
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {step > stepNumber ? <Check className="h-4 w-4" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    step > stepNumber ? "bg-gold" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Trip Selection */}
        {step === 1 && (
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-black mb-4">Select Your Trip Details</h3>
            
            {/* Trip Summary */}
            <Card className="mb-6 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">{trip.title}</CardTitle>
                <CardDescription className="text-gray-600">{trip.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {trip.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {trip.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {trip.startDate} - {trip.endDate}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  {trip.maxParticipants - trip.currentParticipants} spots remaining
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gold">{trip.price}</span>
                  <Badge className="bg-green-100 text-green-800">Travel Agent</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Date and Traveler Selection */}
            <div className="space-y-4">
              <div>
                <Label className="text-gray-700">Preferred Start Date</Label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border-gray-300"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <Label className="text-gray-700">Number of Travelers</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => setTravelerCount(Math.max(1, travelerCount - 1))}
                    className="border-gray-300"
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium">{travelerCount}</span>
                  <Button
                    variant="outline"
                    onClick={() => setTravelerCount(Math.min(trip.maxParticipants - trip.currentParticipants, travelerCount + 1))}
                    className="border-gray-300"
                  >
                    +
                  </Button>
                </div>
              </div>

              {travelerCount > 1 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    Total for {travelerCount} travelers: <span className="font-bold">${totalPrice}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {step === 2 && (
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-black mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <Label className="text-gray-700">Full Name *</Label>
                <Input
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="border-gray-300"
                  required
                />
              </div>
              
              <div>
                <Label className="text-gray-700">Email Address *</Label>
                <Input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  placeholder="Enter your email"
                  className="border-gray-300"
                  required
                />
              </div>
              
              <div>
                <Label className="text-gray-700">Phone Number</Label>
                <Input
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  placeholder="Enter your phone number"
                  className="border-gray-300"
                />
              </div>
              
              <div>
                <Label className="text-gray-700">Special Requests</Label>
                <Textarea
                  value={contactInfo.specialRequests}
                  onChange={(e) => setContactInfo({...contactInfo, specialRequests: e.target.value})}
                  placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                  className="border-gray-300 h-24"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-black mb-4">Confirm Your Booking</h3>
            
            <Card className="mb-6 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Trip:</span>
                  <span className="font-medium">{trip.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers:</span>
                  <span className="font-medium">{travelerCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per person:</span>
                  <span className="font-medium">{trip.price}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-lg font-bold text-gold">${totalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-green-800 mb-2">What happens next?</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Your booking request will be sent to {trip.agentName}</li>
                <li>• You'll receive a confirmation email within 24 hours</li>
                <li>• The travel agent will contact you to finalize details</li>
                <li>• Payment will be processed once confirmed</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t">
          <Button
            variant="outline"
            onClick={step === 1 ? onClose : handleBack}
            className="border-gray-300"
          >
            {step === 1 ? (
              "Cancel"
            ) : (
              <>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </>
            )}
          </Button>
          
          <Button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="bg-gold hover:bg-gold/90 text-black font-medium"
            disabled={step === 1 && (!selectedDate || travelerCount < 1) || 
                     step === 2 && (!contactInfo.name || !contactInfo.email)}
          >
            {step === 3 ? (
              "Confirm Booking"
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal; 