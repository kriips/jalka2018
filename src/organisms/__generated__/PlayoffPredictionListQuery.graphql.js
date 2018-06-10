/**
 * @flow
 * @relayHash 90d6595969bf419bdd1c7b9523cd073b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PlayoffPredictionListQueryVariables = {| |};
export type PlayoffPredictionListQueryResponse = {|
  +me: ?{|
    +id: string,
  |},
  +teams: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +emojiString: ?string,
      |},
    |}>,
  |},
  +playoffPredictions: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +phase: ?number,
        +team: ?{|
          +id: string,
          +name: ?string,
        |},
      |},
    |}>,
  |},
|};
*/


/*
query PlayoffPredictionListQuery {
  me {
    id
  }
  teams(first: 100) {
    edges {
      node {
        id
        name
        emojiString
      }
    }
  }
  playoffPredictions(first: 1000) {
    edges {
      node {
        phase
        team {
          id
          name
        }
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "teams",
  "storageKey": "teams(first:100)",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 100,
      "type": "Int"
    }
  ],
  "concreteType": "TeamConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TeamEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Team",
          "plural": false,
          "selections": [
            v0,
            v2,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "emojiString",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000,
    "type": "Int"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phase",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "team",
  "storageKey": null,
  "args": null,
  "concreteType": "Team",
  "plural": false,
  "selections": [
    v0,
    v2
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlayoffPredictionListQuery",
  "id": null,
  "text": "query PlayoffPredictionListQuery {\n  me {\n    id\n  }\n  teams(first: 100) {\n    edges {\n      node {\n        id\n        name\n        emojiString\n      }\n    }\n  }\n  playoffPredictions(first: 1000) {\n    edges {\n      node {\n        phase\n        team {\n          id\n          name\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlayoffPredictionListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      v1,
      v3,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "playoffPredictions",
        "storageKey": "playoffPredictions(first:1000)",
        "args": v4,
        "concreteType": "PlayoffPredictionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PlayoffPredictionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "PlayoffPrediction",
                "plural": false,
                "selections": [
                  v5,
                  v6
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
    "name": "PlayoffPredictionListQuery",
    "argumentDefinitions": [],
    "selections": [
      v1,
      v3,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "playoffPredictions",
        "storageKey": "playoffPredictions(first:1000)",
        "args": v4,
        "concreteType": "PlayoffPredictionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PlayoffPredictionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "PlayoffPrediction",
                "plural": false,
                "selections": [
                  v5,
                  v6,
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
(node/*: any*/).hash = 'a81c9e100be8d40acb507d3bc8dc2216';
module.exports = node;
