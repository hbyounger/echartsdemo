import App from './components/App';

export default class ChartApp extends App {
    constructor(props) {
        super(props);
    }
    render() {
        //onChartReady={this.onChartReadyCallback}
                //onEvents={EventsDict}
                //onChartReady={this.onChartReadyCallback}
                //onEvents={EventsDict}
            // The usage of ReactEchartsCore are same with above. 
                
        return (
        <div>
            <ReactEchartsCore
                echarts={echarts}
                option={this.state.option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                />    
        </div>
        );
    }
}