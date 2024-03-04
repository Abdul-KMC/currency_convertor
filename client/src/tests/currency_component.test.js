/**
 * Before we begin, we need to setup the environment to run React tests:
 * 1- run the following command: npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @babel/preset-env @babel/preset-react
 * 2- In the root directory of the client folder, create a new file and name it ".babelrc"
 * 3- Add the following content to the file: 
 *      {
            "presets": [
                "@babel/preset-env",
                ["@babel/preset-react", { "runtime": "automatic" }]
            ]
        }
 * 4- In package.json, add the following at the end of the file (before the last } bracket):
        ,"jest": {
            "testEnvironment": "jsdom"
        }
 *******       
 * Necessary import:
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Convertor from "../components/Convertor";

/**
 * we will test the conversion section that contains: currency code & amount input fields, 
 *   Convert button and converted amount text. 
 * You need to do write one unit test that ensure the functionality of the section is working as intended.
 * We need to test that the user will be able to type into the input fields then click the Convert button.
 * Once the button is clicked, the conversion amount should be displayed on the screen.
 */


test('Testing conversion section', () => {
            // convertCurrency is a mock function now
            const convertCurrency = jest.fn();
            const currencies = [
                { id: 1, currencyCode: 'CAD' },
                { id: 2, currencyCode: 'USD' },
            ];
            const user = userEvent.setup();

            render( < Convertor currencies = { currencies }
                convertCurrency = { convertCurrency }
                />);
                const currencyFromInput = screen.getByTestId("currencyFrom");
                const currencyToInput = screen.getByTestId("currencyTo");
                const amountInput = screen.getByTestId("amount");
                const convertButton = screen.getByRole('button', { name: "Convert" });
                const conversionText = screen.getByText("conversion result text");

                fireEvent.change(currencyFromInput, { target: { value: 'CAD' } }); //
                fireEvent.change(currencyToInput, { target: { value: 'USD' } }); //
                fireEvent.change(amountInput, { target: { value: 100 } }); //
                userEvent.click(convertButton);

                expect(currencyFromInput.value).toBe("CAD"); //
                expect(currencyToInput.value).toBe("USD"); //
                expect(amountInput.value).toBe('100'); //
                expect(convertCurrency.mock.calls).toHaveLength(0); //
                expect(conversionText).toBeInTheDocument();
            });