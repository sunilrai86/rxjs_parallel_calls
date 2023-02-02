import express from 'express';
import cors from 'cors';


const ElectronicsProducts = [
  {ProductId:1001,ProductName:'Laptop', Price:450000},
  {ProductId:1002,ProductName:'Desktop', Price:23000},
  {ProductId:1003,ProductName:'RAM', Price:4300},
  {ProductId:1004,ProductName:'DVD Writer', Price:2300},
  {ProductId:1005,ProductName:'Tablet', Price:34000},
  {ProductId:1006,ProductName:'Monitor', Price:8000},
  {ProductId:1007,ProductName:'Mouse', Price:500},
  {ProductId:1008,ProductName:'Keyboard', Price:1300},
  {ProductId:1009,ProductName:'Adapter', Price:4600},
  {ProductId:1010,ProductName:'USB', Price:300}
];

const PORT =  process.env.PORT || 8011;
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

instance.get('/api/products/electronics', (req,resp)=>{
   resp.status(200).send(ElectronicsProducts);
});

instance.listen(PORT, ()=>{
  console.log(`Electronics Products Service Started on Port ${PORT}`);
});
