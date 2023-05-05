import React, { useEffect, useState } from "react";
import { formatNumberWithShillings } from "./formatnumberwithshillings";
import "./styles.css" 
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

//import  './formatnumberwithshillings'

interface Deposit {
  depositId: number;
  memberName: string;
  title: string;
  amount: number;
  transactionType: string;
  bankName: string;
  transactionStatus: string;
  remarks: string;
  createdAt: string;
  updatedAt: string | null;
}

const TaskOne: React.FC = () => {
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  //const [colors,setColor]=('')

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch("http://24.199.116.8:8780/api/v1/deposits");
      //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      //JSON.stringify(data);
      console.log(data);
      
       setDeposits(data.deposits);
    } catch (error) {
      //console.log(error.message);
      
    }
  };

  // const formatNumberWithShillings = (amount: number) => {
   
  // };
  
  

  return (
    <table style={{ width: "100%" }} className="my-table">
      <thead>
        <tr>
          <th style={{ width: "3%" }}></th>
          <th>MemberID</th>
          <th>Name</th>
          <th style={{ color: "black" }}>Amount</th>
          <th>Type</th>
          <th>Bank</th>
          <th>Status</th>
          <th>Action</th>
          <th>Remark</th>
          <th>Date</th>
          <th>Update date</th>
        </tr>
      </thead>
      <tbody>
        {deposits.map((deposit) => (
          <tr key={deposit.depositId}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{deposit.depositId}</td>
            <td>{deposit.memberName}</td>
            <td style={{ color: "rgb(32, 153, 32)" }}>
              {formatNumberWithShillings(deposit.amount)}
            </td>
            <td>{deposit.amount}</td>
            <td>{deposit.transactionType}</td>
            <td>{deposit.bankName}</td>
            <td>
              <button className="button button1" >
                 <i className="fa fa-check"></i> Approve 
              </button>{" "}
              <button className="button button2">
                <i className="fa fa-ban"></i> Reject
              </button>
            </td>
            <td>{deposit.remarks}</td>
            <td>{deposit.createdAt}</td>
            
           <td>{deposit.updatedAt == null ? "Not yet" : deposit.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskOne;
