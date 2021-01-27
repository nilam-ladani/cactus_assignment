import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignment-two-get-comments',
  templateUrl: './assignment-two-get-comments.component.html',
  styleUrls: ['./assignment-two-get-comments.component.scss']
})
export class AssignmentTwoGetCommentsComponent implements OnInit {

  articles = [];
  article;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<any>(`https://gorest.co.in/public-api/comments?post_id=${localStorage.getItem('id')}`).subscribe(user => {
      this.articles = user.data;
      this.article = localStorage.getItem('article')
    });
  }

}
