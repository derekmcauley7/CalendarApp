const express = require('express');
const Data  = require('./data');
const calendar = Data('calendar', {hasMany: 'day'});
const day = Data('data');


var api = express.Router();

api.all('*', (req, res, next) =>{ 
    res.type('application/vnd.api+json');
    next();
});

api.route('/calendars')
    .get( (req, res) => 
        res.json({ data: calendar.all().map(calendar.res) }))

    .post( (req, res) => 
        res.json({ data: calendar.res(calendar.insert(req.body.data.attributes))
        }));
    
api.route('/calendars/:ids')
    .get( (req, res) =>
        res.json({ data: calendar.res(calendar.get(req.params.id)) }))
    .patch( (req, res) =>{
        var data = res.body.data;
        res.json( {data: calendar.res(calendar.update(data.id, data.attributes))
        })
    .delete( (req, res) => { 
        calendar.remove(req.params.id);
        res.json({
        data: {
            type: 'calendar',
            id: req.params.id
        }
        });
    });
 api.route('/days')
    .post( (req, res) => {
        var data = req.body.data;
        var calendar = calendars.get(data.relationships.calendar.data.id);
        var day = days.insert(data.attributes, calendar);
        res.json({data: days.res(day)});

    })

api.route('/days/:id')
    .get( (req, res) =>
    res.json({ data: days.res(days.get(req.params.id)) }))
    .patch( (req, res) => {
        var data = req.body.data;
        res.json({ data: days.res(days.update(data.id, data.attributes)) });
    });
});
module.exports = api;
