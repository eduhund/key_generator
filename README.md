# Key Crafter

Small, zero-dependency library for quick generation of some kind of keys.

# Install

Just add the NPM package to your program:

    npm i keycrafter

# Use

Import necessary functions to your module. For example:

    const { generateKey } = require("keycrafter")

Then call the function:

    const key = generateKey()

# Functions

## generateKey

Receive no arguments or **_option_** object with several parameters

### type

Now library can generate two types of codes: **_digit_** (default) and **_string_**.

### length

Only positive integers are supported. The max value for the **_digit_** is 16, for the **_string_** – 32.

### Default options

Function cat receives no arguments. In this way, the key will be generated with the parameters:

- **_type_**: "digit" (only digit symbols will be presented)
- **_length_**: 4. For example, 0000

If any of the options parameters won't be presented in options, the default one will be passed.

# Return

The function returns a string (regardless of type) with the new key.

# Error handling

The module provides an error, when something goes wrong. You can catch this error in handling the pattern you choose in the project.
