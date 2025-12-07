import { useEffect, useRef, memo } from 'react';
import { Layout } from '../components/Layout';

const ScreenerWidget = memo(() => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "defaultScreen": "top_gainers",
        "market": "india",
        "showToolbar": true,
        "colorTheme": "dark",
        "locale": "en"
      }`;
        container.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container h-full w-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
    );
});

export const Screener = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Market Screener</h2>
                    <p className="text-muted-foreground">Detailed scan of NSE Top Gainers and market movers.</p>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <ScreenerWidget />
                </div>
            </div>
        </Layout>
    );
};
