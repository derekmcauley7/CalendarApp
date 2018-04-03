var Data =require('./data');

var calendar = Data('calendar', {hasMany:'day'});

var day = Data('day');

var g = calendar.insert({
    name: 'Guiter'

});

console.log(calendar.res(g));


