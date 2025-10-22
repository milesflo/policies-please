// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import init, { Engine } from './regorus/bindings/wasm/pkg/regorusjs';


const policyWindow = document.getElementById("rego-policy");
const inputWindow = document.getElementById("json-input");
const outputWindow = document.getElementById("evaluation-output");
const evaluateButton = document.getElementById("evaluate-button");

var policy = `package example

default allow = false

allow if {
    input.method == "GET"
    input.path == ["users", input.user]
}
`;

var input_data = {
    "method": "GET",
    "path": ["users", "alice"],
    "user": "alice"
};

var output_data = {}


evaluateButton.addEventListener("click", function () {
    console.log("Evaluating policies");
    let engine = new Engine();
    try {
        engine.addPolicy("my_policy.rego", policy);
        console.log("Evaluation Input:", input_data);

        engine.setInputJson(JSON.stringify(input_data));

        const result_json = engine.evalRule("data.example.allow");    
        const result = JSON.parse(result_json);

        outputWindow.textContent = result;
        console.log("Evaluation Result (data.example.allow):", result);
    } catch (e) {

        console.log("Error in evaluation:", e)
        outputWindow.textContent = e.toString();
    }
});

async function evaluateRego() {
    await init();

    console.log("Regorus initialized");

    policyWindow.value = policy;
    inputWindow.value = JSON.stringify(input_data, null, 2);
}

policyWindow.addEventListener('change', (event) => {
    console.log('policy:', event.target.value);

    policy = event.target.value;
});

evaluateRego().catch(e => console.error(e));