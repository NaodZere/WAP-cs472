const { JSDOM } = require('jsdom');

// Create a mock DOM environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;

// Require your puzzle.js file
const puzzle = require('./puzzle');

// Test your puzzle.js functions here...
