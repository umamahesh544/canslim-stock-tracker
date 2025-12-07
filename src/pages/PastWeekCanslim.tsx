import { TradingViewScreener } from '../components/TradingViewScreener';
import { Layout } from '../components/Layout';

export const PastWeekCanslim = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Past Week CANSLIM Data</h2>
                    <p className="text-muted-foreground">Reviewing performance of qualifying stocks over the last week.</p>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <TradingViewScreener defaultScreen="performance" sort="Wh|desc" />
                </div>
            </div>
        </Layout>
    );
};
