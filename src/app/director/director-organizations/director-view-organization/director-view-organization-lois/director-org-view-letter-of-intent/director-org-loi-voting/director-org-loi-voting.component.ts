import { Component, OnInit, Input } from '@angular/core';

import { coerceNumberProperty } from '@angular/cdk/coercion';

import { DirectorVotingService } from '../../../../../../services/voting/director-voting.service';

@Component({
  selector: 'app-director-org-loi-voting',
  templateUrl: './director-org-loi-voting.component.html',
  styleUrls: ['./director-org-loi-voting.component.css']
})
export class DirectorOrgLoiVotingComponent implements OnInit {

  @Input()
  loi: any;

  user: any;
  userID: any;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  vote = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  constructor(public directorVotingService: DirectorVotingService) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.userID = this.user.id;

    if (this.loi.votes.length > 0) {
      this.checkDirVote(this.loi.votes)
    }

  }

  onInputChange(event: any) {
    console.log("This is emitted as the thumb slides", event);

    this.vote = event.value;

    let data = {
      letterOfIntent: this.loi.id,
      userID: this.userID,
      voteType: "Director",
      vote: this.vote
    }

    console.log('director loi voting - data', data)

    this.directorVotingService.vote(data).subscribe(
      (vote) => {
        console.log('vote', vote)

      },
      err => {
        console.log('err', err)
      },
      () => {

      })

  }

  checkDirVote(votes) {



    votes.forEach(vote => {

      if (vote.userID == this.userID) {
        console.log('vote', vote)
        this.vote = vote.vote;
      }

    });

  }



}
