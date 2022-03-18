export default class EventBus{
    constructor(){
        this.eventList = {};
    }
    on(eventName,listener){
        let listeners = this.eventList[eventName];
        if(listeners){
            let index = listeners.findIndex((trigger)=>listener === trigger)
            if(index !==-1) return;
            listeners.push(listener)
        }else{
            this.eventList[eventName] = [listener]
        }
    }
    off(eventName,listener){
        if(!listener){
            throw new Error('you should input the listener')
        }
        let index = this.eventList[eventName].findIndex((trigger)=>listener === trigger)
        this.eventList[eventName].splice(index,1)
    }
    once(eventName,listener){
      listener.once = true;
      this.on(eventName,listener);
    }
    emit(eventName){
        let listeners = this.eventList[eventName];
        if(listeners&&listeners.length){
            listeners.forEach(listener=>{
                if(listener.once){
                    listener();
                    this.off(eventName,listener)
                }else{
                    listener();
                }
                
            })
        }
    }
}