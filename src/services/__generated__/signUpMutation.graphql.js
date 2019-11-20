/**
 * @flow
 * @relayHash 68ef06a772ff3b4fe7ca3df12a00c31d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterInput = {
  password: string,
  username: string,
};
export type signUpMutationVariables = {|
  input: RegisterInput
|};
export type signUpMutationResponse = {|
  +register: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type signUpMutation = {|
  variables: signUpMutationVariables,
  response: signUpMutationResponse,
|};
*/


/*
mutation signUpMutation(
  $input: RegisterInput!
) {
  register(input: $input) {
    user {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "register",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegisterInput!"
      }
    ],
    "concreteType": "RegisterPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "signUpMutation",
  "id": null,
  "text": "mutation signUpMutation(\n  $input: RegisterInput!\n) {\n  register(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "signUpMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "signUpMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca6538454503dbe9095f338d7eb62c98';
module.exports = node;
