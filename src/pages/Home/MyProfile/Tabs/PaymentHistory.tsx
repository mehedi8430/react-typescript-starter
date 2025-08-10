import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const paymentHistory = [
    {
        orderName: 'Virtual Business Coaching',
        date: 'Mar 1, 2023',
        amount: '$100',
        paymentMethod: 'Card Payment',
        status: 'Success',
    },
    {
        orderName: 'Virtual Business Coaching',
        date: 'Jan 26, 2023',
        amount: '$300',
        paymentMethod: 'Card Payment',
        status: 'Success',
    },
    {
        orderName: 'Virtual Business Coaching',
        date: 'Feb 12, 2033',
        amount: '$100',
        paymentMethod: 'Card Payment',
        status: 'Success',
    },
    {
        orderName: 'Virtual Business Coaching',
        date: 'Feb 12, 2033',
        amount: '$500',
        paymentMethod: 'Card Payment',
        status: 'Success',
    },
    {
        orderName: 'Virtual Business Coaching',
        date: 'Feb 28, 2033',
        amount: '$500',
        paymentMethod: 'Card Payment',
        status: 'Rejected',
    },
    {
        orderName: 'Virtual Business Coaching',
        date: 'March 13, 2033',
        amount: '$100',
        paymentMethod: 'Card Payment',
        status: 'Success',
    },
    {
        orderName: 'Virtual Business Coaching',
        date: 'March 18, 2033',
        amount: '$100',
        paymentMethod: 'Card Payment',
        status: 'Pending',
    },
];

export function PaymentHistory() {
    return (
        <div className="space-y-4">
            <div className="text-2xl font-semibold bg-muted p-4 rounded-2xl">Payment History</div>
            <div className="shadow-[0_0_20px_0_rgba(0,0,0,0.1)] hover:shadow-[0_1px_10px_0_rgba(0,0,0,0.25)] dark:shadow-[0_0px_15px_0_var(--primary)]/30 p-4 rounded-2xl">
                <Table className=" ">
                    <TableCaption>A list of your recent payments.</TableCaption>
                    <TableHeader className="">
                        <TableRow className="h-16">
                            <TableHead className="w-[200px]">Order Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Payment method</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paymentHistory.map((payment, index) => (
                            <TableRow key={index} className="h-16">
                                <TableCell className="font-medium">{payment.orderName}</TableCell>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>{payment.amount}</TableCell>
                                <TableCell>{payment.paymentMethod}</TableCell>
                                <TableCell className="text-right">
                                    <Badge
                                        variant={
                                            payment.status === 'Success'
                                                ? 'success'
                                                : payment.status === 'Rejected'
                                                ? 'destructive'
                                                : 'secondary'
                                        }
                                    >
                                        {payment.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
