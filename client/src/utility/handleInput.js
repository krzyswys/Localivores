export const handleInputFocus = (event) => {
    const inputContainer = event.currentTarget.parentElement;
    const placeholder = inputContainer.querySelector('.placeholder');

    if (placeholder) {
        placeholder.classList.add('focused');
    }
};

export const handleInputBlur = (event) => {
    const inputContainer = event.currentTarget.parentElement;
    const placeholder = inputContainer.querySelector('.placeholder');

    if (placeholder && !event.target.value) {
        placeholder.classList.remove('focused');
    }
};