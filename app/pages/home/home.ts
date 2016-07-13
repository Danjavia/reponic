import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubService } from '../../services/github';
import { DetailsPage } from '../details/details';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [GitHubService]
})
export class HomePage {

    public foundRepos;
    public username;

    constructor( private nav: NavController, private github: GitHubService ) {

    }

    getRepos () {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => {
                console.log( 'Task getRepos completed!' );
            }
        );
    }

    goToDetails( repo ) {
        this.nav.push(DetailsPage, { repo: repo });
    }

}
