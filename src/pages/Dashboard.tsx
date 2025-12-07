import { TradingViewWidget } from '../components/TradingViewWidget';
import { CanslimCard } from '../components/CanslimCard';
import { Layout } from '../components/Layout';

export const Dashboard = () => {
    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Market Dashboard</h2>
                    <p className="text-muted-foreground">Tracking high-growth stocks with pattern recognition.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="h-[500px] border border-border rounded-xl overflow-hidden">
                            <TradingViewWidget />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card border border-border rounded-xl p-6">
                                <h4 className="font-semibold mb-2 text-blue-400">Pattern Alert</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    "Cup and Handle" forming on RELIANCE. Breakout point at ₹2,350.
                                </p>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[85%]" />
                                </div>
                                <div className="mt-2 text-xs text-right text-blue-400">85% Confidence</div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6">
                                <h4 className="font-semibold mb-2 text-purple-400">RS Rating</h4>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold">98</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ 99</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Outperforming 98% of stocks in the last 12 months.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <CanslimCard />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
