import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Users, Star, CheckCircle, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  trip: {
    id: number;
    title: string;
    price: string;
    duration: string;
    spotsLeft: number;
    totalSpots: number;
    startDate: string;
    author: string;
    image: string;
  };
  children: React.ReactNode;
}

const BookingModal = ({ trip, children }: BookingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [travelers, setTravelers] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleBooking = () => {
    if (!firstName || !lastName || !email || !selectedDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setStep(3);
    toast({
      title: "Booking Request Sent! 🎉",
      description: "The travel agent will contact you within 24 hours to confirm your booking.",
    });
  };

  const resetForm = () => {
    setStep(1);
    setSelectedDate(undefined);
    setTravelers(1);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSpecialRequests("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) resetForm();
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Book Your Trip</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            {/* Trip Summary */}
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{trip.title}</h3>
                    <div className="text-sm text-gray-600 mt-1">
                      <div>Duration: {trip.duration}</div>
                      <div>Starts: {trip.startDate}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="font-semibold text-blue-600">{trip.price}</span>
                        <span>•</span>
                        <span className="text-orange-600">{trip.spotsLeft} spots left</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date and Travelers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                  Preferred Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="travelers" className="text-sm font-medium text-gray-700">
                  Number of Travelers
                </Label>
                <Select value={travelers.toString()} onValueChange={(value) => setTravelers(parseInt(value))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'traveler' : 'travelers'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 text-white">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="requests" className="text-sm font-medium text-gray-700">
                  Special Requests or Questions
                </Label>
                <Textarea
                  id="requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="mt-1"
                  rows={3}
                  placeholder="Any dietary restrictions, accessibility needs, or questions about the trip..."
                />
              </div>
            </div>

            {/* Booking Summary */}
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Trip:</span>
                    <span className="font-medium">{trip.title.substring(0, 40)}...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{selectedDate ? format(selectedDate, "PPP") : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span>{travelers}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-base pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-blue-600">{trip.price} x {travelers}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700 text-white">
                Send Booking Request
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Request Sent!</h3>
              <p className="text-gray-600">
                {trip.author} will review your request and contact you at {email} within 24 hours to confirm your booking and provide payment details.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Check your email for a confirmation message</li>
                <li>• The travel agent will contact you to discuss details</li>
                <li>• Payment and final booking will be arranged directly</li>
                <li>• You'll receive a detailed itinerary once confirmed</li>
              </ul>
            </div>

            <Button onClick={() => setIsOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;