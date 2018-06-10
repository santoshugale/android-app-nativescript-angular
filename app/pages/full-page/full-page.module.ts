import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { FullPageComponent } from "./full-page.component";
import { Routes, RouterModule } from '@angular/router';
import { IfAndroidDirective, IfIosDirective } from "../../shared/if-platform.directive";
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { CreateBatchFormComponent } from "../create-batch-form/create-batch-form.component";
import { BookingListFormComponent } from "../booking-list-form/booking-list-form.component";
import { BatchListFormComponent } from "../batch-list-form/batch-list-form.component";
import { CropMasterComponent } from "../crop-master-form/crop-master.component";
export const subRoutes: Routes = [
    {
        path: '',
        component: FullPageComponent,
        children: [
            { path: 'bookingForm', component: BookingFormComponent },
            { path: 'createBatchForm', component: CreateBatchFormComponent },
            { path: 'bookingListForm', component: BookingListFormComponent },
            { path: 'batchListForm', component: BatchListFormComponent },
            { path: 'cropMasterForm', component: CropMasterComponent }
        ]
    }
];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(subRoutes)
    ],
    declarations: [
        FullPageComponent,
        BookingFormComponent,
        CreateBatchFormComponent,
        BookingListFormComponent,
        BatchListFormComponent,
        CropMasterComponent,
        IfAndroidDirective,
        IfIosDirective
    ],
    exports: [FullPageComponent]
})
export class FullPageModule { }