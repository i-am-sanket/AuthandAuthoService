#!/usr/bin/env node

import axios from "axios";

function binary_search(){
    return axios.get("https://raw.githubusercontent.com/singhsanket143/Sep-2022-Node-Batch-Codes/master/Oct%2030%20-%20Async%20Await%20/demo1.js");
}
async function process(){
    let content=await binary_search();
    return content.data;
}
process().then((value)=>{
    console.log(value);
})