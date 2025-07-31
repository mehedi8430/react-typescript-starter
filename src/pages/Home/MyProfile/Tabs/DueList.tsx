import DueListCard from '@/components/Home/Cards/DueListCard';

export default function DueList() {
    return (
        <div className="space-y-8 mx-auto p-6">
            <div className="text-2xl font-semibold bg-muted p-4 rounded-2xl">Password/Security</div>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                {[...Array(12)].map((_, index) => (
                    <DueListCard key={index} />
                ))}
            </div>
        </div>
    );
}
