# Key Generator

Small, zero-dependency library for quick generation of some kind of keys.

# Install

Just add the NPM package to your program:

    npm i key_generator

# Use

Import necessary functions to your module. For example:

    const { generateKey } = require("key_generator")

Then call the function:

    const key = generateKey()

# Functions

## generateKey

Receive no arguments or ***option*** object with several parameters

### type

Now library can generate two types of codes: ***digit*** (default) and ***string***.

### length

Only positive integers are supported. The max value for the ***digit*** is 16, for the ***string*** – 32.

### Default options

Function cat receives no arguments. In this way, the key will be generated with the parameters:

* ***type***: "digit" (only digit symbols will be presented)
* ***length***: 4. For example, 0000

If any of the options parameters won't be presented in options, the default one will be passed.

# Return

The function returns a string (regardless of type) with the new key.

# Error handling

The module provides an error, when something goes wrong. You can catch this error in handling the pattern you choose in the project.
