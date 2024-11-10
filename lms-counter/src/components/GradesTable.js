import React from "react";
import { Table } from "antd";
import './components.css'
const data = [
  {
    key: "1",
    subject: "Urdu",
    final: 32,
    session: 38,
    total: 70,
    eligibiltystatus: "Eligible",
    passingstatus: "Passed",
  },
  {
    key: "1",
    subject: "Urdu",
    final: 32,
    session: 38,
    total: 70,
    eligibiltystatus: "Eligible",
    passingstatus: "Passed",
  },
  {
    key: "1",
    subject: "Urdu",
    final: 32,
    session: 38,
    total: 70,
    eligibiltystatus: "Eligible",
    passingstatus: "Passed",
  },
];

// Define columns for the table
const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Sessional",
    dataIndex: "session",
    key: "session",
  },
  {
    title: "Final",
    dataIndex: "final",
    key: "final",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (_, record) => record.final + record.session,
  },
  {
    title: "Eligibility Status",
    dataIndex: "eligibiltystatus",
    key: "eligibiltystatus",
  },
  {
    title: "Passing Status",
    dataIndex: "passingstatus",
    key: "passingstatus",
  },
];

const GradesTable = () => {
  return (
    <div className="gradestable">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="custom-table"
      />
    </div>
  );
};

export default GradesTable;
