(function(){
    var app = angular.module("website",[]);
    
    app.controller("DateController",function(){
        this.now = new Date();
        this.yearNow = new Date().getFullYear();
        this.birthday = new Date(1988,11,2);
        this.myAge=Math.abs(new Date(this.now-this.birthday.getTime()).getUTCFullYear()-1970);
    });
})();