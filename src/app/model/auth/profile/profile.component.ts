import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { StatisticsService } from '../../statistics/service/statistics.service';
import { Statistics } from '../../statistics/service/stats';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  statistics?: Statistics[];

  constructor(private token: TokenStorageService , private statisticsService:StatisticsService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getMonthlyOrders();
  }

  getMonthlyOrders(): void {
    const user = this.token.getUser();
    this.statisticsService.getMonthlyOrders(user.id)
      .subscribe(
        data => {
          this.statistics = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}