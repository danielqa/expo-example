import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import { PieChart } from 'react-native-svg-charts';

import {
  CalendarioDia,
  CalendarioDiaText,
  CalendarioMes,
  CalendarioMesText,
  CalendarioStyle,
  IndicadorCalendario,
  IndicadorChart,
  IndicadorChartLabel,
  IndicadoresContainer,
  IndicadorItem,
  IndicadorTitle,
} from './style';

const data = [50, 50, 100];
const randomColor = () => (`#${(Math.random() * 0xFFFFFF).toString(16)}000000`).slice(0, 7);
const pieData = data
  .filter(value => value > 0)
  .map((value, index) => ({
    value,
    svg: {
      fill: randomColor(),
    },
    key: `pie-${index}`,
  }));

export default function Indicadores() {
  return (
    <IndicadoresContainer horizontal>
      <Card style={{ ...CalendarioStyle.IndicadorCard, marginLeft: 15 }}>
        <IndicadorItem>
          <IndicadorTitle>Calendário</IndicadorTitle>
          <View style={{ alignItems: 'center' }}>
            <IndicadorCalendario>
              <CalendarioMes>
                <CalendarioMesText>março</CalendarioMesText>
              </CalendarioMes>
              <CalendarioDia>
                <CalendarioDiaText>10</CalendarioDiaText>
              </CalendarioDia>
            </IndicadorCalendario>
          </View>
        </IndicadorItem>
      </Card>
      <Card style={{ ...CalendarioStyle.IndicadorCard }}>
        <IndicadorItem>
          <IndicadorTitle>Tarefas</IndicadorTitle>
          <PieChart
            innerRadius="85%"
            style={{ height: 60 }}
            data={pieData}
          />
          <IndicadorChart>
            <IndicadorChartLabel>40</IndicadorChartLabel>
          </IndicadorChart>
        </IndicadorItem>
      </Card>
      <Card style={{ ...CalendarioStyle.IndicadorCard }}>
        <IndicadorItem>
          <IndicadorTitle>Intimações</IndicadorTitle>
          <PieChart
            innerRadius="85%"
            style={{ height: 60 }}
            data={pieData}
          />
          <IndicadorChart>
            <IndicadorChartLabel>20</IndicadorChartLabel>
          </IndicadorChart>
        </IndicadorItem>
      </Card>
      <Card style={{ ...CalendarioStyle.IndicadorCard }}>
        <IndicadorItem>
          <IndicadorTitle>Andamentos</IndicadorTitle>
          <PieChart
            innerRadius="85%"
            style={{ height: 60 }}
            data={pieData}
          />
          <IndicadorChart>
            <IndicadorChartLabel>27</IndicadorChartLabel>
          </IndicadorChart>
        </IndicadorItem>
      </Card>
      <Card style={{ ...CalendarioStyle.IndicadorCard }}>
        <IndicadorItem>
          <IndicadorTitle>Audiências</IndicadorTitle>
          <PieChart
            innerRadius="85%"
            style={{ height: 60 }}
            data={pieData}
          />
          <IndicadorChart>
            <IndicadorChartLabel>12</IndicadorChartLabel>
          </IndicadorChart>
        </IndicadorItem>
      </Card>
      <Card style={{ ...CalendarioStyle.IndicadorCard }}>
        <IndicadorItem>
          <IndicadorTitle>Compromissos</IndicadorTitle>
          <PieChart
            innerRadius="85%"
            style={{ height: 60 }}
            data={pieData}
          />
          <IndicadorChart>
            <IndicadorChartLabel>08</IndicadorChartLabel>
          </IndicadorChart>
        </IndicadorItem>
      </Card>
    </IndicadoresContainer>
  );
}
