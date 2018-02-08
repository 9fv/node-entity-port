/**
 * This file is part of node-entity-port
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

class PortEntityError extends Error {
  constructor(...args) {
    super(...args);
  }
}

module.exports = {};
module.exports.PortEntityError = PortEntityError;
