import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let values = props.datapoints.map((datapoint) => datapoint.value);
  let maxValue = Math.max(...values);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            label={datapoint.label}
            value={datapoint.value}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
