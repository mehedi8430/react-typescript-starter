import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Dot } from 'lucide-react';

export default function DueListCard() {
    return (
        <div className="shadow-[0_0_20px_0_rgba(0,0,0,0.1)] hover:shadow-[0_1px_10px_0_rgba(0,0,0,0.25)] dark:shadow-[0_0px_15px_0_var(--primary)]/30 p-4 rounded-2xl">
            <div className="flex items-start justify-between">
                <div className="space-y-2">
                    <h1 className="font-semibold">Oliver Stone</h1>
                    <span>Invoice ID: #12345</span>
                    <div className="flex items-center gap-2 ">
                        <Clock className="size-5 text-primary" />
                        <span className="text-muted-foreground">March 10, 2025</span>
                        <Dot className="size-5 text-muted-foreground self-start" />
                        <span className="text-muted-foreground">10:45 AM</span>
                    </div>
                    <div>
                        <span className="text-primary">Service: </span>
                        <span className="text-muted-foreground">Virtual Business Coaching</span>
                    </div>
                    <div>
                        <span className="text-primary">Request Amount: </span>
                        <span className="text-muted-foreground">$100</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <Badge variant={'success'} className="py-2 px-4 border-0">
                        Confirmed
                    </Badge>
                    <h2 className="text-lg font-medium">Total Due</h2>
                    <span className="font-semibold text-2xl text-destructive">$129.45</span>
                </div>
            </div>
            <Textarea placeholder="Notes" className="border-0 bg-muted my-3.5" />
            <Button className="w-full"> Pay now</Button>
        </div>
    );
}
