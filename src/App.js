import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { MyTextInput } from "./components/MyTextInput";
import { MySelect } from "./components/MySelect";
import { MyCheckbox } from "./components/MyCheckbox";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl text-red-500">Formik Form</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false,
          jobType: "",
        }}
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
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type",
            )
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            window.location.reload();
          }, 400);
        }}
      >
        <div className="w-1/2 rounded-lg border border-black drop-shadow-2xl">
          <Form className="p-4">
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Tushar"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Anekar"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="tushar@formik.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 p-1 text-white"
            >
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default App;
