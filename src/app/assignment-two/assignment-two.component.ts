import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.scss']
})
export class AssignmentTwoComponent implements OnInit {

  users = [];
  columns = ["Title", "Body", "Author Name"];
  index = ["title", "body", "name"];
  current_page = 1;
  totalRecords;
 


  constructor(
    private http: HttpClient,
    private route: Router,
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.getUserDetails(this.current_page);
  }

  getUserDetails(page) {
    this.http.get<any>(`https://gorest.co.in/public-api/posts?page=${this.current_page}`).subscribe(titles => {
      this.totalRecords = titles;
      titles.data.map(title => {
        this.http.get<any>(`https://gorest.co.in/public-api/users/${title.user_id}`).subscribe(user => {
          title.name = user.data.name;
        });
        this.users = titles.data;
        this.us.getUsers(this.users);
      });
    });
  }

  showCommentsDetail(id, body) {
    localStorage.setItem("id", id);
    localStorage.setItem("article", body);
    this.route.navigate(['getComments']);
  }

  prevPage() {
    if (this.current_page > 1) {
      this.current_page--;
      this.changePage(this.current_page);
    }
  }

  nextPage() {
    if (this.current_page < Math.ceil(this.totalRecords.meta.pagination.total / 20)) {
      this.current_page++;
      this.changePage(this.current_page);
    }
  }

  changePage(page: number) {
    this.getUserDetails(page);

    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > this.numberOfPages()) page = this.numberOfPages();

    page_span.innerHTML = page;

    if (page == 1) {
      btn_prev.style.visibility = "hidden";
    } else {
      btn_prev.style.visibility = "visible";
    }

    if (page == this.numberOfPages()) {
      btn_next.style.visibility = "hidden";
    } else {
      btn_next.style.visibility = "visible";
    }
  }

  numberOfPages() {
    return Math.ceil(this.totalRecords.meta.total / 20);
  }
}