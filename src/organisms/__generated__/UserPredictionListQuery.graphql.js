/**
 * @flow
 * @relayHash cbc1c4374719dd8ae4098313579a0948
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserPredictionListQueryVariables = {| |};
export type UserPredictionListQueryResponse = {|
  +me: ?{|
    +id: string,
  |},
  +matches: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +group: ?string,
        +date: ?{|
          +iso8601: ?string,
        |},
        +awayTeam: ?{|
          +name: ?string,
          +id: string,
        |},
        +homeTeam: ?{|
          +name: ?string,
          +id: string,
        |},
      |},
    |}>,
  |},
|};
*/


/*
query UserPredictionListQuery {
  me {
    id
  }
  matches(first: 100) {
    edges {
      node {
        id
        group
        date {
          iso8601
        }
        awayTeam {
          name
          id
        }
        homeTeam {
          name
          id
        }
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
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  v0
],
v2 = [
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
    "name": "matches",
    "storageKey": "matches(first:100)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 100,
        "type": "Int"
      }
    ],
    "concreteType": "MatchConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "MatchEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Match",
            "plural": false,
            "selections": [
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "group",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "date",
                "storageKey": null,
                "args": null,
                "concreteType": "Datetime",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "iso8601",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "awayTeam",
                "storageKey": null,
                "args": null,
                "concreteType": "Team",
                "plural": false,
                "selections": v1
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "homeTeam",
                "storageKey": null,
                "args": null,
                "concreteType": "Team",
                "plural": false,
                "selections": v1
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
  "name": "UserPredictionListQuery",
  "id": null,
  "text": "query UserPredictionListQuery {\n  me {\n    id\n  }\n  matches(first: 100) {\n    edges {\n      node {\n        id\n        group\n        date {\n          iso8601\n        }\n        awayTeam {\n          name\n          id\n        }\n        homeTeam {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserPredictionListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "UserPredictionListQuery",
    "argumentDefinitions": [],
    "selections": v2
  }
};
})();
(node/*: any*/).hash = '55c28a0b1068b2cb9e7104155980766d';
module.exports = node;
