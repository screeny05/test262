// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "toLocaleTimeString" has { DontEnum } attributes
 *
 * @id: S15.9.5.7_A1_T3;
 * @section: 15.9.5.7;
 * @description: Checking DontEnum attribute;
 */

if (Date.prototype.propertyIsEnumerable('toLocaleTimeString')) {
  $ERROR('#1: The Date.prototype.toLocaleTimeString property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "toLocaleTimeString") {
    $ERROR('#2: The Date.prototype.toLocaleTimeString has the attribute DontEnum');
  }
}

