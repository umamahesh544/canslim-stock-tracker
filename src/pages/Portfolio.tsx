import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { TradingViewMarketOverview } from '../components/TradingViewMarketOverview';
import { Plus, Trash2, TrendingUp, IndianRupee } from 'lucide-react';

interface Holding {
    id: string;
    symbol: string;
    name: string;
    buyPrice: number;
    buyDate: string;
}

export const Portfolio = () => {
    const [holdings, setHoldings] = useState<Holding[]>(() => {
        const saved = localStorage.getItem('canslim-portfolio');
        return saved ? JSON.parse(saved) : [];
    });

    const [symbolInput, setSymbolInput] = useState('');
    const [priceInput, setPriceInput] = useState('');

    useEffect(() => {
        localStorage.setItem('canslim-portfolio', JSON.stringify(holdings));
    }, [holdings]);

    const handleAddStock = (e: React.FormEvent) => {
        e.preventDefault();
        if (!symbolInput || !priceInput) return;

        const newHolding: Holding = {
            id: Date.now().toString(),
            symbol: symbolInput.toUpperCase().trim(),
            name: symbolInput.toUpperCase().trim(), // Simplified, usually would fetch name
            buyPrice: parseFloat(priceInput),
            buyDate: new Date().toLocaleDateString()
        };

        setHoldings([...holdings, newHolding]);
        setSymbolInput('');
        setPriceInput('');
    };

    const handleDelete = (id: string) => {
        setHoldings(holdings.filter(h => h.id !== id));
    };

    // Extract symbols for the widget
    const widgetSymbols = holdings.map(h => h.symbol);

    return (
        <Layout>
            <div className="flex flex-col h-full gap-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                            My Portfolio Tracker
                        </h2>
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold rounded border border-blue-500/20">PERSONAL</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
                    {/* Left Column: Management */}
                    <div className="flex flex-col gap-6">
                        {/* Add Stock Form */}
                        <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <Plus className="w-5 h-5 text-green-500" /> Add New Position
                            </h3>
                            <form onSubmit={handleAddStock} className="flex gap-3 items-end">
                                <div className="flex-1 space-y-1">
                                    <label className="text-xs text-muted-foreground font-medium">Symbol (e.g., TATASTEEL)</label>
                                    <input
                                        type="text"
                                        value={symbolInput}
                                        onChange={(e) => setSymbolInput(e.target.value)}
                                        placeholder="NSE Symbol"
                                        className="w-full bg-muted/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 uppercase"
                                    />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <label className="text-xs text-muted-foreground font-medium">Buy Price (₹)</label>
                                    <input
                                        type="number"
                                        value={priceInput}
                                        onChange={(e) => setPriceInput(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-muted/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                                <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                                    Add
                                </button>
                            </form>
                        </div>

                        {/* Holdings Table */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex-1">
                            <div className="p-4 border-b border-border">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <IndianRupee className="w-5 h-5 text-blue-500" /> Your Holdings
                                </h3>
                            </div>
                            <div className="overflow-auto max-h-[500px]">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted/50 text-muted-foreground font-medium uppercase text-xs sticky top-0">
                                        <tr>
                                            <th className="px-4 py-3">Symbol</th>
                                            <th className="px-4 py-3">Buy Price</th>
                                            <th className="px-4 py-3">Date Added</th>
                                            <th className="px-4 py-3 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {holdings.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="text-center py-8 text-muted-foreground">
                                                    No stocks added yet. Add symbols above to track.
                                                </td>
                                            </tr>
                                        ) : (
                                            holdings.map((h) => (
                                                <tr key={h.id} className="hover:bg-muted/30">
                                                    <td className="px-4 py-3 font-medium">{h.symbol}</td>
                                                    <td className="px-4 py-3 font-mono">₹{h.buyPrice.toFixed(2)}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{h.buyDate}</td>
                                                    <td className="px-4 py-3 text-right">
                                                        <button
                                                            onClick={() => handleDelete(h.id)}
                                                            className="text-red-500 hover:bg-red-500/10 p-1.5 rounded-full transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Live Widget */}
                    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
                        <div className="p-4 border-b border-border bg-muted/20">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-purple-500" /> Live Market Data
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                                Real-time prices for your added symbols. Compare with your Buy Price.
                            </p>
                        </div>
                        <div className="flex-1 min-h-[500px]">
                            {holdings.length > 0 ? (
                                <TradingViewMarketOverview
                                    symbols={widgetSymbols}
                                    title="My Portfolio"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                    Add stocks to see live data here.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
