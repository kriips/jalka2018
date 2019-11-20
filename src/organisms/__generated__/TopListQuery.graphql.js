/**
 * @flow
 * @relayHash e9f32e9f0700d658a6ebf7e8af809dae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TopListQueryVariables = {||};
export type TopListQueryResponse = {|
  +me: ?{|
    +id: string
  |},
  +users: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +username: ?string,
        +groupScore: ?number,
        +playoffScore: ?number,
      |}
    |}>
  |},
|};
export type TopListQuery = {|
  variables: TopListQueryVariables,
  response: TopListQueryResponse,
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
        id
        username
        groupScore
        playoffScore
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
v1 = [
  {
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
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": "users(first:250)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 250,
        "type": "Int"
      }
    ],
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
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "username",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "groupScore",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "playoffScore",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TopListQuery",
  "id": null,
  "text": "query TopListQuery {\n  me {\n    id\n  }\n  users(first: 250) {\n    edges {\n      node {\n        id\n        username\n        groupScore\n        playoffScore\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TopListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "TopListQuery",
    "argumentDefinitions": [],
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5c873d759390781a1438382b7c11f49';
module.exports = node;
