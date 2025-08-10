import BG from '@/assets/images/ToPanelBg.svg';

export default function PageTopPanel({ content }: { content: React.ReactNode }) {
    return (
        <div
            style={{ backgroundImage: `url(${BG})` }}
            className="bg-cover bg-no-repeat bg-center h-[20vh] relative mb-20"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60  "></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ">
                {content}
            </div>
        </div>
    );
}
