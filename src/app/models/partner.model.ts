export class Partner{

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
  /** Address */
  private _address?: string;
  public get address(): string | undefined {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  /** City */
 private _city?: string;
  public get city(): string | undefined {
    return this._city;
  }
  public set city(value: string | undefined) {
    this._city = value;
  }
  /** PostalCode */
  private _postalCode?: string;
  public get postalCode(): string | undefined {
    return this._postalCode;
  }
  public set postalCode(value: string | undefined) {
    this._postalCode = value;
  }
  /** Mb */
  private _mb?: string;
  public get mb(): string | undefined {
    return this._mb;
  }
  public set mb(value: string | undefined) {
    this._mb = value;
  }
  /** Pbr */
  private _pbr?: string;
  public get pbr(): string | undefined {
    return this._pbr;
  }
  public set pbr(value: string | undefined) {
    this._pbr = value;
  }
  /** Bank */
  private _bank?: string;
  public get bank(): string | undefined {
    return this._bank;
  }
  public set bank(value: string | undefined) {
    this._bank = value;
  }
  /** Swift */
  private _swift?: string;
  public get swift(): string | undefined {
    return this._swift;
  }
  public set swift(value: string | undefined) {
    this._swift = value;
  }
  /** Type */
  private _type?: boolean;
  public get type(): boolean | undefined {
    return this._type;
  }
  public set type(value: boolean | undefined) {
    this._type = value;
  }
  /** Country */
  private _country?: string;
  public get country(): string | undefined {
    return this._country;
  }
  public set country(value: string | undefined) {
    this._country = value;
  }
  
  constructor(data? : {
    id?: number,
    name?: string,
    address?: string,
    city?: string,
    postalCode?: string,
    postal_code?: string,
    mb?: string,
    pbr?: string,
    bank?: string,
    swift?: string,
    type?: boolean,
    country?: string,
} | Partner) {
  if(data) {
    if(data.id) {
      this.id = data.id;
    }
    if(data.name) {
      this.name = data.name;
    }
    if(data.address) {
      this.address = data.address;
    }
    if(data.city) {
      this.city = data.city;
    }
    if(data.postalCode) {
      this.postalCode = data.postalCode;
    }
    if(data.mb) {
      this.mb = data.mb;
    }
    if(data.pbr) {
      this.pbr = data.pbr;
    }
    if(data.bank) {
      this.bank = data.bank;
    }
    if(data.swift) {
      this.swift = data.swift;
    }
    if(data.type) {
      this.type = data.type;
    }
    if(data.country) {
      this.country = data.country;
    }
    if(!(data instanceof Partner)){
      if(data.postal_code) {
        this.postalCode = data.postal_code;
      }
      
    }

  }
}
}

