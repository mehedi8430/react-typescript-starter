import { BookingHistoryCard } from '@/components/Dashboard/Cards/BookingHistoryCard';
import type { TBookingItem } from '@/types';
import { Grid2X2 } from 'lucide-react';

export default function BookingHistory() {
    const bookings: TBookingItem[] = [
        {
            id: '1',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Dental Appointment',
            status: 'In-process',
        },
        {
            id: '2',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Fitness Training',
            status: 'Cancel',
        },
        {
            id: '3',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Yoga Class',
            status: 'In-process',
        },
        {
            id: '4',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Therapy Session',
            status: 'Complete',
        },
        {
            id: '5',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Business Meeting',
            status: 'Complete',
        },
        {
            id: '6',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Car Service',
            status: 'In-process',
        },
        {
            id: '7',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Interview Prep',
            status: 'In-process',
        },
        {
            id: '8',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Client Consultation',
            status: 'Cancel',
        },
        {
            id: '9',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Haircut Appointment',
            status: 'In-process',
        },
        {
            id: '10',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Massage Therapy',
            status: 'Complete',
        },
        {
            id: '11',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Eye Check-up',
            status: 'In-process',
        },
        {
            id: '12',
            date: 'Tue July 20',
            time: '8:30 AM',
            name: 'Nutrition Coaching',
            status: 'Complete',
        },
        // Newly added items
        {
            id: '13',
            date: 'Wed July 21',
            time: '10:00 AM',
            name: 'Podcast Recording',
            status: 'In-process',
        },
        {
            id: '14',
            date: 'Wed July 21',
            time: '11:30 AM',
            name: 'Financial Planning',
            status: 'Complete',
        },
        {
            id: '15',
            date: 'Thu July 22',
            time: '2:15 PM',
            name: 'Veterinary Visit',
            status: 'Cancel',
        },
        {
            id: '16',
            date: 'Thu July 22',
            time: '4:45 PM',
            name: 'Dance Class',
            status: 'In-process',
        },
        {
            id: '17',
            date: 'Fri July 23',
            time: '9:00 AM',
            name: 'Coaching Session',
            status: 'Complete',
        },
        {
            id: '18',
            date: 'Fri July 23',
            time: '1:30 PM',
            name: 'Software Demo',
            status: 'In-process',
        },
        {
            id: '19',
            date: 'Sat July 24',
            time: '3:00 PM',
            name: 'House Cleaning',
            status: 'Cancel',
        },
        {
            id: '20',
            date: 'Sun July 25',
            time: '5:30 PM',
            name: 'Dinner Reservation',
            status: 'Complete',
        },
        {
            id: '21',
            date: 'Mon July 26',
            time: '7:00 AM',
            name: 'Morning Run',
            status: 'In-process',
        },
    ];
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
                {bookings.map((booking, index) => (
                    <BookingHistoryCard key={index} payload={booking} />
                ))}
            </div>
        </div>
    );
}
