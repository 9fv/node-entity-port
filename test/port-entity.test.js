/**
 * This file is part of node-entity-port
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should');

const {PortEntity} = require('../lib/port-entity');
const {PortEntityError} = require('../lib/port-entity-error');


describe('Class named {PortEntity}', () => {
  it('should be a function', () => {
    (PortEntity).should.be.a.Function();
  });
});

describe('Create a {PortEntity}', () => {
  it('without parameter should be throw a {PortEntityError}', () => {
    (() => { new PortEntity(); }).should.throw(PortEntityError);
  });

  it('using an empty string should be throw a {PortEntityError}', () => {
    (() => { new PortEntity(''); }).should.throw(PortEntityError);
  });

  it('using an invalid {string} port number should be throw a {PortEntityError}', () => {
    (() => { new PortEntity('.poulet'); }).should.throw(PortEntityError);
  });

  it('using an valid {string} port number should be a {PortEntity}', () => {
    (new PortEntity('80')).should.be.instanceOf(PortEntity);
  });

  it('using an invalid {number} port number should be throw a {PortEntityError}', () => {
    (() => { new PortEntity(67889); }).should.throw(PortEntityError);
  });

  it('using an valid {number} port number should be a {PortEntity}', () => {
    (new PortEntity(1023)).should.be.instanceOf(PortEntity);
  });

});

describe('{PortEntity}', () => {
  it('should have a <value> property when using an valid IPv4', () => {
    (new PortEntity(1023)).should.have.a.property('value');
  });
});
