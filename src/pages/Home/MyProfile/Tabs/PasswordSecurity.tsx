'use client';

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
import { toast } from 'sonner';

const passwordFormSchema = z
    .object({
        oldPassword: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
        newPassword: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
        confirmPassword: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
    })
    .refine(data => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

export function PasswordSecurity() {
    const form = useForm<z.infer<typeof passwordFormSchema>>({
        resolver: zodResolver(passwordFormSchema),
        defaultValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
    });

    function onSubmit(values: z.infer<typeof passwordFormSchema>) {
        console.log('Password changed with values:', values);
        toast.success('Your password has been changed successfully.');
        form.reset();
    }

    return (
        <div className="space-y-8 mx-auto p-6">
            <div className="text-2xl font-semibold bg-muted p-4 rounded-2xl">Password/Security</div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Old Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex space-x-4 pt-4">
                        <Button
                            variant="outline"
                            type="button"
                            className="rounded-full px-16"
                            onClick={() => form.reset()}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" className="rounded-full px-16">
                            Save Change
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
