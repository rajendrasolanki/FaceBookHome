import { Component , OnInit, HostListener} from '@angular/core';
import { UserDetailService } from './service/user-detail/user-detail.service';
import { AdvertisementService } from './service/advertisement/advertisement.service';
import { FriendListService } from './service/friend-list/friend-list.service';
import { NewsFeedService } from './service/news-feed/news-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDetailService, AdvertisementService, FriendListService, NewsFeedService]
})
export class AppComponent implements OnInit{
    private User: Object;
    private friends: Object;
    private advertisement: Object;
    private newsFeed: Object;
    private isSection1 = true;
    private isSection2 = true;
    private isSection3 = true;
    private isSection4 = true;
    private isHeader = true;
    private title="NewsFeed";
    private section1Height: number;
    private section3Height: number;
    private isSection1FixedTop = false;
    private isSection1FixedBottom = false;
    private isSection3FixedTop = false;
    private isSection3FixedBottom = false;
    constructor(private user: UserDetailService,
        private friend: FriendListService,
        private adds: AdvertisementService,
        private news: NewsFeedService){}
    
    ngOnInit(){
        this.getUser();
        this.getFriends();
        this.getAdvertisements();
        this.getNewsFeeds();
        this.getDevice();
    }
    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
    if(this.isHeader){
        let pos=document.body.scrollTop;
        let max = window.innerHeight;
        this.sectionHeight(1);
        this.sectionHeight(3);
        if (this.section3Height <= max){
            this.isSection3FixedTop = true;
        } else if ((this.section3Height-max+33) <= pos){
            this.isSection3FixedBottom = true;
        }
        else {
            this.isSection3FixedBottom = false;
        }
        if (this.section1Height <= max){
            this.isSection1FixedTop = true;
        } else if ((this.section1Height-max+33) <= pos){
            this.isSection1FixedBottom = true;
        }
        else {
            this.isSection1FixedBottom = false;
        }
     }
    }
    sectionHeight(no){
        if(no==1){
            this.section1Height = document.getElementById('section_1').scrollHeight;
        }
        else
        {
            this.section3Height = document.getElementById('section_3').scrollHeight;
        }
    }
    getDevice(){
        let deciveWidth = window.innerWidth;
        if (deciveWidth < 750){
            this.isSection1 = false;
            this.isSection3 = false;
            this.isSection4 = false;
            this.isHeader = false;
        }
    }
    showSection(no){
        switch(no){
            case 1: this.isSection1 = true;
                    this.isSection2 = false;
                    this.isSection3 = false;                    
                    this.isSection4 = false;
                    this.title="Profile";
                    break;
            case 2: this.isSection1 = false;
                    this.isSection2 = true;
                    this.isSection3 = false;                    
                    this.isSection4 = false;
                    this.title="NewsFeed";
                    break;
            case 3: this.isSection1 = false;
                    this.isSection2 = false;
                    this.isSection3 = true;                    
                    this.isSection4 = false;
                    this.title="Advertisement";
                    break;
            case 4: this.isSection1 = false;
                    this.isSection2 = false;
                    this.isSection3 = false;                    
                    this.isSection4 = true;
                    this.title="Friends";
                    break;
        }
    }
    getUser(){
        this.user.getUserDetail().subscribe(
        response=>{
            this.User = response;
        });
    }
    getFriends(){
        this.friend.getFriendList().subscribe(
            response=>{
                this.friends = response.friends;
        });
    }
    getAdvertisements(){
        this.adds.getAdvertisement().subscribe(
            response=>{
                this.advertisement = response.advertisement;
        });
    }
    getNewsFeeds(){
        this.news.getNewsFeed().subscribe(
            response=>{
                this.newsFeed = response.newsFeed;
        });
    }
}
