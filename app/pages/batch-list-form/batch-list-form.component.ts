import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";

import { BatchListFormModel, BatchListItem } from "./batch-list-form-model";
import { BatchListService } from "../services/batch-list.service";

@Component({
    selector: "batch-list",
    moduleId: module.id,
    templateUrl: "./batch-list-form.component.html",
    styleUrls: ["./batch-list-form.component.css"],
    providers: [BatchListService]
})
export class BatchListFormComponent implements OnInit {
    public batchListFormModel: BatchListFormModel;

    public constructor(private batchListService: BatchListService) { }

    public ngOnInit(): void {
        this.batchListFormModel = this.batchListService.getBatchList();
    }
}