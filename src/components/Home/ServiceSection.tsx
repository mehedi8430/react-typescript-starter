import ServiceCard from './Cards/ServiceCard';
export default function ServiceSection() {
    return (
        <section id="services">
            <div className="container mx-auto">
                <h1 className="text-4xl my-10 text-center">Browse Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                        <ServiceCard key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
