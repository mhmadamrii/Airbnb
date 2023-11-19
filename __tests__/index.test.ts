import HomepageZ from "@/app/(rhf-zod)/homepage-z/page";
import { render } from "react-dom";

// Submitting a valid form successfully resets the form
it('should reset the form when submitting a valid form', () => {
    const { getByPlaceholderText, getByText } = render(<HomepageZ />);
    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('password');
    const confirmPasswordInput = getByPlaceholderText('confirm password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(confirmPasswordInput.value).toBe('');
});