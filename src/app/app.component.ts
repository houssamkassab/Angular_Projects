import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'azureMediaPlayerSample';
  myOptions: any;
  constructor(){

  }
  ngOnInit(): void {
     this.myOptions = {
       'nativeControlsForTouch': false,
       controls: true,
       autoplay: false,
       width: 'auto',
       height: '400',
       // playbackSpeed: {
       //   enabled: true,
       //   initialSpeed: 1.0,
       //   speedLevels: [
       //     { name: "x4.0", value: 4.0 },
       //     { name: "x3.0", value: 3.0 },
       //     { name: "x2.0", value: 2.0 },
       //     { name: "x1.75", value: 1.75 },
       //     { name: "x1.5", value: 1.5 },
       //     { name: "x1.25", value: 1.25 },
       //     { name: "normal", value: 1.0 },
       //     { name: "x0.75", value: 0.75 },
       //     { name: "x0.5", value: 0.5 },
       //   ]
       // }
     };
     const myPlayer = amp('azuremediaplayer',this.myOptions);
     myPlayer.
     src([
       {
         'src': '//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest',
         'type': 'application/vnd.ms-sstr+xml'
       }
     ]);
     // setTimeout(() => myPlayer.play() , 4000);
     // setTimeout(() => myPlayer.pause() , 8000);
     // const x = myPlayer.duration();
     // setTimeout(()=> myPlayer.currentTime(80) , 10000);
     // setTimeout(()=> myPlayer.play(), 15000);
     console.log('MyPlayerssssssss=> ', myPlayer);
     console.log('MyPlayer=> ', myPlayer);
    // setTimeout(() => myPlayer.pause() , 5000);

  }
}
