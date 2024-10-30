import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-assistance-detail',
  standalone: true,
  imports: [],
  templateUrl: './assistance-detail.component.html',
  styleUrl: './assistance-detail.component.css'
})
export class AssistanceDetailComponent implements OnInit{
  assistenciaId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(
      params=>{
        this.assistenciaId = +params['id'];

      }
    )
  }
}
