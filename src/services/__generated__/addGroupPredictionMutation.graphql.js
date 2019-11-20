/**
 * @flow
 * @relayHash c822fd214380eacd21c573876ed19731
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddGroupPredictionInput = {
  matchId: string,
  prediction: string,
};
export type addGroupPredictionMutationVariables = {|
  input: AddGroupPredictionInput
|};
export type addGroupPredictionMutationResponse = {|
  +addGroupPrediction: ?{|
    +result: ?string
  |}
|};
export type addGroupPredictionMutation = {|
  variables: addGroupPredictionMutationVariables,
  response: addGroupPredictionMutationResponse,
|};
*/


/*
mutation addGroupPredictionMutation(
  $input: AddGroupPredictionInput!
) {
  addGroupPrediction(input: $input) {
    result
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddGroupPredictionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addGroupPrediction",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddGroupPredictionInput!"
      }
    ],
    "concreteType": "AddGroupPredictionPayload",
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
  "name": "addGroupPredictionMutation",
  "id": null,
  "text": "mutation addGroupPredictionMutation(\n  $input: AddGroupPredictionInput!\n) {\n  addGroupPrediction(input: $input) {\n    result\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addGroupPredictionMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addGroupPredictionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29a64670b2b2dfa4b4d438040aadc00b';
module.exports = node;
