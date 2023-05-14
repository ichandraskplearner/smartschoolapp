import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface AdmissionFormCommentsGroup {
  admissionId: FormControl<string | null>,  
  comments: FormArray,  
}

interface CommentFormGroup {
  commentId: FormControl<string | null>,
  commentText: FormControl<string | null>,
  commentDate: FormControl<string | null>,
}

interface CommentDetails {
  commentId: string,
  commentText: string,
  commentDate: string,
}

@Component({
  selector: 'app-admission-comments',
  templateUrl: './admission-comments.component.html',
  styleUrls: ['./admission-comments.component.scss']
})
export class AdmissionCommentsComponent {
   
  admissionCommentsDetails: any;
  admissionCommentsForm: FormGroup;
  
  constructor(
    private fb: FormBuilder) {
    this.admissionCommentsDetails = {
      admissionId: '',
      comments: []
    };
    this.admissionCommentsForm = this.defaultAdimissionCommenForm();
    this.fillCommentsArray();
  }

  private defaultAdimissionCommenForm(): FormGroup<AdmissionFormCommentsGroup> {
    return this.fb.group<AdmissionFormCommentsGroup>({
      admissionId: new FormControl(''),         
      comments: this.fb.array<CommentFormGroup>([])
    });
  }

  private fillCommentsArray() {

    let comments: CommentDetails[] = [
      {
        commentId : '1',
        commentDate : '2023-05-01',
        commentText : 'Comment 1'
      },
      {
        commentId : '2',
        commentDate : '2023-04-29',
        commentText : 'Comment 2'
      },
      {
        commentId : '3',
        commentDate : '2023-03-29',
        commentText : 'Comment 3'
      }
    ];

    comments.forEach((v, i) => {
      this.commentItems.push(
        this.fb.group<CommentFormGroup>({
          commentId: new FormControl(v.commentId),
          commentDate: new FormControl(v.commentDate),
          commentText: new FormControl(v.commentText)
        })
      );
    });
  }

  get commentItems(): FormArray {
    return this.admissionCommentsForm.controls['comments'] as FormArray;
  }
}
