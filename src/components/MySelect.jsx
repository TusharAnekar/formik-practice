import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="my-4">
      <label htmlFor={props.id || props.name} className="block">
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "w-full rounded-lg border border-red-500 p-1"
            : "w-full rounded-lg border border-black p-1"
        }
      />

      {meta.touched && meta.error ? (
        <p className="italic text-red-500">{meta.error}</p>
      ) : null}
    </div>
  );
};

export { MySelect };
