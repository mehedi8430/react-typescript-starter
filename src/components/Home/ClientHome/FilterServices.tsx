import { useState, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Search, Settings2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function FilterServices() {
    const categories = [
        'All Services',
        'Kids & Childcare',
        'Professional Services',
        'Spiritual & Wellness',
        'Logistics & Errands',
        'Photography & Media',
        'Home Rental & Hosting',
        'Fitness & Health',
        'Beauty & Wellness',
        'Events & Entertainment',
    ];

    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
    const [minPrice, setMinPrice] = useState<string>('0');
    const [maxPrice, setMaxPrice] = useState<string>('100');
    const MAX_PRICE = 1000; // Set your maximum price limit

    // Sync slider with input fields
    useEffect(() => {
        setMinPrice(priceRange[0].toString());
        setMaxPrice(priceRange[1].toString());
    }, [priceRange]);

    // Handle input changes with validation
    const handleInputChange = (type: 'min' | 'max', value: string) => {
        const numValue = parseInt(value) || 0;
        const clampedValue = Math.min(Math.max(numValue, 0), MAX_PRICE);

        if (type === 'min') {
            setMinPrice(clampedValue.toString());
            setPriceRange([clampedValue, Math.max(clampedValue, priceRange[1])]);
        } else {
            setMaxPrice(clampedValue.toString());
            setPriceRange([Math.min(clampedValue, priceRange[0]), clampedValue]);
        }
    };

    // Handle increment/decrement
    const handleStep = (type: 'min' | 'max', direction: 'up' | 'down') => {
        const current = type === 'min' ? parseInt(minPrice) : parseInt(maxPrice);
        const newValue = direction === 'up' ? current + 10 : current - 10;
        const clampedValue = Math.min(Math.max(newValue, 0), MAX_PRICE);

        if (type === 'min') {
            setMinPrice(clampedValue.toString());
            setPriceRange([clampedValue, Math.max(clampedValue, priceRange[1])]);
        } else {
            setMaxPrice(clampedValue.toString());
            setPriceRange([Math.min(clampedValue, priceRange[0]), clampedValue]);
        }
    };

    return (
        <div className="bg-muted rounded-2xl w-full my-4 min-h-screen">
            <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-xl font-semibold">Filter</h2>
                <Settings2 className="size-5" />
            </div>

            <div className="flex flex-col gap-6 px-6 py-4">
                {/* Category Section */}
                <div>
                    <span className="font-medium">Category</span>
                    <div className="space-y-3 mt-2">
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Checkbox id={category.replace(/\s+/g, '-').toLowerCase()} />
                                <Label htmlFor={category.replace(/\s+/g, '-').toLowerCase()}>
                                    {category}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Enhanced Price Range Section */}
                <div>
                    <span className="font-medium">Price Range</span>
                    <div className="flex items-center justify-between mt-2 mb-4">
                        <Label htmlFor="minPrice" className="text-muted-foreground">
                            Min
                        </Label>
                        <Label htmlFor="maxPrice" className="text-muted-foreground">
                            Max
                        </Label>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative w-full">
                            <Input
                                id="minPrice"
                                value={minPrice}
                                onChange={e => handleInputChange('min', e.target.value)}
                                type="number"
                                className="w-full pl-10 pr-4"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex bg-muted border-r rounded-r-2xl flex-col space-y-[2px] border-l">
                                <Button
                                    variant="outline"
                                    className="size-4 !px-5 !rounded-none !rounded-tr-xl border-0 border-r bg-muted"
                                    size="icon"
                                    disabled={minPrice === MAX_PRICE.toString()}
                                    onClick={() => handleStep('min', 'up')}
                                >
                                    <ChevronUp className="h-3 w-3" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    disabled={minPrice === '0'}
                                    className=" size-4 !px-5 !rounded-none !rounded-br-xl border-0 border-r  bg-muted"
                                    onClick={() => handleStep('min', 'down')}
                                >
                                    <ChevronDown className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <Input
                                id="maxPrice"
                                value={maxPrice}
                                onChange={e => handleInputChange('max', e.target.value)}
                                type="number"
                                className="w-full pl-10 pr-4"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex bg-muted border-r rounded-r-2xl flex-col space-y-[2px] border-l">
                                <Button
                                    variant="outline"
                                    className={`size-4 !px-5 !rounded-none !rounded-tr-xl border-0  bg-muted`}
                                    size="icon"
                                    disabled={maxPrice === MAX_PRICE.toString()}
                                    onClick={() => handleStep('max', 'up')}
                                >
                                    <ChevronUp className="h-3 w-3" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    disabled={maxPrice === '0'}
                                    className=" size-4 !px-5 !rounded-none !rounded-br-xl border-0  bg-muted"
                                    onClick={() => handleStep('max', 'down')}
                                >
                                    <ChevronDown className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ZIP Code Section */}

                <div className="flex items-center gap-3">
                    <Input id="zipCode" placeholder="ZIP code" />
                    <Button className="rounded-2xl" size="icon">
                        <Search className="size-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
