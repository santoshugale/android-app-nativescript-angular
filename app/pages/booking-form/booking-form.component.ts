import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { AnimationCurve } from "ui/enums";
import { BookingFormModel } from "./booking-form-model";
import { DatePicker } from "ui/date-picker";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { setTimeout } from "timer";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("FilterableListpicker", () => require("nativescript-filterable-listpicker").FilterableListpicker);
const ModalPicker = require("nativescript-modal-datetimepicker").ModalDatetimepicker;
const picker = new ModalPicker();
@Component({
    selector: "booking-form",
    moduleId: module.id,
    templateUrl: "./booking-form.component.html",
    styleUrls: ["./booking-form.component.css"],
})
export class BookingFormComponent implements OnInit {
    public bookingFormModel: BookingFormModel;
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
        this.bookingFormModel.cropName = args.selectedItem;
    }

    public showPicker(): void {
        this.myfilter.nativeElement.visibility = "visible";
        this.myfilter.nativeElement.show();
    }

    public selectDate(): void {
        picker.pickDate({
            title: "Select Date",
            theme: "light",
            maxDate: new Date()
        }).then((result) => {
            this.bookingFormModel.dispatchDate = result.day + "/" + result.month + "/" + result.year;
            // console.log("Date is: " + result.day + "-" + result.month + "-" + result.year);
        }).catch((error) => {
            // console.log("Error: " + error);
        });
    };

    public ngOnInit(): void {
        this.bookingFormModel = new BookingFormModel();
    }

    public onSubmitClick(): void {

    }
    public onCheckAvailabilityClick(): void {

    }
}