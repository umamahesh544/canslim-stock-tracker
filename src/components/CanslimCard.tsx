import { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

interface Criteria {
    id: string;
    label: string;
    description: string;
    status: 'pass' | 'fail' | 'unchecked';
}

const initialCriteria: Criteria[] = [
    { id: 'c', label: 'C - Current Earnings', description: 'EPS up >25% in most recent QTR?', status: 'unchecked' },
    { id: 'a', label: 'A - Annual Earnings', description: 'Annual EPS up >25% last 3 years?', status: 'unchecked' },
    { id: 'n', label: 'N - New Products/Highs', description: 'New product/service or 52-week High?', status: 'unchecked' },
    { id: 's', label: 'S - Supply and Demand', description: 'Volume +50% on up days?', status: 'unchecked' },
    { id: 'l', label: 'L - Leader or Laggard', description: 'RS Rating > 80?', status: 'unchecked' },
    { id: 'i', label: 'I - Institutional Sponsorship', description: 'Increasing fund ownership?', status: 'unchecked' },
    { id: 'm', label: 'M - Market Direction', description: 'Is market in confirmed uptrend?', status: 'unchecked' },
];

export const CanslimCard = () => {
    const [criteria, setCriteria] = useState<Criteria[]>(initialCriteria);

    const toggleStatus = (id: string) => {
        setCriteria(prev => prev.map(item => {
            if (item.id === id) {
                if (item.status === 'unchecked') return { ...item, status: 'pass' };
                if (item.status === 'pass') return { ...item, status: 'fail' };
                return { ...item, status: 'unchecked' };
            }
            return item;
        }));
    };

    const score = criteria.filter(c => c.status === 'pass').length;

    return (
        <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">CANSLIM Checklist</h3>
            <p className="text-xs text-muted-foreground mb-4">Click items to toggle status (Pass/Fail).</p>

            <div className="space-y-3">
                {criteria.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => toggleStatus(item.id)}
                        className="w-full flex items-start justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-left"
                    >
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                                {item.status === 'pass' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                {item.status === 'fail' && <AlertCircle className="w-5 h-5 text-red-500" />}
                                {item.status === 'unchecked' && <Circle className="w-5 h-5 text-muted-foreground" />}
                            </div>
                            <div>
                                <span className="font-medium text-sm block">{item.label}</span>
                                <span className="text-xs text-muted-foreground">{item.description}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                <span className="text-sm font-medium">Score</span>
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                        {score}/7
                    </span>
                </div>
            </div>
        </div>
    );
};
