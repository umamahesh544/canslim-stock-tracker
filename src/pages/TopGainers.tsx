import { TradingViewScreener } from '../components/TradingViewScreener';
import { Layout } from '../components/Layout';

export const TopGainers = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Today's Top Gainers</h2>
                    <p className="text-muted-foreground">Stocks with High Momentum. Target: Market Cap 500Cr - 1000Cr.</p>

                    <div className="mt-2 text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded border border-yellow-400/20 inline-block">
                        💡 <b>Pro Tip:</b> In the widget below, click "Filters" → Set <b>Market Cap</b> to 500M - 1B to match your criteria perfectly.
                    </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <TradingViewScreener defaultScreen="top_gainers" sort="change|desc" />
                </div>
            </div>
        </Layout>
    );
};
