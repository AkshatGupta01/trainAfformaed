import { useState, useEffect } from "react";
import axios from "axios";

const TrainList = ({ trains }) => {
    const [trains, setTrains] = useState(null);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if(!token) {
            const res = await axios.get()
        }
        
        const fetchTrains = async () => {
            const res = await axios.get("http://20.244.56.144/train/trains", {
            headers: {
                Authorization: ,
            },
        });

        

        if (res?.data) {
          setTrains(res.data);
        } else setTrains(null);
      };

      fetchTrains();
    });

  console.log(trains);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Train name
              </th>
              <th scope="col" className="px-6 py-3">
                Coach
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {trains?.map((train, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {train.trainName}
                  </th>
                  <td className="px-6 py-4">{train.trainNumber}</td>
                  <td className="px-6 py-4">{train.departureTime}</td>
                  <td className="px-6 py-4">{train.seatsAvailable}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrainList;
