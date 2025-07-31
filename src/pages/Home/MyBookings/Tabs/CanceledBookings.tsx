import { BookingHistoryCard } from '@/components/Dashboard/Cards/BookingHistoryCard';
import type { TBookingItem } from '@/types';
import { Grid2X2 } from 'lucide-react';

export default function CanceledBookings() {
    const canceledBookings: TBookingItem[] = [
        {
            id: '1',
            date: 'Mon July 19',
            time: '9:00 AM',
            name: 'Dental Checkup',
            status: 'Cancel',
        },
        {
            id: '2',
            date: 'Mon July 19',
            time: '10:30 AM',
            name: 'Gym Session',
            status: 'Cancel',
        },
        {
            id: '3',
            date: 'Tue July 20',
            time: '11:00 AM',
            name: 'Team Meeting',
            status: 'Cancel',
        },
        {
            id: '4',
            date: 'Tue July 20',
            time: '2:15 PM',
            name: 'Job Interview',
            status: 'Cancel',
        },
        {
            id: '5',
            date: 'Wed July 21',
            time: '8:45 AM',
            name: 'Car Maintenance',
            status: 'Cancel',
        },
        {
            id: '6',
            date: 'Wed July 21',
            time: '4:00 PM',
            name: 'Yoga Class',
            status: 'Cancel',
        },
        {
            id: '7',
            date: 'Thu July 22',
            time: '1:30 PM',
            name: 'Therapy Session',
            status: 'Cancel',
        },
        {
            id: '8',
            date: 'Thu July 22',
            time: '3:45 PM',
            name: 'Hair Salon',
            status: 'Cancel',
        },
        {
            id: '9',
            date: 'Fri July 23',
            time: '10:00 AM',
            name: 'Client Call',
            status: 'Cancel',
        },
        {
            id: '10',
            date: 'Fri July 23',
            time: '5:30 PM',
            name: 'Dinner Reservation',
            status: 'Cancel',
        },
        {
            id: '11',
            date: 'Sat July 24',
            time: '9:15 AM',
            name: 'Swimming Lesson',
            status: 'Cancel',
        },
        {
            id: '12',
            date: 'Sat July 24',
            time: '12:00 PM',
            name: 'Photoshoot',
            status: 'Cancel',
        },
        {
            id: '13',
            date: 'Sun July 25',
            time: '11:45 AM',
            name: 'Brunch Plans',
            status: 'Cancel',
        },
        {
            id: '14',
            date: 'Sun July 25',
            time: '6:00 PM',
            name: 'Movie Night',
            status: 'Cancel',
        },
        {
            id: '15',
            date: 'Mon July 26',
            time: '7:30 AM',
            name: 'Morning Run',
            status: 'Cancel',
        },
        {
            id: '16',
            date: 'Mon July 26',
            time: '3:00 PM',
            name: 'Podcast Recording',
            status: 'Cancel',
        },
        {
            id: '17',
            date: 'Tue July 27',
            time: '2:30 PM',
            name: 'Doctor Appointment',
            status: 'Cancel',
        },
        {
            id: '18',
            date: 'Tue July 27',
            time: '7:00 PM',
            name: 'Online Webinar',
            status: 'Cancel',
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
                {canceledBookings.map((booking, index) => (
                    <BookingHistoryCard key={index} payload={booking} />
                ))}
            </div>
        </div>
    );
}
