import PageTopPanel from '@/components/Home/PageTopPanel';
import Love from '@/assets/svgs/love.svg?react';
import Clock from '@/assets/svgs/alermClock.svg?react';
import Calender from '@/assets/svgs/calender.svg?react';
import FilterServices from '@/components/Home/ClientHome/FilterServices';
import SortSerrvicesTopBar from '@/components/Home/ClientHome/SortSerrvicesTopBar';
import ServiceCard from '@/components/Home/Cards/ServiceCard';
export default function ClientHome() {
    return (
        <div>
            <PageTopPanel
                content={
                    <div className="flex gap-5">
                        <div className="flex items-center gap-4 border border-primary py-2 px-4 rounded-xl bg-background/20 backdrop-blur-sm">
                            <Love className="size-10" />
                            <h2 className="text-2xl font-medium">
                                Favorite <br /> Bookings
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 border border-primary py-2 px-4 rounded-xl bg-background/20 backdrop-blur-sm">
                            <Clock className="size-10" />
                            <h2 className="text-2xl font-medium">
                                Favorite <br /> Bookings
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 border border-primary py-2 px-4 rounded-xl bg-background/20 backdrop-blur-sm">
                            <Calender className="size-10" />
                            <h2 className="text-2xl font-medium">
                                Favorite <br /> Bookings
                            </h2>
                        </div>
                    </div>
                }
            />

            <div className="container mx-auto">
                <SortSerrvicesTopBar />
                <div className="flex gap-4">
                    <div className="w-1/4">
                        <FilterServices />
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-4 py-4">
                        {[...Array(9)].map((_, index) => (
                            <ServiceCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
