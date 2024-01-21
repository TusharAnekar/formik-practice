import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl text-red-500">Formik Practice</h1>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          colors: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName" className="block">
            First Name
          </label>
          <Field
            name="firstName"
            type="text"
            className="block rounded-lg border border-black p-1"
          />
          <p className="mb-2 text-red-600">
            <ErrorMessage name="firstName" />
          </p>

          <label htmlFor="lastName" className="block">
            Last Name
          </label>
          <Field
            name="lastName"
            type="text"
            className="block rounded-lg border border-black p-1 "
          />
          <p className="mb-2 text-red-600">
            <ErrorMessage name="lastName" />
          </p>

          <label htmlFor="email" className="block">
            Email Address
          </label>
          <Field
            name="email"
            type="email"
            className="block rounded-lg border border-black p-1 "
          />
          <p className="mb-2 text-red-600">
            <ErrorMessage name="email" />
          </p>

          <label htmlFor="colors">Color</label>
          <Field name="colors" as="select" className="my-select">
            <option value="">select</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="colors" component={"p"} />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 p-1 text-white"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
