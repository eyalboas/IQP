var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
var data = require("./iqp_exam.json");
var collect = require('collector.js');
require('testData.js');
chai.use(chaiHttp);
var expect    = require("chai").expect;


describe('check Employees', function() {
    
    it('should list ALL employees on data', function(){
        
        var expectedData = [];
        collect.collectAllEmployees(function(employeesData){
            expectedData = employeesData;
        });
        expect(testData).to.equal(expectedData);
    });

});