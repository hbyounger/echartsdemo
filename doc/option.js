/**
 * Created by yangke on 2017/8/16.
 */
//配置项搜索全文搜索折叠
var option = {
    //标题组件，包含主标题和副标题，可以存在任意多个标题组件
    title: {
        //是否显示标题组件
        show: true,
        //主标题文本，支持使用 \n 换行
        text: '',
        //主标题文本超链接。
        link: '',
        //指定窗口打开主标题超链接,'self' 当前窗口打开,'blank' 新窗口打开
        target: 'blank',
        textStyle: {
            //主标题文字的颜色。
            color: '#333',
            //主标题文字字体的风格:'normal','italic','oblique'
            fontStyle: 'normal',
            //主标题文字字体的粗细:'normal'|'bold'|'bolder'|'lighter'|100 | 200 | 300 | 400...
            fontWeight: 'bolder',
            //主标题文字的字体系列
            fontFamily: 'sans-serif',
            //主标题文字的字体大小
            fontSize: 18,
        },
        //标题文本水平对齐，支持 'left', 'center', 'right'，默认根据标题位置决定
        textAlign: '...',
        //标题文本垂直对齐，支持 'top', 'middle', 'bottom'，默认根据标题位置决定。
        textBaseline: '...',
        //副标题文本，支持使用 \n 换行。
        subtext: '',
        //副标题文本超链接。
        sublink: '',
        //指定窗口打开副标题超链接，可选：'self' 当前窗口打开|'blank' 新窗口打开
        subtarget: 'blank',
        //
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
        /*
         padding: [
         5,  // 上
         10, // 右
         5,  // 下
         10, // 左
         ]
         */
        padding: 5,
        //主副标题之间的间距。
        itemGap: 10,
        /*
         所有图形的 zlevel 值。
         zlevel用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的zlevel。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。
         zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
        */
        zlevel: 0,
        /*
         组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
         z相比zlevel优先级更低，而且不会创建新的 Canvas。
        */
        z: 2,
        /*
         grid 组件离容器左侧的距离。
         left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。
         如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
        */
        left: 'auto',
        //grid 组件离容器上侧的距离。
        top: 'auto',
        //grid 组件离容器右侧的距离。
        right: 'auto',
        //grid 组件离容器下侧的距离。
        bottom: 'auto',
        //标题背景色，默认透明。
        /*
        颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'
        */
        backgroundColor: 'transparent',
        //标题的边框颜色。支持的颜色格式同 backgroundColor。
        borderColor: '#ccc',
        //标题的边框线宽。
        borderWidth: 0,
        //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
        shadowBlur: '...',
        //阴影颜色。支持的格式同color。
        shadowColor: '...',
        //阴影水平方向上的偏移距离。
        shadowOffsetX: 0,
        //阴影垂直方向上的偏移距离。
        shadowOffsetY: 0,
    },
    //图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
    legend: {
        show: true,
        zlevel: 0,
        z: 2,
        left: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        //图例组件的宽度。默认自适应。
        width: 'auto',
        //图例组件的高度。默认自适应。
        height: 'auto',
        //图例列表的布局朝向。'horizontal'|'vertical'
        orient: 'horizontal',
        //图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，
        //当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，及为 'right'。
        //'auto'|'left'|'right'
        align: 'auto',
        padding: 5,
        //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        itemGap: 10,
        //图例标记的图形宽度。
        itemWidth: 25,
        //图例标记的图形高度。
        itemHeight: 14,
        //用来格式化图例文本，支持字符串模板和回调函数两种形式。
        /*
         // 使用字符串模板，模板变量为图例名称 {name}
         formatter: 'Legend {name}'
         // 使用回调函数
         formatter: function (name) {
         return 'Legend ' + name;
         }
        */
        formatter: null,
        //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        //除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
        selectedMode: true,
        //图例关闭时的颜色。
        inactiveColor: '#ccc',
        //图例选中状态表。
        /*
         selected: {
         // 选中'系列1'
         '系列1': true,
         // 不选中'系列2'
         '系列2': false
         }
        */
        selected: {...},
        //图例的公用文本样式。
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        //图例的 tooltip 配置，配置项同 tooltip。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip
        tooltip: {...},
        /*
         图例的数据数组。数组项通常为一个字符串，每一项代表一个系列的 name（如果是饼图，也可以是饼图单个数据的 name）。
         图例组件会自动根据对应系列的图形标记（symbol）来绘制自己的颜色和标记，特殊字符串 ''（空字符串）或者 '\n'（换行字符串）用于图例的换行。
         如果要设置单独一项的样式，也可以把该项写成配置项对象。此时必须使用 name 属性对应表示系列的 name。

         data: [{
         name: '系列1',
         // 强制设置图形为圆。
         icon: 'circle',
         // 设置文本为红色
         textStyle: {
         color: 'red'
         }
         }]
        */
        data: [{
            name: '...',
            icon: '...',
            textStyle: {...},
        }],
        backgroundColor: 'transparent',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowBlur: '...',
        shadowColor: '...',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
    },
    //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。可以存在任意个 grid 组件。
    grid: {
        //是否显示直角坐标系网格。默认不现实
        show: false,
        zlevel: 0,
        z: 2,
        left: '10%',
        top: 60,
        right: '10%',
        bottom: 60,
        width: 'auto',
        height: 'auto',
        //grid 区域是否包含坐标轴的刻度标签。
        /*
         containLabel 为 false 的时候：
         grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是由坐标轴形成的矩形的尺寸和位置。
         这比较适用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。
         containLabel 为 true 的时候：
         grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
         这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
        */
        containLabel: false,
        backgroundColor: 'transparent',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowBlur: '...',
        shadowColor: '...',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        tooltip: {
            show: true,
            trigger: 'item',
            //坐标轴指示器配置项。
            /*
             tooltip.axisPointer 是配置坐标轴指示器的快捷方式。实际上坐标轴指示器的全部功能，都可以通过轴上的 axisPointer 配置项完成（例如 xAxis.axisPointer 或 angleAxis.axisPointer）。但是使用 tooltip.axisPinter 在简单场景下会更方便一些。
             注意： tooltip.axisPointer 中诸配置项的优先级低于轴上的 axisPointer 的配置项。
             坐标轴指示器是指示坐标轴当前刻度的工具。
             如下例，鼠标悬浮到图上，可以出现标线和刻度文本。
             上例中，使用了 axisPointer.link 来关联不同的坐标系中的 axisPointer。
             坐标轴指示器也有适合触屏的交互方式，如下：
             坐标轴指示器在多轴的场景能起到辅助作用：
             注意： 一般来说，axisPointer 的具体配置项会配置在各个轴中（如 xAxis.axisPointer）或者 tooltip 中（如 tooltip.axisPointer）。
             但是这几个选项只能配置在全局的 axisPointer 中：axisPointer.triggerOn、axisPointer.link。
             如何显示 axisPointer：
             直角坐标系 grid、极坐标系 polar、单轴坐标系 single 中的每个轴都自己的 axisPointer。
             他们的 axisPointer 默认不显示。有两种方法可以让他们显示：
             设置轴上的 axisPointer.show（例如 xAxis.axisPointer.show）为 true，则显示此轴的 axisPointer。
             设置 tooltip.trigger 设置为 'axis' 或者 tooltip.axisPointer.type 设置为 'cross'，则此时坐标系会自动选择显示显示哪个轴的 axisPointer，也可以使用 tooltip.axisPointer.axis 改变这种选择。注意，轴上如果设置了 axisPointer，会覆盖此设置。
             如何显示 axisPointer 的 label：
             axisPointer 的 label 默认不显示（也就是默认只显示指示线），除非：
             设置轴上的 axisPointer.label.show（例如 xAxis.axisPointer.label.show）为 true，则显示此轴的 axisPointer 的 label。
             设置 tooltip.axisPointer.type 为 'cross' 时会自动显示 axisPointer 的 label。
             关于触屏的 axisPointer 的设置
             设置轴上的 axisPointer.handle.show（例如 xAxis.axisPointer.handle.show 为 true 则会显示出此 axisPointer 的拖拽按钮。（polar 坐标系暂不支持此功能）。
             注意： 如果发现此时 tooltip 效果不良好，可设置 tooltip.triggerOn 为 'none'（于是效果为：手指按住按钮则显示 tooltip，松开按钮则隐藏 tooltip），或者 tooltip.alwaysShowContent 为 true（效果为 tooltip 一直显示）。
             参见例子。
             自动吸附到数据（snap）
             对于数值轴、时间轴，如果开启了 snap，则 axisPointer 会自动吸附到最近的点上。
             */
            axisPointer: {
                //指示器类型:'line' 直线指示器|'shadow' 阴影指示器|'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
                type: 'line',
                //指示器的坐标轴:默认情况，坐标系会自动选择显示显示哪个轴的 axisPointer（默认取类目轴或者时间轴）。可以是 'x', 'y', 'radius', 'angle'。
                axis: 'auto',
                snap: '...',
                z: '...',
                label: {
                    show: false,
                    precision: 'auto',
                    /*
                     文本标签文字的格式化器。grid.tooltip.axisPointer.label.formatter
                     如果为 string，可以是例如：formatter: 'some text {value} some text，其中 {value} 会被自动替换为轴的值。
                     如果为 function，可以是例如：
                     参数：
                     {Object} params: 含有：
                     {Object} params.value: 轴当前值，如果 axis.type 为 'category' 时，其值为 axis.data 里的数值。如果 axis.type 为 'time'，其值为时间戳。
                     {Array.<Object>} params.seriesData: 一个数组，是当前 axisPointer 最近的点的信息，每项内容为
                    */
                    formatter: null,
                    margin: 3,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                    padding: [5, 7, 5, 7],
                    backgroundColor: 'auto',
                    borderColor: null,
                    borderWidth: 0,
                    shadowBlur: 3,
                    shadowColor: '#aaa',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
                lineStyle: {
                    color: '#555',
                    width: 1,
                    type: solid,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                shadowStyle: {
                    color: 'rgba(150,150,150,0)',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                crossStyle: {
                    color: '#555',
                    width: 1,
                    type: dashed,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。
            /*
             Array
             通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。
             示例:
             // 绝对位置，相对于容器左侧 10px, 上侧 10 px
             position: [10, 10]
             // 相对位置，放置在容器正中间
             position: ['50%', '50%']
             Function
             回调函数，格式如下
             (point: Array, params: Object|Array.<Object>, dom: HTMLDomElement, rect: Object, size: Object) => Array
             参数：
             point: 鼠标位置，如 [20, 40]。
             params: 同 formatter 的参数相同。
             dom: tooltip 的 dom 对象。
             rect: 只有鼠标在图形上时有效，是一个用x, y, width, height四个属性表达的图形包围盒。
             size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：{contentSize: [width, height], viewSize: [width, height]}。
             返回值：
             可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相 百分比。
             也可以是一个对象，如：{left: 10, top: 30}，或者 {right: '20%', bottom: 40}。
             如下示例：
             position: function (point, params, dom, rect, size) {
             // 固定在顶部
             return [point[0], '10%'];
             }
             或者：
             position: function (pos, params, dom, rect, size) {
             // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
             var obj = {top: 60};
             obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
             return obj;
             }
             'inside'
             鼠标所在图形的内部中心位置，只在 trigger 为'item'的时候有效。
             'top'
             鼠标所在图形上侧，只在 trigger 为'item'的时候有效。
             'left'
             鼠标所在图形左侧，只在 trigger 为'item'的时候有效。
             'right'
             鼠标所在图形右侧，只在 trigger 为'item'的时候有效。
             'bottom'
             鼠标所在图形底侧，只在 trigger 为'item'的时候有效。
            */
            position: '...',
            //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
            /*
             1, 字符串模板
             模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。 在 trigger 为 'axis' 的时候，会有多个系列的数据，此时可以通过 {a0}, {a1}, {a2} 这种后面加索引的方式表示系列的索引。 不同图表类型下的 {a}，{b}，{c}，{d} 含义不一样。 其中变量{a}, {b}, {c}, {d}在不同图表类型下代表数据含义为：
             折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
             散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
             地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
             饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
             更多其它图表模板变量的含义可以见相应的图表的 label.normal.formatter 配置项。
             示例：
             formatter: '{b0}: {c0}<br />{b1}: {c1}'
             2, 回调函数
             回调函数格式：
             (params: Object|Array, ticket: string, callback: (ticket: string, html: string)) => string
             第一个参数 params 是 formatter 需要的数据集。格式如下：
             {
             componentType: 'series',
             // 系列类型
             seriesType: string,
             // 系列在传入的 option.series 中的 index
             seriesIndex: number,
             // 系列名称
             seriesName: string,
             // 数据名，类目名
             name: string,
             // 数据在传入的 data 数组中的 index
             dataIndex: number,
             // 传入的原始数据项
             data: Object,
             // 传入的数据值
             value: number|Array,
             // 数据图形的颜色
             color: string,

             // 饼图的百分比
             percent: number,

             }
             在 trigger 为 'axis' 的时候，或者 tooltip 被 axisPointer 触发的时候，params 是多个系列的数据数组。其中每项内容格式同上，并且，
             {
             componentType: 'series',
             // 系列类型
             seriesType: string,
             // 系列在传入的 option.series 中的 index
             seriesIndex: number,
             // 系列名称
             seriesName: string,
             // 数据名，类目名
             name: string,
             // 数据在传入的 data 数组中的 index
             dataIndex: number,
             // 传入的原始数据项
             data: Object,
             // 传入的数据值
             value: number|Array,
             // 数据图形的颜色
             color: string,

             }
            */
            formatter: '...',
            backgroundColor: 'rgba(50,50,50,0.7)',
            borderColor: '#333',
            borderWidth: 0,
            padding: 5,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 14,
            },
            extraCssText: '...',
        },
    },
    //直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
    xAxis: {
        //默认显示
        show: true,
        //x 轴所在的 grid 的索引，默认位于第一个 grid。
        gridIndex: 0,
        //x 轴的位置。'top'|'bottom' 默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧。
        position: '...',
        //X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
        offset: 0,
        /*
         坐标轴类型:
         'value' 数值轴，适用于连续数据。
         'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
         'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
         'log' 对数轴。适用于对数数据。
        */
        type: 'category',
        //坐标轴名称。
        name: '...',
        //坐标轴名称显示位置。'start'|'middle'|'end'
        nameLocation: 'end',
        //坐标轴名称的文字样式。
        nameTextStyle: {
            //坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
            color: '...',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        //坐标轴名称与轴线之间的距离。
        nameGap: 15,
        //坐标轴名字旋转，角度值。
        nameRotate: null,
        //是否是反向坐标轴。
        inverse: false,
        //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
        /*
         类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
         非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效。
         boundaryGap: ['20%', '20%']
        */
        boundaryGap: '...',
        //坐标轴刻度最小值。
        /*
         可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。
         不设置时会自动计算最小值保证坐标轴刻度的均匀分布。
         在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）。
        */
        min: null,
        //坐标轴刻度最大值。
        /*
         可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
         不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
         在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）。
        */
        max: null,
        //只在数值轴中（type: 'value'）有效。
        //是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。
        //在设置 min 和 max 之后该配置项无效。
        scale: false,
        //坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。在类目轴中无效。
        splitNumber: 5,
        //自动计算的坐标轴最小间隔大小。例如可以设置成1保证坐标轴分割刻度显示成整数。
        minInterval: 0,
        //强制设置坐标轴分割间隔。
        /*
         因为 splitNumber 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 min、max 强制设定刻度划分，一般不建议使用。
         无法在类目轴中使用。在时间轴（type: 'time'）中需要传时间戳，在对数轴（type: 'log'）中需要传指数值。
        */
        interval: '...',
        //对数轴的底数，只在对数轴中（type: 'log'）有效。
        logBase: 10,
        //坐标轴是否是静态无法交互。
        silent: false,
        //坐标轴的标签是否响应和触发鼠标事件，默认不响应。
        /*
         事件参数如下：
         {
         // 组件类型，xAxis, yAxis, radiusAxis, angleAxis
         // 对应组件类型都会有一个属性表示组件的 index，例如 xAxis 就是 xAxisIndex
         componentType: string,
         // 未格式化过的刻度值, 点击刻度标签有效
         value: '',
         // 坐标轴名称, 点击坐标轴名称有效
         name: ''
         }
        */
        triggerEvent: false,
        //坐标轴轴线相关设置。
        axisLine: {
            show: true,
            //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。
            onZero: true,
            lineStyle: {
                /*
                 // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                 color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 0,
                 y2: 1,
                 colorStops: [{
                 offset: 0, color: 'red' // 0% 处的颜色
                 }, {
                 offset: 1, color: 'blue' // 100% 处的颜色
                 }],
                 globalCoord: false // 缺省为 false
                 }
                 // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                 color: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.5,
                 colorStops: [{
                 offset: 0, color: 'red' // 0% 处的颜色
                 }, {
                 offset: 1, color: 'blue' // 100% 处的颜色
                 }],
                 globalCoord: false // 缺省为 false
                 }
                 // 纹理填充
                 color: {
                 image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                 repeat: 'repeat' // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
                 }
                */
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //坐标轴刻度相关设置。
        axisTick: {
            show: true,
            //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
            alignWithLabel: false,
            /*
             坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
             默认会采用标签不重叠的策略间隔显示标签。
             可以设置成 0 强制显示所有标签。
             如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。
             可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
             (index:number, value: string) => boolean
             第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 false。
            */
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                opacity: '...',
            },
        },
        //坐标轴刻度标签的相关设置。
        axisLabel: {
            show: true,
            //坐标轴刻度标签的显示间隔，在类目轴中有效。参见axisTick.interval
            interval: 'auto',
            //刻度标签是否朝内，默认朝外。
            inside: false,
            //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            rotate: 0,
            //刻度标签与轴线之间的距离。
            margin: 8,
            /*
             刻度标签的内容格式器，支持字符串模板和回调函数两种形式。xAxis.axisLabel.formatter
             示例:
             // 使用字符串模板，模板变量为刻度默认标签 {value}
             formatter: '{value} kg'

             // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
             formatter: function (value, index) {
             // 格式化成月/日，只在第一个刻度显示年份
             var date = new Date(value);
             var texts = [(date.getMonth() + 1), date.getDate()];
             if (index === 0) {
             texts.unshift(date.getYear());
             }
             return texts.join('/');
             }
            */
            formatter: null,
            //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
            showMinLabel: null,
            //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）。
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        //坐标轴在 grid 区域中的分隔线。
        splitLine: {
            show: true,
            //坐标轴分隔线的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
            interval: 'auto',
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //坐标轴在 grid 区域中的分隔区域，默认不显示。
        splitArea: {
            //坐标轴分隔线的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
            interval: 'auto',
            show: false,
            //分隔区域的样式设置。
            areaStyle: {
                color: 'rgba(250,250,250,0)',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //类目数据，在类目轴（type: 'category'）中有效。
        /*
         示例：
         // 所有类目名称列表
         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
         // 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
         data: [{
         value: '周一',
         // 突出周一
         textStyle: {
         fontSize: 20,
         color: 'red'
         }
         }, '周二', '周三', '周四', '周五', '周六', '周日']
        */
        data: [{
            value: '...',
            textStyle: {
                color: '#fff',
                align: '...',
                baseline: '...',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        }],
        //坐标轴指示器配置项。具体参见polar.tooltip.axisPointer
        axisPointer: {
            /*
             默认不显示。但是如果 tooltip.trigger 设置为 'axis' 或者 tooltip.axisPointer.type 设置为 'cross'，则自动显示 axisPointer。
             坐标系会自动选择显示显示哪个轴的 axisPointer，也可以使用 tooltip.axisPointer.axis 改变这种选择。
            */
            show: false,
            //指示器类型。'line' 直线指示器|'shadow' 阴影指示器
            type: 'line',
            //坐标轴指示器是否自动吸附到点上。默认自动判断。这个功能在数值轴和时间轴上比较有意义，可以自动寻找细小的数值点。
            snap: '...',
            //坐标轴指示器的 z 值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖
            z: 0,
            label: {
                //是否显示文本标签。如果 tooltip.axisPointer.type 设置为 'cross' 则默认显示标签，否则默认不显示。
                show: false,
                //number, string 文本标签中数值的小数点精度。默认根据当前轴的值自动判断。也可以指定如 2 表示保留两位小数。
                precision: 'auto',
                /*
                 文本标签文字的格式化器。
                 如果为 string，可以是例如：formatter: 'some text {value} some text，其中 {value} 会被自动替换为轴的值。
                 如果为 function，可以是例如：
                 参数：
                 {Object} params: 含有：
                 {Object} params.value: 轴当前值，如果 axis.type 为 'category' 时，其值为 axis.data 里的数值。如果 axis.type 为 'time'，其值为时间戳。
                 {Array.<Object>} params.seriesData: 一个数组，是当前 axisPointer 最近的点的信息，每项内容为
                 {
                 componentType: 'series',
                 // 系列类型
                 seriesType: string,
                 // 系列在传入的 option.series 中的 index
                 seriesIndex: number,
                 // 系列名称
                 seriesName: string,
                 // 数据名，类目名
                 name: string,
                 // 数据在传入的 data 数组中的 index
                 dataIndex: number,
                 // 传入的原始数据项
                 data: Object,
                 // 传入的数据值
                 value: number|Array,
                 // 数据图形的颜色
                 color: string,

                 }
                 每项内容还包括轴的信息：
                 {
                 axisDim: 'x', // 'x', 'y', 'angle', 'radius', 'single'
                 axisId: 'xxx',
                 axisName: 'xxx',
                 axisIndex: 3,
                 axisValue: 121, // 当前 axisPointer 对应的 value。
                 axisValueLabel: '文本'
                 }
                 返回值：
                 显示的 string。
                 例如：
                 formatter: function (params) {
                 // 假设此轴的 type 为 'time'。
                 return 'some text' + echarts.format.formatTime(params.value);
                 }
                */
                formatter: null,
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: normal,
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
                padding: [5, 7, 5, 7],
                //文本标签的背景颜色，默认是和 axis.axisLine.lineStyle.color 相同。
                backgroundColor: 'auto',
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            //axisPointer.type 为 'line' 时有效。
            lineStyle: {
                //颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)'，如果想要加上 alpha 通道表示不透明度，
                // 可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'。
                // 除了纯色之外颜色也支持渐变色和纹理填充
                color: '#555',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            //axisPointer.type 为 'shadow' 时有效。
            shadowStyle: {
                /*
                 颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)'，如果想要加上 alpha 通道表示不透明度，
                 可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'。
                 除了纯色之外颜色也支持渐变色和纹理填充
                */
                color: 'rgba(150,150,150,0)',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            //是否触发 tooltip。如果不想触发 tooltip 可以关掉。
            triggerTooltip: true,
            //number 当前的 value。在使用 axisPointer.handle 时，可以设置此值进行初始值设定，从而决定 axisPointer 的初始位置。
            value: null,
            //boolean 当前的状态，可取值为 'show' 和 'hide'。
            status: '...',
            //拖拽手柄，适用于触屏的环境。
            handle: {
                //当 show 设为 true 时开启，这时显示手柄，并且 axisPointer 会一直显示。
                show: false,
                //手柄的图标。
                /*
                 可以通过 'path://' 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。
                 路径图形会自适应调整为合适（如果是 symbol 的话就是 symbolSize）的大小。路径的格式参见 SVG PathData。可以从 Adobe Illustrator 等工具编辑导出。
                 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。
                */
                icon: '...',
                //手柄的尺寸，可以设置单值，如 45，也可以设置为数组：[width, height]。
                size: 45,
                //手柄与轴的距离。注意，这是手柄中心点和轴的距离。
                margin: 50,
                color: '#333',
                //手柄拖拽时触发视图更新周期，单位毫秒，调大这个数值可以改善性能，但是降低体验。
                throttle: 40,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
                shadowOffsetY: 0,
            },
        },
        zlevel: 0,
        z: 0,
    },
    //直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。
    //参照xAxis
    yAxis: {
        show: true,
        gridIndex: 0,
        position: '...',
        offset: 0,
        type: 'value',
        name: '...',
        nameLocation: 'end',
        nameTextStyle: {
            color: '...',
            fontStyle: 'normal',
            fontWeight: normal,
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        nameGap: 15,
        nameRotate: null,
        inverse: false,
        boundaryGap: '...',
        min: null,
        max: null,
        scale: false,
        splitNumber: 5,
        minInterval: 0,
        interval: '...',
        logBase: 10,
        silent: false,
        triggerEvent: false,
        axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            inside: false,
            rotate: 0,
            margin: 8,
            formatter: null,
            showMinLabel: null,
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        splitArea: {
            interval: 'auto',
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0)'],
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        data: [{
            value: '...',
            textStyle: {
                color: '#fff',
                align: '...',
                baseline: '...',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        }],
        axisPointer: {
            show: false,
            type: 'line',
            snap: '...',
            z: '...',
            label: {
                show: false,
                precision: 'auto',
                formatter: null,
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: normal,
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
                padding: [5, 7, 5, 7],
                backgroundColor: 'auto',
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            lineStyle: {
                color: '#555',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            shadowStyle: {
                color: 'rgba(150,150,150,0)',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            triggerTooltip: true,
            value: null,
            status: '...',
            handle: {
                show: false,
                icon: '...',
                size: 45,
                margin: 50,
                color: '#333',
                throttle: 40,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
                shadowOffsetY: 0,
            },
        },
        zlevel: 0,
        z: 0,
    },
    //极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。
    polar: {
        /*
         所有图形的 zlevel 值。
         zlevel用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的zlevel。
         需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。
         zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
        */
        zlevel: 0,
        /*
         组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
         z相比zlevel优先级更低，而且不会创建新的 Canvas。
        */
        z: 2,
        /*
         极坐标系的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
         支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
         使用示例：
         // 设置成绝对的像素值
         center: [400, 300]
         // 设置成相对的百分比
         center: ['50%', '50%']
        */
        center: ['50%', '50%'],
        //极坐标系的半径，数组的第一项是内半径，第二项是外半径。
        //支持设置成百分比，相对于容器高宽中较小的一项的一半。
        radius: ['...'],
        //本坐标系特定的 tooltip 设定。
        /*
         提示框组件的通用介绍：
         提示框组件可以设置在多种地方：
         可以设置在全局，即 tooltip
         可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip
         可以设置在系列中，即 series.tooltip
         可以设置在系列的每个数据项中，即 series.data.tooltip
        */
        tooltip: {
            show: true,
            //触发类型。
            /*
             'item'
             数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
             'axis'
             坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
             支持在直角坐标系和极坐标系上的所有类型的轴。并且可以通过 axisPointer.axis 指定坐标轴。
             'none'
             什么都不触发。
            */
            trigger: 'item',
            //坐标轴指示器配置项。
            /*
             tooltip.axisPointer 是配置坐标轴指示器的快捷方式。
             实际上坐标轴指示器的全部功能，都可以通过轴上的 axisPointer 配置项完成（例如 xAxis.axisPointer 或 angleAxis.axisPointer）。
             但是使用 tooltip.axisPinter 在简单场景下会更方便一些。
             注意： tooltip.axisPointer 中诸配置项的优先级低于轴上的 axisPointer 的配置项。
             坐标轴指示器是指示坐标轴当前刻度的工具。
             如下例，鼠标悬浮到图上，可以出现标线和刻度文本。上例中，使用了 axisPointer.link 来关联不同的坐标系中的 axisPointer。
             坐标轴指示器也有适合触屏的交互方式，如下：
             坐标轴指示器在多轴的场景能起到辅助作用：
             注意： 一般来说，axisPointer 的具体配置项会配置在各个轴中（如 xAxis.axisPointer）或者 tooltip 中（如 tooltip.axisPointer）。
             但是这几个选项只能配置在全局的 axisPointer 中：axisPointer.triggerOn、axisPointer.link。
             如何显示 axisPointer：
             直角坐标系 grid、极坐标系 polar、单轴坐标系 single 中的每个轴都自己的 axisPointer。
             他们的 axisPointer 默认不显示。有两种方法可以让他们显示：
             设置轴上的 axisPointer.show（例如 xAxis.axisPointer.show）为 true，则显示此轴的 axisPointer。
             设置 tooltip.trigger 设置为 'axis' 或者 tooltip.axisPointer.type 设置为 'cross'，则此时坐标系会自动选择显示显示哪个轴的 axisPointer，也可以使用 tooltip.axisPointer.axis 改变这种选择。
             注意，轴上如果设置了 axisPointer，会覆盖此设置。
             如何显示 axisPointer 的 label：
             axisPointer 的 label 默认不显示（也就是默认只显示指示线），除非：
             设置轴上的 axisPointer.label.show（例如 xAxis.axisPointer.label.show）为 true，则显示此轴的 axisPointer 的 label。
             设置 tooltip.axisPointer.type 为 'cross' 时会自动显示 axisPointer 的 label。
             关于触屏的 axisPointer 的设置
             设置轴上的 axisPointer.handle.show（例如 xAxis.axisPointer.handle.show 为 true 则会显示出此 axisPointer 的拖拽按钮。（polar 坐标系暂不支持此功能）。
             注意： 如果发现此时 tooltip 效果不良好，可设置 tooltip.triggerOn 为 'none'（于是效果为：手指按住按钮则显示 tooltip，松开按钮则隐藏 tooltip），或者 tooltip.alwaysShowContent 为 true（效果为 tooltip 一直显示）。
             自动吸附到数据（snap）
             对于数值轴、时间轴，如果开启了 snap，则 axisPointer 会自动吸附到最近的点上。

             http://echarts.baidu.com/option.html#polar.tooltip.axisPointer
            */
            axisPointer: {
                type: 'line',
                //指示器的坐标轴。默认情况，坐标系会自动选择显示显示哪个轴的 axisPointer（默认取类目轴或者时间轴）。可以是 'x', 'y', 'radius', 'angle'。
                axis: 'auto',
                snap: '...',
                z: '...',
                label: {
                    //是否显示文本标签。如果 tooltip.axisPointer.type 设置为 'cross' 则默认显示标签，否则默认不显示。
                    show: false,
                    precision: 'auto',
                    //参照xAxis.axisPointer.label.formatter
                    formatter: null,
                    margin: 3,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                    padding: [5, 7, 5, 7],
                    backgroundColor: 'auto',
                    borderColor: null,
                    borderWidth: 0,
                    shadowBlur: 3,
                    shadowColor: '#aaa',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
                lineStyle: {
                    color: '#555',
                    width: 1,
                    type: solid,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                shadowStyle: {
                    color: 'rgba(150,150,150,0.3)',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                crossStyle: {
                    color: '#555',
                    width: 1,
                    type: dashed,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。
            //参见grid.tooltip.position
            position: '...',
            //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
            //参见grid.tooltip.formatter
            formatter: '...',
            backgroundColor: 'rgba(50,50,50,0.7)',
            borderColor: '#333',
            borderWidth: 0,
            padding: 5,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 14,
            },
            //额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            extraCssText: '...',
        },
    },
    //极坐标系的径向轴。
    radiusAxis: {
        //径向轴所在的极坐标系的索引，默认使用第一个极坐标系。
        polarIndex: 0,
        //坐标轴类型。参见xAxis.type
        type: 'value',
        //坐标轴名称
        name: '...',
        //坐标轴名称显示位置:'start'|'middle'|'end'
        nameLocation: 'end',
        //坐标轴名称的文字样式。
        nameTextStyle: {
            color: '...',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        //坐标轴名称与轴线之间的距离。
        nameGap: 15,
        nameRotate: null,
        inverse: false,
        boundaryGap: '...',
        min: null,
        max: null,
        scale: false,
        //坐标轴的分割段数 参见:xAxis.splitNumber
        splitNumber: 5,
        //只在数值轴中（type: 'value'）有效。
        minInterval: 0,
        //强制设置坐标轴分割间隔。一般不建议使用。参见:xAxis.interval
        interval: '...',
        //对数轴的底数，只在对数轴中（type: 'log'）有效。
        logBase: 10,
        silent: false,
        //坐标轴的标签是否响应和触发鼠标事件，默认不响应。参考:xAxis.triggerEvent
        triggerEvent: false,
        //坐标轴轴线相关设置.参见:xAxis.axisLine
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //坐标轴刻度相关设置。参见:xAxis.axisTick
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //坐标轴刻度标签的相关设置。参见:xAxis.axisLabel
        axisLabel: {
            show: true,
            interval: 'auto',
            inside: false,
            rotate: 0,
            margin: 8,
            formatter: null,
            showMinLabel: null,
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        //坐标轴在 grid 区域中的分隔线。参见:xAxis.splitLine
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //坐标轴在 grid 区域中的分隔区域，默认不显示。参见:xAxis.splitArea
        splitArea: {
            interval: 'auto',
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0)'],
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //类目数据，在类目轴（type: 'category'）中有效。参见:xAxis.data
        data: [{
            value: '...',
            textStyle: {
                color: '#fff',
                align: '...',
                baseline: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        }],
        //坐标轴指示器配置项。参考：xAxis.axisPointer 和grid.tooltip.axisPointer
        axisPointer: {
            show: false,
            type: 'line',
            snap: '...',
            z: '...',
            label: {
                show: false,
                precision: 'auto',
                formatter: null,
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
                padding: [5, 7, 5, 7],
                backgroundColor: 'auto',
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            lineStyle: {
                color: '#555',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            shadowStyle: {
                color: 'rgba(150,150,150,0)',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            triggerTooltip: true,
            value: null,
            status: '...',
            handle: {
                show: false,
                icon: '...',
                size: 45,
                margin: 50,
                color: '#333',
                throttle: 40,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
                shadowOffsetY: 0,
            },
        },
        zlevel: 0,
        z: 0,
    },
    //极坐标系的角度轴。
    angleAxis: {
        //角度轴所在的极坐标系的索引，默认使用第一个极坐标系。
        polarIndex: 0,
        //起始刻度的角度，缺省为 90 度，为圆心的正上方。0 度时起点为圆心的正右方。
        startAngle: 90,
        //刻度增长是否按顺时针，默认顺时针。
        clockwise: true,
        //坐标轴类型。参见xAxis.type
        type: 'category',
        //留白。参见参见xAxis.boundaryGap
        boundaryGap: '...',
        min: null,
        max: null,
        scale: false,
        splitNumber: 5,
        minInterval: 0,
        interval: '...',
        logBase: 10,
        //坐标轴是否是静态  无法交互。
        silent: false,
        //坐标轴的标签是否响应和触发鼠标事件，默认不响应。参考:xAxis.triggerEvent
        triggerEvent: false,
        //参考：radiusAxis.axisLine
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //参考：radiusAxis.axisTick
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //参考：radiusAxis.axisLabel
        axisLabel: {
            show: true,
            interval: 'auto',
            inside: false,
            margin: 8,
            formatter: null,
            showMinLabel: null,
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        //参考：radiusAxis.splitLine
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //参考：radiusAxis.splitArea
        splitArea: {
            interval: 'auto',
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0)'],
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        //参考：radiusAxis.data
        data: [{
            value: '...',
            textStyle: {
                color: '#fff',
                align: '...',
                baseline: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        }],
        //坐标轴指示器配置项。参考：xAxis.axisPointer 和grid.tooltip.axisPointer
        axisPointer: {
            show: false,
            type: 'line',
            snap: '...',
            z: '...',
            label: {
                show: false,
                precision: 'auto',
                formatter: null,
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
                padding: [5, 7, 5, 7],
                backgroundColor: 'auto',
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            lineStyle: {
                color: '#555',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            shadowStyle: {
                color: 'rgba(150,150,150,0)',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            triggerTooltip: true,
            value: null,
            status: '...',
            handle: {
                show: false,
                icon: '...',
                size: 45,
                margin: 50,
                color: '#333',
                throttle: 40,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
                shadowOffsetY: 0,
            },
        },
        zlevel: 0,
        z: 0,
    },
    //雷达图坐标系组件，只适用于雷达图。该组件等同 ECharts 2 中的 polar 组件。因为 3 中的 polar 被重构为标准的极坐标组件，为避免混淆，雷达图使用 radar 组件作为其坐标系。
    radar: {
        zlevel: 0,
        z: 2,
        center: ['50%', '50%'],
        radius: 75%,
        startAngle: 90,
        name: {
            show: true,
            formatter: '...',
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        },
        nameGap: 15,
        splitNumber: 5,
        //雷达图绘制类型，支持 'polygon' 和 'circle'。
        shape: 'polygon',
        scale: false,
        silent: false,
        triggerEvent: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisTick: {
            show: false,
            alignWithLabel: false,
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisLabel: {
            show: false,
            inside: false,
            rotate: 0,
            margin: 8,
            formatter: null,
            showMinLabel: null,
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0)'],
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        /*
         雷达图的指示器，用来指定雷达图中的多个变量（维度），如下示例。
         indicator: [
         { name: '销售（sales）', max: 6500},
         { name: '管理（Administration）', max: 16000},
         { name: '信息技术（Information Techology）', max: 30000},
         { name: '客服（Customer Support）', max: 38000},
         { name: '研发（Development）', max: 52000},
         { name: '市场（Marketing）', max: 25000}
         ]
        */
        indicator: [{
            //指示器名称。
            name: '...',
            //指示器的最大值，可选，建议设置
            max: '...',
            //指示器的最小值，可选，默认为 0。
            min: '...',
        }],
    },
    //dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
    /*
     现在支持这几种类型的 dataZoom 组件：
     内置型数据区域缩放组件（dataZoomInside）：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
     http://echarts.baidu.com/option.html#dataZoom-inside
     滑动条型数据区域缩放组件（dataZoomSlider）：有单独的滑动条，用户在滑动条上进行缩放或漫游。
     http://echarts.baidu.com/option.html#dataZoom-slider
     框选型数据区域缩放组件（dataZoomSelect）：提供一个选框进行数据区域缩放。即 toolbox.feature.dataZoom，配置项在 toolbox 中。
     http://echarts.baidu.com/option.html#toolbox.feature.dataZoom
     */
    dataZoom: [
        //内置型数据区域缩放组件（dataZoomInside）：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
        /*
         所谓『内置』，即内置在坐标系中。
         平移：在坐标系中滑动拖拽进行数据区域平移。
         缩放：
         PC端：鼠标在坐标系范围内滚轮滚动（MAC触控板类同）
         移动端：在移动端触屏上，支持两指滑动缩放。
         */
        {
            //dataZoom 组件类型
            type: 'inside',
            //是否停止组件的功能。
            disabled: false,
            //设置 dataZoom-inside 组件控制的 x轴（即xAxis，是直角坐标系中的概念，参见 grid）。number, Array
            /*
             不指定时，当 dataZoom-inside.orient 为 'horizontal'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。
             如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
             例如有如下 ECharts option：
             option: {
             xAxis: [
             {...}, // 第一个 xAxis
             {...}, // 第二个 xAxis
             {...}, // 第三个 xAxis
             {...}  // 第四个 xAxis
             ],
             dataZoom: [
             { // 第一个 dataZoom 组件
             xAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 xAxis
             },
             { // 第二个 dataZoom 组件
             xAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 xAxis
             }
             ]
             }
            */
            xAxisIndex: null,
            //设置 dataZoom-inside 组件控制的 y轴（即yAxis，是直角坐标系中的概念，参见 grid）。
            /*
             不指定时，当 dataZoom-inside.orient 为 'vertical'时，默认控制和 dataZoom 平行的第一个 yAxis。但是不建议使用默认值，建议显式指定。
             如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
             例如有如下 ECharts option：
             option: {
             yAxis: [
             {...}, // 第一个 yAxis
             {...}, // 第二个 yAxis
             {...}, // 第三个 yAxis
             {...}  // 第四个 yAxis
             ],
             dataZoom: [
             { // 第一个 dataZoom 组件
             yAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 yAxis
             },
             { // 第二个 dataZoom 组件
             yAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 yAxis
             }
             ]
             }
            */
            yAxisIndex: null,
            //设置 dataZoom-inside 组件控制的 radius 轴（即radiusAxis，是直角坐标系中的概念，参见 polar）。
            /*
             如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
             例如有如下 ECharts option：
             option: {
             radiusAxis: [
             {...}, // 第一个 radiusAxis
             {...}, // 第二个 radiusAxis
             {...}, // 第三个 radiusAxis
             {...}  // 第四个 radiusAxis
             ],
             dataZoom: [
             { // 第一个 dataZoom 组件
             radiusAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 radiusAxis
             },
             { // 第二个 dataZoom 组件
             radiusAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 radiusAxis
             }
             ]
             }
            */
            radiusAxisIndex: null,
            //设置 dataZoom-inside 组件控制的 angle 轴（即angleAxis，是直角坐标系中的概念，参见 polar）。
            /*
             如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
             例如有如下 ECharts option：
             option: {
             angleAxis: [
             {...}, // 第一个 angleAxis
             {...}, // 第二个 angleAxis
             {...}, // 第三个 angleAxis
             {...}  // 第四个 angleAxis
             ],
             dataZoom: [
             { // 第一个 dataZoom 组件
             angleAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 angleAxis
             },
             { // 第二个 dataZoom 组件
             angleAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 angleAxis
             }
             ]
             }
            */
            angleAxisIndex: null,
            //dataZoom 的运行原理是通过 数据过滤 来达到 数据窗口缩放 的效果。数据过滤模式的设置不同，效果也不同。
            /*
             可选值为：
             'filter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。
             'weakFilter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。
             'empty'：当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
             'none': 不过滤数据，只改变数轴范围。
             如何设置，由用户根据场景和需求自己决定。经验来说：
             当『只有 X 轴 或 只有 Y 轴受 dataZoom 组件控制』时，常使用 filterMode: 'filter'，这样能使另一个轴自适应过滤后的数值范围。
             当『X 轴 Y 轴分别受 dataZoom 组件控制』时：
             如果 X 轴和 Y 轴是『同等地位的、不应互相影响的』，比如在『双数值轴散点图』中，那么两个轴可都设为 fiterMode: 'empty'。
             如果 X 轴为主，Y 轴为辅，比如在『柱状图』中，需要『拖动 dataZoomX 改变 X 轴过滤柱子时，Y 轴的范围也自适应剩余柱子的高度』，『拖动 dataZoomY 改变 Y 轴过滤柱子时，X 轴范围不受影响』，那么就 X轴设为 fiterMode: 'filter'，Y 轴设为 fiterMode: 'empty'，即主轴 'filter'，辅轴 'empty'。
             下面是个具体例子：
             option = {
             dataZoom: [
             {
             id: 'dataZoomX',
             type: 'slider',
             xAxisIndex: [0],
             filterMode: 'filter'
             },
             {
             id: 'dataZoomY',
             type: 'slider',
             yAxisIndex: [0],
             filterMode: 'empty'
             }
             ],
             xAxis: {type: 'value'},
             yAxis: {type: 'value'},
             series{
             type: 'bar',
             data: [
             // 第一列对应 X 轴，第二列对应 Y 轴。
             [12, 24, 36],
             [90, 80, 70],
             [3, 9, 27],
             [1, 11, 111]
             ]
             }
             }
             上例中，dataZoomX 的 filterMode 设置为 'filter'。于是，假设当用户拖拽 dataZoomX（不去动 dataZoomY）导致其 valueWindow 变为 [2, 50] 时，dataZoomX 对 series.data 的第一列进行遍历，窗口外的整项去掉，最终得到的 series.data 为：
             [
             // 第一列对应 X 轴，第二列对应 Y 轴。
             [12, 24, 36],
             // [90, 80, 70] 整项被过滤掉，因为 90 在 dataWindow 之外。
             [3, 9, 27]
             // [1, 11, 111] 整项被过滤掉，因为 1 在 dataWindow 之外。
             ]
             过滤前，series.data 中对应 Y 轴的值有 24、80、9、11，过滤后，只剩下 24 和 9，那么 Y 轴的显示范围就会自动改变以适应剩下的这两个值的显示（如果 Y 轴没有被设置 min、max 固定其显示范围的话）。
             所以，filterMode: 'filter' 的效果是：过滤数据后使另外的轴也能自动适应当前数据的范围。
             再从头来，上例中 dataZoomY 的 filterMode 设置为 'empty'。于是，假设当用户拖拽 dataZoomY（不去动 dataZoomX）导致其 dataWindow 变为 [10, 60] 时，dataZoomY 对 series.data 的第二列进行遍历，窗口外的值被设置为 empty （即替换为 NaN，这样设置为空的项，其所对应柱形，在 X 轴还有占位，只是不显示出来）。最终得到的 series.data 为：
             [
             // 第一列对应 X 轴，第二列对应 Y 轴。
             [12, 24, 36],
             [90, NaN, 70], // 设置为 empty (NaN)
             [3, NaN, 27],  // 设置为 empty (NaN)
             [1, 11, 111]
             ]
             这时，series.data 中对应于 X 轴的值仍然全部保留不受影响，为 12、90、3、1。那么用户对 dataZoomY 的拖拽操作不会影响到 X 轴的范围。这样的效果，对于离群点（outlier）过滤功能，比较清晰。
            */
            filterMode: 'filter',
            //数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。
            start: 0,
            //dataZoom-inside.start 和 dataZoom-inside.end 共同用 百分比 的形式定义了数据窗口范围。
            end: 100,
            //数据窗口范围的起始数值。如果设置了 dataZoom-inside.start 则 startValue 失效。
            startValue: null,
            //dataZoom-inside.startValue 和 dataZoom-inside.endValue 共同用 绝对数值 的形式定义了数据窗口范围。
            /*
             注意，如果轴的类型为 category，则 startValue 既可以设置为 axis.data 数组的 index，也可以设置为数组值本身。 但是如果设置为数组值本身，会在内部自动转化为数组的 index。
            */
            endValue: null,
            //用于限制窗口大小的最小值（百分比值），取值范围是 0 ~ 100。如果设置了 dataZoom-inside.minValueSpan 则 minSpan 失效。
            minSpan: null,
            //用于限制窗口大小的最大值（百分比值），取值范围是 0 ~ 100。
            maxSpan: null,
            //用于限制窗口大小的最小值（实际数值）。如在时间轴上可以设置为：3600 * 24 * 1000 * 5 表示 5 天。 在类目轴上可以设置为 5 表示 5 个类目。
            minValueSpan: null,
            //用于限制窗口大小的最大值（实际数值）。
            maxValueSpan: null,
            //布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。'horizontal'：水平|'vertical'：竖直。
            orient: null,
            //是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
            zoomLock: false,
            //设置触发视图刷新的频率。单位为毫秒（ms）。
            //如果 animation 设为 true 且 animationDurationUpdate 大于 0，可以保持 throttle 为默认值 100（或者设置为大于 0 的值），否则拖拽时有可能画面感觉卡顿。
            //如果 animation 设为 false 或者 animationDurationUpdate 设为 0，且在数据量不大时，拖拽时画面感觉卡顿，可以把尝试把 throttle 设为 0 来改善。
            throttle: 100,
            //触发缩放的方式
            /*
             true：表示不按任何功能键，鼠标移动能触发数据窗口平移。
             false：表示鼠标滚轮不能触发缩放。
             'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。
             'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。
             'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
            */
            zoomOnMouseWheel: true,
            //触发数据窗口平移
            /*
             true：表示不按任何功能键，鼠标移动能触发数据窗口平移。
             false：表示鼠标滚轮不能触发缩放。
             'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。
             'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。
             'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
             */
            moveOnMouseMove: true,
            //是否阻止 mousemove 事件的默认行为。
            preventDefaultMouseMove: true,
        },
        //滑动条型数据区域缩放组件（dataZoomSlider）：有单独的滑动条，用户在滑动条上进行缩放或漫游。
        {
            type: 'slider',
            show: true,
            backgroundColor: 'rgba(47,69,84,0)',
            //数据阴影的样式。
            dataBackground: {
                //阴影的线条样式
                lineStyle: {
                    color: '#2f4554',
                    width: 0.5,
                    type: solid,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 0.3,
                },
                //阴影的填充样式
                areaStyle: {
                    color: rgba(47,69,84,0.3),
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 0.3,
                },
            },
            fillerColor: 'rgba(167,183,204,0.4)',
            borderColor: '#ddd',
            handleIcon: '...',
            handleSize: '100%',
            handleStyle: {
                color: '#a7b7cc',
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            labelPrecision: 'auto',
            labelFormatter: null,
            showDetail: true,
            showDataShadow: 'auto',
            realtime: true,
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
            xAxisIndex: null,
            yAxisIndex: null,
            radiusAxisIndex: null,
            angleAxisIndex: null,
            filterMode: 'filter',
            start: 0,
            end: 100,
            startValue: null,
            endValue: null,
            minSpan: null,
            maxSpan: null,
            minValueSpan: null,
            maxValueSpan: null,
            orient: null,
            zoomLock: false,
            throttle: 100,
            zlevel: 0,
            z: 2,
            left: 'auto',
            top: 'auto',
            right: 'auto',
            bottom: 'auto',
        },
    ],
    visualMap: [
        {
            type: continuous,
            min: '...',
            max: '...',
            range: ['...'],
            calculable: false,
            realtime: true,
            inverse: false,
            precision: 0,
            itemWidth: 20,
            itemHeight: 140,
            align: 'auto',
            text: null,
            textGap: 10,
            show: true,
            dimension: '...',
            seriesIndex: '...',
            hoverLink: true,
            inRange: {...},
            outOfRange: {...},
            controller: {
                inRange: {...},
                outOfRange: {...},
            },
            zlevel: 0,
            z: 4,
            left: 0,
            top: auto,
            right: auto,
            bottom: 0,
            orient: 'vertical',
            padding: 5,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',
            borderWidth: 0,
            color: ['#bf444c', '#d88273'],
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
            formatter: '...',
        },
        {
            type: piecewise,
            splitNumber: 5,
            pieces: ['...'],
            categories: ['...'],
            min: '...',
            max: '...',
            minOpen: '...',
            maxOpen: '...',
            selectedMode: 'multiple',
            inverse: false,
            precision: null,
            itemWidth: 20,
            itemHeight: 14,
            align: 'auto',
            text: null,
            textGap: 10,
            showLabel: '...',
            itemGap: 10,
            itemSymbol: 'roundRect',
            show: true,
            dimension: '...',
            seriesIndex: '...',
            hoverLink: true,
            inRange: {...},
            outOfRange: {...},
            controller: {
                inRange: {...},
                outOfRange: {...},
            },
            zlevel: 0,
            z: 4,
            left: 0,
            top: auto,
            right: auto,
            bottom: 0,
            orient: 'vertical',
            padding: 5,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',
            borderWidth: 0,
            color: ['#bf444c', '#d88273'],
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
            formatter: '...',
        },
    ],
    tooltip: {
        show: true,
        trigger: 'item',
        axisPointer: {
            type: 'line',
            axis: 'auto',
            snap: '...',
            z: '...',
            label: {
                show: false,
                precision: 'auto',
                formatter: null,
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
                padding: [5, 7, 5, 7],
                backgroundColor: 'auto',
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            lineStyle: {
                color: '#555',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            shadowStyle: {
                color: 'rgba(150,150,150,0....,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            crossStyle: {
                color: '#555',
                width: 1,
                type: dashed,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        showContent: true,
        alwaysShowContent: false,
        triggerOn: 'mousemove|click',
        showDelay: 0,
        hideDelay: 100,
        enterable: false,
        confine: false,
        transitionDuration: 0.4,
        position: '...',
        formatter: '...',
        backgroundColor: 'rgba(50,50,50,0.7)',
        borderColor: '#333',
        borderWidth: 0,
        padding: 5,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        },
        extraCssText: '...',
    },
    axisPointer: {
        show: false,
        type: 'line',
        snap: '...',
        z: '...',
        label: {
            show: false,
            precision: 'auto',
            formatter: null,
            margin: 3,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
            padding: [5, 7, 5, 7],
            backgroundColor: 'auto',
            borderColor: null,
            borderWidth: 0,
            shadowBlur: 3,
            shadowColor: '#aaa',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
        },
        lineStyle: {
            color: '#555',
            width: 1,
            type: solid,
            shadowBlur: '...',
            shadowColor: '...',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: '...',
        },
        shadowStyle: {
            color: 'rgba(150,150,150,0....,
            shadowBlur: '...',
            shadowColor: '...',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: '...',
        },
        triggerTooltip: true,
        value: null,
        status: '...',
        handle: {
            show: false,
            icon: '...',
            size: 45,
            margin: 50,
            color: '#333',
            throttle: 40,
            shadowBlur: 3,
            shadowColor: '#aaa',
            shadowOffsetX: 2,
            shadowOffsetY: 0,
        },
        link: ['...'],
        triggerOn: 'mousemove|click',
    },
    toolbox: {
        show: true,
        orient: 'horizontal',
        itemSize: 15,
        itemGap: 10,
        showTitle: true,
        feature: {
            saveAsImage: {
                type: 'png',
                name: '...',
                backgroundColor: 'auto',
                excludeComponents: ['toolbox'],
                show: true,
                title: '保存为图片',
                icon: '...',
                iconStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#666',
                        borderWidth: 1,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        textPosition: '...',
                        textAlign: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                pixelRatio: 1,
            },
            restore: {
                show: true,
                title: '还原',
                icon: '...',
                iconStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#666',
                        borderWidth: 1,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        textPosition: '...',
                        textAlign: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
            },
            dataView: {
                show: true,
                title: '数据视图',
                icon: '...',
                iconStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#666',
                        borderWidth: 1,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        textPosition: '...',
                        textAlign: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                readOnly: false,
                optionToContent: Function,
                contentToOption: Function,
                lang: ['数据视图', '关闭', '刷新'],
                backgroundColor: '#fff',
                textareaColor: '#fff',
                textareaBorderColor: '#333',
                textColor: '#000',
                buttonColor: '#c23531',
                buttonTextColor: '#fff',
            },
            dataZoom: {
                show: true,
                title: {
                    zoom: '区域缩放',
                    back: '区域缩放还原',
                },
                icon: {
                    zoom: '...',
                    back: '...',
                },
                iconStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#666',
                        borderWidth: 1,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        textPosition: '...',
                        textAlign: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                xAxisIndex: '...',
                yAxisIndex: '...',
            },
            magicType: {
                show: true,
                type: ['...'],
                title: {
                    line: '切换为折线图',
                    bar: '切换为柱状图',
                    stack: '切换为堆叠',
                    tiled: '切换为平铺',
                },
                icon: {
                    line: '...',
                    bar: '...',
                    stack: '...',
                    tiled: '...',
                },
                iconStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#666',
                        borderWidth: 1,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        textPosition: '...',
                        textAlign: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                option: {
                    line: {...},
                    bar: {...},
                    stack: {...},
                    tiled: {...},
                },
                seriesIndex: {
                    line: ['...'],
                    bar: ['...'],
                    stack: ['...'],
                    tiled: ['...'],
                },
            },
            brush: {
                type: ['...'],
                icon: {
                    rect: '...',
                    polygon: '...',
                    lineX: '...',
                    lineY: '...',
                    keep: '...',
                    clear: '...',
                },
                title: {
                    rect: '矩形选择',
                    polygon: '圈选',
                    lineX: '横向选择',
                    lineY: '纵向选择',
                    keep: '保持选择',
                    clear: '清除选择',
                },
            },
        },
        iconStyle: {
            normal: {
                color: 自适应,
                borderColor: '#666',
                borderWidth: 1,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
                textPosition: '...',
                textAlign: '...',
            },
            emphasis: {
                color: 自适应,
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        zlevel: 0,
        z: 2,
        left: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        width: 'auto',
        height: 'auto',
    },
    brush: {
        toolbox: ['rect', 'polygon', ],
        brushLink: null,
        seriesIndex: 'all',
        geoIndex: null,
        xAxisIndex: null,
        yAxisIndex: null,
        brushType: 'rect',
        brushMode: 'single',
        transformable: true,
        brushStyle: {...},
        throttleType: 'fixRate',
        throttleDelay: 0,
        removeOnClick: true,
        inBrush: {...},
        outOfBrush: {...},
        z: 10000,
    },
    geo: {
        show: true,
        map: '',
        roam: false,
        center: ['...'],
        aspectScale: 0.75,
        boundingCoords: null,
        zoom: 1,
        scaleLimit: {
            min: '...',
            max: '...',
        },
        nameMap: {...},
        selectedMode: false,
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
            },
        },
        itemStyle: {
            normal: {
                color: 自适应,
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            emphasis: {
                color: 自适应,
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        zlevel: 0,
        z: 2,
        left: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        layoutCenter: null,
        layoutSize: '...',
        regions: [{
            name: '...',
            selected: false,
            itemStyle: {
                normal: {
                    areaColor: '...',
                    color: 自适应,
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                emphasis: {
                    areaColor: '...',
                    color: 自适应,
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
            },
        }],
        silent: false,
    },
    parallel: {
        zlevel: 0,
        z: 2,
        left: 80,
        top: 60,
        right: 80,
        bottom: 60,
        width: 'auto',
        height: 'auto',
        layout: 'horizontal',
        axisExpandable: false,
        axisExpandCenter: null,
        axisExpandCount: 0,
        axisExpandWidth: 50,
        axisExpandTriggerOn: 'click',
        parallelAxisDefault: {
            type: value,
            name: '...',
            nameLocation: 'end',
            nameTextStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
            nameGap: 15,
            nameRotate: null,
            inverse: false,
            boundaryGap: '...',
            min: null,
            max: null,
            scale: false,
            splitNumber: 5,
            minInterval: 0,
            interval: '...',
            logBase: 10,
            silent: false,
            triggerEvent: false,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333',
                    width: 1,
                    type: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            axisTick: {
                show: true,
                alignWithLabel: false,
                interval: 'auto',
                inside: false,
                length: 5,
                lineStyle: {
                    color: '...',
                    width: 1,
                    type: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            axisLabel: {
                show: true,
                interval: 'auto',
                inside: false,
                rotate: 0,
                margin: 8,
                formatter: null,
                showMinLabel: null,
                showMaxLabel: null,
                textStyle: {
                    color: '...',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                    align: '...',
                    baseline: '...',
                },
            },
            data: [{
                value: '...',
                textStyle: {
                    color: '#fff',
                    align: '...',
                    baseline: '...',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
            }],
        },
    },
    parallelAxis: {
        dim: '...',
        parallelIndex: 0,
        realtime: true,
        areaSelectStyle: {
            width: 20,
            borderWidth: 1,
            borderColor: 'rgba(160,197,232)',
            color: 'rgba(160,197,232)',
            opacity: 0.3,
        },
        type: value,
        name: '...',
        nameLocation: 'end',
        nameTextStyle: {
            color: '...',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        nameGap: 15,
        nameRotate: null,
        inverse: false,
        boundaryGap: '...',
        min: null,
        max: null,
        scale: false,
        splitNumber: 5,
        minInterval: 0,
        interval: '...',
        logBase: 10,
        silent: false,
        triggerEvent: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            inside: false,
            rotate: 0,
            margin: 8,
            formatter: null,
            showMinLabel: null,
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        data: [{
            value: '...',
            textStyle: {
                color: '#fff',
                align: '...',
                baseline: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        }],
    },
    singleAxis: {
        zlevel: 0,
        z: 2,
        left: '5%',
        top: '5%',
        right: '5%',
        bottom: '5%',
        width: 'auto',
        height: 'auto',
        orient: 'horizontal',
        type: 'value',
        name: '...',
        nameLocation: 'end',
        nameTextStyle: {
            color: '...',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        nameGap: 15,
        nameRotate: null,
        inverse: false,
        boundaryGap: '...',
        min: null,
        max: null,
        scale: false,
        splitNumber: 5,
        minInterval: 0,
        interval: '...',
        logBase: 10,
        silent: false,
        triggerEvent: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                color: '...',
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            inside: false,
            rotate: 0,
            margin: 8,
            formatter: null,
            showMinLabel: null,
            showMaxLabel: null,
            textStyle: {
                color: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: '...',
                baseline: '...',
            },
        },
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        splitArea: {
            interval: 'auto',
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0)'],
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        data: [{
            value: '...',
            textStyle: {
                color: '#fff',
                align: '...',
                baseline: '...',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        }],
        axisPointer: {
            show: false,
            type: 'line',
            snap: '...',
            z: '...',
            label: {
                show: false,
                precision: 'auto',
                formatter: null,
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
                padding: [5, 7, 5, 7],
                backgroundColor: 'auto',
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            lineStyle: {
                color: '#555',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            shadowStyle: {
                color: 'rgba(150,150,150,0....,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            triggerTooltip: true,
            value: null,
            status: '...',
            handle: {
                show: false,
                icon: '...',
                size: 45,
                margin: 50,
                color: '#333',
                throttle: 40,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
                shadowOffsetY: 0,
            },
        },
        tooltip: {
            show: true,
            trigger: 'item',
            axisPointer: {
                type: 'line',
                axis: 'auto',
                snap: '...',
                z: '...',
                label: {
                    show: false,
                    precision: 'auto',
                    formatter: null,
                    margin: 3,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                    padding: [5, 7, 5, 7],
                    backgroundColor: 'auto',
                    borderColor: null,
                    borderWidth: 0,
                    shadowBlur: 3,
                    shadowColor: '#aaa',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
                lineStyle: {
                    color: '#555',
                    width: 1,
                    type: solid,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                shadowStyle: {
                    color: 'rgba(150,150,150,0....,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                crossStyle: {
                    color: '#555',
                    width: 1,
                    type: dashed,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            position: '...',
            formatter: '...',
            backgroundColor: 'rgba(50,50,50,0.7)',
            borderColor: '#333',
            borderWidth: 0,
            padding: 5,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 14,
            },
            extraCssText: '...',
        },
    },
    timeline: {
        show: true,
        type: 'slider',
        axisType: 'time',
        currentIndex: 0,
        autoPlay: false,
        rewind: false,
        loop: true,
        playInterval: 2000,
        realtime: true,
        controlPosition: 'left',
        zlevel: 0,
        z: 2,
        left: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        padding: 5,
        orient: 'horizontal',
        inverse: false,
        symbol: 'emptyCircle',
        symbolSize: 10,
        symbolRotate: '...',
        symbolOffset: [0, 0],
        lineStyle: {
            show: true,
            color: '#304654',
            width: 2,
            type: solid,
            shadowBlur: '...',
            shadowColor: '...',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: '...',
        },
        label: {
            normal: {
                position: 'auto',
                show: true,
                interval: 'auto',
                rotate: 0,
                formatter: null,
                textStyle: {
                    color: '#304654',
                    align: '...',
                    baseline: '...',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
            },
            emphasis: {
                show: true,
                interval: 'auto',
                rotate: 0,
                formatter: null,
                textStyle: {
                    color: '#c23531',
                    align: '...',
                    baseline: '...',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                },
            },
        },
        itemStyle: {
            normal: {
                color: '#304654',
                borderColor: '#000',
                borderWidth: 1,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
            emphasis: {
                color: '#c23531',
                borderColor: '#000',
                borderWidth: 1,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        checkpointStyle: {
            symbol: 'circle',
            symbolSize: 13,
            symbolRotate: '...',
            symbolOffset: [0, 0],
            color: '#c23531',
            borderWidth: 5,
            borderColor: 'rgba(194,53,49, 0.5)',
            animation: true,
            animationDuration: 300,
            animationEasing: 'quinticInOut',
        },
        controlStyle: {
            show: true,
            showPlayBtn: true,
            showPrevBtn: true,
            showNextBtn: true,
            itemSize: 22,
            itemGap: 12,
            position: 'left',
            playIcon: '...',
            stopIcon: '...',
            prevIcon: '...',
            nextIcon: '...',
            normal: {
                color: '#304654',
                borderColor: '#304654',
                borderWidth: 1,
            },
            emphasis: {
                color: '#c23531',
                borderColor: '#c23531',
                borderWidth: 2,
            },
        },
        data: ['...'],
    },
    graphic: {
        elements: [
            {
                type: group,
                id: undefined,
                $action: 'merge',
                left: undefined,
                right: undefined,
                top: undefined,
                bottom: undefined,
                bounding: 'all',
                z: 0,
                zlevel: 0,
                silent: false,
                invisible: false,
                cursor: 'pointer',
                draggable: false,
                progressive: false,
                width: 0,
                height: 0,
                children: ['...'],
                onclick: Function,
                onmouseover: Function,
                onmouseout: Function,
                onmousemove: Function,
                onmousewheel: Function,
                onmousedown: Function,
                onmouseup: Function,
                ondrag: Function,
                ondragstart: Function,
                ondragend: Function,
                ondragenter: Function,
                ondragleave: Function,
                ondragover: Function,
                ondrop: Function,
            },
            {
                type: image,
                id: undefined,
                $action: 'merge',
                left: undefined,
                right: undefined,
                top: undefined,
                bottom: undefined,
                bounding: 'all',
                z: 0,
                zlevel: 0,
                silent: false,
                invisible: false,
                cursor: 'pointer',
                draggable: false,
                progressive: false,
                style: {
                    image: '...',
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    fill: '#000',
                    stroke: null,
                    lineWidth: 0,
                    shadowBlur: undefined,
                    shadowOffsetX: undefined,
                    shadowOffsetY: undefined,
                    shadowColor: undefined,
                },
                onclick: Function,
                onmouseover: Function,
                onmouseout: Function,
                onmousemove: Function,
                onmousewheel: Function,
                onmousedown: Function,
                onmouseup: Function,
                ondrag: Function,
                ondragstart: Function,
                ondragend: Function,
                ondragenter: Function,
                ondragleave: Function,
                ondragover: Function,
                ondrop: Function,
            },
            {
                type: text,
                id: undefined,
                $action: 'merge',
                left: undefined,
                right: undefined,
                top: undefined,
                bottom: undefined,
                bounding: 'all',
                z: 0,
                zlevel: 0,
                silent: false,
                invisible: false,
                cursor: 'pointer',
                draggable: false,
                progressive: false,
                style: {
                    text: '',
                    x: 0,
                    y: 0,
                    font: '...',
                    textAlign: 'left',
                    textVerticalAlign: '...',
                    fill: '#000',
                    stroke: null,
                    lineWidth: 0,
                    shadowBlur: undefined,
                    shadowOffsetX: undefined,
                    shadowOffsetY: undefined,
                    shadowColor: undefined,
                },
                onclick: Function,
                onmouseover: Function,
                onmouseout: Function,
                onmousemove: Function,
                onmousewheel: Function,
                onmousedown: Function,
                onmouseup: Function,
                ondrag: Function,
                ondragstart: Function,
                ondragend: Function,
                ondragenter: Function,
                ondragleave: Function,
                ondragover: Function,
                ondrop: Function,
            },
            {type: 'rect', '...'},
            {type: 'circle', '...'},
            {type: 'ring', '...'},
            {type: 'sector', '...'},
            {type: 'arc', '...'},
            {type: 'polygon', '...'},
            {type: 'polyline', '...'},
            {type: 'line', '...'},
            {type: 'bezierCurve', '...'},
        ],
    },
    calendar: {
        zlevel: 0,
        z: 2,
        left: 80,
        top: 60,
        right: 'auto',
        bottom: 'auto',
        width: auto,
        height: auto,
        range: '...',
        cellSize: 20,
        orient: 'horizontal',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 1,
                type: solid,
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor: '#ccc',
                borderWidth: 1,
                borderType: 'solid',
                shadowBlur: '...',
                shadowColor: '...',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: '...',
            },
        },
        dayLabel: {
            show: true,
            firstDay: 0,
            margin: 0,
            position: 'start',
            nameMap: 'en',
            textStyle: {
                color: '#000',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        },
        monthLabel: {
            show: true,
            align: 'center',
            margin: 5,
            position: 'start',
            nameMap: 'en',
            formatter: null,
            textStyle: {
                color: '#000',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        },
        yearLabel: {
            show: true,
            margin: 30,
            position: '...',
            formatter: null,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
            },
        },
        silent: false,
    },
    series: [
        {
            type: 'line',
            name: '...',
            coordinateSystem: 'cartesian2d',
            xAxisIndex: 0,
            yAxisIndex: 0,
            polarIndex: 0,
            symbol: 'emptyCircle',
            symbolSize: 4,
            symbolRotate: '...',
            symbolOffset: [0, 0],
            showSymbol: true,
            showAllSymbol: false,
            hoverAnimation: true,
            legendHoverLink: true,
            stack: null,
            cursor: 'pointer',
            connectNulls: false,
            clipOverflow: true,
            step: false,
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    offset: ['...'],
                    formatter: '...',
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
                emphasis: {
                    show: false,
                    position: '...',
                    offset: ['...'],
                    formatter: '...',
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: 自适应,
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                emphasis: {
                    color: 自适应,
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            lineStyle: {
                normal: {
                    color: '#000',
                    width: 2,
                    type: solid,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            areaStyle: {
                normal: {
                    color: '#000',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            smooth: false,
            smoothMonotone: '...',
            sampling: '...',
            dimensions: ['...'],
            encode: {...},
            data: [{
                name: '...',
                value: '...',
                symbol: 'circle',
                symbolSize: 4,
                symbolRotate: '...',
                symbolOffset: [0, 0],
                label: {
                    normal: {
                        show: false,
                        position: top,
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                tooltip: {
                    position: '...',
                    formatter: '...',
                    backgroundColor: 'rgba(50,50,50,0.7)',
                    borderColor: '#333',
                    borderWidth: 0,
                    padding: 5,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 14,
                    },
                    extraCssText: '...',
                },
            }],
            markPoint: {
                symbol: 'pin',
                symbolSize: 50,
                symbolRotate: '...',
                symbolOffset: [0, 0],
                silent: false,
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        offset: ['...'],
                        formatter: '...',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        formatter: '...',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                data: [{
                    name: '',
                    type: '...',
                    valueIndex: '...',
                    valueDim: '...',
                    coord: ['...'],
                    x: '...',
                    y: '...',
                    value: '...',
                    symbol: '...',
                    symbolSize: '...',
                    symbolRotate: '...',
                    symbolOffset: [0, 0],
                    itemStyle: {
                        normal: {
                            color: 自适应,
                            borderColor: '#000',
                            borderWidth: 0,
                            borderType: 'solid',
                            shadowBlur: '...',
                            shadowColor: '...',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: '...',
                        },
                        emphasis: {
                            color: 自适应,
                            borderColor: '#000',
                            borderWidth: 0,
                            borderType: 'solid',
                            shadowBlur: '...',
                            shadowColor: '...',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: '...',
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: '...',
                            offset: ['...'],
                            textStyle: {
                                color: '#fff',
                                fontStyle: 'normal',
                                fontWeight: normal,
                                fontFamily: 'sans-serif',
                                fontSize: 12,
                            },
                        },
                        emphasis: {
                            show: false,
                            position: '...',
                            offset: ['...'],
                            textStyle: {
                                color: '#fff',
                                fontStyle: 'normal',
                                fontWeight: normal,
                                fontFamily: 'sans-serif',
                                fontSize: 12,
                            },
                        },
                    },
                }],
                animation: true,
                animationThreshold: 2000,
                animationDuration: 1000,
                animationEasing: cubicOut,
                animationDelay: 0,
                animationDurationUpdate: 300,
                animationEasingUpdate: cubicOut,
                animationDelayUpdate: 0,
            },
            markLine: {
                silent: false,
                symbol: '...',
                symbolSize: '...',
                precision: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'end',
                        formatter: '...',
                    },
                    emphasis: {
                        show: true,
                        position: 'end',
                        formatter: '...',
                    },
                },
                lineStyle: {
                    normal: {
                        color: 自适应,
                        width: 1,
                        type: solid,
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        curveness: 0,
                    },
                    emphasis: {
                        color: '#000',
                        width: 1,
                        type: solid,
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                data: {
                    0: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        symbol: '...',
                        symbolSize: '...',
                        symbolRotate: '...',
                        symbolOffset: [0, 0],
                        lineStyle: {
                            normal: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                            emphasis: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                            emphasis: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                        },
                    },
                    1: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        symbol: '...',
                        symbolSize: '...',
                        symbolRotate: '...',
                        symbolOffset: [0, 0],
                        lineStyle: {
                            normal: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                            emphasis: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                            emphasis: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                        },
                    },
                },
                animation: true,
                animationThreshold: 2000,
                animationDuration: 1000,
                animationEasing: cubicOut,
                animationDelay: 0,
                animationDurationUpdate: 300,
                animationEasingUpdate: cubicOut,
                animationDelayUpdate: 0,
            },
            markArea: {
                silent: false,
                label: {
                    normal: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                data: {
                    0: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        itemStyle: {
                            normal: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                            emphasis: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                                position: '...',
                                offset: ['...'],
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: normal,
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: false,
                                position: '...',
                                offset: ['...'],
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: normal,
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                },
                            },
                        },
                    },
                    1: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        itemStyle: {
                            normal: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                            emphasis: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                                position: '...',
                                offset: ['...'],
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: normal,
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: false,
                                position: '...',
                                offset: ['...'],
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: normal,
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                },
                            },
                        },
                    },
                },
                animation: false,
                animationThreshold: 2000,
                animationDuration: 1000,
                animationEasing: cubicOut,
                animationDelay: 0,
                animationDurationUpdate: 300,
                animationEasingUpdate: cubicOut,
                animationDelayUpdate: 0,
            },
            zlevel: 0,
            z: 2,
            silent: false,
            animation: true,
            animationThreshold: 2000,
            animationDuration: 1000,
            animationEasing: linear,
            animationDelay: 0,
            animationDurationUpdate: 300,
            animationEasingUpdate: cubicOut,
            animationDelayUpdate: 0,
            tooltip: {
                position: '...',
                formatter: '...',
                backgroundColor: 'rgba(50,50,50,0.7)',
                borderColor: '#333',
                borderWidth: 0,
                padding: 5,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: normal,
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                },
                extraCssText: '...',
            },
        },
        {
            type: 'bar',
            name: '...',
            legendHoverLink: true,
            coordinateSystem: 'cartesian2d',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    offset: ['...'],
                    formatter: '...',
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
                emphasis: {
                    show: false,
                    position: '...',
                    offset: ['...'],
                    formatter: '...',
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: 自适应,
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    barBorderRadius: 0,
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
                emphasis: {
                    color: 自适应,
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: '...',
                    shadowColor: '...',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: '...',
                },
            },
            stack: null,
            cursor: 'pointer',
            barWidth: 自适应,
            barMaxWidth: 自适应,
            barMinHeight: 0,
            barGap: 30%,
            barCategoryGap: '20%',
            dimensions: ['...'],
            encode: {...},
            data: [{
                name: '...',
                value: '...',
                label: {
                    normal: {
                        show: false,
                        position: inside,
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        barBorderRadius: 0,
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                tooltip: {
                    position: '...',
                    formatter: '...',
                    backgroundColor: 'rgba(50,50,50,0.7)',
                    borderColor: '#333',
                    borderWidth: 0,
                    padding: 5,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: normal,
                        fontFamily: 'sans-serif',
                        fontSize: 14,
                    },
                    extraCssText: '...',
                },
            }],
            markPoint: {
                symbol: 'pin',
                symbolSize: 50,
                symbolRotate: '...',
                symbolOffset: [0, 0],
                silent: false,
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        offset: ['...'],
                        formatter: '...',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        formatter: '...',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                data: [{
                    name: '',
                    type: '...',
                    valueIndex: '...',
                    valueDim: '...',
                    coord: ['...'],
                    x: '...',
                    y: '...',
                    value: '...',
                    symbol: '...',
                    symbolSize: '...',
                    symbolRotate: '...',
                    symbolOffset: [0, 0],
                    itemStyle: {
                        normal: {
                            color: 自适应,
                            borderColor: '#000',
                            borderWidth: 0,
                            borderType: 'solid',
                            shadowBlur: '...',
                            shadowColor: '...',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: '...',
                        },
                        emphasis: {
                            color: 自适应,
                            borderColor: '#000',
                            borderWidth: 0,
                            borderType: 'solid',
                            shadowBlur: '...',
                            shadowColor: '...',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: '...',
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                            position: '...',
                            offset: ['...'],
                            textStyle: {
                                color: '#fff',
                                fontStyle: 'normal',
                                fontWeight: normal,
                                fontFamily: 'sans-serif',
                                fontSize: 12,
                            },
                        },
                        emphasis: {
                            show: false,
                            position: '...',
                            offset: ['...'],
                            textStyle: {
                                color: '#fff',
                                fontStyle: 'normal',
                                fontWeight: normal,
                                fontFamily: 'sans-serif',
                                fontSize: 12,
                            },
                        },
                    },
                }],
                animation: true,
                animationThreshold: 2000,
                animationDuration: 1000,
                animationEasing: cubicOut,
                animationDelay: 0,
                animationDurationUpdate: 300,
                animationEasingUpdate: cubicOut,
                animationDelayUpdate: 0,
            },
            markLine: {
                silent: false,
                symbol: '...',
                symbolSize: '...',
                precision: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'end',
                        formatter: '...',
                    },
                    emphasis: {
                        show: true,
                        position: 'end',
                        formatter: '...',
                    },
                },
                lineStyle: {
                    normal: {
                        color: 自适应,
                        width: 1,
                        type: solid,
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                        curveness: 0,
                    },
                    emphasis: {
                        color: '#000',
                        width: 1,
                        type: solid,
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                data: {
                    0: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        symbol: '...',
                        symbolSize: '...',
                        symbolRotate: '...',
                        symbolOffset: [0, 0],
                        lineStyle: {
                            normal: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                            emphasis: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                            emphasis: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                        },
                    },
                    1: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        symbol: '...',
                        symbolSize: '...',
                        symbolRotate: '...',
                        symbolOffset: [0, 0],
                        lineStyle: {
                            normal: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                            emphasis: {
                                color: '#000',
                                width: 1,
                                type: solid,
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                                curveness: 0,
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                            emphasis: {
                                show: true,
                                position: 'end',
                                formatter: '...',
                            },
                        },
                    },
                },
                animation: true,
                animationThreshold: 2000,
                animationDuration: 1000,
                animationEasing: cubicOut,
                animationDelay: 0,
                animationDurationUpdate: 300,
                animationEasingUpdate: cubicOut,
                animationDelayUpdate: 0,
            },
            markArea: {
                silent: false,
                label: {
                    normal: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: false,
                        position: '...',
                        offset: ['...'],
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: normal,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                    emphasis: {
                        color: 自适应,
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: '...',
                        shadowColor: '...',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: '...',
                    },
                },
                data: {
                    0: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        itemStyle: {
                            normal: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                            emphasis: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                                position: '...',
                                offset: ['...'],
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: normal,
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: false,
                                position: '...',
                                offset: ['...'],
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: normal,
                                    fontFamily: 'sans-serif',
                                    fontSize: 12,
                                },
                            },
                        },
                    },
                    1: {
                        type: '...',
                        valueIndex: '...',
                        valueDim: '...',
                        coord: ['...'],
                        x: '...',
                        y: '...',
                        value: '...',
                        itemStyle: {
                            normal: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                            emphasis: {
                                color: 自适应,
                                borderColor: '#000',
                                borderWidth: 0,
                                borderType: 'solid',
                                shadowBlur: '...',
                                shadowColor: '...',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                opacity: '...',
                            },
                        },
                        label: {...},
                    },
                },
                animation: false,
                animationThreshold: 2000,
                animationDuration: 1000,
                animationEasing: cubicOut,
                animationDelay: 0,
                animationDurationUpdate: 300,
                animationEasingUpdate: cubicOut,
                animationDelayUpdate: 0,
            },
            zlevel: 0,
            z: 2,
            silent: false,
            animation: true,
            animationThreshold: 2000,
            animationDuration: 1000,
            animationEasing: cubicOut,
            animationDelay: 0,
            animationDurationUpdate: 300,
            animationEasingUpdate: cubicOut,
            animationDelayUpdate: 0,
            tooltip: {
                position: '...',
                formatter: '...',
                backgroundColor: 'rgba(50,50,50,0.7)',
                borderColor: '#333',
                borderWidth: 0,
                padding: 5,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: normal,
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                },
                extraCssText: '...',
            },
        },
        {type: 'pie', '...'},
        {type: 'scatter', '...'},
        {type: 'effectScatter', '...'},
        {type: 'radar', '...'},
        {type: 'treemap', '...'},
        {type: 'boxplot', '...'},
        {type: 'candlestick', '...'},
        {type: 'heatmap', '...'},
        {type: 'map', '...'},
        {type: 'parallel', '...'},
        {type: 'lines', '...'},
        {type: 'graph', '...'},
        {type: 'sankey', '...'},
        {type: 'funnel', '...'},
        {type: 'gauge', '...'},
        {type: 'pictorialBar', '...'},
        {type: 'themeRiver', '...'},
        {type: 'custom', '...'},
    ],
    color: {...},
    backgroundColor: {...},
    textStyle: {...},
    animation: {...},
    animationThreshold: {...},
    animationDuration: {...},
    animationEasing: {...},
    animationDelay: {...},
    animationDurationUpdate: {...},
    animationEasingUpdate: {...},
    animationDelayUpdate: {...},
    progressive: {...},
    progressiveThreshold: {...},
    blendMode: {...},
    hoverLayerThreshold: {...},
    useUTC: {...},
}
