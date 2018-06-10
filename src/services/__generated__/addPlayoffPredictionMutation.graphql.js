/**
 * @flow
 * @relayHash d297dc2fe2f9c231c27a03ab3f09f22e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addPlayoffPredictionMutationVariables = {|
  input: {
    phase: number,
    teamId: string,
  },
|};
export type addPlayoffPredictionMutationResponse = {|
  +addPlayoffPrediction: ?{|
    +result: ?string,
  |},
|};
*/


/*
mutation addPlayoffPredictionMutation(
  $input: AddPlayoffPredictionInput!
) {
  addPlayoffPrediction(input: $input) {
    result
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddPlayoffPredictionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addPlayoffPrediction",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddPlayoffPredictionInput!"
      }
    ],
    "concreteType": "AddPlayoffPredictionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "result",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addPlayoffPredictionMutation",
  "id": null,
  "text": "mutation addPlayoffPredictionMutation(\n  $input: AddPlayoffPredictionInput!\n) {\n  addPlayoffPrediction(input: $input) {\n    result\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addPlayoffPredictionMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addPlayoffPredictionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'cff1a28ba88dac107b97d64c2276f5c9';
module.exports = node;
