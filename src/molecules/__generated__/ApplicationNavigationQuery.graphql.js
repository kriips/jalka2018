/**
 * @flow
 * @relayHash dc665c15a4768aacab67571aa5266fda
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ApplicationNavigationQueryVariables = {||};
export type ApplicationNavigationQueryResponse = {|
  +me: ?{|
    +id: string
  |}
|};
export type ApplicationNavigationQuery = {|
  variables: ApplicationNavigationQueryVariables,
  response: ApplicationNavigationQueryResponse,
|};
*/


/*
query ApplicationNavigationQuery {
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
  "name": "ApplicationNavigationQuery",
  "id": null,
  "text": "query ApplicationNavigationQuery {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ApplicationNavigationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ApplicationNavigationQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e5ae23ff2a0b5a35ab1ef6e9b0e724d';
module.exports = node;
