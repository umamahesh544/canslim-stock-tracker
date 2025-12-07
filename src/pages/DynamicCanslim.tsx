import { Layout } from '../components/Layout';
import { TradingViewScreener } from '../components/TradingViewScreener';
import { TrendingUp } from 'lucide-react';

export const DynamicCanslim = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-6 h-full">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                            Live Dynamic Scanner
                        </h2>
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded border border-green-500/20">REAL-TIME</span>
                    </div>
                    <div className="flex items-start gap-4 mt-2 p-3 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div className="text-sm text-muted-foreground">
                            <p className="font-medium text-foreground">Scanning for Momentum & Breakouts</p>
                            <p>
                                Filtering for <strong>₹500Cr - ₹1000Cr Market Cap</strong> with <strong>"Strong Buy"</strong> technical ratings.
                                <br />
                                <em>Note: Specific patterns like "Cup & Handle" require manual chart inspection. This scanner identifies high-momentum candidates likely forming these patterns.</em>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-h-[600px] border border-border rounded-xl overflow-hidden bg-card relative">
                    <TradingViewScreener
                        defaultScreen="india"
                        filters={[
                            {
                                left: "market_cap_basic",
                                operation: "in_range",
                                right: [5000000000, 10000000000] // 500 Cr to 1000 Cr INR
                            },
                            {
                                left: "Recommend.All",
                                operation: "in_range",
                                right: [0.5, 1] // Strong Buy (0.5 to 1.0)
                            }
                        ]}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-2 text-[10px] text-center text-muted-foreground border-t border-border">
                        * Data provided by TradingView. Filters applied: Market Cap ₹500Cr-₹1000Cr, Technical Rating: Strong Buy.
                    </div>
                </div>
            </div>
        </Layout>
    );
};
