"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function generateData(
  startYear = 2001,
  startAmount = 2000
): {
  year: number;
  favorableMarket: number;
  estimatedReturn: number;
  unfavorableMarket: number;
}[] {
  const endYear = startYear + 70;
  const data = [
    {
      year: startYear,
      favorableMarket: startAmount,
      estimatedReturn: startAmount,
      unfavorableMarket: startAmount,
    },
  ];

  for (let year = startYear + 1; year <= endYear; year++) {
    const previousYearData = data[data.length - 1];
    const favorableMarket = previousYearData.favorableMarket * 1.12;
    const unfavorableMarket = previousYearData.unfavorableMarket * 1.06;

    const estimatedReturn =
      (favorableMarket + unfavorableMarket) / 2;

    data.push({ year, favorableMarket, estimatedReturn, unfavorableMarket });
  }
  console.log(data);
  return data;
}

export default function ReportChart() {
  let startYear = 2001;
  let endYear = startYear + 70;
  let startAmount = 2000;
  const data = generateData(startYear, startAmount);

  let series: ApexAxisChartSeries = [
    {
      name: "Favorable Market",
      data: data.map((e) => {
        return { y: e.favorableMarket, x: new Date(e.year, 1, 1, 0, 0, 0, 0) };
      }),
      color: "#49F4FF",
    },
    {
      name: "Estimated Return",
      data: data.map((e) => {
        return { y: e.estimatedReturn, x: new Date(e.year, 1, 1, 0, 0, 0, 0) };
      }),
      color: "#000",
    },
    {
      name: "Unfavorable Market",
      data: data.map((e) => {
        return {
          y: e.unfavorableMarket,
          x: new Date(e.year, 1, 1, 0, 0, 0, 0),
        };
      }),
      color: "#E26792",
    },
  ];
  let options: ApexOptions = {
    chart: {
      height: "985px",
      width: "100%",
      type: "area",
    },
    fill: {},
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true,
    },

    xaxis: {
      type: "datetime",
    },
    yaxis: {
      show: true,
      opposite: true,
      decimalsInFloat: 1,
    },
    tooltip: {
      x: {
        format: "dd-mm-yy",
      },
    },
  };
  return (
    <>
      <ApexChart
        className="text-black"
        type="line"
        options={options}
        series={series}
        height="480px"
        width="831px"
      />
    </>
  );
}
