var Charger = /** @class */ (function () {
    function Charger() {
    }
    Charger.charging = function () {
        console.log('test');
        return 10;
    };
    return Charger;
}());
var samsungCharger = Charger.charging();
console.log(samsungCharger);
