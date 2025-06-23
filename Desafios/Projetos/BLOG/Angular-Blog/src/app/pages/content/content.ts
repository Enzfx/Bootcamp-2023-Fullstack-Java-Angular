import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  PhotoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

constructor(private route: ActivatedRoute){}
ngOnInit(){
  this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
   )
  this.setValuesToComponent(this.id);
  }


setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.PhotoCover = result.photoCover;

  
}
}
