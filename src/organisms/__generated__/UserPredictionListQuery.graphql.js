/**
 * @flow
 * @relayHash 9b2f0399038724bd285c48c8f1f86885
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
        +name: ?string,
        +group: ?string,
        +date: ?{|
          +iso8601: ?string,
        |},
        +awayTeam: ?{|
          +name: ?string,
          +id: string,
          +emojiString: ?string,
        |},
        +homeTeam: ?{|
          +name: ?string,
          +id: string,
          +emojiString: ?string,
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
        name
        group
        date {
          iso8601
        }
        awayTeam {
          name
          id
          emojiString
        }
        homeTeam {
          name
          id
          emojiString
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  v1,
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "emojiString",
    "args": null,
    "storageKey": null
  }
],
v3 = [
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
              v1,
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
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "homeTeam",
                "storageKey": null,
                "args": null,
                "concreteType": "Team",
                "plural": false,
                "selections": v2
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
  "text": "query UserPredictionListQuery {\n  me {\n    id\n  }\n  matches(first: 100) {\n    edges {\n      node {\n        id\n        name\n        group\n        date {\n          iso8601\n        }\n        awayTeam {\n          name\n          id\n          emojiString\n        }\n        homeTeam {\n          name\n          id\n          emojiString\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserPredictionListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "UserPredictionListQuery",
    "argumentDefinitions": [],
    "selections": v3
  }
};
})();
(node/*: any*/).hash = 'c6477c4d142696b787c724debbed293e';
module.exports = node;
