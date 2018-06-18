/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Prediction_predictions$ref: FragmentReference;
export type Prediction_predictions = {|
  +id: string,
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
  +$refType: Prediction_predictions$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "emojiString",
  "args": null,
  "storageKey": null
},
v2 = [
  v1,
  v0
];
return {
  "kind": "Fragment",
  "name": "Prediction_predictions",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
            v0,
            v1
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "phase",
          "args": null,
          "storageKey": null
        }
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
};
})();
(node/*: any*/).hash = 'd7c4f4e8f1bef871d05304e833c5286d';
module.exports = node;
