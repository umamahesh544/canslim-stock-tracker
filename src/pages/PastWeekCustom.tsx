import { Layout } from '../components/Layout';
import { TOP_20_SNAPSHOT } from '../data/snapshotData';
import { cn } from '../lib/utils';
import { TrendingUp } from 'lucide-react';

export const PastWeekCustom = () => {
    return (
        <Layout>
            <div className="h-full w-full flex flex-col gap-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Past Week Performance
                        </h2>
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs font-bold rounded border border-purple-500/20">WEEKLY VIEW</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                        Weekly analysis of the Top 20 Small Cap Gems (500-1000Cr).
                    </p>
                </div>

                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground font-medium uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">Company Name</th>
                                    <th className="px-6 py-4">Current Price</th>
                                    <th className="px-6 py-4">Weekly Trend</th>
                                    <th className="px-6 py-4">Technical Rating</th>
                                    <th className="px-6 py-4">Relative Strength</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {TOP_20_SNAPSHOT.map((stock) => (
                                    <tr key={stock.symbol} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-foreground">
                                            <div className="flex flex-col">
                                                <span className="text-base">{stock.name}</span>
                                                <span className="text-xs text-muted-foreground font-mono mt-0.5 opacity-0">No Ticker</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono">₹{stock.price.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <div className={cn(
                                                "flex items-center gap-2 font-bold",
                                                stock.rating === "Strong Buy" || stock.rating === "Buy" ? "text-green-500" : "text-yellow-500"
                                            )}>
                                                {stock.rating === "Strong Buy" ? <TrendingUp className="w-4 h-4" /> : null}
                                                {stock.rating === "Strong Buy" ? "+15.4% (Est.)" : stock.rating === "Buy" ? "+8.2% (Est.)" : "+1.5% (Est.)"}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2.5 py-1 rounded-full text-xs font-bold border",
                                                stock.rating === "Strong Buy" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                                    stock.rating === "Buy" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                                        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                            )}>
                                                {stock.rating}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500"
                                                    style={{ width: stock.rating === "Strong Buy" ? '90%' : stock.rating === "Buy" ? '75%' : '50%' }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                    * Weekly performance simulations based on current trend strength.
                </div>
            </div>
        </Layout>
    );
};
