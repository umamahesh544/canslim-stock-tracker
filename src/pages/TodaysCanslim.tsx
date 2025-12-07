import { TradingViewScreener } from '../components/TradingViewScreener';
import { Layout } from '../components/Layout';

export const TodaysCanslim = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Today's CANSLIM</h2>
                    <p className="text-muted-foreground">Stocks meeting strict Fundamental & Technical Growth Criteria.</p>

                    <div className="mt-4 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground font-mono space-y-1 border border-border">
                        <p className="font-bold text-foreground mb-2">CRITERIA APPLIED:</p>
                        <p>• Sales (Latest Qtr) &gt; Sales (Preceding Qtr) AND &gt; 1.0 * Sales (Preceding Year Qtr)</p>
                        <p>• Profit Before Tax (Latest Qtr) &gt; Profit (Preceding Qtr) AND &gt; Profit (Preceding Year Qtr)</p>
                        <p>• EPS (Latest Qtr) &gt; EPS (Preceding Qtr) AND &gt; 1.5 * EPS (Preceding Year Qtr)</p>
                        <p>• Sales Growth (3 Yrs) &gt; 10%</p>
                        <p>• PE &lt; Industry PE</p>
                        <p>• PEG Ratio &lt; 2</p>
                        <p>• Market Cap &gt; 500 Cr AND &lt; 1000 Cr</p>
                    </div>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <TradingViewScreener defaultScreen="general" sort="earnings_per_share_diluted_yoy_growth|desc" />
                </div>
            </div>
        </Layout>
    );
};
