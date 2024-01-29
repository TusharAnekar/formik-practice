import { useField } from "formik";

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="my-4 w-full">
      <label className="block">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="mr-2 cursor-pointer"
        />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <p className="italic text-red-500">{meta.error}</p>
      ) : null}
    </div>
  );
};

export { MyCheckbox };
