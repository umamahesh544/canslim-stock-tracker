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
                    <TradingViewScreener defaultScreen="general" sort="earnings_per_share_diluted_yoy_growth|desc" />
                </div>
            </div>
        </Layout>
    );
};
