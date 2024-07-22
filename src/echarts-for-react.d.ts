declare module "echarts-for-react" {
  import * as React from "react";
  import { EChartsOption } from "echarts";

  interface EchartsReactProps {
    option: EChartsOption;
    notMerge?: boolean;
    lazyUpdate?: boolean;
    style?: React.CSSProperties;
    className?: string;
    theme?: string | object;
    onChartReady?: (echart: any) => void;
    onEvents?: { [key: string]: (params?: any) => void };
    opts?: {
      devicePixelRatio?: number;
      renderer?: "canvas" | "svg";
      width?: number | string;
      height?: number | string;
    };
  }

  export default class ReactEcharts extends React.Component<EchartsReactProps> {}
}
