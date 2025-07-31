import Green from "./bannercolorcomponents/green";
import Orange from "./bannercolorcomponents/orange";
import EvaluateCard from "./EvaluateCard";
import assets from "@/assets";

const features = [
    {
        title: "Stock Price Calculator",
        description: "Know what a stock is really worth.",
        points: [
            "Enter your own growth, margin, and valuation assumptions",
            "Instantly see a fair value estimate",
            "Compare with Wall Street analyst price targets",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Instant Analyzer",
        description: "1-click fundamental analysis.",
        points: [
            "Select the metrics that matter to you (like P/E, revenue growth, ROE)",
            'Get an instant "pass/fail" report based on your custom filters',
            "Perfect for quick due diligence",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Stock Charts + Technical Tools",
        description: "Analyze price action like a technician.",
        points: [
            "Clean, responsive charts",
            "Add moving averages, RSI, MACD, Bollinger Bands, and more",
            "Spot trends and entry points with confidence",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Financials Dashboard",
        description: "Make sense of the numbers without spreadsheets.",
        points: [
            "Visualized trends in revenue, profits, margins, and cash flow",
            "Drill into full income statement, balance sheet, and cash flow",
            "5+ years of historical data",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Stock Screener",
        description: "Find winning stocks faster.",
        points: [
            "Filter by valuation, growth, profitability, and more",
            "Save your custom screens",
            "Surface hidden gems that match your strategy",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Insider Trading Tracker",
        description: "Follow the smart money.",
        points: [
            "See when executives and large holders are buying or selling",
            "Get context on the size, timing, and frequency of insider trades",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Earnings Calendar & Transcripts",
        description: "Never miss a catalyst.",
        points: [
            "Track upcoming earnings dates",
            "Instantly access earnings transcripts to see what really moved the stock",
        ],
        imageUrl: assets.image.heroImg,
    },
    {
        title: "Options Chain & Greeks",
        description: "Everything an options trader needs.",
        points: [
            "Real-time and historical options chains",
            "View Greeks, IV, open interest, and volume",
            "Filter by expiry, strike, and strategy",
        ],
        imageUrl: assets.image.heroImg,
    },
];

export default function Evaluate() {
    return (
        <section className="relative">
            <Green className="absolute top-[503px] right-[-99px] z-[1]" />
            <Green className="absolute top-[1308px] right-[-99px] z-[1]" />
            <Green className="absolute top-[2197px] right-[-99px] z-[1]" />
            <Orange className="absolute top-[1704px] left-[-130px] z-[1]" />
            <Orange className="absolute top-[884px] left-[-130px] z-[1]" />
            <div className="relative z-[2]">
                <h3 className="justify-start text-Base-black-500 text-3xl font-bold font-Inter leading-10 text-center">Everything You Need to Evaluate Stocks Like a Pro</h3>
                <p className="self-stretch text-center justify-start text-Base-black-500 text-lg font-normal font-Inter leading-snug max-w-[782px] mx-auto mt-[8px] mb-[80px]">From valuation models to financial statements — access the tools trusted by serious investors, all in one place.</p>
                <div className="self-stretch inline-flex flex-col justify-center items-start gap-14 w-full">
                    {features.map((feature, index) => (
                        <EvaluateCard
                            key={index}
                            index={index + 1}
                            title={feature.title}
                            description={feature.description}
                            points={feature.points}
                            imageUrl={"put you image here"}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}