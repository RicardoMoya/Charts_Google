google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(dibujarGraficaVistas2013);

    function dibujarGraficaVistas2013() {
    var visitas2013 = google.visualization.arrayToDataTable([
      ['Mes', 'Visitas', 'Visitantes Únicos','Páginas Vistas' ],
      ['Avg2012',  1161,         910,               2053      ],
      ['Ene13',    4505,         3655,              6482      ],
      ['Feb13',    8090,         6400,              11503     ],
      ['Mar13',    7493,         5818,              11937     ],
      ['Abr13',    7048,         5581,              9751      ],
      ['May13',   11408,         8529,              16061     ],
      ['Jun13',   10886,         8261,              15643     ],
      ['Jul13',   11095,         8372,              16258     ],
      ['Ago13',   12900,         9848,              18585     ],
      ['Sep13',   15428,        11805,              21873     ],
      ['Oct13',   19978,        15455,              27169     ],
      ['Nov13',   20159,        15531,              27470     ],
      ['Dic13',   15093,        11358,              20863     ],
      ['Ene14',   16311,        12036,              24678     ],
      ['Feb14',   20572,        15450,              29638     ],
      ['Mar14',   25625,        19129,              36395     ],
      ['Abr14',   27106,        20059,              37410     ],
      ['May14',   34810,        25617,              48192     ],
      ['Jun14',   35255,        25868,              49291     ],
      ['Jul14',   37605,        27251,              53759     ]
   ]);

    var options = {
        legend: { position: 'bottom' },
        pointSize: 5,
        hAxis: {title: 'Meses', titleTextStyle: {color: '#0000FF'}},
        vAxis: {title: 'Número de Visitas', titleTextStyle: {color: '#0000FF'}},
        curveType: 'function',
    };

    var graficaVisitas2013 = new google.visualization.LineChart(document.getElementById('graficaVisitas2013_div'));
      graficaVisitas2013.draw(visitas2013, options);
  }

// Mapa
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(visitasPorPaisesMap);

  function visitasPorPaisesMap() {
    var visitas = google.visualization.arrayToDataTable([
        ['Pais', 'Visitas'],
        ['España', 111740],         ['Mexico',  75735],      ['Colombia',  36998],
        ['Peru',  24517],           ['Chile', 19345],        ['Argentina', 18872],
        ['Ecuador', 13148],         ['Venezuela', 9827],     ['Bolivia', 6799],
        ['Costa Rica',  5300],      ['Guatemala', 4857],     ['Estados Unidos', 4042],
        ['Uruguay', 3221],          ['El Salvador', 3201],   ['Republica Dominicana',  2806],
        ['Paraguay', 2510],         ['Nicaragua', 1546],     ['Honduras', 1436],
        ['Panama', 1384],           ['Brazil', 1245],        ['Cuba', 961],
        ['Alemania', 939],          ['India', 620],          ['Francia',  618],
        ['United Kingdom', 598],    ['Italia', 286],         ['Puerto Rico', 240],
        ['Canada',  218],           ['Portugal',  197],      ['Suiza', 147],
        ['Indonesia', 147],         ['Irlanda', 136],        ['Polonia',  113],
        ['Australia', 103],         ['Belgium', 99],         ['Belgica', 98],
        ['Japón', 94],              ['Andorra', 91],         ['Marruecos', 72],
        ['Suecia' , 72],            ['Russia' , 63],         ['Noruega' , 59],
        ['Austria', 49],            ['Turkia' , 48],         ['Rumania', 43],
        ['Finlandia', 42],          ['Ucrania', 40],         ['Republica Checa',  39],
        ['Dinamarca', 35],          ['China', 31],           ['Korea del sur', 30],
        ['Tunisia', 30],            ['Taiwan' , 29],         ['Greece' , 26],
        ['Israel' , 25],            ['Vietnam', 25],         ['Pakistan',  24],
        ['Angola' , 23],            ['Thailand',  21],       ['Luxenburgo' , 20],
        ['Emiratos Arabes', 18],    ['Algeria', 18],         ['Saudi Arabia',  18],
        ['Sri Lanka', 16],          ['Belarus', 14],         ['Iran',  14],
        ['Malaysia',  13],          ['Serbia' , 13],         ['Estonia', 11],
        ['Slovakia',  11],          ['Hungria', 10],         ['Malta', 10],
        
      ]);

      var options = {
        colorAxis: {colors: ['#FFEDED', '#3399ff']},
      };

      var visitasPorPaises = new google.visualization.GeoChart(document.getElementById('paises_div'));
      visitasPorPaises.draw(visitas, options);
    };

// Gráfica circular
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(porcentajeVisitasPaises);
    function porcentajeVisitasPaises() {
        var porcentajeVisitas = google.visualization.arrayToDataTable([
            ['Pais', 'Visitas'],
            ['España (31,3%)', 111740],    ['Mexico (21,2%)',  75735],
            ['Colombia (10,3%)',  36998],  ['Peru (6,9%)',  24517],       
            ['Chile (5,4%)', 19345],       ['Argentina (5,3%)', 18872],
            ['Ecuador (3,7%)', 13148],     ['Venezuela (2,7%)', 9827],     
            ['Bolivia (1,9%)', 6799],      ['Costa Rica (1,5%)',  5300],  
            ['Guatemala (1,4%)', 4857],    ['United States (1,1%)', 4042],
            ['Otros (7,4%)', 26330],
            ]);

        var options = {
            title: 'Porcentaje de vistas por paises'
        };

        var porVisitasChart = new google.visualization.PieChart(document.getElementById('porcentajePaises_div'));
        porVisitasChart.draw(porcentajeVisitas, options);
    }

// Mapa España
google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(puntosMapSpain);

      function puntosMapSpain() {
      var visitasPorRegion = google.visualization.arrayToDataTable([
        ['Ciudad', 'Visitas'],
        ['Madrid', 28280],                  ['Barcelona', 9055],
        ['Valencia', 4442],                 ['Sevilla', 4323],
        ['Malaga', 2523],                   ['Zaragoza', 2417],
        ['Vigo', 1826],                     ['Granada', 1792],
        ['A Coruna', 1741],                 ['Murcia', 1670],
        ['Bilbao', 1650],                   ['Valladolid', 1553],
        ['Palma de Mallorca', 1526],        ['Las Palmas de Gran Canaria', 1424],
        ['Pamplona', 1388],                 ['Alicante', 1270],
        ['Oviedo', 1173],                   ['Santa Cruz de Tenerife', 1133],
        ['Alcobendas', 1124],               ['Salamanca', 989],
        ['Leon', 942],                      ['Cordoba', 926],
        ['San Sebastian', 917],             ['Girona', 906],
        ['Santiago de Compostela', 852],    ['Almeria', 842],
        ['Toledo', 838],                    ['Santander', 781],
        ['Tarragona', 741],                 ['Jaen', 734],
        ['Huelva', 687],                    ['Gijon', 682],
        ['Albacete', 679],                  ['Lleida', 679],
        ['Castellon de la Plana', 640],     ['Burgos', 612],
        ['Vitoria-Gasteiz', 569],           ['Ciudad Real', 566],
        ['Getafe', 561],                    ['Benidorm', 94],
        ['Plasencia', 72]
      ]);

      var options = {
        region: 'ES',
        displayMode: 'markers',
        colorAxis: {colors: ['red', 'blue']}
      };

      var regionesChart = new google.visualization.GeoChart(document.getElementById('regiones_div'));
      regionesChart.draw(visitasPorRegion, options);
    };
