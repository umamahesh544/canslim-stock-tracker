import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { date: 'Mon', price: 150 },
    { date: 'Tue', price: 142 },
    { date: 'Wed', price: 135 }, // Bottom of cup
    { date: 'Thu', price: 138 },
    { date: 'Fri', price: 145 },
    { date: 'Sat', price: 152 }, // Rim
    { date: 'Sun', price: 148 }, // Handle
    { date: 'Mon', price: 155 }, // Breakout
];

export const StockChart = () => {
    return (
        <div className="bg-card border border-border rounded-xl p-6 h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold">NVDA - Nvidia Corp.</h3>
                    <p className="text-sm text-muted-foreground">Daily Chart • Cup and Handle Detected</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold font-mono">$155.00</div>
                    <div className="text-sm text-green-400 flex items-center justify-end gap-1">
                        +4.2% <TrendingDownIcon className="w-3 h-3 rotate-180" />
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
