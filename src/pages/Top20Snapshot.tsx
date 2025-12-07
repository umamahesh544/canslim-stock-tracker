import { Layout } from '../components/Layout';
import { TOP_20_SNAPSHOT } from '../data/snapshotData';
import { cn } from '../lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const Top20Snapshot = () => {
    return (
        <Layout>
            <div className="h-full w-full flex flex-col gap-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                            Premium Top 20 Growth
                        </h2>
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded border border-green-500/20">LIVE SNAPSHOT</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                        Exclusive high-momentum selection based on strict EPS & Sales Growth.
                    </p>
                </div>

                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground font-medium uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">Company Name</th>
                                    <th className="px-6 py-4">Price (₹)</th>
                                    <th className="px-6 py-4">Change %</th>
                                    <th className="px-6 py-4">Market Cap</th>
                                    <th className="px-6 py-4">P/E Ratio</th>
                                    <th className="px-6 py-4">Growth Rating</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {TOP_20_SNAPSHOT.map((stock) => (
                                    <tr key={stock.symbol} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-foreground">
                                            <div className="flex flex-col">
                                                <span className="text-base">{stock.name}</span>
                                                <span className="text-xs text-muted-foreground font-mono mt-0.5 opacity-0">Hidden Ticker</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono font-bold">₹{stock.price.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <div className={cn(
                                                "flex items-center gap-1 font-bold",
                                                stock.change >= 0 ? "text-green-500" : "text-red-500"
                                            )}>
                                                {stock.change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                                {Math.abs(stock.change)}%
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">{stock.marketCap}</td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded text-xs font-medium",
                                                stock.pe < 40 ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                                            )}>
                                                {stock.pe}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2.5 py-1 rounded-full text-xs font-bold border",
                                                stock.rating === "Strong Buy" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                                                    stock.rating === "Buy" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                                        "bg-muted text-muted-foreground border-border"
                                            )}>
                                                {stock.rating}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                    * Data snapshot for demonstration. Real-time feed requires API integration.
                </div>
            </div>
        </Layout>
    );
};
