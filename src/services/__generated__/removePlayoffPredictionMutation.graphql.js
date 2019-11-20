/**
 * @flow
 * @relayHash 20a622ae20182295d53b224aba5f570d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemovePlayoffPredictionInput = {
  phase: number,
  teamId: string,
};
export type removePlayoffPredictionMutationVariables = {|
  input: RemovePlayoffPredictionInput
|};
export type removePlayoffPredictionMutationResponse = {|
  +removePlayoffPrediction: ?{|
    +result: ?string
  |}
|};
export type removePlayoffPredictionMutation = {|
  variables: removePlayoffPredictionMutationVariables,
  response: removePlayoffPredictionMutationResponse,
|};
*/


/*
mutation removePlayoffPredictionMutation(
  $input: RemovePlayoffPredictionInput!
) {
  removePlayoffPrediction(input: $input) {
    result
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemovePlayoffPredictionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removePlayoffPrediction",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RemovePlayoffPredictionInput!"
      }
    ],
    "concreteType": "RemovePlayoffPredictionPayload",
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
  "name": "removePlayoffPredictionMutation",
  "id": null,
  "text": "mutation removePlayoffPredictionMutation(\n  $input: RemovePlayoffPredictionInput!\n) {\n  removePlayoffPrediction(input: $input) {\n    result\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "removePlayoffPredictionMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "removePlayoffPredictionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2fd6ca18cc0a715683e8b7e0d781be85';
module.exports = node;
