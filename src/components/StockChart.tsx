import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { date: '1 Dec', price: 2350 },
    { date: '2 Dec', price: 2320 },
    { date: '3 Dec', price: 2280 }, // Cup start
    { date: '4 Dec', price: 2250 },
    { date: '5 Dec', price: 2220 }, // Bottom
    { date: '6 Dec', price: 2250 },
    { date: '7 Dec', price: 2290 },
    { date: '8 Dec', price: 2340 }, // Rim
    { date: '9 Dec', price: 2310 }, // Handle
    { date: '10 Dec', price: 2360 }, // Breakout
];

export const StockChart = () => {
    return (
        <div className="bg-card border border-border rounded-xl p-6 h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold">RELIANCE - Reliance Industries</h3>
                    <p className="text-sm text-muted-foreground">Daily Chart • Cup and Handle Detected</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold font-mono">₹2,360.00</div>
                    <div className="text-sm text-green-400 flex items-center justify-end gap-1">
                        +1.5% <TrendingDownIcon className="w-3 h-3 rotate-180" />
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                        dataKey="date"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={['auto', 'auto']}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                        itemStyle={{ color: '#22c55e' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#22c55e"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

// Helper for the icon within this file, can be removed if lucid-react is working fully
import { TrendingDownIcon } from 'lucide-react'; 
