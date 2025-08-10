import RescheduleRequestCard from '@/components/Home/Cards/RescheduleRequestCard';
import { Grid2X2 } from 'lucide-react';

export default function RescheduleRequest() {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between bg-muted px-4 py-3 rounded-2xl">
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
                    <RescheduleRequestCard key={index} />
                ))}
            </div>
        </div>
    );
}
