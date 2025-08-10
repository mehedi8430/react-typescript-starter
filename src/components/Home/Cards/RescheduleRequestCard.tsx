import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, X } from 'lucide-react';

export default function RescheduleRequestCard() {
    return (
        <div className="space-y-3 bg-muted p-4 rounded-2xl flex flex-col">
            <Button
                variant="outline"
                size={'icon'}
                className="size-6 text-primary border-2 self-end"
            >
                <X className="size-4" />
            </Button>
            <div className="flex items-center justify-between">
                <span>March 10, 2025</span>
                <Badge variant={'default'} className="py-2 px-4 border-0">
                    Reschedule
                </Badge>
            </div>
            <h1 className="text-2xl font-medium ">Booking Name Here</h1>
            <Button variant={'default'} className="rounded-full">
                Approve
                <ChevronRightIcon className="size-5 ml-2" />
            </Button>
        </div>
    );
}
