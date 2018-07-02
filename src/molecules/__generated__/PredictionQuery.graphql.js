/**
 * @flow
 * @relayHash f401e0741deddeeebdf7f479435eabe9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PredictionQueryVariables = {|
  id: string,
|};
export type PredictionQueryResponse = {|
  +playoffResults: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +phase: ?number,
        +team: ?{|
          +name: ?string,
          +id: string,
        |},
      |},
    |}>,
  |},
  +user: ?{|
    +id: string,
    +username: ?string,
    +playoffPredictions: ?$ReadOnlyArray<?{|
      +team: ?{|
        +name: ?string,
        +emojiString: ?string,
      |},
      +phase: ?number,
    |}>,
    +groupPredictions: ?$ReadOnlyArray<?{|
      +prediction: ?string,
      +match: ?{|
        +id: string,
        +name: ?string,
        +awayResult: ?number,
        +homeResult: ?number,
        +awayTeam: ?{|
          +emojiString: ?string,
          +name: ?string,
        |},
        +homeTeam: ?{|
          +emojiString: ?string,
          +name: ?string,
        |},
      |},
    |}>,
  |},
|};
*/


/*
query PredictionQuery(
  $id: ID!
) {
  playoffResults(first: 1000) {
    edges {
      node {
        phase
        team {
          name
          id
        }
        id
      }
    }
  }
  user(id: $id) {
    id
    username
    playoffPredictions {
      team {
        name
        emojiString
        id
      }
      phase
      id
    }
    groupPredictions {
      prediction
      match {
        id
        name
        awayResult
        homeResult
        awayTeam {
          emojiString
          name
          id
        }
        homeTeam {
          emojiString
          name
          id
        }
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000,
    "type": "Int"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phase",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "team",
  "storageKey": null,
  "args": null,
  "concreteType": "Team",
  "plural": false,
  "selections": [
    v3,
    v4
  ]
},
v6 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "emojiString",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "prediction",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "awayResult",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "homeResult",
  "args": null,
  "storageKey": null
},
v12 = [
  v8,
  v3
],
v13 = [
  v8,
  v3,
  v4
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PredictionQuery",
  "id": null,
  "text": "query PredictionQuery(\n  $id: ID!\n) {\n  playoffResults(first: 1000) {\n    edges {\n      node {\n        phase\n        team {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n  user(id: $id) {\n    id\n    username\n    playoffPredictions {\n      team {\n        name\n        emojiString\n        id\n      }\n      phase\n      id\n    }\n    groupPredictions {\n      prediction\n      match {\n        id\n        name\n        awayResult\n        homeResult\n        awayTeam {\n          emojiString\n          name\n          id\n        }\n        homeTeam {\n          emojiString\n          name\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PredictionQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "playoffResults",
        "storageKey": "playoffResults(first:1000)",
        "args": v1,
        "concreteType": "PlayoffResultConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PlayoffResultEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "PlayoffResult",
                "plural": false,
                "selections": [
                  v2,
                  v5
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v6,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v4,
          v7,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "playoffPredictions",
            "storageKey": null,
            "args": null,
            "concreteType": "PlayoffPrediction",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "team",
                "storageKey": null,
                "args": null,
                "concreteType": "Team",
                "plural": false,
                "selections": [
                  v3,
                  v8
                ]
              },
              v2
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "groupPredictions",
            "storageKey": null,
            "args": null,
            "concreteType": "GroupPrediction",
            "plural": true,
            "selections": [
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "match",
                "storageKey": null,
                "args": null,
                "concreteType": "Match",
                "plural": false,
                "selections": [
                  v4,
                  v3,
                  v10,
                  v11,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "awayTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v12
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "homeTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v12
                  }
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
    "name": "PredictionQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "playoffResults",
        "storageKey": "playoffResults(first:1000)",
        "args": v1,
        "concreteType": "PlayoffResultConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PlayoffResultEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "PlayoffResult",
                "plural": false,
                "selections": [
                  v2,
                  v5,
                  v4
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v6,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v4,
          v7,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "playoffPredictions",
            "storageKey": null,
            "args": null,
            "concreteType": "PlayoffPrediction",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "team",
                "storageKey": null,
                "args": null,
                "concreteType": "Team",
                "plural": false,
                "selections": [
                  v3,
                  v8,
                  v4
                ]
              },
              v2,
              v4
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "groupPredictions",
            "storageKey": null,
            "args": null,
            "concreteType": "GroupPrediction",
            "plural": true,
            "selections": [
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "match",
                "storageKey": null,
                "args": null,
                "concreteType": "Match",
                "plural": false,
                "selections": [
                  v4,
                  v3,
                  v10,
                  v11,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "awayTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v13
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "homeTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v13
                  }
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'faf2d9cb50bf0b0621ab25c0483e9ba0';
module.exports = node;
