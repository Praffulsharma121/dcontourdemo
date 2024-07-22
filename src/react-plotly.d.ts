declare module 'react-plotly.js' {
    import * as React from 'react';
  
    export interface PlotParams {
      data: any[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
      frames?: Partial<Plotly.Frame>[];
      revision?: number;
      onInitialized?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
      onPurge?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
      onError?: (err: any) => void;
      onUpdate?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
      onClick?: (event: Readonly<Plotly.PlotMouseEvent>) => void;
      onHover?: (event: Readonly<Plotly.PlotMouseEvent>) => void;
      onUnhover?: (event: Readonly<Plotly.PlotMouseEvent>) => void;
      style?: React.CSSProperties;
      className?: string;
      useResizeHandler?: boolean;
      debug?: boolean;
      divId?: string;
    }
  
    const Plot: React.ComponentClass<PlotParams>;
  
    export default Plot;
  }
  