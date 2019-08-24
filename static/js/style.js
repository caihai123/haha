//人流量
echartsFun("visitors",{
    grid:{
        top:"5px",
        left:"0px",
        right:"0px",
        bottom:"10px"
    },
    xAxis: {
        type: 'category',
        data: ["","","","","",'','',''],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:false}
    },
    yAxis: {
        show:false
    },
    series: [{
        data: [90,0,130,150,200,80,120,40],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            normal : {
                color: '#7969f8'  
            }
        },
        itemStyle:{
            normal:{
                color:"#7b6afb"
            }
        },
        smooth: true
    }]
})

//事件量
echartsFun("eventsNum",{
    grid:{
        top:"5px",
        left:"0px",
        right:"0px",
        bottom:"10px"
    },
    xAxis: {
        type: 'category',
        data: ["","","","","",'','',''],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:false}
    },
    yAxis: {
        show:false
    },
    series: [{
        data: [150,100,130,700,300,280,120,80],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            normal : {
                color: '#48b8ff'  
            }
        },
        itemStyle:{
            normal:{
                color:"#48b8ff"
            }
        },
        smooth: true
    }]
})

//综合指数
echartsFun("synthesize",{
    grid:{
        top:"5px",
        left:"0px",
        right:"0px",
        bottom:"10px"
    },
    xAxis: {
        type: 'category',
        data: ["","","","","",'','',''],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:false}
    },
    yAxis: {
        show:false
    },
    series: [{
        data: [80,100,130,500,200,280,120,70],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            normal : {
                color: '#1890ff'  
            }
        },
        itemStyle:{
            normal:{
                color:"#1890ff"
            }
        },
        smooth: true
    }]
})

//客流量
echartsFun("ridership",{
    grid:{
        top:"30px",
        left:"50px",
        right:"15px",
        bottom:"30px"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {          
            type : 'shadow',
        }
    },
    xAxis: {
        type: 'category',
        data: ['00:00', '02:00', '04:00', '06:00', '08:00','10:00', '12:00', '14：00', '16：00', '18：00', '20：00', '22：00'],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:true}
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show:true,
            color:"#99a9bf"
        },
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine:{
            show:true,
            lineStyle: {
                type:'dashed',
                width: 1,
                color: "#eeeeee"
            }
        }
    },
    series: [{
        data: [100,80,120,90,150,105,110,90,100,80,120,80],
        type: 'bar',
        barWidth:"12px",
        itemStyle: {
            normal: {
                color: "#48b8ff"
            }
        }
    }]
})

//年龄结构饼图
echartsFun("structure-age",{
    color:["#fbd437","#36cbcb","#3aa1ff","#f2637b"],
    title: {
        top:20,
        text: '年龄',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        icon:"circle",
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['18岁以下', '19~40岁','41~60岁','60岁以上']
    },
    series : [
        {
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:535, name: '18岁以下'},
                {value:510, name: '19~40岁'},
                {value:634, name: '41~60岁'},
                {value:735, name: '60岁以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})

//性别结构饼图
echartsFun("structure-sex",{
    color:["#4ecb73","#3aa1ff","#fbd437"],
    title: {
        top:20,
        text: '性别',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        icon:"circle",
        // top: 'middle',
        bottom:10,
        left: 'center',
        data: ['女', '男','其他']
    },
    series : [
        {
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:535, name: '女'},
                {value:510, name: '男'},
                {value:634, name: '其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})