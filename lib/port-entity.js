/**
 * This file is part of node-entity-port
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */
const _ = require('lodash');
const {PortValidator, portValidator} = require('port-validator');

const {PortEntityError} = require('./port-entity-error');

/**
 * An entity to manage network communications port.
 *
 * @class
 */
class PortEntity {

  /**
   * Create a new instance of {PortEntity}.
   *
   * @param value {string|number|PortValidator} - The port number.
   * @constructor
   */
  constructor(value) {
    PortEntity.checkParameters(value);
    this.portValidator = PortEntity.getPortValidator(value);
    Object.assign(this, this.validate());
  }

  /**
   * Check type of the provided parameter(s).
   *
   * @param value {string|number|PortValidator} - The port number.
   */
  static checkParameters(value) {
    if ((_.isString(value) === false) &&
      (_.isInteger(value) === false) &&
      (value instanceof PortValidator === false)) {
      throw new PortEntityError(`Parameter <value> must be of type {string|integer|PortValidator}. Founded: ${value}`);
    }
  }

  /**
   * Auto-convert the provided value to a {PortValidator} instance.
   *
   * @param value {*}
   * @returns {*}
   */
  static getPortValidator(value) {
    if ((_.isString(value) === true) || (_.isInteger(value))) {
      try {
        return portValidator(value);
      } catch (e) {
        throw new PortEntityError(e);
      }
    }
    return value;
  }

  /**
   * Validate the port using {PortValidator}.
   *
   * @returns {{value}}
   */
  validate() {
    const validation = this.portValidator.validate();
    if (validation === false) {
      throw new PortEntityError('Seems not a port');
    }
    return {value: this.portValidator.value};
  }

  /**
   * A factory static method to create a new instance of {PortEntity}.
   *
   * @param value {string|PortValidator} - If {string|number}: a port number. An instance of {PortValidator} else.
   * @public
   * @returns {PortEntity}
   */
  static factory(value) {
    return new HostEntity(value);
  }
}

module.exports = {};
module.exports.PortEntity = PortEntity;
