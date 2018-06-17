/**
 * @flow
 * @relayHash 45e3cad302124b82ff3d1666df5b4a90
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TopListQueryVariables = {| |};
export type TopListQueryResponse = {|
  +me: ?{|
    +id: string,
  |},
  +users: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +username: ?string,
        +groupScore: ?number,
        +playoffScore: ?number,
      |},
    |}>,
  |},
|};
*/


/*
query TopListQuery {
  me {
    id
  }
  users(first: 250) {
    edges {
      node {
        username
        groupScore
        playoffScore
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v0
  ]
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 250,
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "groupScore",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "playoffScore",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TopListQuery",
  "id": null,
  "text": "query TopListQuery {\n  me {\n    id\n  }\n  users(first: 250) {\n    edges {\n      node {\n        username\n        groupScore\n        playoffScore\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TopListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      v1,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(first:250)",
        "args": v2,
        "concreteType": "UserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v3,
                  v4,
                  v5
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TopListQuery",
    "argumentDefinitions": [],
    "selections": [
      v1,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(first:250)",
        "args": v2,
        "concreteType": "UserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v3,
                  v4,
                  v5,
                  v0
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c460bdd8436cb2196883468528613de2';
module.exports = node;
