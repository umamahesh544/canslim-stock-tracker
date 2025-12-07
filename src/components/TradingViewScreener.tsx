import { useEffect, useRef, memo } from 'react';

interface ScreenerProps {
    title?: string;
    defaultScreen?: string;
    sort?: string;
    filters?: any[]; // Allow passing specific filters if supported, though for widget mainly predefined screens work best
}

export const TradingViewScreener = memo(({ defaultScreen = "top_gainers", sort = "change|desc" }: ScreenerProps) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.type = "text/javascript";
        script.async = true;

        // We can inject a more complex JSON config here
        const config = {
            "width": "100%",
            "height": "100%",
            "defaultColumn": "overview",
            "defaultScreen": defaultScreen,
            "market": "india",
            "showToolbar": true,
            "colorTheme": "dark",
            "locale": "en",
            "sort": sort
        };

        script.innerHTML = JSON.stringify(config);
        container.current.appendChild(script);
    }, [defaultScreen, sort]);

    return (
        <div className="tradingview-widget-container h-full w-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
    );
});

TradingViewScreener.displayName = "TradingViewScreener";
