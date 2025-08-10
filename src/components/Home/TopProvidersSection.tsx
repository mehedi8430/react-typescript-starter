import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Star } from 'lucide-react';

const providers = [
    {
        id: 1,
        name: 'Mitchel Luo',
        title: 'Manager, Softvence',
        serviceType: 'Health',
        description:
            'Lorem ipsum dolor sit amet consectetur. Ipsum commodo etiam massa lectus est vitae ante donec at.',
        avatar: 'https://picsum.photos/80/80?random=1',
        rating: 5,
    },
    {
        id: 2,
        name: 'Mitchel Luo',
        title: 'Manager, Softvence',
        serviceType: 'Health',
        description:
            'Lorem ipsum dolor sit amet consectetur. Ipsum commodo etiam massa lectus est vitae ante donec at.',
        avatar: 'https://picsum.photos/80/80?random=2',
        rating: 4,
    },
    {
        id: 3,
        name: 'Mitchel Luo',
        title: 'Manager, Softvence',
        serviceType: 'Health',
        description:
            'Lorem ipsum dolor sit amet consectetur. Ipsum commodo etiam massa lectus est vitae ante donec at.',
        avatar: 'https://picsum.photos/80/80?random=3',
        rating: 3,
    },
    {
        id: 4,
        name: 'Sarah Johnson',
        title: 'Senior Consultant, TechCorp',
        serviceType: 'Technology',
        description:
            'Lorem ipsum dolor sit amet consectetur. Ipsum commodo etiam massa lectus est vitae ante donec at.',
        avatar: 'https://picsum.photos/80/80?random=4',
        rating: 2,
    },
    {
        id: 5,
        name: 'David Chen',
        title: 'Lead Developer, InnovateLab',
        serviceType: 'Development',
        description:
            'Lorem ipsum dolor sit amet consectetur. Ipsum commodo etiam massa lectus est vitae ante donec at.',
        avatar: 'https://picsum.photos/80/80?random=5',
        rating: 1,
    },
];

export function TopProvidersSection() {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Star
                key={index}
                className={`size-6 ${
                    index < rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`}
            />
        ));
    };

    return (
        <section className="container mx-auto my-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8 ">Top Rated Providers</h2>
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-full max-w-7xl mx-auto relative "
            >
                <CarouselContent className="-ml-2 md:-ml-4 p-3 select-none">
                    {providers.map(provider => (
                        <CarouselItem
                            key={provider.id}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <Card className="h-full border-0   shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-md transition-shadow duration-200 dark:shadow-[0_0px_10px_0_var(--primary)]/50">
                                <CardContent className="p-6 flex flex-col h-full">
                                    {/* Avatar */}
                                    <div className="flex justify-between items-start mb-4">
                                        <Avatar className="w-16 h-16">
                                            <AvatarImage
                                                src={provider.avatar}
                                                alt={provider.name}
                                            />
                                            <AvatarFallback className="">
                                                {provider.name
                                                    .split(' ')
                                                    .map(n => n[0])
                                                    .join('')}
                                            </AvatarFallback>
                                        </Avatar>

                                        {/* Rating and Service Type */}
                                        <div className="flex flex-col items-end justify-center mb-3">
                                            <div className="flex items-center gap-1 mr-2">
                                                {renderStars(provider.rating)}
                                            </div>
                                            <span className="text-muted-foreground ">
                                                <span className="text-primary text-lg">
                                                    Service Type:
                                                </span>
                                                <span className=" font-medium text-lg">
                                                    {provider.serviceType}
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg text-muted-foreground mb-4 flex-grow leading-relaxed">
                                        {provider.description}
                                    </p>

                                    {/* Provider Info */}
                                    <div className="text-muted-foreground">
                                        <h3 className="font-semibold text-xl  mb-1">
                                            {provider.name}
                                        </h3>
                                        <p className="text-lg ">{provider.title}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="!absolute left-0 md:-left-12  ">
                    <ArrowLeft className="size-8" />
                </CarouselPrevious>
                <CarouselNext className="!absolute right-0 md:-right-12 ">
                    <ArrowLeft className="size-8 rotate-180" />
                </CarouselNext>
            </Carousel>
        </section>
    );
}
