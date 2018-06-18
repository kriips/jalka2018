/**
 * @flow
 * @relayHash b51584405e16e95297f525fde6917df4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Prediction_predictions$ref = any;
export type TopListQueryVariables = {| |};
export type TopListQueryResponse = {|
  +me: ?{|
    +id: string,
  |},
  +users: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +username: ?string,
        +groupScore: ?number,
        +playoffScore: ?number,
        +$fragmentRefs: Prediction_predictions$ref,
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
        id
        username
        groupScore
        playoffScore
        ...Prediction_predictions
      }
    }
  }
}

fragment Prediction_predictions on User {
  id
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
      id
    }
    id
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
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "emojiString",
  "args": null,
  "storageKey": null
},
v8 = [
  v7,
  v6,
  v0
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TopListQuery",
  "id": null,
  "text": "query TopListQuery {\n  me {\n    id\n  }\n  users(first: 250) {\n    edges {\n      node {\n        id\n        username\n        groupScore\n        playoffScore\n        ...Prediction_predictions\n      }\n    }\n  }\n}\n\nfragment Prediction_predictions on User {\n  id\n  playoffPredictions {\n    team {\n      name\n      emojiString\n      id\n    }\n    phase\n    id\n  }\n  groupPredictions {\n    prediction\n    match {\n      awayTeam {\n        emojiString\n        name\n        id\n      }\n      homeTeam {\n        emojiString\n        name\n        id\n      }\n      id\n    }\n    id\n  }\n}\n",
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
                  v0,
                  v3,
                  v4,
                  v5,
                  {
                    "kind": "FragmentSpread",
                    "name": "Prediction_predictions",
                    "args": null
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
                  v0,
                  v3,
                  v4,
                  v5,
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
                          v6,
                          v7,
                          v0
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "phase",
                        "args": null,
                        "storageKey": null
                      },
                      v0
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "prediction",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "match",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Match",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "awayTeam",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Team",
                            "plural": false,
                            "selections": v8
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "homeTeam",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Team",
                            "plural": false,
                            "selections": v8
                          },
                          v0
                        ]
                      },
                      v0
                    ]
                  }
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
(node/*: any*/).hash = '4c7bd486fd94bb5d8d4e27d809bcc3f5';
module.exports = node;
