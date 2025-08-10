import PageTitle from '@/components/Home/PageTitle';
import PageTopPanel from '@/components/Home/PageTopPanel';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import UpcomingBookings from './Tabs/UpcomingBookings';
import RescheduleBookings from './Tabs/RescheduleBookings';
import FavoriteBookings from './Tabs/FavoriteBookings';
import RescheduleRequest from './Tabs/RescheduleRequest';
import BookingHistory from './Tabs/BookingHistory';
import CanceledBookings from './Tabs/CanceledBookings';

export default function MyBookings() {
    const [activeTab, setActiveTab] = useState('upcoming');

    const renderContent = () => {
        switch (activeTab) {
            case 'upcoming':
                return <UpcomingBookings />;
            case 'reschedule':
                return <RescheduleBookings />;
            case 'favorite':
                return <FavoriteBookings />;
            case 'history':
                return <BookingHistory />;
            case 'canceled':
                return <CanceledBookings />;
            case 'reschedule-request':
                return <RescheduleRequest />;
            default:
                return <div>Select a tab to view content</div>;
        }
    };

    return (
        <div>
            <PageTopPanel content={<PageTitle title="My Bookings" />} />
            <main className="container mx-auto space-y-10 flex gap-5">
                {/* Left sidebar with buttons */}
                <div className="bg-muted min-h-screen p-5 rounded-2xl space-y-3 w-1/5">
                    <Button
                        variant={activeTab === 'upcoming' ? 'default' : 'secondary'}
                        className={`w-full justify-between `}
                        onClick={() => setActiveTab('upcoming')}
                    >
                        Upcoming Bookings <ChevronRight className="size-4" />
                    </Button>

                    <Button
                        variant={activeTab === 'reschedule' ? 'default' : 'secondary'}
                        className={`w-full justify-between `}
                        onClick={() => setActiveTab('reschedule')}
                    >
                        Reschedule Bookings <ChevronRight className="size-4" />
                    </Button>

                    <Button
                        variant={activeTab === 'favorite' ? 'default' : 'secondary'}
                        className={`w-full justify-between `}
                        onClick={() => setActiveTab('favorite')}
                    >
                        Favorite Bookings <ChevronRight className="size-4" />
                    </Button>

                    <Button
                        variant={activeTab === 'history' ? 'default' : 'secondary'}
                        className={`w-full justify-between `}
                        onClick={() => setActiveTab('history')}
                    >
                        Booking History <ChevronRight className="size-4" />
                    </Button>

                    <Button
                        variant={activeTab === 'canceled' ? 'default' : 'secondary'}
                        className={`w-full justify-between `}
                        onClick={() => setActiveTab('canceled')}
                    >
                        Canceled <ChevronRight className="size-4" />
                    </Button>

                    <Button
                        variant={activeTab === 'reschedule-request' ? 'default' : 'secondary'}
                        className={`w-full justify-between `}
                        onClick={() => setActiveTab('reschedule-request')}
                    >
                        Reschedule Request List <ChevronRight className="size-4" />
                    </Button>
                </div>

                {/* Right content area */}
                <div className="w-4/5">{renderContent()}</div>
            </main>
        </div>
    );
}
