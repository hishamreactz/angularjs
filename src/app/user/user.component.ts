import { Component, OnInit } from '@angular/core';
import {DataService} from '.././services/data.service';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
    name:string;
    age:number;
    email:string;
    address:Address;
    posts:Post[];
    bookz: Bookz = {book_name:'', book_author:''};
    hobbies:string[];
    isEdit:boolean=false;

    isUpdate:boolean=false;



  constructor(private dataService:DataService) {

        // console.log('constructer ran');


}

  ngOnInit() {


    this.showData();


     this.name = "Hisham";
     this.age = 24;

      this.email = 'hishamhwsw@gmail.com';

     this.address = {

         street:'manjery',

         city:'malappuram',
         state:'kerala'


     }

     this.hobbies = ['code','movies','music'];

    //  console.log(this.hobbies);




  }

  ngAfterViewInit() {

      $('#ioid').text('jquery works');

  }



showData(){

    this.dataService.getPosts().subscribe((posts) =>{

        this.posts = posts;

      //    console.log(posts);

    });

}


  deleteHobby(hobby){

      alert(hobby+"  Hobby Deleted");

      for(let i =0;i<this.hobbies.length;i++){

          if(this.hobbies[i] == hobby ){

              this.hobbies.splice(i,1);

          }


      }


      return false;

  }

  addHobby(hobby){

    //   console.log(hobby);

      this.hobbies.unshift(hobby);


      return false;

  }

  onClick(){

      this.name ="Hisham m";

      this.hobbies.push('new hobby');


  }


  toggleEdit(){

      this.isEdit =! this.isEdit;




  }

  updateBook(fm){
    //   console.log(this.bookz)
      this.dataService.updateBook(this.bookz, fm.value).subscribe((fm) =>{

           this.isUpdate =! this.isUpdate;

        this.showData();

        //    console.log(fm);

      });




  }




  onSubmit(f){

      this.dataService.submitPosts(f.value).subscribe((f) =>{

        this.showData();

        //    console.log(f);

      });




  }

  toggleUpdate(data){


      this.dataService.editBook(data).subscribe((bookz) =>{

       this.bookz = bookz;

        // console.log(this.bookz);


      });




      this.isUpdate =! this.isUpdate;




  }



  onDelete(id){





      this.dataService.deletePost(id).subscribe((f) =>{


          let txt;
          let b = confirm("Confirm Delete!");
          if (b == true) {

              this.showData();

          } else {
              txt = "You pressed Cancel!";
          }




      });






  }





  onEdit(){

      this.isEdit =! this.isEdit;




  }





}



interface Bookz{
    book_name:string,
    book_author:string
}


interface Post{
    book_name:string,
    book_author:string

}


interface Address{
    street:string,
    city:string,
    state:string

}
