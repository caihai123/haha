//全省事件频次
echartsFun("eventFrequency",{
    grid: {
        top:"10px",
        left: '0px',
        right: '20px',
        bottom: '0px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["1月","2月","3月","4月","5月"],
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {
            show: false  
        },
        axisLabel: {
            show:true,
            color:"#99a9bf"
        }
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
                color: "rgba(144,147,153,0.1)"
            }
        }
    },
    series: [{
        data: [100,130,500,200,280],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            normal : {
                color: '#ddefff'  
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

//事件次数
echartsFun("numberEvents",{
    color:["#409eff"],
    tooltip : {
        trigger: 'axis',
        axisPointer : {   
            type : 'shadow',
        }
    },
    grid:{
        top:"00px",
        left:"50px",
        right:"30px",
        bottom:"40px"
    },
    xAxis: {
        show:true,
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {
            show:true,
            color:"#99a9bf"
        },
        splitLine: {
            show: true,
            lineStyle: {
                type:'dashed',
                width: 1,
                color: "rgba(144,147,153,0.1)"
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['黔西南','黔东南','六盘水','黔南','铜仁','遵义','毕节','贵阳'],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {
            show:true,
            color:"#99a9bf"
        }
    },
    series: [
        {
            name:'应急事件',
            type: 'bar',
            data: [300,400,500,600,700,500,320,360],
            barWidth:"14px"                   
        }
    ]
})
//应急事件
echartsFun("emergency",{
    grid:{
        top:"30px",
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
        data: [0,100,130,500,200,280,120,0],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            normal : {
                color: '#7b6afb'  
            }
        },
        itemStyle:{
            normal:{
                color:"#fff"
            }
        },
        smooth: true
    }]
})
//触达人次
echartsFun("reach",{
    grid:{
        top:"30px",
        left:"15px",
        right:"15px",
        bottom:"10px"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {          
            type : 'shadow',
        }
    },
    xAxis: {
        type: 'category',
        data: ['', '', '', '', '','', '', ''],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:false}
    },
    yAxis: {
        type: 'value',
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:false},
        splitLine: {
            show: false
        }
    },
    series: [{
        data: [100,80,120,90,150,105,110,90],
        type: 'bar',
        barWidth:"12px",
        itemStyle: {
            normal: {
                color: "#48b8ff"
            }
        }
    }]
})
//实时人数
echartsFun("realNum",{
    grid:{
        top:"30px",
        left:'0px',
        right:"0px",
        bottom:"10px"
    },
    xAxis: {
        type: 'category',
        data: ["","","","",'',''],
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show:false}
    },
    yAxis: {
        show:false
    },
    series: [{
        data: [100,130,164,200,280,120],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            normal : {
                color: '#1890ff'  
            }
        },
        itemStyle:{
            normal:{
                color:"#fff"
            }
        },
        smooth: true
    }]
})

//突发事件
pie("breakOut",'#48b8ff',[
    {value:28, name:'突发事件'},
    {value:100, name:'其他'}
])
//地址灾害
pie("disaster","#7b6afb",[
    {value:22, name:'地址灾害'},
    {value:100, name:'其他'}
])
//火警
pie("fire","#f87a41",[
    {value:23, name:'火警'},
    {value:100, name:'其他'}
])