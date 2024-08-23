# string-surgeon

**string-surgeon** is a comprehensive set of tools for common string manipulation tasks. It provides functions for capitalization, camelCase conversion, slug generation, and more, making it easier to handle various string-related operations in JavaScript projects.

## Features

- **capitalize**: Capitalizes the first letter of a string.
- **toCamelCase**: Converts a string to camelCase format.
- **slugify**: Generates a URL-friendly slug from a string.
- **toSnakeCase**: Converts a string to snake_case format.
- **reverseString**: Reverses the characters in a string.
- **truncate**: Truncates a string to a specified length and adds ellipsis.

## Installation

You can install `string-surgeon` using npm:

```bash
npm install string-surgeon
```

Or with yarn:

```bash
yarn add string-surgeon
```

## Usage

Here's how you can use the functions provided by `string-surgeon`:

```javascript
import { capitalize, toCamelCase, slugify, toSnakeCase, reverseString, truncate } from 'string-surgeon';

// Example usage
console.log(capitalize("hello world")); // Output: Hello world
console.log(toCamelCase("Hello World")); // Output: helloWorld
console.log(slugify("Hello World!")); // Output: hello-world
console.log(toSnakeCase("Hello World")); // Output: hello_world
console.log(reverseString("hello")); // Output: olleh
console.log(truncate("This is a long sentence", 10)); // Output: This is a ...
```

## API

### `capitalize(str)`

- **str**: The string to capitalize.
- **Returns**: A string with the first letter capitalized.

### `toCamelCase(str)`

- **str**: The string to convert to camelCase.
- **Returns**: The camelCased string.

### `slugify(str)`

- **str**: The string to slugify.
- **Returns**: A URL-friendly slug.

### `toSnakeCase(str)`

- **str**: The string to convert to snake_case.
- **Returns**: The snake_cased string.

### `reverseString(str)`

- **str**: The string to reverse.
- **Returns**: The reversed string.

### `truncate(str, length)`

- **str**: The string to truncate.
- **length**: The maximum length of the string.
- **Returns**: The truncated string with ellipsis.

## Contributing

If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request on [GitHub](https://github.com/PritiranjanPatra2/string-surgeon.git).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Pritiranjan
