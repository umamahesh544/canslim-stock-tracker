import { TradingViewMarketOverview } from '../components/TradingViewMarketOverview';
import { Layout } from '../components/Layout';

const TOP_20_growth_STOCKS = [
    "HAL", "BEL", "TRENT", "BSE", "COALINDIA",
    "MAZDOCK", "COCHINSHIP", "FACT", "IRFC", "RVNL",
    "TATAPOWER", "ADANIPORTS", "RECLTD", "PFC", "INDIGO",
    "ZOMATO", "DLF", "PRESTIGE", "TATACOMM", "LODHA"
];

export const TodaysCanslim = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Today's Top 20 Candidates</h2>
                    <p className="text-muted-foreground">Curated list of High-Momentum & EPS Growth Leaders (Active Watchlist).</p>
                    <div className="mt-2 text-xs text-green-400 bg-green-400/10 p-2 rounded border border-green-400/20 inline-block">
                        ✅ <b>Live Data Source:</b> Tracking active price action for top growth contenders.
                    </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <TradingViewMarketOverview symbols={TOP_20_growth_STOCKS} title="Growth Leaders" />
                </div>
            </div>
        </Layout>
    );
};
