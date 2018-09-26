class Charger{
    static charging(){
       console.log('test');
       return 10;
    }
}
var samsungCharger = Charger.charging()
console.log(samsungCharger);