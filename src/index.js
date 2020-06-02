import React from 'react';
import ReactDOM from 'react-dom';
import Controls from "./controls.js"
let body = document.body

body.style.margin = 0
body.style.display = "grid"



ReactDOM.render(
    <div>
    <Controls />
    </div>
, document.getElementById('root')
);