export default {
  title: "Source",
  name: "source",
  type: "document",
  description: "Designers, vendors and manufacturers of keyboards and keycaps",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Website",
      name: "website",
      type: "url",
    },
    {
      title: "Kind",
      name: "kind",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Designer", value: "designer" },
          { title: "Vendor", value: "vendor" },
        ],
      },
    },
  ],
};
