import { useEffect, useRef, memo } from 'react';

interface MarketOverviewProps {
    symbols: string[];
    title?: string;
}

export const TradingViewMarketOverview = memo(({ symbols, title = "Top Growth Stocks" }: MarketOverviewProps) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.type = "text/javascript";
        script.async = true;

        const formattedSymbols = symbols.map(s => (
            { "s": `NSE:${s}`, "d": s }
        ));

        const config = {
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
            "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
            "plotLineColorFalling": "rgba(41, 98, 255, 1)",
            "gridLineColor": "rgba(240, 243, 250, 0)",
            "scaleFontColor": "rgba(209, 212, 220, 1)",
            "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColor": "rgba(41, 98, 255, 0.12)",
            "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
            "tabs": [
                {
                    "title": title,
                    "symbols": formattedSymbols
                },
                {
                    "title": "Performance",
                    "symbols": formattedSymbols
                }
            ]
        };

        script.innerHTML = JSON.stringify(config);
        container.current.appendChild(script);
    }, [symbols, title]);

    return (
        <div className="tradingview-widget-container h-full w-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
    );
});

TradingViewMarketOverview.displayName = "TradingViewMarketOverview";
