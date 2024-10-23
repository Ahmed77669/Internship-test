import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'sxb1plzcpnl504174.prod.sxb1.secureserver.net',
  user: 'trainees', 
  password: 'rE[V6M0T9qBx', 
  database: 'Exam_dummy_data', 
});

export default connection;


