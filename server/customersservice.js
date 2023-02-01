import express from 'express';
import cors from 'cors';


const Customers = [
  {CustomerId:101,CustomerName:'MSIT', City:'Pune-East'},
  {CustomerId:102,CustomerName:'LSIT', City:'Pune-West'},
  {CustomerId:103,CustomerName:'TSIT', City:'Pune-South'},
  {CustomerId:104,CustomerName:'DNCD', City:'Pune-North'},
  {CustomerId:105,CustomerName:'DEVC', City:'Pune-East'},
  {CustomerId:106,CustomerName:'DNTV', City:'Pune-West'},
  {CustomerId:107,CustomerName:'MSTV', City:'Pune-South'},
  {CustomerId:107,CustomerName:'TSTV', City:'Pune-East'},
  {CustomerId:108,CustomerName:'LSTV', City:'Pune-North'},
  {CustomerId:109,CustomerName:'VPIT', City:'Pune-East'},
  {CustomerId:110,CustomerName:'SAIT', City:'Pune-West'}
];

const PORT =  process.env.PORT || 7011;
// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({extended:false}));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
}));

instance.get('/api/customers', (req,resp)=>{
   resp.status(200).send(Customers);
});

instance.listen(PORT, ()=>{
  console.log('Customer Service Started on Port');
});
