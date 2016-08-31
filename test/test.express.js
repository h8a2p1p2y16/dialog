/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

process.env.AUTH_USERNAME = 'auth_user';
process.env.AUTH_PASSWORD = 'auth_pass';

var app = require('../app');
var request = require('supertest');

describe('express', function() {

  it('load home page when GET /', function(done) {
    request(app)
      .get('/')
      .auth(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD)
      .expect(200, done);
  });

  it('404 when page not found', function(done) {
    request(app)
      .get('/foo/bar')
      .auth(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD)
      .expect(404, done);
  });

});