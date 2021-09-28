#!/usr/bin/env node

import { greet } from "../lib/greet";

let greeting:string = greet();

console.log(greeting);

let s:string[] = process.argv.splice(2);

console.log(s)