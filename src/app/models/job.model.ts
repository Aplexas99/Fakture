export class Job{
  /** ID */
  private _id?: number;
  public get id(): number | undefined {  
    return this._id; 
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  /** Name */
  private _name?: string;
  public get name(): string | undefined {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  /** ForeignExchangePrice */
  private _foreignExchangePrice?: number;
  public get foreignExchangePrice(): number | undefined {
    return this._foreignExchangePrice;
  }
  public set foreignExchangePrice(value: number | undefined) {
    this._foreignExchangePrice = value;
  }
  /** BamPrice */
  private _bamPrice?: number;
  public get bamPrice(): number | undefined {
    return this._bamPrice;
  }
  public set bamPrice(value: number | undefined) {
    this._bamPrice = value;
  }
  
  constructor(data? : {
    id?: number,
    name?: string,
    foreignExchangePrice?: number,
    foreign_exchange_price?: number,
    bamPrice?: number,
    bam_price?: number,
} | Job) {
  if(data) {
      if(data.id) {
          this.id = data.id;
      }
      if(data.foreignExchangePrice) {
          this.foreignExchangePrice = data.foreignExchangePrice;
      }
      if(data.bamPrice) {
          this.bamPrice = data.bamPrice;
      }
      if(data.name) {
          this.name = data.name;
      }
      if(!(data instanceof Job)){
          if(data.foreign_exchange_price) {
              this.foreignExchangePrice = data.foreign_exchange_price;
          }
          if(data.bam_price) {
              this.bamPrice = data.bam_price;
          }
      }

  }
}
}
