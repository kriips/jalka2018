/**
 * @flow
 * @relayHash a7d2af8b945e745f290d25463dcfaa66
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginInput = {
  password: string,
  username: string,
};
export type signInMutationVariables = {|
  input: LoginInput
|};
export type signInMutationResponse = {|
  +login: ?{|
    +token: string
  |}
|};
export type signInMutation = {|
  variables: signInMutationVariables,
  response: signInMutationResponse,
|};
*/


/*
mutation signInMutation(
  $input: LoginInput!
) {
  login(input: $input) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LoginInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginInput!"
      }
    ],
    "concreteType": "LoginPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "signInMutation",
  "id": null,
  "text": "mutation signInMutation(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "signInMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "signInMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4baa72e4346be163cb1e50fb1794756';
module.exports = node;
