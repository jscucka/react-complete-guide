import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(props.dataPoints)
const totalMaximum = Math.max(...dataPointsValue)
return (
    <div className="chart">
        {props.dataPoints.map(dataPoint => {
            <ChartBar value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} key={dataPoint.label} />
        })}
    </div>
);
}
export default Chart;