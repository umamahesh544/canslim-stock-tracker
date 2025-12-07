import { useEffect, useRef, memo } from 'react';

interface ScreenerProps {
    title?: string;
    defaultScreen?: string;
    sort?: string;
    filters?: any;
}

export const TradingViewScreener = memo(({ defaultScreen = "top_gainers", sort = "change|desc", filters = {} }: ScreenerProps) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.type = "text/javascript";
        script.async = true;

        // Base Config
        const config: any = {
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

        // If specific filters are provided, we try to merge them.
        // Note: For standard embeds, 'filters' might not directly override 'defaultScreen' logic 
        // unless using a specific query mode, but we merge them here to attempt strict filtering.
        // If the widget ignores this, it's a limitation of the free embed API.
        if (Object.keys(filters).length > 0) {
            // Some embedding versions allow "scan_filters" or just merging keys
            Object.assign(config, filters);
        }

        script.innerHTML = JSON.stringify(config);
        container.current.appendChild(script);
    }, [defaultScreen, sort, filters]);

    return (
        <div className="tradingview-widget-container h-full w-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
    );
});

TradingViewScreener.displayName = "TradingViewScreener";
