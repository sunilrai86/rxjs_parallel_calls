export class Orders{
  [x:string]:any;
  constructor(
    public OrderId:string,
    public OrderedItem:string,
    public Quantity:number
  ){}
}
