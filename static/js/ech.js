function echartsFun(element,option){
    var myChart = echarts.init(document.getElementById(element));
    var option = option;
    myChart.setOption(option);
}

//绘制饼图
function pie(element,color,data){
    var option = {
        color: [color,'rgba(144,147,153,0.1)'],
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b}: {c}"
                // },
                series: [
                    {
                        name:'TOP3预警',
                        type:'pie',
                        radius: ['60%', '75%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: `{b}\n{c}`,
                                position: 'center',
                                textStyle: {
                                    fontSize: '14'
                                }
                            }   
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:data
                    }
                ]
    }
    echartsFun(element,option)
}