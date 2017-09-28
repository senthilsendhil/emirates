
import {Component} from "@angular/core";

@Component({
  template : '<h3> Shopping Home Page</h3>'
})
export class HomeComponent {

}

@Component({
  template : `<div class="col-sm-6">
    <product-list></product-list>
  </div>
  <div class="col-sm-6 well">
    <cart-items></cart-items>
  </div>
  `
})

export class ListComponent {

}

@Component({
  template : '<manage-product></manage-product>'
})
export class ManageProductRouteComponent {

}


@Component({
  template : '<h3>404 .Page Not found </h3>'
})

export class NotFoundComponent {

}
