/**
 * Created by zzx on 2017/4/8.
 */
window.onload=function() {
    //1.初始化
    var charts = echarts.init(document.getElementById('box'));

    //2.数据
    var data = {
        title: {
            text: '网站成交'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'center',
            data: ['展现:30%', '访问:10.34%', '咨询:30%', '成交:10%']
        },
        series: [
            {
                type: 'funnel',
                data: [
                    {name: '展现:30%', value: 8000},
                    {name: '访问:10.34%', value: 6000},
                    {name: '咨询:30%', value: 4000},
                    {name: '成交:10%', value: 2000}
                ]
            }
        ]
    };

    //3.放进去
    charts.setOption(data);
}