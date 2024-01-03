const formSubjects = {};

function updateFormSubject(form) {
	const fields = ["Vorname", "Nachname"];
	if (!formSubjects[form.name]) {
		formSubjects[form.name] = form.elements.subject.value;
	}

	let subject = formSubjects[form.name];
	fields.forEach((field) => {
		subject = subject.replace(`{${field}}`, form.elements[field].value);
	});

	form.elements.subject.value = subject;
}
