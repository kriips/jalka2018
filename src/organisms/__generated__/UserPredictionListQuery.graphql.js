/**
 * @flow
 * @relayHash ad1996bfc59b579723e4e985039ba512
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
  +groupPredictions: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +match: ?{|
          +id: string,
          +name: ?string,
        |},
        +prediction: ?string,
      |},
    |}>,
  |},
  +matches: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +awayResult: ?number,
        +homeResult: ?number,
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
  groupPredictions(first: 1000) {
    edges {
      node {
        match {
          id
          name
        }
        prediction
        id
      }
    }
  }
  matches(first: 100) {
    edges {
      node {
        id
        name
        awayResult
        homeResult
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
    "value": 1000,
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "match",
  "storageKey": null,
  "args": null,
  "concreteType": "Match",
  "plural": false,
  "selections": [
    v0,
    v3
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "prediction",
  "args": null,
  "storageKey": null
},
v6 = [
  v3,
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "emojiString",
    "args": null,
    "storageKey": null
  }
],
v7 = {
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
            v3,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "awayResult",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "homeResult",
              "args": null,
              "storageKey": null
            },
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
              "selections": v6
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "homeTeam",
              "storageKey": null,
              "args": null,
              "concreteType": "Team",
              "plural": false,
              "selections": v6
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UserPredictionListQuery",
  "id": null,
  "text": "query UserPredictionListQuery {\n  me {\n    id\n  }\n  groupPredictions(first: 1000) {\n    edges {\n      node {\n        match {\n          id\n          name\n        }\n        prediction\n        id\n      }\n    }\n  }\n  matches(first: 100) {\n    edges {\n      node {\n        id\n        name\n        awayResult\n        homeResult\n        group\n        date {\n          iso8601\n        }\n        awayTeam {\n          name\n          id\n          emojiString\n        }\n        homeTeam {\n          name\n          id\n          emojiString\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserPredictionListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      v1,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "groupPredictions",
        "storageKey": "groupPredictions(first:1000)",
        "args": v2,
        "concreteType": "GroupPredictionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "GroupPredictionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "GroupPrediction",
                "plural": false,
                "selections": [
                  v4,
                  v5
                ]
              }
            ]
          }
        ]
      },
      v7
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserPredictionListQuery",
    "argumentDefinitions": [],
    "selections": [
      v1,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "groupPredictions",
        "storageKey": "groupPredictions(first:1000)",
        "args": v2,
        "concreteType": "GroupPredictionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "GroupPredictionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "GroupPrediction",
                "plural": false,
                "selections": [
                  v4,
                  v5,
                  v0
                ]
              }
            ]
          }
        ]
      },
      v7
    ]
  }
};
})();
(node/*: any*/).hash = '20898afa0055270a77c5dcda8f1e3c4f';
module.exports = node;
