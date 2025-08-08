import { Component, inject , OnInit} from '@angular/core';
import { Master } from '../../services/master';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.css'
})
export class Designation implements OnInit{

  designationList: IDesignation[] = [];
  masterService = inject(Master)

  ngOnInit(): void {
      this.masterService.getDesignations().subscribe((result: APIResponseModel) => {
          this.designationList = result.data;
      }, error=>{
          alert("API error/ Network down")
      })
  }

}
