export class BatchListFormModel {
    public constructor(public batchList: BatchListItem[]) { }
}
export class BatchListItem {
    public constructor(public cropName: string = "",
        public batchNumber: number,
        public cropQuantity: number,
        public dispatchDate: string) { }
}