const request = require('supertest');
const assert = require('assert');
const app = require('../server');




// testing all routes
describe('routes',function(){
	it('GET / status', function(done){
		request(app)
		.get('/')
		.expect(200)
		.end(done)
	});

	it('GET /contact status', function(done){
		request(app)
		.get('/contact')
		.expect(200)
		.end(done)
	});

});

