import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface Criteria {
    label: string;
    status: 'pass' | 'fail' | 'warn';
    value: string;
}

const criteriaList: Criteria[] = [
    { label: 'C - Current Earnings', status: 'pass', value: '+45% YoY' },
    { label: 'A - Annual Earnings', status: 'pass', value: '+32% Growth' },
    { label: 'N - New Products/Highs', status: 'pass', value: 'New AI Chip' },
    { label: 'S - Supply and Demand', status: 'warn', value: 'High Volume' },
    { label: 'L - Leader or Laggard', status: 'pass', value: 'RS Rating 98' },
    { label: 'I - Institutional Sponsorship', status: 'pass', value: 'Increasing' },
    { label: 'M - Market Direction', status: 'pass', value: 'Confirmed Uptrend' },
];

export const CanslimCard = () => {
    return (
        <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">CANSLIM Analysis</h3>
            <div className="space-y-4">
                {criteriaList.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                            {item.status === 'pass' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                            {item.status === 'fail' && <XCircle className="w-5 h-5 text-red-500" />}
                            {item.status === 'warn' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                            <span className="font-medium text-sm">{item.label}</span>
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Overall Rating</span>
                <span className="text-xl font-bold text-green-400">92/100</span>
            </div>
        </div>
    );
};
