import express from 'express';
import request from 'request';
import async from 'async';

const app = express();

app.get('/upcoming', (req, res) => {
    async.times(2, (i, cb) => {
        var options = {
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=88ba65a42c36cfbd262805b40df6d08c',
            qs: {
                'language': 'en-US',
                'page': i+1,
                'region': 'us'
            },
        };

        request(options, (error, response, body) => {
            var result = JSON.parse(body);
            var data = result.results;
            cb(null, data);
        });
        
        }, (err, results) => {
            res.json(results);
    });
});

app.listen('8010', () => {
    console.log('Listen on port 8010');
});