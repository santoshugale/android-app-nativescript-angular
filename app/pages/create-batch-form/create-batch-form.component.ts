import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { AnimationCurve } from "ui/enums";
import { CreateBatchFormModel } from "./create-batch-form-model";
import { DatePicker } from "ui/date-picker";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { setTimeout } from "timer";
import { registerElement } from "nativescript-angular/element-registry";
const ModalPicker = require("nativescript-modal-datetimepicker").ModalDatetimepicker;
const picker = new ModalPicker();
@Component({
    selector: "create-batch-form",
    moduleId: module.id,
    templateUrl: "./create-batch-form.component.html",
    styleUrls: ["./create-batch-form.component.css"],
})
export class CreateBatchFormComponent implements OnInit {
    public createBatchFormModel: CreateBatchFormModel;
    public isItemVisible: boolean = false;
    public isButtonVisible: boolean = false;
    @ViewChild('myfilter') myfilter: ElementRef;

    public listitems: string[] = ["Gabbage", "Chilly","Brinjal"];

    constructor(private page: Page) {
    }

    public cancelFilterableList(): void {
        console.log('canceled');
    }

    public itemTapped(args): void {
        this.createBatchFormModel.cropName = args.selectedItem;
    }

    public showPicker(): void {
        this.myfilter.nativeElement.visibility = "visible";
        this.myfilter.nativeElement.show();
    }

    public selectStartDate(): void {
        picker.pickDate({
            title: "Select Date",
            theme: "light",
            maxDate: new Date()
        }).then((result) => {
            this.createBatchFormModel.startDate = result.day + "/" + result.month + "/" + result.year;
        }).catch((error) => {
            console.log("Error: " + error);
        });
    };
    
    public selectDispatchDate(): void {
        picker.pickDate({
            title: "Select Date",
            theme: "light",
            maxDate: new Date()
        }).then((result) => {
            this.createBatchFormModel.dispatchDate = result.day + "/" + result.month + "/" + result.year;
        }).catch((error) => {
            console.log("Error: " + error);
        });
    };

    public ngOnInit(): void {
        this.createBatchFormModel = new CreateBatchFormModel();
    }

    public onAddClick(): void {

    }

    public onCheckAvailabilityClick(): void {

    }
}