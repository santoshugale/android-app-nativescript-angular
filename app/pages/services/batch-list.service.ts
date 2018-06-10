import { BatchListFormModel, BatchListItem } from "../batch-list-form/batch-list-form-model";

export class BatchListService {
    private batchList: BatchListFormModel;
    constructor() {
        this.batchList = new BatchListFormModel(
            [
                new BatchListItem('item1', 1, 100, '1-1-1999'),
                new BatchListItem('item2', 2, 100, '1-1-1999'),
                new BatchListItem('item3', 3, 100, '1-1-1999')
            ])
    }
    public getBatchList(): BatchListFormModel {
        return this.batchList;
    }
}