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
      title: "Geekhack URL",
      name: "geekhack_url",
      type: "url",
    },
    {
      title: "Layout",
      name: "layout",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "60",
            value: "60",
          },
          {
            title: "65",
            value: "65",
          },
          {
            title: "75",
            value: "75",
          },
          {
            title: "TKL",
            value: "tkl",
          },
          {
            title: "WKL",
            value: "wkl",
          },
          {
            title: "Compact 1800",
            value: "compact_1800",
          },
          {
            title: "HHKB",
            value: "hhkb",
          },
        ],
      },
    },
  ],
};
