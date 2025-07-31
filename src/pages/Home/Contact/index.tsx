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
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import PageTitle from '@/components/Home/PageTitle';
import PageTopPanel from '@/components/Home/PageTopPanel';
import contactSvgArt from '@/assets/svgs/contactSvgArt.svg';
const formSchema = z.object({
    fullName: z.string().min(2, {
        message: 'Full name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    phone: z
        .string()
        .min(10, {
            message: 'Phone number must be at least 10 digits.',
        })
        .max(15, {
            message: 'Phone number must not exceed 15 digits.',
        }),
    subject: z.string().min(5, {
        message: 'Subject must be at least 5 characters.',
    }),
    issue: z.string().min(10, {
        message: 'Issue description must be at least 10 characters.',
    }),
});

export default function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            issue: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form data:', values);
        toast.success("Thank you for contacting us! We'll get back to you soon.");
        form.reset();
    }

    return (
        <div>
            <PageTopPanel content={<PageTitle title="Contact & Support" />} />
            <main className="container mx-auto space-y-10 flex flex-col gap-5 items-center py-10">
                <div className="w-[50%] mx-auto text-center">
                    <h1 className="text-lg">
                        If you have any issues, feel free to reach out to us using the form below.
                        We'll get back to you via email as soon as possible.
                    </h1>
                </div>
                <div className="flex w-full">
                    <div className=" basis-1/2 p-8 rounded-lg ">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Jordan Smith" {...field} />
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
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="jordansmith@gmail.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="9990000000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Write your subject here..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="issue"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Issue</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Write your issue here..."
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="basis-1/2 flex flex-col items-center justify-center gap-5">
                        <h1 className="text-2xl font-medium">Get In Touch With Us</h1>
                        <p className="mt-2 text-muted-foreground">
                            We’re here to help with any questions or feedback.
                        </p>
                        <img src={contactSvgArt} alt="" className="mt-10" />
                    </div>
                </div>
            </main>
        </div>
    );
}
