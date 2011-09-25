// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the toString method is 1
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.4_RegExp.prototype.toString/S15.10.6.4_A11.js
 * @description Checking RegExp.prototype.toString.length
 */

//CHECK#1
if (RegExp.prototype.toString.hasOwnProperty("length") !== true) {
	$FAIL('#1: RegExp.prototype.toString.hasOwnProperty(\'length\') === true');
}

//CHECK#2
if (RegExp.prototype.toString.length !== 0) {
	$ERROR('#2: RegExp.prototype.toString.length === 0. Actual: ' + (RegExp.prototype.toString.length));
}

