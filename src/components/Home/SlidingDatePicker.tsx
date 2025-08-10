import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface DateItem {
    day: string;
    date: number;
    month: string;
    fullDate: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
}

export function SlidingDatePicker({ onDateSelect }: { onDateSelect?: (date: Date) => void }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Generate dates for multiple days
    const generateDates = (daysToShow = 30): DateItem[] => {
        const dates: DateItem[] = [];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];

        // Start from 3 days before today for better navigation
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 3);

        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const isCurrentMonth =
                date.getMonth() === currentMonth && date.getFullYear() === currentYear;
            const isToday = date.toDateString() === today.toDateString();

            dates.push({
                day: days[date.getDay()],
                date: date.getDate(),
                month: months[date.getMonth()],
                fullDate: date,
                isCurrentMonth,
                isToday,
            });
        }

        return dates;
    };

    const dates = generateDates();

    const isSameDate = (date1: Date, date2: Date) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        onDateSelect?.(date);
    };

    return (
        <div className="space-y-2 w-full">
            <h3 className="text-sm font-medium">Select Date:</h3>
            <Carousel
                opts={{
                    align: 'start',
                    dragFree: true,
                }}
                className="w-full relative"
            >
                <CarouselContent className="-ml-1">
                    {dates.map((item, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/14 select-none">
                            <Button
                                variant="ghost"
                                className={`
                                    flex flex-col items-center rounded-2xl justify-center h-16 w-11 p-0
                                    ${!item.isCurrentMonth ? 'opacity-75' : ''}
                                    ${
                                        isSameDate(selectedDate, item.fullDate)
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:bg-primary/5'
                                    }
                                    ${
                                        item.isToday && !isSameDate(selectedDate, item.fullDate)
                                            ? 'border border-primary/20'
                                            : ''
                                    }
                                `}
                                onClick={() => handleDateSelect(item.fullDate)}
                            >
                                <span className="text-xs font-medium">{item.day}</span>
                                <span
                                    className={`
                                    text-sm font-medium mt-1 flex items-center justify-center w-7 h-7
                                    ${
                                        isSameDate(selectedDate, item.fullDate)
                                            ? 'bg-primary text-primary-foreground rounded-full'
                                            : ''
                                    }
                                    ${item.isToday ? 'text-primary' : ''}
                                `}
                                >
                                    {item.date}
                                </span>
                                {/* {!item.isCurrentMonth && (
                                    <span className="text-[10px] text-muted-foreground mt-1">
                                        {item.month}
                                    </span>
                                )} */}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4">
                    <ArrowLeft className="size-4" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4">
                    <ArrowRight className="size-4" />
                </CarouselNext> */}
            </Carousel>
        </div>
    );
}
