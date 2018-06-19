/**
 * @flow
 * @relayHash 3394e1475aa537e3fd84827ffa20351d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PredictionQueryVariables = {|
  id: string,
|};
export type PredictionQueryResponse = {|
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "emojiString",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phase",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "prediction",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "awayResult",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "homeResult",
  "args": null,
  "storageKey": null
},
v10 = [
  v5,
  v4
],
v11 = [
  v5,
  v4,
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PredictionQuery",
  "id": null,
  "text": "query PredictionQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    username\n    playoffPredictions {\n      team {\n        name\n        emojiString\n        id\n      }\n      phase\n      id\n    }\n    groupPredictions {\n      prediction\n      match {\n        id\n        name\n        awayResult\n        homeResult\n        awayTeam {\n          emojiString\n          name\n          id\n        }\n        homeTeam {\n          emojiString\n          name\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
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
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
          v3,
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
                  v4,
                  v5
                ]
              },
              v6
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
              v7,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "match",
                "storageKey": null,
                "args": null,
                "concreteType": "Match",
                "plural": false,
                "selections": [
                  v2,
                  v4,
                  v8,
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "awayTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v10
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "homeTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v10
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
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
          v3,
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
                  v4,
                  v5,
                  v2
                ]
              },
              v6,
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
              v7,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "match",
                "storageKey": null,
                "args": null,
                "concreteType": "Match",
                "plural": false,
                "selections": [
                  v2,
                  v4,
                  v8,
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "awayTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v11
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "homeTeam",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Team",
                    "plural": false,
                    "selections": v11
                  }
                ]
              },
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '32fc784edad1978dd4cbbff904f163f8';
module.exports = node;
