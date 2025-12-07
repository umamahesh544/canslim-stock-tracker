import { useEffect, useRef, memo } from 'react';
import { Layout } from '../components/Layout';

const MarketOverviewWidget = memo(() => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      {
        "colorTheme": "dark",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "100%",
        "height": "100%",
        "tabs": [
          {
            "title": "My Watchlist",
            "symbols": [
              { "s": "NSE:RELIANCE", "d": "Reliance" },
              { "s": "NSE:TCS", "d": "TCS" },
              { "s": "NSE:INFY", "d": "Infosys" },
              { "s": "NSE:HDFCBANK", "d": "HDFC Bank" },
              { "s": "NSE:ICICIBANK", "d": "ICICI Bank" },
              { "s": "NSE:SBIN", "d": "SBI" }
            ]
          },
          {
            "title": "Nifty 50",
            "symbols": [
              { "s": "NSE:NIFTY", "d": "Nifty 50" },
              { "s": "NSE:BANKNIFTY", "d": "Nifty Bank" }
            ]
          }
        ]
      }`;
        container.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container h-full w-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
    );
});

export const Watchlist = () => {
    return (
        <Layout>
            <div className="h-[calc(100vh-100px)] w-full flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Access Watchlist</h2>
                    <p className="text-muted-foreground">My tracked Indian stocks.</p>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden p-1">
                    <MarketOverviewWidget />
                </div>
            </div>
        </Layout>
    );
};
