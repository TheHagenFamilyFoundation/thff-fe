import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

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
  loiID: any;

  user: any;
  userID: any;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2;
  min = -1;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  vote = -1;
  vertical = false;

  outputVote: string;

  DEFAULT_VOTE = -1;

  Loading: boolean;

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
    else {
      //set the default
      this.vote = this.DEFAULT_VOTE
    }

    this.outVote(this.vote);

  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.Loading = true;
    console.log('changes', changes)
    console.log('loi changed: ', this.loi)
    this.loiID = this.loi.id;

    setTimeout(() => { this.Loading = false; }, 1000)
    console.log('this.Loading', this.Loading)

    if (this.loi.votes.length > 0) {
      this.checkDirVote(this.loi.votes)
    }
    else {
      //set the default
      this.vote = this.DEFAULT_VOTE
    }

    this.outVote(this.vote);

  }


  onInputChange(event: any) {
    console.log("This is emitted as the thumb slides", event);

    this.vote = event.value;

    this.outVote(this.vote);

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

    this.vote = this.DEFAULT_VOTE;

    votes.forEach(vote => {

      if (vote.userID == this.userID && vote.voteType == 'Director') {
        console.log('vote', vote)
        this.vote = vote.vote;
      }

      this.outVote(this.vote);
    });

  }

  outVote(v) {

    switch (v) {
      case -1:
        this.outputVote = 'No Vote';
        break;
      case 0:
        this.outputVote = 'No';
        break;
      case 1:
        this.outputVote = 'Maybe';
        break;
      case 2:
        this.outputVote = 'Yes';
        break;
      default:
        console.log('error - invalid vote')
    }

  }

}
