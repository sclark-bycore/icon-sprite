#!/usr/bin/env node
import "./scan-icons.js"; // runs AST scan → writes used-icons.js
import "./build-sprite.js"; // reads used-icons.js → builds /public/icons.svg
