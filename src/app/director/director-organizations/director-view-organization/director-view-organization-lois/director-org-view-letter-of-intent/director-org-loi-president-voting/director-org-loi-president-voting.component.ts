import { Component, OnInit, Input } from '@angular/core';

import { PresVotingService } from '../../../../../../services/voting/pres-voting.service';

@Component({
  selector: 'app-director-org-loi-president-voting',
  templateUrl: './director-org-loi-president-voting.component.html',
  styleUrls: ['./director-org-loi-president-voting.component.css']
})
export class DirectorOrgLoiPresidentVotingComponent implements OnInit {

  @Input()
  loi: any;

  user: any;
  userID: any;

  vote: number;

  upColor: string = 'black';
  downColor: string = 'black';

  President: boolean;

  constructor(public presVotingService: PresVotingService) {
  }

  ngOnInit() {
    console.log('president voting - loi', this.loi)
    console.log('president voting - loi vote', this.loi.votes)

    if (this.loi.votes.length > 0) {
      this.checkPresVote(this.loi.votes)
    }

    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.userID = this.user.id;

    console.log('president voting - this.user', this.user)

    if (this.user.accessLevel > 2) {
      this.President = true
    }

  }

  submitVote(v) {
    console.log('Submit Vote', v)

    this.vote = v;
    //extra
    console.log('this.vote', this.vote)
    this.checkVote(v);

    console.log('this.user', this.user)

    //call service to post vote
    let data = {
      letterOfIntent: this.loi.id,
      userID: this.userID,
      voteType: "President",
      vote: this.vote
    }

    this.presVotingService.vote(data).subscribe(
      (vote) => {
        console.log('vote', vote)

      },
      err => {
        console.log('err', err)
      },
      () => {

      })

  }

  checkPresVote(votes) {

    votes.forEach(vote => {

      if (vote.voteType == 'President') {

        this.checkVote(vote.vote)

      }

    });

  }

  checkVote(v) {
    if (v == 1) {
      this.upColor = 'green'
      this.downColor = 'black'
    }
    else if (v == 2) {
      this.upColor = 'black'
      this.downColor = 'red'
    }
    else {
      this.upColor = 'black'
      this.downColor = 'black'
    }
  }

  getUpColor() {
    console.log('getUpColor')
    console.log('upColor', this.upColor)
    return this.upColor;
  }

  getDownColor() {
    console.log('getDownColor')
    console.log('this.downColor', this.downColor)
    return this.downColor;
  }

}