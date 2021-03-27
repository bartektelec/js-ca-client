import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

export interface ContactProps {}

// Create a form with the following inputs and validation:

// -   First name - required, minimum 3 characters
// -   Last name - required, minimum 4 characters
// -   Email - required, must be in a valid email format
// -   Subject - required, this must be a select box with at least 2 options
// -   Message - required, minimum 10 characters.

const ContactSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too short')
		.required('This field is required'),
	lastName: Yup.string().min(4, 'Too short').required('This field is required'),
	email: Yup.string().email().required('This field is required'),
	subject: Yup.string()
		.oneOf(['Subject one', 'Subject two'])
		.required('This field is required'),
	message: Yup.string().min(10, 'Too short').required('This field is required'),
});
export interface ErrorMessageProps {
	field: string;
	errors: { [key: string]: any };
	touched: { [key: string]: any };
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
	field,
	errors,
	touched,
}) => {
	if (errors[field] && touched[field]) {
		return <div className="text-sm text-red-500">{errors[field]}</div>;
	} else {
		return null;
	}
};

const Contact: React.FC<ContactProps> = () => {
	return (
		<div>
			<h1 className="text-2xl font-medium">Contact</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					subject: 'Subject one',
					message: '',
				}}
				validationSchema={ContactSchema}
				onSubmit={(values) => alert('Sent' + JSON.stringify(values))}
			>
				{({ errors, touched }) => (
					<Form className="flex flex-col max-w-sm mx-auto gap-4">
						<label className="flex flex-col" htmlFor="firstName">
							First name
							<Field
								id="firstName"
								className="border rounded-sm border-black"
								name="firstName"
							/>
							<ErrorMessage field="firstName" {...{ errors, touched }} />
						</label>
						<label className="flex flex-col" htmlFor="lastName">
							Last name
							<Field
								id="lastName"
								className="border rounded-sm border-black"
								name="lastName"
							/>
							<ErrorMessage field="lastName" {...{ errors, touched }} />
						</label>
						<label className="flex flex-col" htmlFor="email">
							E-mail
							<Field
								id="email"
								className="border rounded-sm border-black"
								name="email"
							/>
							<ErrorMessage field="email" {...{ errors, touched }} />
						</label>
						<label className="flex flex-col" htmlFor="subject">
							Subject
							<Field
								id="subject"
								className="border rounded-sm border-black"
								name="subject"
								as="select"
							>
								<option value="Subject one">Subject one</option>
								<option value="Subject two">Subject two</option>
							</Field>
							<ErrorMessage field="subject" {...{ errors, touched }} />
						</label>
						<label className="flex flex-col" htmlFor="message">
							Message
							<Field
								id="message"
								className="border rounded-sm border-black"
								name="message"
							/>
							<ErrorMessage field="message" {...{ errors, touched }} />
						</label>
						<button
							type="submit"
							className="rounded-sm bg-blue-400 p-2 hover:bg-blue-700 hover:text-white"
						>
							Send message
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Contact;
