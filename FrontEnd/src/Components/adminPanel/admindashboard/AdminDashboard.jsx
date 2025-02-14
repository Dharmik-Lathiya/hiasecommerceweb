import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css"
import Card from './Card'
import Chart from './Chart'
export default function () {

    const [data, setData] = useState([]);
    const currentYear = new Date().getUTCFullYear();
    const [year, setYear] = useState(currentYear)

    const [flag,setFlag] = useState(false)

    const years = [];
    for (let yearIndex = currentYear; yearIndex >= 2023; yearIndex--) {
        years.push(yearIndex);
    }
    useEffect(() => {
        console.log(year);
        
        fetch(import.meta.env.VITE_API_KEY + "/OrderDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify({year:year})
        }).then((res) => {
            res.json().then((data) => {
                console.log(data);
                console.log(year);

                setFlag(!flag)
                setData(data)
            })
        })

    }, [year])

    return (
        <div style={{ width: "100%" }}>
            <p className='p-5'>Dashboard</p>

            <div className='card-conatiner m-5'>

                <Card type={"Total Sales"} desc={"Total income of sales "} data={data.totalIncome} />
                <Card type={"Total Orders"} desc={"Total Orders Completed"} data={data.totalOrder} />
                <Card type={"Today Orders"} desc={"Orders Completed Today"} data={data.todayOrder} />


            </div>

            <div className="chart-container m-5">
                <label htmlFor="yearSelect">Select Year:</label>
                <select id="yearSelect" value={year} onChange={(e)=> setYear(e.target.value)}>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <Chart chartData={data.chartData} key={data.chartData}/>

            </div>


        </div>
    )
}
