import { useState } from 'react';
import PageTitle from '@/components/Home/PageTitle';
import PageTopPanel from '@/components/Home/PageTopPanel';
import { Star } from 'lucide-react';
import ServiceCard from '@/components/Home/Cards/ServiceCard';
import { Button } from '@/components/ui/button';
import ReviewCard from '@/components/Dashboard/Cards/ReviewCard';
import { Textarea } from '@/components/ui/textarea';
import ProviderDetail from '@/components/Home/ProviderDetail';

export default function ProviderProfile() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div>
            <PageTopPanel content={<PageTitle title="Provider Profile" />} />
            <main className="container mx-auto">
                <ProviderDetail />
                <div className="py-10">
                    <div className="flex items-center justify-between py-5">
                        <h1 className="text-2xl font-bold">Available Services</h1>
                        <Button variant={'ghost'}>See All</Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[...Array(4)].map((_, index) => (
                            <ServiceCard key={index} />
                        ))}
                    </div>
                </div>

                <div className="py-10">
                    <div className="flex items-center justify-between py-5">
                        <h1 className="text-2xl font-bold">Reviews (120)</h1>
                        <Button variant={'ghost'}>See All</Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(9)].map((_, index) => (
                            <ReviewCard key={index} />
                        ))}
                    </div>
                </div>

                <div className="py-10">
                    <div className="flex items-center justify-between py-5">
                        <h1 className="text-2xl font-bold">Leave a Review :</h1>
                        <div className="flex gap-2">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHoverRating(starValue)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="focus:outline-none cursor-pointer"
                                    >
                                        <Star
                                            className={`size-7 ${
                                                (hoverRating || rating) >= starValue
                                                    ? 'text-yellow-500 fill-yellow-500'
                                                    : 'text-muted-foreground'
                                            }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <Textarea
                            placeholder="Write your review here..."
                            className="h-[350px] border-0 bg-muted"
                        />
                    </div>
                    <div className="">
                        <Button className="mt-5 !px-10 rounded-full">Submit</Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
