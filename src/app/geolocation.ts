import { Observable } from "rxjs";

// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const locations=new Observable((observer)=>{
   let watchId:number;

   // Simple geolocation API check provides values to publish
   if('geolocation' in navigator){
       watchId=navigator.geolocation.watchPosition((postion:GeolocationPosition)=>{
           observer.next(postion)
       },(error:GeolocationPositionError)=>{
           observer.error(error)
       });
   }else{
       observer.error('Geolocation not available');
   }

   // When the consumer unsubscribes, clean up data ready for next subscription.
   return {
       unsubscribe(){
           navigator.geolocation.clearWatch(watchId)
       }
   }
});

// Call subscribe() to start listening for updates.
const locationSubscription=locations.subscribe({
    next(poistion){
        console.log('Current Position: ',poistion);
    },
    error(msg){
        console.log('Error Getting Location: ',msg);
    }
})

// Stop listening for location after 10 seconds
setTimeout(()=>{
    console.log('after 10s')
    locationSubscription.unsubscribe();
},10000)

