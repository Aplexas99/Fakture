export class BillHeader {

    /** ID */
    private _id?: number;
    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number | undefined) {
        this._id = value;
    }
    /** Bill number */
    private _billNumber?: string;
    public get billNumber(): string | undefined {
        return this._billNumber;
    }
    public set billNumber(value: string | undefined) {
        this._billNumber = value;
    }

    /** DeliveryDate */
    private _deliveryDate?: Date;
    public get deliveryDate(): Date | undefined {
        return this._deliveryDate;
    }
    public set deliveryDate(value: Date | undefined) {
        this._deliveryDate = value;
    }
    /** DocumentDate */
    private _documentDate?: Date;
    public get documentDate(): Date | undefined {
        return this._documentDate;
    }
    public set documentDate(value: Date | undefined) {
        this._documentDate = value;
    }
    /** DueDate */
    private _dueDate?: Date;
    public get dueDate(): Date | undefined {
        return this._dueDate;
    }
    public set dueDate(value: Date | undefined) {
        this._dueDate = value;
    }
    /** Description */
    private _description?: string;
    public get description(): string | undefined {
        return this._description;
    }
    public set description(value: string | undefined) {
        this._description = value;
    }
    /** Note */
    private _note?: string;
    public get note(): string | undefined {
        return this._note;
    }
    public set note(value: string | undefined) {
        this._note = value;
    }
    /** PlaceOfIssue */
    private _placeOfIssue?: string;
    public get placeOfIssue(): string | undefined {
        return this._placeOfIssue;
    }
    public set placeOfIssue(value: string | undefined) {
        this._placeOfIssue = value;
    }
    /** IssueDate */
    private _issueDate?: Date;
    public get issueDate(): Date | undefined {
        return this._issueDate;
    }
    public set issueDate(value: Date | undefined) {
        this._issueDate = value;
    }
    /** FiscalNumber */
    private _fiscalNumber?: string;
    public get fiscalNumber(): string | undefined {
        return this._fiscalNumber;
    }
    public set fiscalNumber(value: string | undefined) {
        this._fiscalNumber = value;
    }
    /** PartnerId */
    private _partnerId?: number;
    public get partnerId(): number | undefined {
        return this._partnerId;
    }
    public set partnerId(value: number | undefined) {
        this._partnerId = value;
    }
    /** TotalAmount */
    private _totalAmount?: number = 0;
    public get totalAmount(): number | undefined {
        return this._totalAmount;
    }
    public set totalAmount(value: number | undefined) {
        this._totalAmount = value;
    }
    /** Status */
    private _status?: string;
    public get status(): string | undefined {
        return this._status;
    }
    public set status(value: string | undefined) {
        this._status = value;
    }

    constructor( data? : {
        id?: number,
        billNumber?: string,
        bill_Number?: string,
        deliveryDate?: Date,
        delivery_Date?: Date,
        documentDate?: Date,
        document_Date?: Date,
        dueDate?: Date,
        due_Date?: Date,
        description?: string,
        note?: string,
        placeOfIssue?: string,
        place_Of_Issue?: string,
        issueDate?: Date,
        issue_Date?: Date,
        fiscalNumber?: string,
        fiscal_Number?: string,
        partnerId?: number,
        partner_Id?: number,
        totalAmount?: number,
        total_Amount?: number,
        status?: string
    } | BillHeader) {
        if(data) {
            if(data.id) {
                this.id = data.id;
            }
            if(data.billNumber) {
                this.billNumber = data.billNumber;
            }
            if(data.deliveryDate) {
                this.deliveryDate = data.deliveryDate;
            }
            if(data.documentDate) {
                this.documentDate = data.documentDate;
            }
            if(data.dueDate) {
                this.dueDate = data.dueDate;
            }
            if(data.description) {
                this.description = data.description;
            }
            if(data.note) {
                this.note = data.note;
            }
            if(data.placeOfIssue) {
                this.placeOfIssue = data.placeOfIssue;
            }
            if(data.issueDate) {
                this.issueDate = data.issueDate;
            }
            if(data.fiscalNumber) {
                this.fiscalNumber = data.fiscalNumber;
            }
            if(data.partnerId) {
                this.partnerId = data.partnerId;
            }
            if(data.totalAmount) {
                this.totalAmount = data.totalAmount;
            }
            if(data.status) {
                this.status = data.status;
            }
            if(!(data instanceof BillHeader)){
                if(data.bill_Number) {
                    this.billNumber = data.bill_Number;
                }
                if(data.delivery_Date) {
                    this.deliveryDate = data.delivery_Date;
                }
                if(data.document_Date) {
                    this.documentDate = data.document_Date;
                }
                if(data.due_Date) {
                    this.dueDate = data.due_Date;
                }
                if(data.place_Of_Issue) {
                    this.placeOfIssue = data.place_Of_Issue;
                }
                if(data.issue_Date) {
                    this.issueDate = data.issue_Date;
                }
                if(data.fiscal_Number) {
                    this.fiscalNumber = data.fiscal_Number;
                }
                if(data.partner_Id) {
                    this.partnerId = data.partner_Id;
                }
                if(data.total_Amount) {
                    this.totalAmount = data.total_Amount;
                }
            }

        }
    }
}
