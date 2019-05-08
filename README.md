This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# **World Factbook**

#### By William Kulha 5-8-2019

## Description

A React web application written in typescript that displays a list of all the world's countries and, by using the Wikimedia API, lets the user read basic facts about them.

## Specifications

| Specification | Input | Output |
| :--- | :--- | :--- |
**Application loads, fetching a list of countries from the REST Countries API** | JSON Parsed list of countries | Application's state's countriesList property set to the country list, and the countries are rendered on cards for the user|
**Application can display extra information about particular countries**| User clicks a particular country card | CountryDetail component fetches Wikimedia information about the clicked country and displays it for the user.

## Setup/Installation Requirements

* To view project code, _clone repository from_ https://github.com/WilliamKulha/countries-factbook
* To install the project on your own machine, clone the repository from command line <code>$ git clone https://github.com/WilliamKulha/countries-factbook</code>.
* Navigate to the projects directory using CLI and install dependencies <code>$ npm install</code>.
* Start the project on a development server on your own machine using the CLI <code>$ npm start</code>

## Known Bugs

No known bugs at this time.

## Contact

If you find any bugs, or would like to get in touch, shoot me a line at kulha.william@gmail.com

## Technologies Used

* SCSS
* NPM
* REST Country API
* Wikimedia API
* TypeScript
* React

## License

MIT

Copyright (c) 2019 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

