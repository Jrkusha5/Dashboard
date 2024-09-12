import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import  Title from '../../Ui/Title'
import { motion } from "framer-motion";

const chartVariants ={
  hidden:{opacity:0, scale:0.8},
  visible:{
    opacity:1,
    scale:1,
    transition:{
      duration:0.8,
      ease:"easeOut",
    }
  }
}


const ApexChart = () => {
    const [series] = useState([
          {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ]);
        
        const [options] = useState({
          chart: {
            height: 350,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        });

        return <div className="flex-1 ">
            <Title>Revenue</Title>

            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                <motion.div id="chart" className="mb-4" initial='hidden'
                animate='visible' variants={chartVariants}>
                  <ReactApexChart 
                  options={options}
                   series={series}
                   type="area"
                   height={350} />
                </motion.div>
                <div id="html-dist">
                  
                  </div>
            </div>
        </div>
    }

export default ApexChart