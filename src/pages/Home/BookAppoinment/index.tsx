import { SlidingDatePicker } from '@/components/Home/SlidingDatePicker';
import PageTitle from '@/components/Home/PageTitle';
import PageTopPanel from '@/components/Home/PageTopPanel';
import ProviderDetail from '@/components/Home/ProviderDetail';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Calendar, Clock, BadgePercent } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';

export default function BookAppoinment() {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const TimeSlots = [
        { time: '09:00 AM' },
        { time: '10:00 AM' },
        { time: '11:00 AM' },
        { time: '12:00 PM' },
        { time: '01:00 PM' },
        { time: '02:00 PM' },
        { time: '03:00 PM' },
        { time: '04:00 PM' },
        { time: '05:00 PM' },
        { time: '06:00 PM' },
    ];

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const handleConfirmBooking = () => {
        console.log('Booking confirmed for:', selectedDate, selectedTime);
        setShowConfirmation(false);
    };

    const formatDate = (date: Date | null) => {
        if (!date) return 'No date selected';
        /*************  ✨ Windsurf Command ⭐  *************/
        /**
         * Formats a Date object into a human-readable string.
         *
         * If no date is provided, returns the string 'No date selected'.
         *
         * @param {Date | null} date The date object to be formatted.
         * @returns {string} A human-readable string representing the date.
         */
        /*******  5f0a7aa4-e252-4cbd-a4e0-2c4205c438db  *******/ return date.toLocaleDateString(
            'en-US',
            {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }
        );
    };

    // Pricing information
    const sessionPrice = 75;
    const discount = 10; // 10%
    const discountAmount = (sessionPrice * discount) / 100;
    const amountDue = sessionPrice - discountAmount;
    const minimumDeposit = 25;

    return (
        <div>
            <PageTopPanel content={<PageTitle title="Book an Appointment" />} />
            <main className="container mx-auto space-y-10">
                <ProviderDetail />
                <div>
                    <SlidingDatePicker onDateSelect={handleDateSelect} />
                </div>
                <div className="mt-6">
                    <h3 className="text-sm font-medium mb-3">Available Time Slots:</h3>
                    <div className="flex flex-wrap gap-3">
                        {TimeSlots.map((time, index) => (
                            <Button
                                key={index}
                                className={`rounded-full !px-10 ${
                                    selectedTime === time.time
                                        ? 'bg-primary text-primary-foreground'
                                        : ''
                                }`}
                                variant={selectedTime === time.time ? 'default' : 'secondary'}
                                onClick={() => setSelectedTime(time.time)}
                            >
                                {time.time}
                            </Button>
                        ))}
                    </div>
                </div>
                <Separator className="my-6 border-secondary border-1" />
                <div className="mt-8">
                    <Button
                        className="w-1/4 rounded-full flex items-center justify-center"
                        disabled={!selectedTime || !selectedDate}
                        onClick={() => setShowConfirmation(true)}
                    >
                        Confirm
                        <ArrowRight className="ml-2 size-5" />
                    </Button>
                </div>

                {/* Enhanced Confirmation Dialog */}
                <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="text-center">
                                Virtual Business Coaching
                            </DialogTitle>
                        </DialogHeader>

                        {/* Pricing Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">
                                    ${sessionPrice} per session
                                </span>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <BadgePercent className="h-4 w-4 mr-1" />
                                    {discount}% Off
                                </div>
                            </div>

                            <div className="flex justify-between py-2 border-t">
                                <span className="font-medium">Due:</span>
                                <span className="font-semibold">${amountDue.toFixed(2)}</span>
                            </div>

                            {/* Appointment Details */}
                            <div className="space-y-3 pt-4">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">Date</span>
                                    </div>
                                    <span className="font-medium">
                                        {selectedDate ? formatDate(selectedDate) : 'Not selected'}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">Time</span>
                                    </div>
                                    <span className="font-medium">
                                        {selectedTime || 'Not selected'}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 text-sm text-center text-muted-foreground">
                                Minimum Deposit Amount ${minimumDeposit}
                            </div>
                        </div>

                        <DialogFooter className="flex ">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => setShowConfirmation(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleConfirmBooking}
                                className="flex-1 flex items-center"
                            >
                                Confirm Booking
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </main>
        </div>
    );
}
