import { TradingViewScreener } from '../components/TradingViewScreener';
import { Layout } from '../components/Layout';

export const TodaysCanslim = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Top 20 CANSLIM Candidates</h2>
                    <p className="text-muted-foreground">High-growth stocks with strong earnings and technical momentum (Market Cap 500-1000Cr).</p>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <TradingViewScreener
                        defaultScreen="general"
                        sort="change|desc"
                        filters={{
                            // Attempting to apply Market Cap filter: 500Cr (5B INR) - 1000Cr (10B INR)
                            // Note: Widget API support for custom numeric ranges on free embeds is limited/undocumented.
                            // If this fails, user must use the blue Filter button.
                            "market_cap_basic": { "left": 5000000000, "right": 10000000000 }
                        }}
                    />
                </div>
            </div>
        </Layout>
    );
};
