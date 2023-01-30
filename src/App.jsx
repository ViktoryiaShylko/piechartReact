import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Weather", "Days in a year"],
  ["Sun", 62],
  ["Rain", 194],
  ["Snow", 100],
];

export const options = {
  title: "Weather in SPB",
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
