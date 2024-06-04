import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { InfoComponent } from './info/info.component';



const routes : Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'home', children:[
      {path: 'user', component: HomeComponent} 
    ]},
    {path: 'all', component: AllproductsComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'info/:id', component: InfoComponent},
    {path: '**', component: CatalogComponent},
]



@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RoutingModule {

}