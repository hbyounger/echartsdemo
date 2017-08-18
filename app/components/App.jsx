import React from 'react';
// import the core library.
import ReactEchartsCore from 'echarts-for-react/lib/core';
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');

require('./App.css');

//export default () => <h1>Hello World</h1>;
//var echarts = require('echarts');
const N_POINT = 30;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.dom = null;
        let data = [];

        for (var i = 0; i <= 360; i++) {
            var t = i / 180 * Math.PI;
            var r = Math.sin(2* t) * Math.cos(2 * t);
            data.push([r, i]);
        }
        this.state = {
            option : {title: {
                text: '极坐标双数值轴'
            },
                legend: {
                    data: ['line']
                },
                polar: {
                    center: ['50%', '54%']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                    min: 0
                },
                series: [{
                    coordinateSystem: 'polar',
                    name: 'line',
                    type: 'line',
                    showSymbol: false,
                    data: data
                }],
                animationDuration: 2000},
        }
    }
    grids = [];
    xAxes = [];
    yAxes = [];
    series = [];
    titles = [];
    option = {
        title: this.titles.concat([{
            text: 'Different Easing Functions',
            top: 'bottom',
            left: 'center'
        }]),
        grid: this.grids,
        xAxis: this.xAxes,
        yAxis: this.yAxes,
        series: this.series
    };

    easingFuncs = {
        linear: (k)=> {
            return k;
        },
        quadraticIn: (k)=> {
            return k * k;
        },
        quadraticOut: (k)=> {
            return k * (2 - k);
        },
        quadraticInOut: (k)=> {
            if ((k *= 2) < 1) { return 0.5 * k * k; }
            return -0.5 * (--k * (k - 2) - 1);
        },
        cubicIn: (k)=> {
            return k * k * k;
        },
        cubicOut: (k)=> {
            return --k * k * k + 1;
        },
        cubicInOut: (k)=> {
            if ((k *= 2) < 1) { return 0.5 * k * k * k; }
            return 0.5 * ((k -= 2) * k * k + 2);
        },
        quarticIn: (k)=> {
            return k * k * k * k;
        },
        quarticOut: (k)=> {
            return 1 - (--k * k * k * k);
        },
        quarticInOut: (k)=> {
            if ((k *= 2) < 1) { return 0.5 * k * k * k * k; }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        },
        quinticIn: (k)=> {
            return k * k * k * k * k;
        },
        quinticOut: (k)=> {
            return --k * k * k * k * k + 1;
        },
        quinticInOut: (k)=> {
            if ((k *= 2) < 1) { return 0.5 * k * k * k * k * k; }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },
        sinusoidalIn: (k)=> {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        sinusoidalOut: (k)=> {
            return Math.sin(k * Math.PI / 2);
        },
        sinusoidalInOut: (k)=> {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        },
        exponentialIn: (k)=> {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        exponentialOut: (k)=> {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        exponentialInOut: (k)=> {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        },
        circularIn: (k)=> {
            return 1 - Math.sqrt(1 - k * k);
        },
        circularOut: (k)=> {
            return Math.sqrt(1 - (--k * k));
        },
        circularInOut: (k)=> {
            if ((k *= 2) < 1) { return -0.5 * (Math.sqrt(1 - k * k) - 1); }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
        elasticIn: (k)=> {
            var s;
            var a = 0.1;
            var p = 0.4;
            if (k === 0) { return 0; }
            if (k === 1) { return 1; }
            if (!a || a < 1) { a = 1; s = p / 4; }
            else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
            return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        },
        elasticOut: (k)=> {
            var s;
            var a = 0.1;
            var p = 0.4;
            if (k === 0) { return 0; }
            if (k === 1) { return 1; }
            if (!a || a < 1) { a = 1; s = p / 4; }
            else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
            return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
        },
        elasticInOut: (k)=> {
            var s;
            var a = 0.1;
            var p = 0.4;
            if (k === 0) { return 0; }
            if (k === 1) { return 1; }
            if (!a || a < 1) { a = 1; s = p / 4; }
            else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
            if ((k *= 2) < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
            }
            return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

        },

        // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
        backIn: (k)=> {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        backOut: (k)=> {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        backInOut:  (k)=> {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1) { return 0.5 * (k * k * ((s + 1) * k - s)); }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },

        // 创建弹跳效果
        bounceIn: (k)=> {
            return 1 - this.easingFuncs.bounceOut(1 - k);
        },
        bounceOut: (k)=> {
            if (k < (1 / 2.75)) { return 7.5625 * k * k; }
            else if (k < (2 / 2.75)) { return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75; }
            else if (k < (2.5 / 2.75)) { return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375; }
            else { return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375; }
        },
        bounceInOut: (k)=> {
            if (k < 0.5) { return this.easingFuncs.bounceIn(k * 2) * 0.5; }
            return this.easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
        }
    };

    getOption = ()=>{
        return {
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }

    componentDidMount = ()=>{
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.dom);
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        console.log(myChart,'<------myChart')
        console.log(N_POINT,'<------this.N_POINT')

        let count = 0;
        echarts.util.each(this.easingFuncs, (easingFunc, name)=> {
            var data = [];
            for (var i = 0; i <= (N_POINT); i++) {
                var x = i / (N_POINT);
                var y = easingFunc(x);
                data.push([x, y]);
            }
            this.grids.push({
                show: true,
                borderWidth: 0,
                backgroundColor: '#fff',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 2
            });
            this.xAxes.push({
                type: 'value',
                show: false,
                min: 0,
                max: 1,
                gridIndex: count
            });
            this.yAxes.push({
                type: 'value',
                show: false,
                min: -0.4,
                max: 1.4,
                gridIndex: count
            });
            this.series.push({
                name: name,
                type: 'line',
                xAxisIndex: count,
                yAxisIndex: count,
                data: data,
                showSymbol: false,
                animationEasing: name,
                animationDuration: 10000
            });
            this.titles.push({
                textAlign: 'center',
                text: name,
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal'
                }
            });
            count++;
        });
        let rowNumber = Math.ceil(Math.sqrt(count));

        echarts.util.each(this.grids, (grid, idx)=> {
            grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
            grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
            grid.width = (1 / rowNumber * 100 - 1) + '%';
            grid.height = (1 / rowNumber * 100 - 1) + '%';

            this.titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
            this.titles[idx].top = parseFloat(grid.top) + '%';
        });
    }

    render() {
        //onChartReady={this.onChartReadyCallback}
        //onEvents={EventsDict}
        //onChartReady={this.onChartReadyCallback}
        //onEvents={EventsDict}
        return (
            <div>
                // The usage of ReactEchartsCore are same with above.
                <ReactEchartsCore
                    echarts={echarts}
                    option={this.state.option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                    style={{width: "49%",height:"49%"}}
                />
                <ReactEcharts
                    option={this.option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                    style={{width: "49%",height:"49%"}}
                />
                <div
                    id="main"
                    style={{width: "49%",height:"49%"}}
                    ref={(dom)=>{this.dom = dom}}> </div>
            </div>

        );
    }
}

