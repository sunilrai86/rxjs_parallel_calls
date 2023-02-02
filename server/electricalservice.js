import express from 'express';
import cors from 'cors';


const ElectricalProducts = [
  {ProductId:2001,ProductName:'Bulb', Price:45},
  {ProductId:2002,ProductName:'Mixer', Price:3000},
  {ProductId:2003,ProductName:'Socket Extension', Price:300},
  {ProductId:2004,ProductName:'Wire', Price:200},
  {ProductId:2005,ProductName:'Power Connector', Price:400},
  {ProductId:2006,ProductName:'Iron', Price:3000},
  {ProductId:2007,ProductName:'Roter', Price:500},
  {ProductId:2008,ProductName:'Lamp', Price:900},
  {ProductId:2009,ProductName:'LED Bulb', Price:600},
  {ProductId:2010,ProductName:'Tube', Price:300}
];

const PORT =  process.env.PORT || 8012;
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

instance.get('/api/products/electrical', (req,resp)=>{
   resp.status(200).send(ElectricalProducts);
});

instance.listen(PORT, ()=>{
  console.log(`Electronics Products Service Started on Port ${PORT}`);
});
