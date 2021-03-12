Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Antall innvandrere i Norge 2010-2021'
    },
    subtitle: {
        text: 'Kilde: <a href="https://www.ssb.no/statbank/table/05184/tableViewLayout1/">SSB</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Antall Innvandrere'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Antall Innvandrere: <b>{point.y:1f}</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['2010', 459347],
            ['2011', 500499],
            ['2012', 546732],
            ['2013', 593332],
            ['2014', 633109],
            ['2015', 669381],
            ['2016', 698549],
            ['2017', 724998],
            ['2018', 746661],
            ['2019', 765107],
            ['2020', 790496],
            ['2021', 800094]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:1f}', // Ingen decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});