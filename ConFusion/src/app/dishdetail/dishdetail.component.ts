import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  commentForm: FormGroup;
  comment: Comment;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
      rating: ['5,', Validators.required],
      comment: ['', Validators.required],
      author: ['', Validators.required]
    });
    console.log(this.commentForm);
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    let d = new Date();
    let n = d.toISOString();
    this.comment.date = n;
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.commentForm.reset({
      rating: '5',
      comment: '',
      author: ''
    });
  }
}
