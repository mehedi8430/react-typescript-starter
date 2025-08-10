import BookingsCard from '@/components/Home/MyBookings/BookingsCard';
import { SlidingDatePicker } from '@/components/Home/SlidingDatePicker';
import { Grid2X2 } from 'lucide-react';

export default function RescheduleBookings() {
    return (
        <div className="space-y-5">
            <div>
                <SlidingDatePicker />
            </div>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium">Reschedule Bookings</h3>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Grid2X2 className="size-6" />
                        <span>View</span>
                    </div>
                    <span>See all</span>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(12)].map((_, index) => (
                    <BookingsCard key={index} status="Reschedule" />
                ))}
            </div>
        </div>
    );
}
