import { isSlugUnique } from "../lib/isUnique";

export default {
  title: "Keyboard",
  name: "keyboard",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error(
            `Keyboard names should (hopefully) be longer than 0 characters.`
          ),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
        isUnique: isSlugUnique,
      },
    },
    {
      name: "Layout",
      title: "layout",
      type: "reference",
      weak: true,
      to: [{ type: "keyboard_layout" }],
    },
    {
      title: "Geekhack URL",
      name: "geekhack_url",
      type: "url",
    },
    {
      title: "Vendor URL",
      name: "vendor_url",
      type: "url",
    },
  ],
};
