import avatarImage from '@/assets/images/avatar.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
export default function BookingsCard({ status }: { status: string }) {
    return (
        <div className="shadow-[0_0_20px_0_rgba(0,0,0,0.1)] hover:shadow-[0_1px_10px_0_rgba(0,0,0,0.25)] dark:shadow-[0_0px_15px_0_var(--primary)]/30 rounded-2xl p-5 space-y-5 relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-[70%] bg-primary"></div>
            <div className="border-b-2 border-secondary">
                <h1 className="text-2xl font-medium">Virtual Business Coaching</h1>
            </div>
            <div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={avatarImage} alt="" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="text-xl font-medium">John Doe</h1>
                    </div>
                    <span
                        className={`font-medium ${
                            status === 'Upcoming'
                                ? 'text-green-400'
                                : status === 'Reschedule'
                                ? 'text-yellow-400'
                                : ''
                        }`}
                    >
                        {status}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="size-5" />
                <span className="text-sm">Tue July 20</span>
            </div>
            <div className="flex gap-2">
                <Button variant="secondary" className="flex-1 rounded-full">
                    Cancel
                </Button>
                <Button variant="secondary" className="flex-1 rounded-full">
                    Reschedule
                </Button>
            </div>
        </div>
    );
}
