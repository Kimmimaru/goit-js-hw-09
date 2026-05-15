const STORAGE_KEY = 'feedback-form-state';

// formData declared outside functions
export let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
if (!form) {
  console.warn('Feedback form not found on the page');
} else {
  // Populate form from storage if present
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      formData.email = parsed.email || '';
      formData.message = parsed.message || '';

      const emailEl = form.elements['email'];
      const messageEl = form.elements['message'];
      if (emailEl) emailEl.value = formData.email;
      if (messageEl) messageEl.value = formData.message;
    } catch (e) {
      console.warn('Failed to parse saved form data', e);
    }
  }

  // Input delegation on the form
  form.addEventListener('input', (evt) => {
    const target = evt.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;

    const name = target.name;
    if (!name) return;

    // trim edges and update formData
    const value = target.value.trimStart();
    // We only trim trailing and leading for storage when saving; keep user's caret behavior
    formData = { ...formData, [name]: value };

    // Save trimmed values (no leading/trailing spaces) to localStorage
    const toSave = { email: formData.email.trim(), message: formData.message.trim() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  });

  // Submit handling
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Ensure latest values from form fields are in formData
    const emailVal = (form.elements['email'] && form.elements['email'].value) ? form.elements['email'].value.trim() : '';
    const messageVal = (form.elements['message'] && form.elements['message'].value) ? form.elements['message'].value.trim() : '';

    if (!emailVal || !messageVal) {
      alert('Fill please all fields');
      return;
    }

    const output = { email: emailVal, message: messageVal };
    console.log(output);

    // Clear storage, formData and form fields
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
  });
}
