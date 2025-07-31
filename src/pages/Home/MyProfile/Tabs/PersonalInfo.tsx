import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: 'First name must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
        message: 'Last name must be at least 2 characters.',
    }),
    userName: z.string().min(3, {
        message: 'Username must be at least 3 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    phoneNumber: z.string().min(10, {
        message: 'Phone number must be at least 10 digits.',
    }),
    location: z.string().min(2, {
        message: 'Please enter a valid location.',
    }),
});

export function PersonalInfo() {
    const [avatar, setAvatar] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            phoneNumber: '',
            location: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form submitted with values:', { ...values, avatar });
        toast.success('Your personal information has been saved.');
    }

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = event => {
                setAvatar(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-8  mx-auto p-6  ">
            <div className="text-2xl font-semibold bg-muted p-4 rounded-2xl">
                Personal Information
            </div>
            <div className="flex justify-center gap-4  items-center space-y-4">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />
                <Avatar className="h-24 w-24 cursor-pointer" onClick={handleAvatarClick}>
                    {avatar ? (
                        <AvatarImage src={avatar} alt="User avatar" />
                    ) : (
                        <AvatarFallback className="text-2xl">U</AvatarFallback>
                    )}
                </Avatar>
                <Button className="rounded-full" onClick={handleAvatarClick}>
                    Upload Image
                </Button>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="eg. Alaa" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="eg. Mohamed" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="userName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>User Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="eg. alaa.mohamed" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Mail className="mr-2 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                                        <Input
                                            placeholder="Your mail..."
                                            {...field}
                                            className="pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Phone className="mr-2 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                                        <Input
                                            placeholder="Your phone number..."
                                            {...field}
                                            className="pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <MapPin className="mr-2 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                                        <Input
                                            placeholder="Your location..."
                                            {...field}
                                            className="pl-10"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex  space-x-4 pt-4">
                        <Button variant="outline" type="button" className="rounded-full px-16">
                            Cancel
                        </Button>
                        <Button type="submit" className="rounded-full px-16">
                            Save
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
