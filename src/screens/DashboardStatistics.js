import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import {Container ,Grid} from '@material-ui/core';
import {AreaChart,YAxis,XAxis,CartesianGrid,Tooltip,Area,ResponsiveContainer,Legend, Pie ,PieChart , Cell} from 'recharts';
import { ResponsiveAreaBump } from '@nivo/bump';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveSunburst } from '@nivo/sunburst';
import { ResponsiveBubble } from '@nivo/circle-packing';

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    }
}));
function chart1(){
  const data = [
    {
      "id": "JavaScript",
      "data": [
        {
          "x": 2000,
          "y": 20
        },
        {
          "x": 2001,
          "y": 11
        },
        {
          "x": 2002,
          "y": 20
        },
        {
          "x": 2003,
          "y": 24
        },
        {
          "x": 2004,
          "y": 18
        },
        {
          "x": 2005,
          "y": 26
        }
      ]
    },
    {
      "id": "ReasonML",
      "data": [
        {
          "x": 2000,
          "y": 24
        },
        {
          "x": 2001,
          "y": 11
        },
        {
          "x": 2002,
          "y": 13
        },
        {
          "x": 2003,
          "y": 28
        },
        {
          "x": 2004,
          "y": 12
        },
        {
          "x": 2005,
          "y": 12
        }
      ]
    },
    {
      "id": "TypeScript",
      "data": [
        {
          "x": 2000,
          "y": 21
        },
        {
          "x": 2001,
          "y": 19
        },
        {
          "x": 2002,
          "y": 16
        },
        {
          "x": 2003,
          "y": 21
        },
        {
          "x": 2004,
          "y": 16
        },
        {
          "x": 2005,
          "y": 13
        }
      ]
    },
    {
      "id": "Elm",
      "data": [
        {
          "x": 2000,
          "y": 19
        },
        {
          "x": 2001,
          "y": 16
        },
        {
          "x": 2002,
          "y": 30
        },
        {
          "x": 2003,
          "y": 23
        },
        {
          "x": 2004,
          "y": 27
        },
        {
          "x": 2005,
          "y": 28
        }
      ]
    },
    {
      "id": "CoffeeScript",
      "data": [
        {
          "x": 2000,
          "y": 24
        },
        {
          "x": 2001,
          "y": 19
        },
        {
          "x": 2002,
          "y": 22
        },
        {
          "x": 2003,
          "y": 20
        },
        {
          "x": 2004,
          "y": 17
        },
        {
          "x": 2005,
          "y": 27
        }
      ]
    }
  ];
  return(
    <ResponsiveAreaBump
    data={data}
    margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
    spacing={8}
    colors={{ scheme: 'nivo' }}
    blendMode="multiply"
    startLabel="id"
    axisTop={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: '',
    legendPosition: 'middle',
    legendOffset: -36
}}
axisBottom={{
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: '',
  legendPosition: 'middle',
  legendOffset: 32
}}
/>
  )
};
function chart2(){
  const data =[
    {
      "id": "elixir",
      "label": "elixir",
      "value": 342,
      "color": "hsl(244, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 23,
      "color": "hsl(336, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 110,
      "color": "hsl(131, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 193,
      "color": "hsl(98, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 77,
      "color": "hsl(52, 70%, 50%)"
    }
  ];
  return(
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'set2' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
};
function chart3(){
const data={
  "name": "nivo",
  "color": "hsl(177, 70%, 50%)",
  "children": [
    {
      "name": "viz",
      "color": "hsl(256, 70%, 50%)",
      "children": [
        {
          "name": "stack",
          "color": "hsl(351, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(204, 70%, 50%)",
              "loc": 37489
            },
            {
              "name": "xAxis",
              "color": "hsl(211, 70%, 50%)",
              "loc": 162785
            },
            {
              "name": "yAxis",
              "color": "hsl(58, 70%, 50%)",
              "loc": 96967
            },
            {
              "name": "layers",
              "color": "hsl(289, 70%, 50%)",
              "loc": 117858
            }
          ]
        },
        {
          "name": "pie",
          "color": "hsl(323, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(141, 70%, 50%)",
              "children": [
                {
                  "name": "pie",
                  "color": "hsl(153, 70%, 50%)",
                  "children": [
                    {
                      "name": "outline",
                      "color": "hsl(136, 70%, 50%)",
                      "loc": 96871
                    },
                    {
                      "name": "slices",
                      "color": "hsl(189, 70%, 50%)",
                      "loc": 17006
                    },
                    {
                      "name": "bbox",
                      "color": "hsl(148, 70%, 50%)",
                      "loc": 67019
                    }
                  ]
                },
                {
                  "name": "donut",
                  "color": "hsl(328, 70%, 50%)",
                  "loc": 87966
                },
                {
                  "name": "gauge",
                  "color": "hsl(167, 70%, 50%)",
                  "loc": 180855
                }
              ]
            },
            {
              "name": "legends",
              "color": "hsl(51, 70%, 50%)",
              "loc": 174987
            }
          ]
        }
      ]
    },
    {
      "name": "colors",
      "color": "hsl(313, 70%, 50%)",
      "children": [
        {
          "name": "rgb",
          "color": "hsl(206, 70%, 50%)",
          "loc": 108876
        },
        {
          "name": "hsl",
          "color": "hsl(332, 70%, 50%)",
          "loc": 36750
        }
      ]
    },
    {
      "name": "utils",
      "color": "hsl(200, 70%, 50%)",
      "children": [
        {
          "name": "randomize",
          "color": "hsl(217, 70%, 50%)",
          "loc": 177232
        },
        {
          "name": "resetClock",
          "color": "hsl(332, 70%, 50%)",
          "loc": 62738
        },
        {
          "name": "noop",
          "color": "hsl(308, 70%, 50%)",
          "loc": 197647
        },
        {
          "name": "tick",
          "color": "hsl(228, 70%, 50%)",
          "loc": 160358
        },
        {
          "name": "forceGC",
          "color": "hsl(50, 70%, 50%)",
          "loc": 24615
        },
        {
          "name": "stackTrace",
          "color": "hsl(40, 70%, 50%)",
          "loc": 33247
        },
        {
          "name": "dbg",
          "color": "hsl(346, 70%, 50%)",
          "loc": 157313
        }
      ]
    },
    {
      "name": "generators",
      "color": "hsl(230, 70%, 50%)",
      "children": [
        {
          "name": "address",
          "color": "hsl(178, 70%, 50%)",
          "loc": 140348
        },
        {
          "name": "city",
          "color": "hsl(302, 70%, 50%)",
          "loc": 126543
        },
        {
          "name": "animal",
          "color": "hsl(265, 70%, 50%)",
          "loc": 169402
        },
        {
          "name": "movie",
          "color": "hsl(41, 70%, 50%)",
          "loc": 16850
        },
        {
          "name": "user",
          "color": "hsl(156, 70%, 50%)",
          "loc": 163544
        }
      ]
    },
    {
      "name": "set",
      "color": "hsl(312, 70%, 50%)",
      "children": [
        {
          "name": "clone",
          "color": "hsl(303, 70%, 50%)",
          "loc": 78934
        },
        {
          "name": "intersect",
          "color": "hsl(325, 70%, 50%)",
          "loc": 83965
        },
        {
          "name": "merge",
          "color": "hsl(46, 70%, 50%)",
          "loc": 14791
        },
        {
          "name": "reverse",
          "color": "hsl(287, 70%, 50%)",
          "loc": 82338
        },
        {
          "name": "toArray",
          "color": "hsl(254, 70%, 50%)",
          "loc": 177845
        },
        {
          "name": "toObject",
          "color": "hsl(135, 70%, 50%)",
          "loc": 141865
        },
        {
          "name": "fromCSV",
          "color": "hsl(94, 70%, 50%)",
          "loc": 39019
        },
        {
          "name": "slice",
          "color": "hsl(177, 70%, 50%)",
          "loc": 90974
        },
        {
          "name": "append",
          "color": "hsl(297, 70%, 50%)",
          "loc": 167542
        },
        {
          "name": "prepend",
          "color": "hsl(303, 70%, 50%)",
          "loc": 130444
        },
        {
          "name": "shuffle",
          "color": "hsl(53, 70%, 50%)",
          "loc": 15764
        },
        {
          "name": "pick",
          "color": "hsl(260, 70%, 50%)",
          "loc": 78413
        },
        {
          "name": "plouc",
          "color": "hsl(202, 70%, 50%)",
          "loc": 90001
        }
      ]
    },
    {
      "name": "text",
      "color": "hsl(134, 70%, 50%)",
      "children": [
        {
          "name": "trim",
          "color": "hsl(253, 70%, 50%)",
          "loc": 130812
        },
        {
          "name": "slugify",
          "color": "hsl(3, 70%, 50%)",
          "loc": 76430
        },
        {
          "name": "snakeCase",
          "color": "hsl(249, 70%, 50%)",
          "loc": 164948
        },
        {
          "name": "camelCase",
          "color": "hsl(167, 70%, 50%)",
          "loc": 22226
        },
        {
          "name": "repeat",
          "color": "hsl(34, 70%, 50%)",
          "loc": 90457
        },
        {
          "name": "padLeft",
          "color": "hsl(70, 70%, 50%)",
          "loc": 10221
        },
        {
          "name": "padRight",
          "color": "hsl(55, 70%, 50%)",
          "loc": 60868
        },
        {
          "name": "sanitize",
          "color": "hsl(281, 70%, 50%)",
          "loc": 99103
        },
        {
          "name": "ploucify",
          "color": "hsl(102, 70%, 50%)",
          "loc": 92661
        }
      ]
    },
    {
      "name": "misc",
      "color": "hsl(29, 70%, 50%)",
      "children": [
        {
          "name": "whatever",
          "color": "hsl(21, 70%, 50%)",
          "children": [
            {
              "name": "hey",
              "color": "hsl(253, 70%, 50%)",
              "loc": 198104
            },
            {
              "name": "WTF",
              "color": "hsl(192, 70%, 50%)",
              "loc": 36807
            },
            {
              "name": "lol",
              "color": "hsl(51, 70%, 50%)",
              "loc": 181663
            },
            {
              "name": "IMHO",
              "color": "hsl(193, 70%, 50%)",
              "loc": 86676
            }
          ]
        },
        {
          "name": "other",
          "color": "hsl(34, 70%, 50%)",
          "loc": 156691
        },
        {
          "name": "crap",
          "color": "hsl(158, 70%, 50%)",
          "children": [
            {
              "name": "crapA",
              "color": "hsl(288, 70%, 50%)",
              "loc": 87850
            },
            {
              "name": "crapB",
              "color": "hsl(229, 70%, 50%)",
              "children": [
                {
                  "name": "crapB1",
                  "color": "hsl(10, 70%, 50%)",
                  "loc": 192515
                },
                {
                  "name": "crapB2",
                  "color": "hsl(22, 70%, 50%)",
                  "loc": 62192
                },
                {
                  "name": "crapB3",
                  "color": "hsl(297, 70%, 50%)",
                  "loc": 182045
                },
                {
                  "name": "crapB4",
                  "color": "hsl(150, 70%, 50%)",
                  "loc": 70029
                }
              ]
            },
            {
              "name": "crapC",
              "color": "hsl(312, 70%, 50%)",
              "children": [
                {
                  "name": "crapC1",
                  "color": "hsl(189, 70%, 50%)",
                  "loc": 18429
                },
                {
                  "name": "crapC2",
                  "color": "hsl(184, 70%, 50%)",
                  "loc": 113044
                },
                {
                  "name": "crapC3",
                  "color": "hsl(7, 70%, 50%)",
                  "loc": 161058
                },
                {
                  "name": "crapC4",
                  "color": "hsl(264, 70%, 50%)",
                  "loc": 169554
                },
                {
                  "name": "crapC5",
                  "color": "hsl(5, 70%, 50%)",
                  "loc": 63275
                },
                {
                  "name": "crapC6",
                  "color": "hsl(327, 70%, 50%)",
                  "loc": 184024
                },
                {
                  "name": "crapC7",
                  "color": "hsl(274, 70%, 50%)",
                  "loc": 83450
                },
                {
                  "name": "crapC8",
                  "color": "hsl(63, 70%, 50%)",
                  "loc": 195692
                },
                {
                  "name": "crapC9",
                  "color": "hsl(330, 70%, 50%)",
                  "loc": 165545
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
  return(
    <ResponsiveBubble
        root={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        padding={6}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        borderWidth={2}
        borderColor={{ from: 'color' }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[ { match: { depth: 1 }, id: 'lines' } ]}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />
  )
};
export default function (){

    const classes = useStyles();
    return(
      <div className={classes.root}>
        
          <Grid container direction="column">  
            <Grid item xs={12}>
              <div style={{height: '300px', width:'100%'}}>
                  {chart1()}
              </div>
            </Grid>
            <Grid item xs={12}>
            <Grid container direction="row" spacing={3}>
                  <Grid item xs={6}>
                        <div style={{height: '230px',width:'100%'}}>
                          {chart2()}
                        </div>
                  </Grid>
                  <Grid item xs={6}>
                        <div style={{height:'230px', width:'100%'}}>
                            {chart3()}
                        </div>
                  </Grid>
            </Grid>
            </Grid>
         </Grid> 
        
      </div>
        
    )
}