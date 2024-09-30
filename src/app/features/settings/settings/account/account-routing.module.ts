import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccountComponent } from "./account.component";


const routes = [
    {
        path: '',
        component: AccountComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }