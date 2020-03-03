import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: any = [
    {imageURL: "https://cdn.pixabay.com/photo/2019/04/02/04/32/masala-4096891_960_720.jpg" },
    {imageURL: "https://cdn.pixabay.com/photo/2018/05/04/11/49/spices-3373802_960_720.jpg" },
    {imageURL: "https://cdn.pixabay.com/photo/2018/05/04/11/53/spices-3373813_960_720.jpg" },
    {imageURL: "https://cdn.pixabay.com/photo/2015/07/09/06/45/indian-spices-837333_960_720.jpg" },
    {imageURL: "https://cdn.pixabay.com/photo/2014/11/22/19/41/spices-541974_960_720.jpg" },
    {imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmB-bKEDAPFqo40gGRe8U_b3HMrRralk8Tf4q8E1R0uShy9kDM" },
    {imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN-rgTLLouBEJWOHSs1YqVPq9Dm6RjCbBxmohDbFJ5Sp9jEwqL" },
    {imageURL: "https://cdn.pixabay.com/photo/2019/04/02/04/32/masala-4096891_960_720.jpg" }
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.productList);
  }

}
