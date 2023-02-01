import express from 'express';
import cors from 'cors';


const Orders = [
  {OrderId:'A-Ord-101', OrderedItem:'Laptop', Quantity:10},
  {OrderId:'A-Ord-102', OrderedItem:'Desktop', Quantity:30},
  {OrderId:'A-Ord-103', OrderedItem:'Printers', Quantity:50},
  {OrderId:'A-Ord-104', OrderedItem:'HDD', Quantity:500},
  {OrderId:'A-Ord-105', OrderedItem:'SDD', Quantity:3000},
  {OrderId:'A-Ord-106', OrderedItem:'USB', Quantity:7000},
  {OrderId:'A-Ord-107', OrderedItem:'Mouse', Quantity:10000},
  {OrderId:'A-Ord-108', OrderedItem:'Keyboard', Quantity:8000},
  {OrderId:'A-Ord-109', OrderedItem:'Adapter', Quantity:2000},
  {OrderId:'A-Ord-110', OrderedItem:'Display', Quantity:5000},
];

const PORT =  process.env.PORT || 7012;
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

instance.get('/api/orders', (req,resp)=>{
   resp.status(200).send(Orders);
});

instance.listen(PORT, ()=>{
  console.log('Customer Service Started on Port');
});
