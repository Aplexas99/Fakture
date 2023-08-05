export class BillBody{
  /** ID */
  private _id?: number;
  public get id(): number | undefined {  
    return this._id; 
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  /** Description */
  private _description?: string = 'No description';
  public get description(): string | undefined {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  /** Quantity */
  private _quantity?: number = 0;
  public get quantity(): number | undefined {
    return this._quantity;
  }
  public set quantity(value: number | undefined) {
    this._quantity = value;
  }
  /** ForeignExchangePrice */
  private _foreignExchangePrice?: number = 0;
  public get foreignExchangePrice(): number | undefined {
    return this._foreignExchangePrice;
  }
  public set foreignExchangePrice(value: number | undefined) {
    this._foreignExchangePrice = value;
  }
  /** BamPrice */
  private _bamPrice?: number = 0;
  public get bamPrice(): number | undefined {
    return this._bamPrice;
  }
  public set bamPrice(value: number | undefined) {
    this._bamPrice = value;
  }
  /** Discount */
  private _discount?: number = 0;
  public get discount(): number | undefined {
    return this._discount;
  }
  public set discount(value: number | undefined) {
    this._discount = value;
  }
  /** DiscountAmount */
  private _discountAmount?: string = '0';
  public get discountAmount(): string | undefined {
    return this._discountAmount;
  }
  public set discountAmount(value: string | undefined) {
    this._discountAmount = value;
  }
  /** Tax */
  private _tax?: number = 0;
  public get tax(): number | undefined {
    return this._tax;
  }
  public set tax(value: number | undefined) {
    this._tax = value;
  }
  /** Tax amount */
  public get taxAmount(): number | undefined {
    return this.baseline && this.tax ? +(this.baseline * this.tax/100).toFixed(3) : 0;
  }
  
  /** TotalPrice */
  private _totalPrice?: number = 0;
  public get totalPrice(): number | undefined {
    return this._totalPrice;
  }
  public set totalPrice(value: number | undefined) {
    this._totalPrice = value;
  }
  /** BillHeaderId */
  private _billHeaderId?: number;
  public get billHeaderId(): number | undefined {
    return this._billHeaderId;
  }
  public set billHeaderId(value: number | undefined) {
    this._billHeaderId = value;
  }
  /** Invoice Value */
  public get invoiceValue(): number | undefined {
    return this._quantity && this._bamPrice ? +(this._quantity * this._bamPrice).toFixed(3) : 0;
  }
  /** Baseline */
  public get baseline(): number | undefined {
    const discountAmount = parseFloat(this._discountAmount || '0');
    return this.invoiceValue && discountAmount ? +(this.invoiceValue - discountAmount).toFixed(3) : 0;
  }


  constructor(data? : {
    id?: number,
    description?: string,
    quantity?: number,
    foreignExchangePrice?: number,
    foreign_exchange_price?: number,
    bamPrice?: number,
    bam_price?: number,
    discount?: number,
    discountAmount?: string,
    discount_amount?: string,
    tax?: number,
    totalPrice?: number,
    total_price?: number,
    billHeaderId?: number,
    bill_header_id?: number,
} | BillBody) {
  if(data) {
      if(data.id) {
          this.id = data.id;
      }
      if(data.description) {
          this.description = data.description;
      }
      if(data.quantity) {
          this.quantity = data.quantity;
      }
      if(data.foreignExchangePrice) {
          this.foreignExchangePrice = data.foreignExchangePrice;
      }
      if(data.bamPrice) {
          this.bamPrice = data.bamPrice;
      }
      if(data.discount) {
          this.discount = data.discount;
      }
      if(data.discountAmount) {
          this.discountAmount = data.discountAmount;
      }
      if(data.tax) {
          this.tax = data.tax;
      }
      if(data.totalPrice) {
          this.totalPrice = data.totalPrice;
      }
      if(data.billHeaderId) {
          this.billHeaderId = data.billHeaderId;
      }
      if(!(data instanceof BillBody)){
          if(data.foreign_exchange_price) {
              this.foreignExchangePrice = data.foreign_exchange_price;
          }
          if(data.bam_price) {
              this.bamPrice = data.bam_price;
          }
          if(data.discount_amount) {
              this.discountAmount = data.discount_amount;
          }
          if(data.total_price) {
              this.totalPrice = data.total_price;
          }
          if(data.bill_header_id) {
              this.billHeaderId = data.bill_header_id;
          }
      }
  }
}
}
