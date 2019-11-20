/**
 * @flow
 * @relayHash e8dc2e681aeca0d670796b0e976be946
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddPlayoffPredictionInput = {
  phase: number,
  teamId: string,
};
export type addPlayoffPredictionMutationVariables = {|
  input: AddPlayoffPredictionInput
|};
export type addPlayoffPredictionMutationResponse = {|
  +addPlayoffPrediction: ?{|
    +result: ?string
  |}
|};
export type addPlayoffPredictionMutation = {|
  variables: addPlayoffPredictionMutationVariables,
  response: addPlayoffPredictionMutationResponse,
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
// prettier-ignore
(node/*: any*/).hash = 'cff1a28ba88dac107b97d64c2276f5c9';
module.exports = node;
