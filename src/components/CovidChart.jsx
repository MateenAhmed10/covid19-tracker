import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto'
import { fetchDailyData } from '../api/api';

const CovidChart = ({ data: { cases, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchDailyData();
      setDailyData(res);
    };
    getData();
  }, [setDailyData]);

    const barChart = cases ? (
      <Bar
        data={{
          labels: ["Infected", "Recoverd", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.6)",
                "rgba(255, 0, 0, 0.6)",
              ],
              data: [cases, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null;
    
  const line = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Confirmed",
            data: dailyData.map(({ confirmed }) => confirmed),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
          },
          {
            label: "Deaths",
            data: dailyData.map(({ deaths }) => deaths),
            fill: true,
            borderColor: "red",
          },
        ],
      }}
    />
  ) : null;

  return (
    <Container maxWidth="fluid" className="graph">
          <Container>
              {country ? barChart : line}
          </Container>
    </Container>
  );
};

export default CovidChart;