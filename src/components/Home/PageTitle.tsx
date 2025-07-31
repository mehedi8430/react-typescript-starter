export default function PageTitle({ title }: { title: string }) {
    return (
        <div className="text-2xl font-semibold border border-primary py-2 px-4 rounded-xl bg-background/20 backdrop-blur-sm">
            {title}
        </div>
    );
}
