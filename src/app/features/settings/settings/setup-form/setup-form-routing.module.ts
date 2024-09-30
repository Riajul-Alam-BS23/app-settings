import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SetupFormComponent } from "./setup-form.component";


const routes = [
    {
        path: '',
        component: SetupFormComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SetupFormRoutingModule { }