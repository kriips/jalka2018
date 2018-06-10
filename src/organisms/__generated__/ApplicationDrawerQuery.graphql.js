/**
 * @flow
 * @relayHash 7e7f603c7565f86ae436a1d9c9fe3969
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ApplicationDrawerQueryVariables = {| |};
export type ApplicationDrawerQueryResponse = {|
  +me: ?{|
    +id: string,
  |},
|};
*/


/*
query ApplicationDrawerQuery {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ApplicationDrawerQuery",
  "id": null,
  "text": "query ApplicationDrawerQuery {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ApplicationDrawerQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ApplicationDrawerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '18994430dca86cef9537ae3e88fa8273';
module.exports = node;
