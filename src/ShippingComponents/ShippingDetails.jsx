import React from "react";
import SelectCountryInput from "./SelectCountryInput";
import TextInput from "./TextInput";
import MultiLineInput from "./MultiLineInput";

export default function ShippingDetails() {
  const ShippingDetails = {
    styles:
      "w-64 rounded bg-white border-gray-400 border-2 my-4 flex flex-col py-4",
  };

  const fieldName = ["full Name", "email address", "phone"];
  return (
    <div className={ShippingDetails.styles}>
      {true ? (
        <div>
          <form action="">
            <SelectCountryInput />
            {fieldName.map((field, index) => (
              <TextInput key={index} fieldName={field} />
            ))}
            <MultiLineInput />
          </form>
        </div>
      ) : (
        <div>
          <form action="">
            <input type="text" placeholder="Ship to me" />
          </form>
        </div>
      )}
    </div>
  );
}
