import { useState } from 'react';
import { Layout } from '../components/Layout';
import { TOP_20_SNAPSHOT } from '../data/snapshotData';
import { TrendingUp, Coffee, Triangle } from 'lucide-react';

export const Patterns = () => {
    const [activeTab, setActiveTab] = useState<'cup' | 'triangle'>('cup');

    // Filter Data
    const cupStocks = TOP_20_SNAPSHOT.filter(s => s.pattern && s.pattern.includes("Cup"));
    const triangleStocks = TOP_20_SNAPSHOT.filter(s => s.pattern && s.pattern.includes("Triangle"));

    // Select Featured Stock (Prefer Breakouts)
    const featuredCup = cupStocks.find(s => s.pattern?.includes("Breakout")) || cupStocks[0];
    const featuredTriangle = triangleStocks.find(s => s.pattern?.includes("Breakout")) || triangleStocks[0];

    const currentList = activeTab === 'cup' ? cupStocks : triangleStocks;
    const currentFeatured = activeTab === 'cup' ? featuredCup : featuredTriangle;

    // Pattern Descriptions
    const patternInfo = {
        cup: {
            title: "Cup and Handle",
            description: "A bullish continuation pattern where the stock consolidates (Cup) after a prior uptrend, then drifts slightly lower (Handle) before breaking out to new highs.",
            icon: Coffee,
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        triangle: {
            title: "Symmetric Triangle",
            description: "A neutral chart pattern that forms as two trendlines converge. A breakout in either direction indicates the start of a new trend. In CANSLIM, we look for upward breakouts.",
            icon: Triangle,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            borderColor: "border-orange-500/20"
        }
    };

    const info = patternInfo[activeTab];

    return (
        <Layout>
            <div className="flex flex-col h-full gap-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Pattern Radar
                        </h2>
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs font-bold rounded border border-purple-500/20">ALGORITHMIC</span>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-4 border-b border-border">
                    <button
                        onClick={() => setActiveTab('cup')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                            activeTab === 'cup'
                                ? "border-indigo-500 text-indigo-400"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Coffee className="w-4 h-4" /> Cup & Handle
                        <span className="ml-1 px-1.5 py-0.5 rounded-full bg-muted text-[10px]">{cupStocks.length}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('triangle')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                            activeTab === 'triangle'
                                ? "border-orange-500 text-orange-400"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Triangle className="w-4 h-4" /> Symmetric Triangle
                        <span className="ml-1 px-1.5 py-0.5 rounded-full bg-muted text-[10px]">{triangleStocks.length}</span>
                    </button>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">

                    {/* Left: Stock List */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        {/* Info Card */}
                        <div className={cn("p-4 rounded-xl border", info.bg, info.borderColor)}>
                            <h3 className={cn("text-lg font-bold flex items-center gap-2", info.color)}>
                                <info.icon className="w-5 h-5" /> {info.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                {info.description}
                            </p>
                        </div>

                        {/* List */}
                        <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col">
                            <div className="p-3 border-b border-border bg-muted/20">
                                <h4 className="text-xs font-bold uppercase text-muted-foreground">Detected Candidates</h4>
                            </div>
                            <div className="overflow-auto flex-1 p-2 space-y-2">
                                {currentList.map(stock => (
                                    <div key={stock.symbol} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-default group">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{stock.name}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs font-mono text-muted-foreground">{stock.symbol}</span>
                                                    {stock.pattern?.includes("Breakout") && (
                                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20 animate-pulse">
                                                            BREAKOUT
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono text-sm">₹{stock.price}</div>
                                                <div className={cn("text-xs font-bold", stock.change >= 0 ? "text-green-500" : "text-red-500")}>
                                                    {stock.change > 0 ? '+' : ''}{stock.change}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Featured Chart */}
                    <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col">
                        <div className="p-4 border-b border-border flex justify-between items-center bg-muted/20">
                            <div>
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Featured Setup: {currentFeatured.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Clear {activeTab === 'cup' ? 'Cup & Handle' : 'Triangle'} structure visible on daily timeframe.
                                </p>
                            </div>
                            <div className="text-right">
                                <span className={cn(
                                    "px-2 py-1 rounded text-xs font-bold border",
                                    currentFeatured.rating === "Strong Buy" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                )}>
                                    {currentFeatured.rating}
                                </span>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Reusing the Chart Component Logic directly via TradingView Widget for robustness */}
                            <iframe
                                className="w-full h-full"
                                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=NSE:${currentFeatured.symbol}&interval=D&hidesidetoolbar=1&symboledit=0&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Asia/Kolkata`}
                                style={{ border: 'none' }}
                                title="Chart"
                            />
                            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1.5 rounded border border-border text-xs font-mono z-10">
                                {currentFeatured.pattern}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
