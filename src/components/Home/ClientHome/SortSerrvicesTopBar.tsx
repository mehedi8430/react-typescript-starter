import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Grid2x2 } from 'lucide-react';

export default function SortSerrvicesTopBar() {
    return (
        <div className="bg-muted rounded-2xl py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">All Services</h1>
            <div className="flex items-center gap-4">
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a">A</SelectItem>
                        <SelectItem value="b">B</SelectItem>
                        <SelectItem value="c">C</SelectItem>
                        <SelectItem value="d">D</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                    <Grid2x2 className="size-6" />
                    <span>View</span>
                </div>
            </div>
        </div>
    );
}
